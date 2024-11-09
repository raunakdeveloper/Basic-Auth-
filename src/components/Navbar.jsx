// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logout();
      toast.success("Logged out");
      navigate("/");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>Community App</h2>
      <div>
        {currentUser ? (
          <button onClick={handleLogout} style={styles.button}>
            Logout
          </button>
        ) : (
          <Link to="/signup" style={styles.link}>
            Login / Signup
          </Link>
        )}
      </div>
    </nav>
  );
};

// Inline styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#282c34",
    color: "#ffffff",
  },
  logo: {
    margin: 0,
  },
  link: {
    color: "#61dafb",
    textDecoration: "none",
    marginRight: "10px",
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default Navbar;
