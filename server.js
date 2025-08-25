// backend/server.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

// Allow requests from your frontend domain in production; for now allow all while testing
const corsOptions = {
  origin: ["http://127.0.0.1:5500", "http://localhost:5500", "http://localhost:3000"],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());

const usersFile = path.join(__dirname, "users.json");

function getUsers() {
  if (!fs.existsSync(usersFile)) return [];
  try {
    return JSON.parse(fs.readFileSync(usersFile, "utf8") || "[]");
  } catch (err) {
    return [];
  }
}

function saveUsers(users) {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

app.post("/register", async (req, res) => {
  try {
    const { name, email, password, mobile, gender, dob, fatherName, motherName, address } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const users = getUsers();
    if (users.some(u => u.email === email)) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = { name, email, password, mobile, gender, dob, fatherName, motherName, address, createdAt: new Date() };
    users.push(newUser);
    saveUsers(users);

    // Try sending email
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    try {
      await transporter.sendMail({
        from: `"E-Commerce Site" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Registration Successful",
        text: `Hello ${name}, you have successfully registered.`
      });

      return res.json({ message: "✅ Registration successful! Email sent." });

    } catch (mailErr) {
      console.error("Email error:", mailErr.message);
      // Still succeed, but warn about email
      return res.json({ message: "✅ Registered successfully, but email could not be sent." });
    }

  } catch (err) {
    console.error("Registration route error:", err);
    return res.status(500).json({ message: "❌ Registration failed due to server error.", error: err.message });
  }
});


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);
  if (user) return res.json({ message: "Login successful" });
  return res.status(401).json({ message: "Invalid email or password" });
});

// OPTIONAL: serve frontend static when deploying a single app (uncomment if you build frontend into backend/public)
if (process.env.SERVE_STATIC === "true") {
  const staticPath = path.join(__dirname, "..", "frontend", "build"); // if you build react or static into frontend/build
  if (fs.existsSync(staticPath)) {
    app.use(express.static(staticPath));
    app.get("*", (req, res) => res.sendFile(path.join(staticPath, "index.html")));
  }
}

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
