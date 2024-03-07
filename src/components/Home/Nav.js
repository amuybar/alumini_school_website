// Components/Home/Nav.js
import React, { useState ,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import {  FiMenu,  FiSkipBack } from 'react-icons/fi';
import '../../styles/Home/Nav.css'; // Import the CSS file

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulate checking if the user is logged in
  useEffect(() => {
    // Your authentication logic here
    const isAuthenticated = localStorage.getItem('token') !== null;
    setIsLoggedIn(isAuthenticated);
  }, []);

  const handleLogout = () => {
    // Your logout logic here
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <Link to="/">STAMMS</Link>
      </div>
      <div className="nav-buttons">
      {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/login">Login</Link>
          )}
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
        <Link to="/class-notes-and-forums"className='link'>Spotlight Forumns</Link></div>
      
      </div>
    </nav>
  );
};

export default Nav;
