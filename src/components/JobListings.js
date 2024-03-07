// components/JobListings.js
import React from 'react';
import '../styles/JobBoard/JobListings.css'

const JobListings = () => {
  // Example job listings data
  const jobListingsData = [
    { id: 1, title: 'Software Engineer', company: 'TechCo', location: 'Remote', postedDate: '2024-03-10' },
    { id: 2, title: 'Marketing Specialist', company: 'MarketingHub', location: 'New York', postedDate: '2024-03-08' },
    // Add more job listings as needed
  ];

  return (
    <div className="job-listings-container">
      <h2>Job Listings</h2>
      <ul>
        {jobListingsData.map((job) => (
          <li key={job.id}className='listing-container'>
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Posted Date:</strong> {job.postedDate}</p>
          
          </li>
        ))}
      </ul>
   
    </div>
  );
};

export default JobListings;
