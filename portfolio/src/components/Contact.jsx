import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-primary">Get in Touch</h2>
      <p className="text-gray-400 mt-4">Reach out to me via email or connect on LinkedIn.</p>
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://linkedin.com/in/andrew-schulman" target="_blank" className="hover:text-secondary transition">LinkedIn</a>
        <a href="https://github.com/yourgithub" target="_blank" className="hover:text-accent transition">GitHub</a>
        <a href="mailto:andrew@yapmaps.com" className="hover:text-secondary transition">Email Me</a>
      </div>
    </section>
  );
}

export default Contact;
