// src/pages/Dashboard.js
import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { currentUser } = useAuth();
  const defaultPhotoURL =
    "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=";
  return (
    <div style={styles.container}>
      <h1>Dashboard</h1>

      {/* Use a placeholder image if photoURL is not available */}
      <img
        src={currentUser.photoURL || defaultPhotoURL}
        alt="User Profile"
        style={styles.profileImage}
      />

      <p>Welcome, {currentUser.displayName || "User"}!</p>
      <p>Email: {currentUser.email || "No email provided"}</p>
      <p>This is your dashboard.</p>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  profileImage: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "15px",
  },
};

export default Dashboard;
