import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <header>
                    <h1>Login to Train Booking</h1>
                    <p>Welcome back! Please log in to manage your bookings.</p>
                </header>
                <form className="login-form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />

                    <button type="submit">Log In</button>
                </form>
                <footer>
                    <p>Don't have an account? <a href="/signup">Sign up here</a></p>
                </footer>
            </div>
        </div>
    );
};

export default LoginPage;