import React from 'react';
import '../styles/Pages.css';

const AboutUs = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>About TaxiCo</h1>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>At TaxiCo, we're revolutionizing urban mobility through innovative technology and sustainable practices. Our mission is to provide safe, reliable, and eco-friendly transportation solutions that make cities more livable.</p>
        </div>
        
        <div className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2025, TaxiCo emerged from a simple idea: transportation should be seamless, sustainable, and accessible to everyone. Today, we're proud to serve millions of riders across the globe with our fleet of electric vehicles and AI-powered platform.</p>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Constantly pushing the boundaries of what's possible in urban mobility</li>
            <li><strong>Sustainability:</strong> Committed to zero-emission transportation and environmental stewardship</li>
            <li><strong>Safety:</strong> Prioritizing the safety and security of our riders and drivers</li>
            <li><strong>Community:</strong> Building stronger, more connected communities through reliable transportation</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat">
              <h3>1M+</h3>
              <p>Rides Completed</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Electric Fleet</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Cities Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
