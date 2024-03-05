import React from 'react';
import FeedbackForm from '../components/FeedbackForm';
import Surveys from '../components/Surveys';

const FeedbackAndSurveysPage = () => {
  return (
    <div className='page-container'>
      <h1>Feedback and Surveys</h1>
      <FeedbackForm />
      <Surveys />
    </div>
  );
};

export default FeedbackAndSurveysPage;
