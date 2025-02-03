// src/Footer.jsx (you can also place this in src/components if you prefer)
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p>
        <a
          href="https://www.linkedin.com/in/andrew-schulman-806607289"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Logos/LinkedIn_logo_initials.png" alt="LinkedIn" />
          LinkedIn
        </a>
        {' '}| © 2024 Andrew Schulman
      </p>
    </footer>
  );
}
