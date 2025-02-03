// src/components/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        /* Matching gradient background with the dark theme (purple->blue->orange) */
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
          color: '#FFD54F', // Gold-ish accent
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Contact
      </h2>

      <p
        style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          marginBottom: '1rem',
        }}
      >
        You can reach me at{' '}
        <a
          href="mailto:andrew@yapmaps.com"
          style={{
            color: '#FFD54F',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          andrew@yapmaps.com
        </a>
      </p>

      <p
        style={{
          textAlign: 'center',
          fontSize: '1.2rem',
          marginBottom: '0',
        }}
      >
        Connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/andrew-schulman-806607289"
          target="_blank"
          rel="noreferrer"
          style={{
            color: '#FFD54F',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          LinkedIn
        </a>
      </p>
    </motion.section>
  );
}
