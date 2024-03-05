// components/JobApplicationForm.js
import React, { useState } from 'react';
import '../styles/JobBoard/JobApplicationForm.css'

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      resume: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement submission logic (e.g., API call) with formData
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="job-application-form-container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Resume:
          <input type="file" name="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
        </label>
        <label>
          Cover Letter:
          <textarea name="coverLetter" value={formData.coverLetter} onChange={handleChange} required />
        </label>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default JobApplicationForm;
