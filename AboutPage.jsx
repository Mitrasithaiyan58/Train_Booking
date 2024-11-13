// src/AboutPage.jsx
import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Train Booking</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/contact">Login/Signup</a></li>

          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to Train Booking, your reliable partner for booking train tickets with ease. 
          Our platform offers a seamless and efficient way to search for train routes, check schedules, 
          and secure your seats. We are committed to providing our customers with a hassle-free booking experience, 
          making your journey enjoyable from the start.
        </p>
        <p>
          With Train Booking, you can explore various train options, compare prices, and book your tickets 
          all in one place. Our user-friendly interface and dedicated customer support ensure a smooth experience 
          for travelers of all kinds.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="feature">
          <h3>Easy Booking Process</h3>
          <p>Experience a quick and simple booking process with multiple payment options.</p>
        </div>
        <div className="feature">
          <h3>User Registration and Login</h3>
          <p>User accounts with secure login/logout functionality.</p>
         <p>Profile management (update personal details, view booking history).</p>
        </div>
        <div className="feature">
          <h3>Search and Book Tickets</h3>
          <p>Search functionality to find trains based on departure and arrival stations, dates, and times.</p>
<p>Display available trains with schedule, seat availability, and fare.</p>
<p>Select and book seats with real-time availability updates.</p>
        </div>
        <div className="feature">
          <h3>Payment Integration</h3>
          <p>Support for multiple payment methods (credit/debit cards, digital wallets, etc.)</p>
<p>Secure payment processing with SSL encryption.</p>
<p>Confirmation of payment and booking..</p>
        </div>
        <div className="feature">
          <h3>Ticket Management</h3>
          <p>View, download, and print e-tickets.</p>
          <p>Option to cancel or modify bookings</p>

        </div>
        <div className="feature">
          <h3>Notifications</h3>
          <p>Email/SMS notifications for booking confirmation, cancellations, or schedule changes.</p>
          <p>Reminders for upcoming journeys.</p>

        </div>
        
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Train Booking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;