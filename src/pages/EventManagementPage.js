import React from 'react';
import EventManagement from '../components/EventManagement';
import '../styles/Event-Managment/EventManagement.css'

const EventManagementPage = () => {
  return (
    <div className='page-container'>
      <h1>Event Management</h1>
      <EventManagement />
    </div>
  );
};

export default EventManagementPage;
