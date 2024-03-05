// Components/Home/Landing.js
import React from 'react';
import '../../styles/Home/Landing.css'; 
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section className="landing">
      <div className="overlay">
        <h1>Welcome to Our Alumni Community</h1>
        <p>Discover, connect, and engage with fellow alumni. Stay updated on news and events.</p>
        <Link to="/sacco" className="cta-button">Join Our Sacco</Link>
      
      </div>
    </section>
  );
};

export default Landing;
