import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Contact />
    </>
  );
}

export default App;
