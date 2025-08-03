import React, { useEffect } from 'react';
import './Hero.css';
import heroImage from '../assets/hero-transparent.png';

export default function Hero() {
  useEffect(() => {
    // Scroll to the Hero section when the page loads
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text fade-in-left">
          {/* Main Title */}
          <h1 className="hero-title">
            Ace the TEF Exam with Personalized French Coaching
          </h1>
          
          {/* Updated Subtext */}
          <p className="hero-subtext">
            Starting from zero? Or stuck at CLB 5? I’ll help you grow with patient, personalized French lessons made just for you.
          </p>
          
          {/* List of Benefits */}
          <ul className="hero-benefits">
            <li>✔️ Daily homework, personalized corrections, and real improvement</li>  
            <li>✔️ 1-on-1 lessons tailored to your pace</li>        
            <li>✔️ 100% TEF-focused learning</li>
          </ul>
        </div>

        <div className="hero-image fade-in-right">
          <img src={heroImage} alt="French learning illustration" />
        </div>
      </div>
    </section>
  );
}
