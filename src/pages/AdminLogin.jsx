import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
      if (storedUser.role === "admin" && storedUser.verified) {
        navigate("/dashboard");
      } else if (storedUser.role !== "admin") {
        alert("You are not allowed to log in from here.");
      } else {
        alert("Please verify your email first.");
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input type="email" name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
