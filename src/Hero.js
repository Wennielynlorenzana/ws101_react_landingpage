import React from 'react';
import './App.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h2>Welcome to Software Development</h2>
        <p>Framework for developing information systems, focusing on planning and organization.</p>
        <a href="#about" className="cta-button">Learn More</a>
      </div>
    </section>
  );
};

export default Hero;

