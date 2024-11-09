// src/pages/Signup.js
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const Signup = () => {
  const { login, currentUser } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await login();
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error("Login failed. Please try again.");
    }
  };

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser, navigate]);

  return (
    <div style={styles.container}>
      <h2>Signup / Login</h2>
      <div style={styles.btn}>
        <button onClick={handleGoogleLogin} style={styles.button}>
          <FcGoogle /> &nbsp; Sign in with Google
        </button>
      </div>
    </div>
  );
};

// Simple inline styles for demonstration purposes
const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0f0f0f",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default Signup;
