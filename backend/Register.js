import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    address: ""
  });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage("Registering...");

    try {
      const res = await fetch("http://localhost:5500/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData) // ✅ sending formData instead of undefined userData
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(`✅ ${data.message}`);
        setFormData({
          name: "",
          email: "",
          password: "",
          mobile: "",
          gender: "",
          dob: "",
          fatherName: "",
          motherName: "",
          address: ""
        });
      } else {
        setMessage(`❌ ${data.message || "Registration failed"}`);
      }
    } catch (error) {
      setMessage(`⚠ Error: ${error.message}`);
    }
  }

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} />
        
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
        <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange} />
        <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange} />
        <textarea name="address" placeholder="Address" value={formData.address} onChange={handleChange}></textarea>

        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
