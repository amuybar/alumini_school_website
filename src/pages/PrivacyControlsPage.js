import React from 'react';
import ProfileVisibilitySettings from '../components/ProfileVisibilitySettings';
import CommunicationPreferences from '../components/CommunicationPreferences';

const PrivacyControlsPage = () => {
  return (
    <div className='page-container'>
      <h1>Privacy Controls</h1>
      <ProfileVisibilitySettings />
      <CommunicationPreferences />
    </div>
  );
};

export default PrivacyControlsPage;
