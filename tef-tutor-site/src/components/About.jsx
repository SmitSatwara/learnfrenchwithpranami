import React, { useState } from 'react';
import './About.css';
import tutorImage from '../assets/tutor.jpg';
import firstAttemptImage from '../assets/TEF1.jpg';
import secondAttemptImage from '../assets/TEF2.jpg';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <h2 className="about-heading">About Me</h2>

          <div className="about-left">
            <img src={tutorImage} alt="Pranami - French Tutor" />
          </div>

          <div className="about-right">
            <h3 className="about-subtitle">Your French Learning Partner</h3>
            <p className="about-description">
              Bonjour, je m’appelle Pranami. I started my French learning journey in July 2024 with absolutely no knowledge. My goal was clear: to pass the TEF Canada exam with at least CLB 7 in all sections.
            </p>
            <p className="about-description">
              It wasn’t an easy journey. Balancing work, studies, and personal life was tough—but I showed up every day with patience, structure, and consistency.
            </p>
            <button className="read-more-button" onClick={toggleModal}>Read More</button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-button" onClick={toggleModal}>×</button>
            <h3 className="modal-title">My French Learning Journey</h3>

            <div className="modal-row first-row">
              <p className="modal-description">
                I studied for 7 to 8 hours every single day, and in less than a year, I passed TEF Canada. In April 2025, I gave my first attempt. I missed the mark in the speaking section, but I didn’t let that stop me. I came back stronger, focused even harder, and just one month later, in May 2025, I passed with CLB 7 in all sections.
              </p>
              <img src={firstAttemptImage} alt="First Attempt" className="modal-image-left" />
            </div>

            <div className="modal-row even">
              <p className="modal-description">
                I created this platform to help others like me—whether you’re starting from scratch or have already tried and failed—because I know exactly how it feels. The pressure, the doubts, the exhaustion… I’ve been through it all. Now, I’m here to share everything I learned—the tools, tips, and support I wish I had from day one.
              </p>
              <img src={secondAttemptImage} alt="Second Attempt" className="modal-image-right" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
