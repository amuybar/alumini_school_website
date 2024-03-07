// Components/Home/BottomLinks.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home/BottomLinks.css'

const BottomLinks = () => {
  return (
    <section className="bottom-links">
      <h3>Explore More:</h3>
      <ul>
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/terms-of-service">Terms of Service</Link></li>
        
      </ul>
    </section>
  );
};

export default BottomLinks;
