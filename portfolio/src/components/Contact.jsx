function Contact() {
    return (
      <section id="contact" className="py-20 text-center">
        <h2 className="text-4xl font-bold text-primary">Contact</h2>
        <p className="text-gray-400 mt-4">Feel free to reach out to me via email or social media.</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://linkedin.com" target="_blank" className="hover:text-secondary transition">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="hover:text-accent transition">GitHub</a>
          <a href="mailto:youremail@example.com" className="hover:text-secondary transition">Email Me</a>
        </div>
      </section>
    );
  }
  
  export default Contact;
  