// Components/Home/NewsCard.js
import React from 'react';
import '../../styles/Home/card.css'; 

const NewsCard = ({ title, image, description, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link} className="read-more-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
