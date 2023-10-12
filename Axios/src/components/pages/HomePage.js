// src/components/HomePage.js

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/3.jpg'; // Update with the actual path to your image
import '../../App.css';

const backgroundStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  minHeight: '100vh', // Ensures the background covers the entire viewport height
};

function HomePage({ user }) {
  return (
    <div style={backgroundStyle} className="text-center">
      <h1 className="main-title home-page-title">MEDITATION MADE SIMPLE</h1>
      {user ? (
        <div>
          <p>Logged in as: {user}</p>
          <Link to="/">
            <button className="primary-button">Log out</button>
          </Link>
          <Link to="/meditation">
            <button className="primary-button">LETS START</button>
          </Link>
          <Link to="/UsersPage">
            <button className="primary-button">COURSES</button>
          </Link>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
}

// Map the user state from Redux to props
const mapStateToProps = (state) => ({
  user: state,
});

export default connect(mapStateToProps)(HomePage);
