
import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://learnfrenchwithpranami-backend.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowAlert(false), 4000);
      } else {
        console.error('Email sending failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtext">Have questions or want to book a class? Just send a message below!</p>

        {showAlert && (
          <div className="custom-alert">
            🎉 Thank you for your message! I’ll get back to you shortly.
          </div>
        )}

        <div className="contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>
              <FiMail className="contact-icon" />
              <strong>Email:</strong>{' '}
              <a href="mailto:frenchwithpranami@gmail.com">frenchwithpranami@gmail.com</a>
            </p>
            <p>
              <FiInstagram className="contact-icon" />
              <strong>Instagram:</strong>{' '}
              <a href="https://instagram.com/learnfrenchwithpranami" target="_blank" rel="noreferrer">
                @learnfrenchwithpranami
              </a>
            </p>
            <p className="note">I typically respond within 24 hours.</p>
          </div>
        </div>
      </div>

      <div className="contact-bottom-spacer">
        <p className="footer-note">Merci & Thanks for visiting!</p>
      </div>
    </section>
  );
}
