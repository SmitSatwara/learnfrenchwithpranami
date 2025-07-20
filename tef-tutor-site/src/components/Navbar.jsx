import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on mobile
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          French with Pranami
        </div>

        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('hero')}>Home</a>
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('courses')}>Courses</a>
          <a onClick={() => scrollToSection('contact')}>Contact</a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
