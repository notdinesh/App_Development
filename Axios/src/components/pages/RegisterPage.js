import React, { useState } from 'react';
import '../../App.css'
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

const Create = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = () => {
    if (!username || !email || !password) {
      setErrorMessage('All fields are required');
      return false;
    }

    // Add more specific validation rules for username, email, and password here
    // For example, you can check if the email is in a valid format.

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      handleSignup();
    }
  }

  const handleSignup = async () => {
    try {
      const isValid = validateForm();

      if (isValid) {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
          username,
          email,
          password
        });

        if (response.status === 200) {
          history.push("/Login");
        }
      }
    } catch (error) {
      console.log("Error!", error);
    }
  };

  return (
    <div className="">
      <div className="container1">
        <h2>SIGN UP</h2>
        <form onSubmit={handleSubmit}>
          <br />
          <br />
          <br />
          <div className="field11">Username</div>
          <input
            className="input-field11"
            type="text"
            name="username"
            placeholder="Enter User name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <br />

          <div className="field31">Email:</div>
          <input
            className="input-field31"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Mail Id"
          />
          <br />
          <br />
          <div className="field41">Password:</div>
          <input
            className="input-field41"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <br />
          <br />

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button className="bt1" type="submit">
            Sign up
          </button>
          <br />
          <br />
          <div className="footer">
            <label>Sign up</label>
          </div>

          <p>
            Already have an account?<Link to="/Login"> Log In</Link>{' '}
          </p>
        </form>
      </div>
    </div>
  );
}

export default Create;
