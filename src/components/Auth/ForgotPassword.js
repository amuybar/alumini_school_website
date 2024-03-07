// ForgotPassword.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Auth/ForgotPassword.css'

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/reset-password', { username, newPassword });
      setSuccessMessage('Password reset successful');
    } catch (error) {
      console.error('Password reset failed:', error);
      setErrorMessage('Failed to reset password. Please try again.');
    }
  };

  return (
    <div className='forgot-password-container'>
      <h2>Forgot Password</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        <button type="submit">Reset Password</button>
      </form>
      <button onClick={() => history('/login')}>Back to Login</button>
    </div>
  );
};

export default ForgotPassword;
