import React from 'react';
import '../styles/Pages.css';

const Terms = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Terms of Service</h1>
        
        <div className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using TaxiCo's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our service.</p>
        </div>

        <div className="terms-section">
          <h2>2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the TaxiCo mobile application for personal, non-commercial transitory viewing only.</p>
          <p>This license shall automatically terminate if you violate any of these restrictions and may be terminated by TaxiCo at any time.</p>
        </div>

        <div className="terms-section">
          <h2>3. Service Description</h2>
          <p>TaxiCo provides a platform connecting riders with drivers for transportation services. We do not provide transportation services directly but facilitate connections between users and independent third-party providers.</p>
        </div>

        <div className="terms-section">
          <h2>4. User Responsibilities</h2>
          <ul>
            <li>Provide accurate and complete information when creating an account</li>
            <li>Maintain the security of your account credentials</li>
            <li>Comply with all applicable laws and regulations</li>
            <li>Use the service in a respectful and appropriate manner</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>5. Payment Terms</h2>
          <p>Users agree to pay all fees associated with the services. Prices for services may vary based on location, time, and other factors. Users will be informed of the applicable fees before confirming a ride.</p>
        </div>

        <div className="terms-section">
          <h2>6. Privacy Policy</h2>
          <p>Your use of TaxiCo's services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.</p>
        </div>

        <div className="terms-section">
          <h2>7. Modifications</h2>
          <p>TaxiCo reserves the right to modify these terms at any time. We will notify users of any material changes via email or through the application.</p>
        </div>

        <div className="terms-section">
          <h2>8. Contact Information</h2>
          <p>If you have any questions about these Terms of Service, please contact us at legal@taxico.com</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
