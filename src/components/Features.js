import React from 'react';
import { FaBolt, FaLeaf, FaShieldAlt, FaDollarSign } from 'react-icons/fa';
import '../styles/Features.css';

const Features = () => {
  const features = [
    {
      icon: <FaBolt />,
      title: 'Lightning Fast',
      description: '2-minute average pickup time'
    },
    {
      icon: <FaLeaf />,
      title: 'Eco-Friendly',
      description: '100% electric fleet'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Safe & Secure',
      description: 'AI-powered safety features'
    },
    {
      icon: <FaDollarSign />,
      title: 'Best Value',
      description: 'Competitive pricing'
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Why Choose TaxiCo</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
