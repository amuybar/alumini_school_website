// SaccoPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sacco/SaccoPage.css'; 


const SaccoPage = () => {
  return (
    <div className="sacco-page">
      {/* Logo */}
      <img src='/images/stammsaccologo.jpeg' alt="Stammss Sacco Logo" className="sacco-logo" />

      <h1>Welcome to Our Sacco</h1>
      <p>
        Thank you for choosing our Sacco! We are dedicated to providing financial
        solutions to our members. Learn more about us and how we operate below.
      </p>

      <div className="sacco-description">
        <h2>Sacco Overview</h2>
        <p>
          Our Sacco offers various financial services to help our members manage
          their finances. From account management to loan services, we've got you
          covered.
        </p>
      </div>

      <div className="sacco-buttons">
        <Link to="/register">
          <button>Register</button>
        </Link>
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/saccodash">
          <button>Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default SaccoPage;
