
import React from 'react';
import '../../../../styles/Sacco/SaccoDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';



const SaccoDashboard = () => {
    return (
      <div className="sacco-dashboard">
        <h1>Sacco Dashboard</h1>
        <p>Welcome to the Sacco Dashboard! Here, you can manage your Sacco activities.</p>
  
        {/* Icon links */}
        <div className="icon-links">
          <Link to="/profile" className="icon-link">
            <FontAwesomeIcon icon={faUser} />
            <span>Profile Management</span>
          </Link>
  
          <Link to="/registration" className="icon-link">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Member Registration</span>
          </Link>
        </div>
  
        {/* Placeholder content */}
        <div className="dashboard-content">
          {/* Existing sections */}
          {/* ... */}
          <div className="dashboard-section">
            <Link to="/account">
            <h2>Account Overview</h2>
          <p>View your account balances and transaction history.</p>
            </Link>
          </div>
          <div className="dashboard-section">
            <Link to="/loan">
            <h2>Loan Management</h2>
          <p>Apply for loans, track your applications, and manage repayments.</p>
        
            </Link>
          </div>
          <div className="dashboard-section">
            <Link to="/communication">
              <h2>Document Management</h2>
              <h2>Communication</h2>
          <p>Stay updated with internal messages, announcements, and newsletters.</p>
      
            </Link>
          </div>
          <div className="dashboard-section">
            <Link to="/documents">
              <h2>Document Management</h2>
              <p>Upload and download important documents. Access policies, forms, and reports.</p>
            </Link>
          </div>
  
          <div className="dashboard-section">
            <Link to="/online-banking">
              <h2>Online Banking</h2>
              <p>Transfer funds between accounts and pay bills online.</p>
            </Link>
          </div>
  
          <div className="dashboard-section">
            <Link to="/security">
              <h2>Security</h2>
              <p>Ensure secure login/authentication and encrypted transactions.</p>
            </Link>
          </div>
  
          {/* Add more sections as needed */}
        </div>
      </div>
    );
  };
  
  export default SaccoDashboard;