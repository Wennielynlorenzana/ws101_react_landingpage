import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;