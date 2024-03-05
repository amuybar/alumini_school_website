// LoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../styles/Sacco/Login.css'; 


const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>Log In</h1>

      <form>
        <label htmlFor="alumniNo">Alumni Number:</label>
        <input type="text" id="alumniNo" name="alumniNo" required />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Log In</button>
      </form>

      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </div>
  );
};

export default LoginPage;
