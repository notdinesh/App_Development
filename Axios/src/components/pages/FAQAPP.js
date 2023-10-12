import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './FAQ.css';

function FAQ() {
  const history = useHistory();

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <ul className="faq-list">
        <li className="faq-item">
          <h2 className="faq-question">What is meditation?</h2>
          <p className="faq-answer">
            Meditation is a practice that involves focusing your mind on a particular object, thought, or activity to train attention and awareness, achieve mental clarity, and promote relaxation and well-being.
          </p>
        </li>
        <li className="faq-item">
          <h2 className="faq-question">How can I start meditating?</h2>
          <p className="faq-answer">
            To start meditating, find a quiet and comfortable place, sit or lie down, close your eyes, and focus on your breath or a specific mantra. Start with short sessions and gradually increase the duration as you become more comfortable.
          </p>
        </li>
        {/* Add more FAQ items as needed */}
      </ul>
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
    </div>
  );
}

export default FAQ;