import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const linkStyle = { color: 'white' }; // Define a style object for the links

    return (
      <div>
        <footer className="footer">
          <span className="text-muted">
            All Rights Reserved 2023 @Calmly |{' '}
            <Link to="/faq" style={linkStyle}>
              FAQ
            </Link>{' '}
            |{' '}
            <Link to="/privacy-policy" style={linkStyle}>
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link to="/tac" style={linkStyle}>
              Terms and Conditions
            </Link>
          </span>
        </footer>
      </div>
    );
  }
}

export default FooterComponent;