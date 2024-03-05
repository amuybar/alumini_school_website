import React from 'react';
import AlumniSearchForm from './AlumniSearchForm';
import AlumniList from './AlumniList';

const AlumniDirectory = () => {
  // Add your logic for fetching and displaying alumni data
  return (
    <div>
      <h2>Alumni Directory</h2>
      <AlumniSearchForm />
      <AlumniList />
    </div>
  );
};

export default AlumniDirectory;
