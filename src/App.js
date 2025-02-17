import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Safety from './components/Safety';
import Download from './components/Download';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Safety />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
