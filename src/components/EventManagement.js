import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import '../styles/Event-Managment/EventManagement.css';

const EventManagement = () => {
  const [eventData, setEventData] = useState([]);

 useEffect(() => {
  const fetchEventData = async () => {
    try {
      // Retrieve authentication token from local storage (assuming it's stored there)
      const token = localStorage.getItem('token');

      // Include token in the request headers
      const response = await axios.get('http://localhost:3000/events');

      setEventData(response.data);
    } catch (error) {
      console.error('Failed to fetch event data:', error);
    }
  };

  fetchEventData();
}, []);

  return (
    <div className="event-management-container">
      <h2>Event Management</h2>
      <ul>
        {eventData.map((event) => (
          <li key={event.id}className='event-details'>
            <h3>{event.title}</h3>
           <div className='event-details-p'> <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p></div>
            {/* Add additional information or UI elements as needed */}
          </li>
        ))}
      </ul>

      {/* Add Event button */}
      <div className="add-event-icon">
        <FaPlus size={20} color="#007bff" />
      </div>
    </div>
  );
};

export default EventManagement;
