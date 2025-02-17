import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Your Journey, <span className="highlight">Reimagined</span></h1>
        <p>Experience the future of urban mobility with AI-powered rides and zero-emission vehicles.</p>
        <div className="cta-buttons">
          <a href="#download" className="btn primary">Get Started</a>
          <a href="#learn-more" className="btn secondary">Learn More</a>
        </div>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
          alt="Modern Electric Taxi"
        />
      </div>
    </header>
  );
};

export default Hero;
