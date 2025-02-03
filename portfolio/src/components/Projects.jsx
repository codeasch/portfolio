// src/components/Projects.jsx
import React from 'react';

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>YapMaps: Unreal Engine Game Development</h3>
          <p>
            As the co-founder of YapMaps, I have developed multiple games in Unreal Engine, 
            reaching over 15 million players. These projects involve complex gameplay mechanics, 
            multiplayer systems, immersive environments, and marketing campaigns.
          </p>
          <img
            src="/Logos/YapMapsLogo.jpg"
            alt="YapMaps Project"
            className="project-image"
          />
        </div>

        <div className="project-card">
          <h3>AI Recipe Creator</h3>
          <p>
            Learned to use OpenAI’s API to create an AI-based Recipe creator that 
            turns a variety of ingredients into a full written recipe anyone can cook.
          </p>
          <img
            src="/Projects/blank-recipe-book-different-ingredients.png"
            alt="Project Image"
            className="project-image"
          />
        </div>
      </div>
    </section>
  );
}
