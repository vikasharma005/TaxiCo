import React from 'react';
import '../styles/Pages.css';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY',
      type: 'Full-time'
    },
    {
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Boston, MA',
      type: 'Full-time'
    }
  ];

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Join Our Team</h1>
        <div className="careers-intro">
          <p>Help us revolutionize urban mobility and create sustainable transportation solutions for cities worldwide.</p>
        </div>

        <div className="careers-section">
          <h2>Why TaxiCo?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Competitive Compensation</h3>
              <p>Competitive salary, equity, and comprehensive benefits package</p>
            </div>
            <div className="benefit-card">
              <h3>Growth Opportunities</h3>
              <p>Continuous learning and career development programs</p>
            </div>
            <div className="benefit-card">
              <h3>Work-Life Balance</h3>
              <p>Flexible working hours and remote work options</p>
            </div>
            <div className="benefit-card">
              <h3>Impact</h3>
              <p>Make a real difference in urban transportation</p>
            </div>
          </div>
        </div>

        <div className="careers-section">
          <h2>Open Positions</h2>
          <div className="positions-list">
            {openPositions.map((position, index) => (
              <div key={index} className="position-card">
                <h3>{position.title}</h3>
                <div className="position-details">
                  <span>{position.department}</span>
                  <span>{position.location}</span>
                  <span>{position.type}</span>
                </div>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
