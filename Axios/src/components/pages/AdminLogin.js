import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Adminlogin() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        // Add your admin validation logic here.
        // For demonstration, let's assume valid email and password.
        if (email === 'admin@gmail.com' && password === 'password') {
            history.push('/dashboard');
        } else {
            setErrorMessage('Invalid email or password');
        }
    };

    return (
        <div className="text-center m-5-auto">
            <h2>ADMIN LOGIN</h2>
            <form onSubmit={handleLogin}>
                <p>
                    <label>Email Address</label><br/>
                    <input type="text" name="EMAIL" required onChange={(e) => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
                {errorMessage && <p>{errorMessage}</p>}
            </form>
            <footer>
                <p>Are you a User? <Link to="/login">Back</Link>.</p>
            </footer>
        </div>
    );
}
