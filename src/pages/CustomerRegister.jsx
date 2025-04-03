import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validateInput";
import { createUser } from "../handler/authHandler";
import showToast from "../utils/toast";

const initialState = {
  first_name: "",
  last_name: "",
  gender: "",
  email: "",
  password: "",
  confirm_password: "",
  role: "customer",
};

const CustomerRegister = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const newErrors = validateForm({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({ ...errors, [e.target.name]: newErrors[e.target.name] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmit(false);
      return;
    }
    
    const result = await createUser('/api/auth/register', formData);
    setSubmit(false);

    if(result.status === 201) {
      setFormData(initialState);
      showToast("success", result.data.message);
      navigate(`/verify?token=${result.data.data.token}`);
    } else {
      showToast("error", result.data.message);
    }
    
  };
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Registration</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.first_name}
          // required
        />
        {errors.first_name && (
          <small className="text-danger">{errors.first_name}</small>
        )}

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.last_name}
          // required
        />
        {errors.last_name && (
          <small className="text-danger">{errors.last_name}</small>
        )}

        <select
          name="gender"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.gender}
          // required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="transgender">Other</option>
        </select>
        {errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.email}
          // required
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.password}
          // required
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          className="form-control mb-2"
          onChange={handleChange}
          value={formData.confirm_password}
          // required
        />
        {errors.confirm_password && (
          <small className="text-danger">{errors.confirm_password}</small>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={submit}
        >
          {!submit ? "Register" : "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default CustomerRegister;
