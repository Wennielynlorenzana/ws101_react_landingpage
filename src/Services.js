import React from 'react';
import './App.css';

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <div className="service-list">
        <div className="service-item">
          <h3>Security</h3>
          <p>Methods, tools and personnel used to defend an organization's digital assets.</p>
        </div>
        <div className="service-item">
          <h3>Cloud Computing</h3>
          <p>On-demand delivery of computing services such as servers, storage, databases, networking, software, and analytics.</p>
        </div>
        <div className="service-item">
          <h3>Database</h3>
          <p>Organized collection of structured information, or data, typically stored electronically in a computer system.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;