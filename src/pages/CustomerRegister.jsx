import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomerRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    role: "customer",
    verified: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Registration successful! Please verify your email.");
    navigate("/verify-email");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Customer Registration</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input type="text" name="firstName" placeholder="First Name" className="form-control mb-3" onChange={handleChange} required />
        <input type="text" name="lastName" placeholder="Last Name" className="form-control mb-3" onChange={handleChange} required />
        <select name="gender" className="form-control mb-3" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="email" name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} required />
        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default CustomerRegister;
