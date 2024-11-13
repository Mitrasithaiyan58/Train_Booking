import React from 'react';
import './SignUpPage.css'; // Import the CSS file for styling

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <header>
          <h1>Create an Account</h1>
          <p>Join us to explore the world by train! Sign up now and start your journey with ease.</p>
        </header>
        <form className="signup-form">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter a strong password" required />

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" required />

          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your phone number" required />

          <button type="submit">Sign Up</button>
        </form>
        <footer>
          <p>Already have an account? <a href="/login">Log in here</a></p>
        </footer>
      </div>
    </div>
  );
};

export default SignUpPage;