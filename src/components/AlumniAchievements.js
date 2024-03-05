
import React from 'react';
import '../styles/Alumnidirectory/AlumniAchievements.css'

const AlumniAchievements = ({ achievements }) => {
  return (
    <div className="alumni-achievements">
      <h2>Alumni Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlumniAchievements;
