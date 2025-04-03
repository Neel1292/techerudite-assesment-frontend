import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../handler/authHandler";
import { validateLoginInput } from "../utils/validateInput";
import showToast from "../utils/toast";

const initialState = { email: "", password: "", role: "customer" }

const CustomerLogin = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const newErrors = validateLoginInput({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({ ...errors, [e.target.name]: newErrors[e.target.name] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const newErrors = validateLoginInput(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmit(false);
      return;
    }

    const result = await loginUser("/api/auth/login", formData);
    setSubmit(false);

    if(result.status === 200) {
      localStorage.setItem("user", JSON.stringify(result.data.data[0]));
      showToast("success", result.data.message);
      navigate("/");
    } else {
      showToast("error", result.data.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Customer Login</h2>
      <form onSubmit={handleSubmit} className="w-50 mx-auto">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control mb-3"
          onChange={handleChange}
          value={formData.email}
        />

        {errors.email && (
          <small className="text-danger">{errors.email}</small>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
          value={formData.password}
        />
        {errors.password && (
          <small className="text-danger">{errors.password}</small>
        )}

        <button type="submit" className="btn btn-primary w-100" disabled={submit}>
          {!submit ? "Login" : "Logging in..."}
        </button>
      </form>
    </div>
  );
};

export default CustomerLogin;
