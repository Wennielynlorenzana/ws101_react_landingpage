import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log(formData);
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required onChange={handleChange} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required onChange={handleChange} />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required onChange={handleChange}></textarea>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;