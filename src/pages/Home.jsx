// src/pages/Home.js
import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div style={styles.container}>
      {currentUser ? (
        <h1>Welcome back, {currentUser.displayName}!</h1>
      ) : (
        <div>
          <h1>Welcome to the Community!</h1>
          <p>Please <Link to="/signup">Login</Link> or <Link to="/signup">Signup</Link> to continue.</p>
        </div>
      )}
    </div>
  );
};

// Simple inline styles for demonstration purposes
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default Home;
