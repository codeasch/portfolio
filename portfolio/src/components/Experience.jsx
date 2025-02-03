// src/components/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
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
          marginBottom: '1.5rem',
          color: '#FFD54F', // Gold accent
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Experience
      </h2>

      {/* Wrapper for experience items if you want more than one */}
      <div
        style={{
          display: 'grid',
          gap: '1.5rem',
        }}
      >
        {/* Single experience item */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            padding: '1.5rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          }}
        >
          <h3
            style={{
              color: '#ffa726', // Vibrant orange accent
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
            }}
          >
            Founder &amp; Lead Developer - YapMaps
          </h3>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#f0f0f0',
            }}
          >
            Running YapMaps has allowed me to develop games that have reached a global
            audience. My role includes game design, programming, project management,
            and marketing.
          </p>
        </motion.div>

        {/*
          Add more <motion.div> blocks here for additional experience items, if desired
        */}
      </div>
    </motion.section>
  );
}
