import React, { useState } from 'react';
import './Courses.css';

const courseData = [
  {
    icon: '🔰',
    title: '1:1 Beginner French Course',
    description: 'Start your French journey with confidence.',
    details: [
      'Level: Complete Beginner – A1',
      'Format: One-on-one personalized classes',
      'Learn essential grammar, vocabulary, pronunciation, and conversational skills through a structured yet flexible plan.',
      'Study material will be provided to support your learning.',
      '$12/hour',
      'Bundle Offer: 5 classes for $50 (save $10)'
    ]
  },
  {
    icon: '🇫🇷',
    title: 'TEF Canada Preparation Course',
    description: 'Crack the TEF with confidence.',
    details: [
      'Focus: All 4 sections (Speaking, Writing, Listening, Reading)',
      'Includes full mock speaking tests, personalized corrections, and exam strategies.',
      'Practice with real TEF-style prompts and get expert feedback.',
      'Study material will be provided, including tips, templates, and exercises.',
      '$15/hour'
    ]
  },
  {
    icon: '🗣️',
    title: 'TEF Speaking Mock Test (30 mins)',
    description: 'Simulate the real exam & get expert feedback.',
    details: [
      'You’ll do a full Section A + Section B speaking test',
      'Get line-by-line feedback + score estimation',
      'Sample responses and speaking notes will be provided for practice.',
      '$13 (30 minutes)'
    ]
  },
  {
    icon: '✍️',
    title: 'TEF Writing Preparation',
    description: 'Master Section A & B of the writing exam.',
    details: [
      'We’ll focus on structure, grammar, vocabulary, and clarity.',
      'Weekly topics, corrections, and rewriting exercises with guided feedback.',
      'Study material will be provided, including sample answers and writing strategies.',
      '$15/hour'
    ]
  },
  {
    icon: '📞',
    title: 'Consultation Call – Let’s Talk!',
    description: 'Unsure where to start? Book a quick call.',
    details: [
      'Discuss your goals, your current level, and the best course plan for you.',
      'A learning roadmap and suggestions will be shared after the call.',
      '$5 (30 minutes)'
    ]
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCourse(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        <h2 className="section-title">Courses Offered</h2>
        <div className="courses-grid">
          {courseData.map((course, index) => (
            <div className="course-card" key={index} onClick={() => openModal(course)}>
              <div className="hover-overlay">Click for more info</div>
              <div className="course-icon">{course.icon}</div>
              <h3 className="course-name">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedCourse && (
        <div className="course-modal-backdrop" onClick={closeModal}>
          <div className="course-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>×</button>
            <div className="modal-icon">{selectedCourse.icon}</div>
            <h3 className="modal-title">{selectedCourse.title}</h3>
            <p className="modal-subtitle">{selectedCourse.description}</p>
            <div className="modal-content">
              {selectedCourse.details.map((line, idx) => (
                <p key={idx} className={line.includes('$') ? 'modal-price' : 'modal-text'}>
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
