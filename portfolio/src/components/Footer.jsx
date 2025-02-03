// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: '#1c1b29',
        color: '#fff',
        textAlign: 'center',
        padding: '2rem',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.5)',
        marginTop: '2rem',
      }}
    >
      <p
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          margin: 0,
          fontSize: '0.9rem',
        }}
      >
        <a
          href="https://www.linkedin.com/in/andrew-schulman-806607289"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#ffa726',
            textDecoration: 'none',
            fontWeight: '700',
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
        >
          <img
            src="/Logos/LinkedIn_logo_initials.png"
            alt="LinkedIn"
            style={{ width: '20px', height: '20px' }}
          />
          LinkedIn
        </a>
        <span>| © 2024 Andrew Schulman</span>
      </p>
    </motion.footer>
  );
}
