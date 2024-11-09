// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, signInWithGoogle, logout } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

// Create the Auth Context
const AuthContext = createContext();

// Custom hook to use the Auth Context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap around the app
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle login with Google
  const login = () => {
    return signInWithGoogle();
  };

  // Function to handle logout
  const handleLogout = () => {
    return logout();
  };

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    logout: handleLogout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
