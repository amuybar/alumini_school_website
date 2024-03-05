// Components/Home/Nav.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FiMenu,  FiSkipBack } from 'react-icons/fi';
import '../../styles/Home/Nav.css'; // Import the CSS file

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">STAMMS</Link>
      </div>
      <div className="nav-buttons">
        <Link to="/">Home</Link>
        <Link to="/alumni-directory">Alumni Directory</Link>
        <Link to="/event-management">Event Management</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMenu />
      </div>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className='content-menu'><div className="menu-icon-" onClick={toggleMenu}>
        <FiSkipBack />
      </div>
        <div className='TopButtons'>
        <Link to="/alumni-directory"className='tlink'>Directory</Link>
        <Link to="/donation-platform'"className='tlink'>Donation</Link>
        <Link to="//photo-and-video-gallery"className='tlink'>Gallery</Link>
        <Link to="/job-board"className='tlink'>Job Board</Link>
        </div>
        <Link to="/" className='link'>Home</Link>
        
       
        <Link to="/event-management"className='link'>Event Management</Link>
       
        <Link to="/membership-management"className='link'>Membership And Managment</Link>
        <Link to="/news-and-updates"className='link'>News And Updates</Link>
        
        <Link to="/feedback-and-surveys"className='link'>Feedback And Survey </Link>
        <Link to="/social-media-integration"className='link'>Social Media</Link>
        <Link to="/privacy-controls"className='link'>Privacy</Link>
        <Link to="/class-notes-and-forums"className='link'>Class and Forumns</Link></div>
      
      </div>
    </nav>
  );
};

export default Nav;
