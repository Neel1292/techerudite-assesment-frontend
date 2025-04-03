import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import showToast from "../utils/toast";
import { validateOTPInput } from "../utils/validateInput";
import { verifyEmail, verifyToken } from "../handler/authHandler";

const initialState = {
  // email: "",
  otp: "",
}

const VerifyEmail = () => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");


  useEffect(() => {

    const validateToken = async () => {
      if (!token) {
        showToast("error", "Invalid or missing token. Please try again.");
        return;
      }

      const result = await verifyToken(`/api/auth/verify?token=${token}`);
        
      if (result.status !== 204) {
        showToast("error", "Link expiered.");
        navigate("/login/customer");
      }
    }

    validateToken();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const newErrors = validateOTPInput(formData);
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmit(false);
      return;
    }

    setFormData(initialState);
    const result = await verifyEmail(`/api/auth/verify?token=${token}`, formData);

    if(result.status === 204) {
      showToast("success", "Email verified successfully!");
      navigate("/");
    } else {
      showToast("error", result.data.message);
      setSubmit(false);
    }

  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Verify Your Email</h2>

      <form onSubmit={handleSubmit} className="w-50 mx-auto">

        {/* OTP Input */}
        <input
          type="text"
          name="otp"
          className="form-control mb-2"
          placeholder="123456"
          onChange={handleChange}
          value={formData.otp}
        />

        {/* Error Message */}
        {errors.otp && <p className="text-danger">{errors.otp}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={submit}
        >
           {!submit ? "Verify OTP" : "Verifying..."}
        </button>

      </form>
    </div>
  );
};

export default VerifyEmail;
