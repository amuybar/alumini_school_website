import React from 'react';
import RegistrationForm from '../components/RegistrationForm';
import ProfileUpdateForm from '../components/ProfileUpdateForm';
import MembershipOptions from '../components/MembershipOptions';

const MembershipManagementPage = () => {
  return (
    <div className='page-container'>
      <h1>Membership Management</h1>
      <RegistrationForm />
      <ProfileUpdateForm />
      <MembershipOptions />
    </div>
  );
};

export default MembershipManagementPage;
