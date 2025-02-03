// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        /* Dark minimal gradient (purple -> deeper purple) */
        background: 'linear-gradient(90deg, #120e1b 0%, #3e0742 100%)',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Left side: Name/Logo */}
      <h1
        style={{
          fontSize: '2rem',
          margin: 0,
          fontWeight: 700,
          color: '#FFD54F', // Gold accent
          letterSpacing: '1px',
          userSelect: 'none',
        }}
      >
        Andrew Schulman
      </h1>

      {/* Right side: Nav */}
      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2rem',
            margin: 0,
            padding: 0,
          }}
        >
          {[
            { label: 'About Me', href: '#about' },
            { label: 'Projects', href: '#projects' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experience' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                aria-label={link.label}
                style={{
                  color: '#fafafa',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '0.25rem 0',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#FFD54F')}
                onMouseLeave={(e) => (e.target.style.color = '#fafafa')}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
