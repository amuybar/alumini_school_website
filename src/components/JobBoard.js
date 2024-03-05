import React from 'react';
import JobListings from './JobListings';
import JobApplicationForm from './JobApplicationForm';
import '../styles/JobBoard/JobBoard.css'
const JobBoard = () => {
  return (
    <div className='Job-Container'>
      <h2>Job Board</h2>
      <JobListings />
      <JobApplicationForm />

    </div>
  );
};

export default JobBoard;
