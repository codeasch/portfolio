// src/components/Header.jsx
import React from 'react';

export default function Header() {
  return (
    <header>
      <h1>Andrew Schulman</h1>
      <nav>
        <ul>
          <li><a href="#about" aria-label="About Me">About Me</a></li>
          <li><a href="#projects" aria-label="Projects">Projects</a></li>
          <li><a href="#skills" aria-label="Skills">Skills</a></li>
          <li><a href="#experience" aria-label="Experience">Experience</a></li>
          <li><a href="#contact" aria-label="Contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
