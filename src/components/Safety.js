import React from 'react';
import '../styles/Safety.css';

const Safety = () => {
  const safetyFeatures = [
    'Real-time GPS tracking',
    '24/7 customer support',
    'Driver background checks',
    'Share your trip details'
  ];

  return (
    <section id="safety" className="safety">
      <div className="safety-content">
        <h2>Your Safety is Our Priority</h2>
        <p>Every ride is protected by our industry-leading safety features:</p>
        <ul>
          {safetyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Safety;
