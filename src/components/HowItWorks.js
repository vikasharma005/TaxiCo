import React from 'react';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Download App',
      description: 'Get our app from App Store or Google Play'
    },
    {
      number: 2,
      title: 'Set Location',
      description: 'Enter pickup & drop-off points'
    },
    {
      number: 3,
      title: 'Get Moving',
      description: 'Meet your driver and enjoy the ride'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
