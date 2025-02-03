// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import YapMapsLogo from '../assets/Logos/YapMapsLogo.jpg';
import CookingProject from '../assets/Projects/blank-recipe-book-different-ingredients-600nw-2009453615.png';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
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
        maxWidth: '1000px',
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
        Projects
      </h2>

      {/* Container for project cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: '#2e2a3f',
            padding: '2rem 1rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '300px',
            margin: '0 auto',
            color: '#fafafa',
          }}
        >
          <h3
            style={{
              color: '#ffa726',
              fontSize: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            YapMaps: Unreal Engine Game Development
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#cccccc',
              marginBottom: '1rem',
              lineHeight: '1.6',
            }}
          >
            As the co-founder of YapMaps, I have developed multiple games in Unreal Engine,
            reaching over 15 million players. These projects involve complex gameplay mechanics,
            multiplayer systems, immersive environments, and marketing campaigns.
          </p>
          <img
            src={YapMapsLogo}
            alt="YapMaps Project"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0.75rem',
            }}
          />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          style={{
            backgroundColor: '#2e2a3f',
            padding: '2rem 1rem',
            borderRadius: '1rem',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '300px',
            margin: '0 auto',
            color: '#fafafa',
          }}
        >
          <h3
            style={{
              color: '#ffa726',
              fontSize: '1.5rem',
              marginBottom: '1rem',
            }}
          >
            AI Recipe Creator
          </h3>
          <p
            style={{
              fontSize: '1rem',
              color: '#cccccc',
              marginBottom: '1rem',
              lineHeight: '1.6',
            }}
          >
            Learned to use OpenAI’s API to create an AI-based Recipe creator that
            turns a variety of ingredients into a full written recipe anyone can cook.
          </p>
          <img
            src={CookingProject}
            alt="Project Image"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0.75rem',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
