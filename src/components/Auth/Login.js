import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/Auth/Login.css'; // Importing CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/login', { username, password });
      // Assuming your backend sends a token upon successful login
      localStorage.setItem('token', response.data.token);
      history('/');
    } catch (error) {
      console.error('Login failed:', error);
      setErrorMessage('Failed to login. Please check your credentials and try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="additional-options">
        <button className="register-button" onClick={() => history('/register')}>Register</button>
        <button className="forget-password-button" onClick={() => history('/forgot-password')}>Forget Password</button>
        <button className="alternative-login-button">Login with Google</button>
        <button className="alternative-login-button">Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
