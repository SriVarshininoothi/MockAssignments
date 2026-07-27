import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const UserRegistration = () => {

  // useState for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // State to store submitted user data to pass to UserCard
  const [submittedUser, setSubmittedUser] = useState(null);

  // State to trigger the useEffect side effect upon successful submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form Validation Logic
  const validate = () => {

    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required.";
    }
    if (!formData.email.includes("@")) {
      tempErrors.email = "Email must contain '@'.";
    }
    if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };



  // Handle Form Submission
  const handleSubmit = (e) => {

    e.preventDefault();


    if (validate()) {

      setSubmittedUser({
        name: formData.name,
        email: formData.email
      });

      setIsSubmitted(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: ''
      });

      setErrors({});
    }
  };

  // 3. useEffect to log message to the console after successful submission
  useEffect(() => {

    if (isSubmitted) {

      console.log("Registration Successful");

      setIsSubmitted(false); // Reset flag
    }
  }, [isSubmitted]);

  return (
    <div className="container mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">User Registration</h2>

      {/* Bootstrap Styled Form */}
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        {/* Name Field */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>

      {/* 4. Display User Details using Props inside UserCard */}
      <UserCard user={submittedUser} />
    </div>
  );
};

export default UserRegistration;