import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirm_password: "",
    role: "admin",
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
    navigate("/verify");
  };

  return (
    <div className="form">
      <div className="page-width">
        <div className="form-container">
          <h2>Admin Registration</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3 form-input-custom my-input">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-input-custom my-input">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-input-custom my-input">
              <select
                id="role-select"
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3 form-input-custom my-input">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-input-custom my-input">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3 form-input-custom my-input">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Password"
                className="form-control mb-3"
                onChange={handleChange}
                required
              />
            </div>
            <button className="submit-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
