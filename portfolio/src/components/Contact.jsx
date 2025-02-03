// src/components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        You can reach me at <a href="mailto:andrew@yapmaps.com">andrew@yapmaps.com</a>
      </p>
      <p>
        Connect with me on {' '}
        <a
          href="https://www.linkedin.com/in/andrew-schulman-806607289"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}
