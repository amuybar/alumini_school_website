
import React, { useState } from 'react';
import '../styles/Alumnidirectory/AlumniSearchForm.css'
const AlumniSearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm, selectedClass);
  };

  return (
    <div className="alumni-search-form">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
      className='select-form'
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="">All Classes</option>
        <option value="2018">Class of 2018</option>
        <option value="2019">Class of 2019</option>
        <option value="2020">Class of 2020</option>
        <option value="2021">Class of 2021</option><option value="2022">Class of 2022</option>
        <option value="2023">Class of 2023</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default AlumniSearchForm;
