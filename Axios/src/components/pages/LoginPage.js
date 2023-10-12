import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions';
import axios from 'axios';
import '../../App.css';

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
      const { token } = response.data;
      localStorage.setItem('token', token);
      console.log(token);
      dispatch(login(email));

        history.push('/home');
      }
    } catch (error) {
      setErrorMessage('Invalid username/email or password');
    }
  };

  return (
    <div className="text-center m-5-auto">
      <h2>Sign in to your account</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>Email Address</label>
          <br />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <Link to="/forgot-password">
            <label className="right-label">Forgot password?</label>
          </Link>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </p>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          New User? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          Are You an Admin? <Link to="/AdminLogin">Admin Login</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
