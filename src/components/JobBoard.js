import React from 'react';
import JobListings from './JobListings';
import JobApplicationForm from './JobApplicationForm';

const JobBoard = () => {
  return (
    <div>
      <h2>Job Board</h2>
      <JobListings />
      <JobApplicationForm />
      {/* Add more components for job board as needed */}
    </div>
  );
};

export default JobBoard;
