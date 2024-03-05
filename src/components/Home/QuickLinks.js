// Components/Home/QuickLinksCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi'; 
import '../../styles/Home/QuickLinks.css'; 

const QuickLinksCard = ({ title, link }) => {
  return (
    <Link to={link} className="quick-links-card">
      <h3>{title}</h3>
      <FiArrowRight />
    </Link>
  );
};

export default QuickLinksCard;
