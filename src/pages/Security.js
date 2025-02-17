import React from 'react';
import '../styles/Pages.css';

const Security = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Security</h1>
        
        <div className="security-section">
          <h2>Our Commitment to Safety</h2>
          <p>At TaxiCo, your security is our top priority. We employ industry-leading security measures to protect our users, drivers, and platform.</p>
        </div>

        <div className="security-section">
          <h2>Platform Security Features</h2>
          <div className="security-features">
            <div className="feature-card">
              <h3>Real-time GPS Tracking</h3>
              <p>Monitor your ride in real-time and share your trip details with trusted contacts.</p>
            </div>
            <div className="feature-card">
              <h3>Driver Verification</h3>
              <p>All drivers undergo rigorous background checks and regular verification processes.</p>
            </div>
            <div className="feature-card">
              <h3>24/7 Support</h3>
              <p>Our support team is available around the clock to assist with any security concerns.</p>
            </div>
            <div className="feature-card">
              <h3>Secure Payments</h3>
              <p>All transactions are encrypted and processed through secure payment gateways.</p>
            </div>
          </div>
        </div>

        <div className="security-section">
          <h2>Data Protection</h2>
          <ul>
            <li>End-to-end encryption for all sensitive data</li>
            <li>Regular security audits and penetration testing</li>
            <li>Compliance with international data protection standards</li>
            <li>Secure data centers with redundant backups</li>
          </ul>
        </div>

        <div className="security-section">
          <h2>Emergency Assistance</h2>
          <div className="emergency-info">
            <h3>In-app Emergency Button</h3>
            <p>Quick access to emergency services directly from the app</p>
            <h3>24/7 Emergency Response Team</h3>
            <p>Dedicated team to handle emergency situations</p>
          </div>
        </div>

        <div className="security-section">
          <h2>Report a Security Concern</h2>
          <div className="contact-info">
            <p>If you need to report a security incident or have concerns:</p>
            <ul>
              <li>Emergency Hotline: +1 (555) 911-0000</li>
              <li>Email: security@taxico.com</li>
              <li>In-app reporting feature</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
