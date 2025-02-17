import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>TaxiCo</h4>
          <p>Revolutionizing urban mobility</p>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">Security</a>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TaxiCo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
