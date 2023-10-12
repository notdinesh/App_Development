import React from 'react';
import { useHistory } from 'react-router-dom';
import './TermsAndConditions.css';

function TermsAndConditions() {
  const history = useHistory();

  const handleBackButtonClick = () => {
    history.goBack();
  };

  return (
    <div className="terms-and-conditions-container">
      <h1>Terms and Conditions</h1>
      <p className="section-1">
        Welcome to the Meditation and Relaxation app. By using this app, you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using the app.
      </p>

      <h2 className="section-2">1. Acceptance of Terms</h2>
      <p className="section-2">
        By using the Meditation and Relaxation app, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
      </p>

      <h2 className="section-3">2. Use of the App</h2>
      <p className="section-3">
        You may use this app for your personal, non-commercial use only. You may not use this app for any illegal or unauthorized purpose.
      </p>

      <h2 className="section-4">3. Privacy Policy</h2>
      <p className="section-4">
        Your use of the app is also governed by our Privacy Policy, which can be found on our website.
      </p>

      <h2 className="section-5">4. Modifications to Terms</h2>
      <p className="section-5">
        We reserve the right to modify or revise these terms and conditions at any time without notice. It is your responsibility to regularly review these terms.
      </p>

      <button onClick={handleBackButtonClick} className="back-button">
        Back
      </button>
    </div>
  );
}

export default TermsAndConditions;