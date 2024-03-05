// RegisterPage.js

import React, { useState } from 'react';
import '../../../../styles/Sacco/Register.css';


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [yearOfCompletion, setYearOfCompletion] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const handleGetCode = () => {
    // Logic to send verification code (can be implemented based on your backend)
    setIsCodeSent(true);
  };

  const handleRegister = () => {
    // Logic to handle registration (can be implemented based on your backend)
    console.log('Registration submitted');
  };

  return (
    <div className="register-page">
      <h1>Register</h1>

      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />

        <label htmlFor="yearOfCompletion">Year of Completion:</label>
        <input type="text" id="yearOfCompletion" name="yearOfCompletion" value={yearOfCompletion} onChange={(e) => setYearOfCompletion(e.target.value)} required />

        {isCodeSent ? (
          <>
            <label htmlFor="verificationCode">Verification Code:</label>
            <input type="text" id="verificationCode" name="verificationCode" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} required />
          </>
        ) : null}

        {!isCodeSent ? (
          <button type="button" onClick={handleGetCode}>Get Code</button>
        ) : (
          <button type="button" onClick={handleRegister}>Register</button>
        )}
      </form>
    </div>
  );
};

export default RegisterPage;
