// src/App.jsx
import React, { useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  /*
   * Optional: If you want the "scroll in" animation for sections
   * that sets .active on scroll, you can use an Intersection Observer here.
   * Example shown below using a simple scroll handler.
   */
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          section.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
