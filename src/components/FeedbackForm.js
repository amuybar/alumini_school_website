import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FeedBack_survay/Feedback.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    // Fetch alumni data to populate name and email
    axios.get('http://localhost:3000/alumni')
      .then(response => {
        const { name, email } = response.data;
        setName(name);
        setEmail(email);
      })
      .catch(error => {
        console.error('Error fetching alumni details:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send feedback data to backend
    const formData = {
      name,
      email,
      feedback
    };
    axios.post('http://localhost:3000/feedback', formData)
      .then(response => {
        console.log('Feedback submitted successfully:', response.data);
        // Optionally, you can show a success message or clear the form here
      })
      .catch(error => {
        console.error('Error submitting feedback:', error);
      });
  };

  return (
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} readOnly required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} readOnly required />

        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" rows="4" value={feedback} onChange={(e) => setFeedback(e.target.value)} required />

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
