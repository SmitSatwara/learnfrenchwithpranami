import React from 'react';
import './About.css';
import tutorImage from '../assets/tutor.jpg'; // Replace with your image

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* Title centered and spans both columns */}
        <h2 className="about-heading">About Pranami</h2>

        {/* Left: Image */}
        <div className="about-image">
          <img src={tutorImage} alt="Pranami - French Tutor" />
        </div>

        {/* Right: Text */}
        <div className="about-text">
          <h3 className="about-subtitle">Your French Learning Partner</h3>
          <p className="about-description">
            Bonjour! I'm Pranami — a passionate French tutor who cracked the TEF exam with flying colours.
            <br /><br />
            My journey started like many of yours — unsure where to begin, overwhelmed by resources, and aiming for Canadian PR.
            With dedication, smart techniques, and a love for languages, I mastered the TEF.
            <br /><br />
            Now, I help students like you learn French the smart way — through personalized coaching, practical techniques, and a friendly, supportive approach. Let’s ace the TEF together!
          </p>
        </div>
      </div>
    </section>
  );
}
