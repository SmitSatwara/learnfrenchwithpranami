import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-transparent.png';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h2 className="hero-top-title"></h2>
        <div className="hero-text fade-in-left">
          <h1 className="hero-title">
            Ace the TEF Exam with Personalized French Coaching 🇫🇷
          </h1>
          <p className="hero-subtext">
            Join students who’ve cracked the TEF with expert guidance, practical methods, and real bilingual support.
          </p>
          <ul className="hero-benefits">
            <li>🎯 100% TEF-focused learning</li>
            <li>🌟 Friendly, bilingual instruction</li>
            <li>📈 Smart techniques that work</li>
          </ul>
        </div>

        <div className="hero-image fade-in-right">
          <img src={heroImage} alt="French learning illustration" />
        </div>
      </div>
    </section>
  );
}
