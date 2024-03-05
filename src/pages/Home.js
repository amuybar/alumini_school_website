import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Welcome to the Alumni Website!</h1>
      <p>Explore the various sections:</p>
      
      <ul>
        <li><Link to='/alumni-directory'>Alumni Directory</Link></li>
        <li><Link to='/event-management'>Event Management</Link></li>
        <li><Link to='/job-board'>Job Board</Link></li>
        <li><Link to='/news-and-updates'>News and Updates</Link></li>
        <li><Link to='/donation-platform'>Donation Platform</Link></li>
        <li><Link to='/class-notes-and-forums'>Class Notes and Forums</Link></li>
        <li><Link to='/photo-and-video-gallery'>Photo and Video Gallery</Link></li>
        <li><Link to='/social-media-integration'>Social Media Integration</Link></li>
        <li><Link to='/membership-management'>Membership Management</Link></li>
        <li><Link to='/privacy-controls'>Privacy Controls</Link></li>
        <li><Link to='/feedback-and-surveys'>Feedback and Surveys</Link></li>
      </ul>
    </div>
  );
};

export default Home;
