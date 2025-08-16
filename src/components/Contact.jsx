import React from 'react';
import '../components/CSS/contact.css';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="title-section">
                <h1>Contact Us</h1>
            </div>
            
            <div className="contact-wrapper">
                <div className="form-section">
                    <div className="form-field">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" placeholder="Your full name" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" placeholder="your.email@example.com" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" rows="5" placeholder="Your message here..."></textarea>
                    </div>
                    <button className="submit-btn">Send Message</button>
                </div>
                
                <div className="info-section">
                    <h2>Marci Metzger - THE RIDGE REALTY GROUP</h2>
                    <div className="contact-info">
                        <p>
                            
                            3190 HW-160, Suite F, Pahrump, Nevada 89048, United States
                        </p>
                        <div className="office-hours">
                            <h3>Office Hours</h3>
                            <p>Open today: 08:00 am – 07:00 pm</p>
                            <p>Daily hours: 8:00 am - 7:00 pm</p>
                            <p>Appointments outside office hours available upon request. Just call!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
