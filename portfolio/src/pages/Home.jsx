import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      
      <div id="home">
        <Hero />
      </div>

      <div id="about" className="pt-20">
        <About />
      </div>

      <div id="projects" className="pt-20">
        <Projects />
      </div>

      <div id="contact" className="pt-20">
        <Contact />
      </div>
    </div>
  );
}

export default Home;
