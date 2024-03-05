import React from 'react';
import SocialMediaConnect from '../components/SocialMediaConnect';
import UpdateShare from '../components/UpdateShare';

const SocialMediaIntegrationPage = () => {
  return (
    <div className='page-container'>
      <h1>Social Media Integration</h1>
      <SocialMediaConnect />
      <UpdateShare />
    </div>
  );
};

export default SocialMediaIntegrationPage;
