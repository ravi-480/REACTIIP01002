import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Account.css"; // Import CSS for styling

function Account() {
  // State to store user information and profile editing status
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
  });
  const [isEditing, setIsEditing] = useState(false); // Controls whether the form is in edit mode
  const [lastUpdated, setLastUpdated] = useState(""); // Stores the last time the account was updated
  const navigate = useNavigate(); // Used for navigation between routes

  // useEffect hook to load user data from localStorage when component mounts
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedUser) {
      setUser(storedUser); // Set user data from localStorage
      setLastUpdated(storedUser.lastUpdated || "Never"); // Set last updated timestamp or show "Never"
    } else {
      navigate("/login"); // Redirect to login if no user data is found in localStorage
    }
  }, [navigate]);

  // Function to handle form submission and save updated user data to localStorage
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, lastUpdated: new Date().toLocaleString() }; // Add timestamp to the updated user object
    localStorage.setItem("currentUser", JSON.stringify(updatedUser)); // Save updated user data in localStorage
    alert("Account updated successfully"); // Notify user of successful update
    setIsEditing(false); // Exit edit mode after submission
    setLastUpdated(updatedUser.lastUpdated); // Update the last updated state
  };

  // Function to handle changes to the form inputs (name, password)
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the input name and value
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value, // Update the corresponding field in the user state
    }));
  };

  // Function to handle profile picture upload and convert image to Base64
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      const reader = new FileReader(); // Create a new FileReader object to read the file
      reader.onloadend = () => {
        setUser((prevUser) => ({ ...prevUser, profilePicture: reader.result })); // Set the profile picture as Base64 string
      };
      reader.readAsDataURL(file); // Read the file as a Data URL (Base64)
    }
  };

  return (
    <div className="mt-5 account-container">
      <h2>Account Information</h2>
      <div className="profile-card">
        {/* Conditionally render form if in editing mode, otherwise show account info */}
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={user.name}
                onChange={handleChange} // Handle input changes
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={user.email}
                onChange={handleChange}
                disabled // Email should not be editable
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange} // Handle profile picture upload
                className="form-control"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              className="btn btn-secondary ml-5"
              onClick={() => setIsEditing(false)} // Cancel editing mode
            >
              Cancel
            </button>
          </form>
        ) : (
          <div>
            <img
              src={user.profilePicture || "default-profile-pic.png"} // Display default profile picture if none is set
              alt="Profile"
              className="profile-picture"
            />
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Last Updated:</strong> {lastUpdated}
            </p>
            <button
              className="btn btn-warning"
              onClick={() => setIsEditing(true)} // Enable editing mode
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Account;
