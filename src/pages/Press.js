import React from 'react';
import '../styles/Pages.css';

const Press = () => {
  const pressReleases = [
    {
      date: 'February 15, 2025',
      title: 'TaxiCo Launches 100% Electric Fleet in 10 New Cities',
      excerpt: 'Leading ride-hailing company expands its zero-emission initiative...'
    },
    {
      date: 'January 30, 2025',
      title: 'TaxiCo Announces Partnership with Leading EV Manufacturer',
      excerpt: 'Strategic collaboration aims to accelerate sustainable transportation...'
    },
    {
      date: 'January 15, 2025',
      title: 'TaxiCo Reports Record Growth in Q4 2024',
      excerpt: 'Company achieves milestone of 1 million rides per day...'
    }
  ];

  const mediaContacts = {
    name: 'Sarah Johnson',
    title: 'Head of Communications',
    email: 'press@taxico.com',
    phone: '+1 (555) 123-4567'
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Press Room</h1>
        
        <div className="press-section">
          <h2>Latest News</h2>
          <div className="press-releases">
            {pressReleases.map((release, index) => (
              <div key={index} className="press-card">
                <div className="press-date">{release.date}</div>
                <h3>{release.title}</h3>
                <p>{release.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>
        </div>

        <div className="press-section">
          <h2>Media Resources</h2>
          <div className="media-resources">
            <div className="resource-card">
              <h3>Press Kit</h3>
              <p>Download our press kit including logos, executive bios, and product images.</p>
              <button className="download-btn">Download</button>
            </div>
            <div className="resource-card">
              <h3>Brand Guidelines</h3>
              <p>Access our brand guidelines and visual identity resources.</p>
              <button className="download-btn">View Guidelines</button>
            </div>
          </div>
        </div>

        <div className="press-section">
          <h2>Media Contact</h2>
          <div className="contact-card">
            <h3>{mediaContacts.name}</h3>
            <p>{mediaContacts.title}</p>
            <p>Email: {mediaContacts.email}</p>
            <p>Phone: {mediaContacts.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
