// Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AlumniRegistrationForm from './AlumniRegistrationForm';
import '../../styles/Auth/Register.css'

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAlumniForm, setShowAlumniForm] = useState(false);
  const history = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/auth/register', { username, password });
      setShowAlumniForm(true); 
      history('/');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
      </form>
      {showAlumniForm && <AlumniRegistrationForm />}
    </div>
  );
};

export default Register;
