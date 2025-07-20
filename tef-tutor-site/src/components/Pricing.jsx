import React from 'react';
import './Pricing.css';

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2 className="pricing-title">Pricing Plans</h2>
        <p className="pricing-subtext">Flexible and affordable learning tailored for you.</p>

        <div className="pricing-grid">
          {/* Single Class */}
          <div className="pricing-card">
            <h3 className="plan-title">Single Class</h3>
            <p className="price">$12 CAD</p>
            <p className="plan-details">Ideal for trial or casual learners.</p>
          </div>

          {/* 5-Class Bundle */}
          <div className="pricing-card featured">
            <div className="badge">Most Popular</div>
            <h3 className="plan-title">5-Class Bundle</h3>
            <p className="price">$50 CAD</p>
            <p className="plan-details">Save $10 — perfect for serious learners!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
