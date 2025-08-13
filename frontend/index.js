// Frontend index.js - client-side only

// Registration form handler
// Frontend index.js - client-side only
document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      // Collect all form values
      const userData = Object.fromEntries(new FormData(registerForm).entries());

      try {
        const res = await fetch("http://localhost:5000/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData)
        });

        const data = await res.json();
        if (res.ok) {
          alert(data.message || "Registered successfully");
          registerForm.reset();

          const modalEl = document.getElementById("registerModal");
          if (modalEl) {
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }
        } else {
          alert(data.message || "Registration failed");
        }
      } catch (err) {
        console.error("Registration error:", err);
        alert("Registration error: " + err.message);
      }
    });
  }

  // Login form handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const res = await fetch("http://localhost:5000/login", { // ✅ Changed to 5000
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        if (res.ok) {
          alert(data.message || "Login successful");
          // redirect or handle login state here
        } else {
          alert(data.message || "Invalid credentials");
        }
      } catch (err) {
        console.error("Error logging in:", err);
        alert("Login failed: " + err.message);
      }
    });
  }
});


