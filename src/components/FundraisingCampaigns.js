// components/FundraisingCampaigns.js
import React from 'react';
import './FundraisingCampaigns.css'; // Import the CSS file

const FundraisingCampaigns = () => {
  // Example fundraising campaigns data
  const fundraisingData = [
    { id: 1, title: 'Building Renovation Fund', goal: '$50,000', currentAmount: '$25,000' },
    { id: 2, title: 'Scholarship Fund', goal: '$20,000', currentAmount: '$18,000' },
    // Add more fundraising campaigns as needed
  ];

  return (
    <div className="fundraising-container">
      <h2>Fundraising Campaigns</h2>
      <ul>
        {fundraisingData.map((campaign) => (
          <li key={campaign.id}>
            <h3>{campaign.title}</h3>
            <p><strong>Goal:</strong> {campaign.goal}</p>
            <p><strong>Current Amount:</strong> {campaign.currentAmount}</p>
            {/* Add additional information or UI elements as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FundraisingCampaigns;
