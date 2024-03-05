// components/AlumniDirectory/AlumniList.js
import React from 'react';

const AlumniList = ({ alumniData }) => {
  return (
    <div className="alumni-list">
      {/* Map through the alumni data and display each item */}
      {alumniData.map((alumni) => (
        <div key={alumni.id} className="alumni-item">
          <p>{alumni.name}</p>
          <p>Class of {alumni.classYear}</p>
          <p>Contact: {alumni.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default AlumniList;
