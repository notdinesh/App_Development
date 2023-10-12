import React from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory from react-router-dom
import './PrivacyPolicy.css';

function PrivacyPolicy() {
  const history = useHistory();

  // Function to handle the back button click
  const handleBackButtonClick = () => {
    history.goBack(); // Go back to the previous page
  };

  return (
    <div className="privacy-policy-container">
      <h1>Privacy Policy</h1>
      <p className="policy-section">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Meditation and Relaxation app.
      </p>

      <h2>Information We Collect</h2>
      <p className="policy-section">
        We may collect various types of information when you use our app, including but not limited to:
      </p>
      <ul className="policy-list">
        <li>Personal information such as your name, email address, and contact details.</li>
        <li>Usage data, including information about how you interact with the app.</li>
        <li>Device information, such as your device type, operating system, and IP address.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p className="policy-section">
        We use the collected information for various purposes, including:
      </p>
      
      <button onClick={handleBackButtonClick} className="back-button">
        Back
      </button>

      {/* Add more policies and information as needed */}
    </div>
  );
}

export default PrivacyPolicy;