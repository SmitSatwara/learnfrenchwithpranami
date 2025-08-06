import React, { useState } from 'react';
import './Contact.css';
import { FiMail, FiInstagram } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showAlert, setShowAlert] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // 8-second timeout

    try {
      const response = await fetch('https://learnfrenchwithpranami-backend.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (response.ok) {
        setShowAlert(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setShowAlert(false), 4000);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtext">Have questions or want to book a class? Just send a message below!</p>

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
            <button type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {showAlert && (
              <div className="custom-alert">
                🎉 Thank you for your message! I’ll get back to you shortly.
              </div>
            )}

            {error && (
              <div className="custom-error">
                ❌ Please try again later.
              </div>
            )}
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
