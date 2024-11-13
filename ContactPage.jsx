import React from 'react';
import './ContactPage.css'; // Ensure you have the CSS in this file

const ContactPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message sent. We will get back to you soon!');
    };

    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>Have questions or need assistance? Reach out to us!</p>
            </header>
            <div className="contact-info">
                <div className="info">
                    <h2>Address</h2>
                    <p>123 Train Station Road, Chennai, India</p>
                </div>
                <div className="info">
                    <h2>Email</h2>
                    <p><a href="mailto:support@trainbooking.com">support@trainbooking.com</a></p>
                </div>
                <div className="info">
                    <h2>Phone</h2>
                    <p>(+123) 456-7890</p>
                </div>
            </div>
            <div className="contact-form">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"placeholder='John Smith' name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder='john@gmail.com' name="email" required />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message"placeholder='enter your message' rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;