import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import necessary hooks
import "./Login.css";

function Login() {
  // State variables to store email and password inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const user = JSON.parse(localStorage.getItem(email)); // Retrieve user data from localStorage

    // Check if user exists
    if (!user) {
      alert("This email is not registered"); // Alert if email is not registered
      return;
    }

    // Validate password
    if (user.password === password) {
      alert("Login successful!");
      navigate("/account"); // Redirect to account page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email address</label>
          <input
          placeholder="email"
            type="email"
            className="form-control"
            value={email} // Bind input value to state
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required // Make input required
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
            required // Make input required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-login">
          Login
        </button>
        <p className="mt-3">
          Don't have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </form>
    </div>
  );
}

export default Login;
