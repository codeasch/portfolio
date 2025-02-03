// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      // Animate in when it scrolls into view
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // triggers once rather than every time in view
      transition={{ duration: 0.8 }}
      style={{
        /* Dark gradient from purple->blue->orange */
        background: 'linear-gradient(135deg, rgba(94, 53, 177, 0.9) 0%, rgba(63, 81, 181, 0.9) 50%, rgba(255, 87, 34, 0.9) 100%)',
        padding: '2rem',
        borderRadius: '1rem',
        color: '#fff',
        margin: '2rem auto',
        maxWidth: '800px',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#FFD54F', // bright gold-ish accent for contrast
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        About Me
      </h2>

      <p
        style={{
          lineHeight: '1.6',
          fontSize: '1.1rem',
          textAlign: 'justify',
          margin: '0 auto',
          maxWidth: '700px',
        }}
      >
        Hello!!!!!!!!!!!!!!!!!!!!!!! I'm Andrew Schulman, a senior at Vernon Hills High School
        with a strong passion for computer science and game development. I have completed courses
        in AP CS Principles, AP CS A, iOS App Development, and I am currently enrolled in Advanced
        Topics in Computer Science. In my spare time, I run YapMaps, a business that develops video
        games in Unreal Engine, with a reach of over 15 million players worldwide!
      </p>
    </motion.section>
  );
}
