import React from 'react';
import '../styles/Download.css';

const Download = () => {
  return (
    <section id="download" className="download">
      <h2>Ready to Get Started?</h2>
      <p>Download the TaxiCo app now and experience the future of transportation.</p>
      <div className="app-buttons">
        <a href="#" className="app-store">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
            alt="Download on App Store"
          />
        </a>
        <a href="#" className="play-store">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play"
          />
        </a>
      </div>
    </section>
  );
};

export default Download;
