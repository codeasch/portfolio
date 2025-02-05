import { useState } from "react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md py-4 px-6 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold text-primary">My Portfolio</h1>
      <div className="space-x-6">
        <a href="#projects" className="hover:text-secondary transition">Projects</a>
        <a href="#contact" className="hover:text-accent transition">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
