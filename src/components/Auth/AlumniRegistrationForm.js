// AlumniRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/Auth/AlumniRegistrationForm.css';

const AlumniRegistrationForm = () => {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/alumni', { name, year, email, phone });
      setSuccessMessage('Registration successful!');
      setName('');
      setYear('');
      setEmail('');
      setPhone('');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000); // Clear success message after 3 seconds
    } catch (error) {
      console.error('Alumni registration failed:', error);
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <h2>Alumni Registration Form</h2>
      {successMessage && <div className="success-message">{successMessage}</div>}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AlumniRegistrationForm;
