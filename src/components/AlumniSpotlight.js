import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../styles/ClassandForumn/AlumniSpotlight.css'

const AlumniSpotlight = () => {
  
  const alumniSpotlightData = [
    { id: 1, name: 'John Doe', occupation: 'Entrepreneur', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Doe', occupation: 'Software Engineer', bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 1, name: 'John Doe', occupation: 'Entrepreneur', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, name: 'Jane Doe', occupation: 'Software Engineer', bio: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
  ];

  const [showAllSpotlights, setShowAllSpotlights] = useState(false);

  
  const initialSpotlights = showAllSpotlights ? alumniSpotlightData : alumniSpotlightData.slice(0, 2);
  const handleAddSpotlight = () => {
    
    console.log('Adding a new spotlight');
  };
  return (
    <div className="alumni-spotlight-container">
       <h2>Alumni Spotlight</h2>
        <FaPlus className="add-icon" onClick={handleAddSpotlight} />
     
      <ul>
        {initialSpotlights.map((alumni) => (
          <li key={alumni.id}>
            <h3>{alumni.name}</h3>
            <p><strong>Occupation:</strong> {alumni.occupation}</p>
            <p>{alumni.bio}</p>
          </li>
        ))}
      </ul>
      {!showAllSpotlights && (
        <button className="show-more-button" onClick={() => setShowAllSpotlights(true)}>
          Show More
        </button>
      )}
    </div>
  );
};

export default AlumniSpotlight;