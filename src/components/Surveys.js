// components/Surveys.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/FeedBack_survay/Survey.css'; 
const Surveys = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetchSurveys();
  }, []);

  const fetchSurveys = async () => {
    try {
      const response = await axios.get('http://localhost:3000/surveys');
      setSurveys(response.data);
    } catch (error) {
      console.error('Failed to fetch surveys:', error);
    }
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  // const handleOptionChange = (index, event) => {
  //   const updatedOptions = [...options];
  //   updatedOptions[index] = event.target.value;
  //   setOptions(updatedOptions);
  // };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = [...options];
    updatedOptions.splice(index, 1);
    setOptions(updatedOptions);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newSurvey = {
        question: question,
        options: options,
      };
      await axios.post('http://localhost:3000/surveys', newSurvey);
      fetchSurveys(); // Refresh surveys after adding a new one
      setQuestion('');
      setOptions([]);
    } catch (error) {
      console.error('Failed to submit survey:', error);
    }
  };

  const handleDeleteSurvey = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/surveys/${id}`);
      fetchSurveys(); // Refresh surveys after deleting
    } catch (error) {
      console.error('Failed to delete survey:', error);
    }
  };

  return (
    <div className="surveys-container">
      <h2>Surveys</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="question">Survey Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={handleQuestionChange}
          required
        />

        <label>Options:</label>
        {options.map((option, index) => (
          <div key={index} className="option-container">
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionSelect(option)}
                required
              />
              {option}
            </label>
            <button type="button" onClick={() => handleRemoveOption(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>

        <button type="submit">Submit Survey</button>
      </form>

      {/* Display existing surveys */}
{/* Display existing surveys */}
<div className="survey-list">
  <h3>Existing Surveys:</h3>
  {surveys.length === 0 ? (
    <p>No surveys available.</p>
  ) : (
    <ul>
      {surveys.map((survey, index) => (
        <li key={index}>
          <div className="survey-header">
            <strong>{survey.question}</strong>
            <button onClick={() => handleDeleteSurvey(survey.id)}>Delete</button>
          </div>
          <form className="options-form">
            {survey.options && survey.options.map((option, optionIndex) => (
              <div key={optionIndex}className='option-comp'>
                <input
                  type="radio"
                  id={`option${optionIndex}`}
                  name={`survey${index}`}
                  value={option}
                />
                <label htmlFor={`option${optionIndex}`}>{option}</label>
              </div>
            ))}
          </form>
        </li>
      ))}
    </ul>
  )}
</div>


    </div>
  );
};

export default Surveys;
