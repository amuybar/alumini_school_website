import React from 'react';

const AlumniSearchForm = () => {
  // Add your logic and UI for the search form
  return (
    <form>
      <label htmlFor='searchInput'>Search Alumni:</label>
      <input type='text' id='searchInput' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default AlumniSearchForm;
