import React from 'react';
import '../styles/Pages.css';

const Privacy = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Privacy Policy</h1>
        
        <div className="privacy-section">
          <h2>1. Information We Collect</h2>
          <h3>Personal Information</h3>
          <ul>
            <li>Name and contact information</li>
            <li>Payment information</li>
            <li>Location data</li>
            <li>Device information</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and improve our services</li>
            <li>Process your payments</li>
            <li>Communicate with you about our services</li>
            <li>Ensure safety and security</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. Information Sharing</h2>
          <p>We may share your information with:</p>
          <ul>
            <li>Drivers and other service providers</li>
            <li>Payment processors</li>
            <li>Law enforcement when required</li>
            <li>Third-party service providers</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>6. Cookies and Tracking</h2>
          <p>We use cookies and similar tracking technologies to improve your experience on our platform. You can control cookie settings through your browser preferences.</p>
        </div>

        <div className="privacy-section">
          <h2>7. Contact Us</h2>
          <p>If you have questions about our Privacy Policy or your personal information, please contact our Data Protection Officer at:</p>
          <p>Email: privacy@taxico.com</p>
          <p>Address: 123 Privacy Street, San Francisco, CA 94105</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
