
const strongPasswordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function validateForm(formData) {
  let newErrors = {};

  if (!formData.first_name) newErrors.first_name = "First name is required";
  if (!formData.last_name) newErrors.last_name = "Last name is required";
  if (!formData.gender) newErrors.gender = "Gender is required";
  if (!formData.email) newErrors.email = "Email is required";
  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (!strongPasswordRegex.test(formData.password)) {
    newErrors.password =
      "Password must be at least 8 characters, include uppercase, lowercase, number & special character.";
  }

  if (!formData.confirm_password) {
    newErrors.confirm_password = "Please confirm your password";
  } else if (formData.password !== formData.confirm_password) {
    newErrors.confirm_password = "Passwords do not match";
  }

  return newErrors;
};

export function validateOTPInput(formData) {
  let newErrors = {};

  // if (!formData.email) newErrors.email = "Email is required";
  if (!formData.otp || !formData.otp.trim()) newErrors.otp = "OTP is required";

  return newErrors;
}

export function validateLoginInput(formData) {
  let newErrors = {};

  if (!formData.email || !formData.email.trim()) {
    newErrors.email = "Email is required";
  }

  if (!formData.password || !formData.password.trim()) {
    newErrors.password = "Password is required";
  }

  return newErrors;
}