import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // Import external CSS for styling

function Register() {
  // State variables to store user inputs
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match"); // Alert if passwords don't match
      return;
    }

    // Check if email is already registered in localStorage
    if (localStorage.getItem(email)) {
      alert("This email is already registered"); // Alert if email exists
      return;
    }

    // Create user object and store it in localStorage
    const user = { email, name, password };
    localStorage.setItem(email, JSON.stringify(user)); // Save user data in localStorage
    alert("Registration successful"); // Alert on successful registration

    // Optionally set the current user as the logged-in user
    localStorage.setItem("currentUser", JSON.stringify(user)); // Save current user
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            value={email} // Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required // Make field required
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            placeholder="Name"
            type="text"
            className="form-control"
            value={name} // Bind input value to state
            onChange={(e) => setName(e.target.value)} // Update state on input change
            required // Make field required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            placeholder="password"
            type="password"
            className="form-control"
            value={password} // Bind input value to state
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
            required // Make field required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            placeholder="confirm password"
            type="password"
            className="form-control"
            value={confirmPassword} // Bind input value to state
            onChange={(e) => setConfirmPassword(e.target.value)} // Update state on input change
            required // Make field required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
