// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  const skills = [
    'Unreal Engine',
    'Verse',
    'Python',
    'Marketing',
    'Collaboration',
    'Photoshop',
  ];

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background:
          'linear-gradient(135deg, rgba(94, 53, 177, 0.9) 0%, rgba(63, 81, 181, 0.9) 50%, rgba(255, 87, 34, 0.9) 100%)',
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
          color: '#FFD54F',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Skills
      </h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem',
          listStyle: 'none',
          padding: 0,
          margin: 0,
          textAlign: 'center',
        }}
      >
        {skills.map((skill, idx) => (
          <motion.li
            key={idx}
            variants={skillItemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150 }}
            style={{
              backgroundColor: '#3f51b5', // blue accent
              color: '#fff',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              fontWeight: 700,
              cursor: 'default',
            }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
