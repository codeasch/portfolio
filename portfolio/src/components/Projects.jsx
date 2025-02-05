import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "YapMaps - Unreal Engine Development",
    description: "Co-founder & Lead Developer | Games with 15M+ Players Worldwide",
    link: "#",
  },
  {
    title: "Game #2",
    description: "Another project I worked on...",
    link: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 text-center">
      <h2 className="text-4xl font-bold text-primary">Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 p-6 rounded-lg w-80 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <a href={project.link} className="mt-4 inline-block text-secondary hover:text-accent transition">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
