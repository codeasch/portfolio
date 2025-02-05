import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTiktok, FaXTwitter } from "react-icons/fa6"; // ✅ Updated X logo & TikTok icon

function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md shadow-lg py-4 px-6 flex justify-between items-center z-50"
    >
      {/* Logo / Branding */}
      <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
        Andrew Schulman
      </h1>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-6 ml-auto mr-8">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-gray-300 hover:text-purple-400 transition cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-gray-300 hover:text-purple-400 transition cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-gray-300 hover:text-purple-400 transition cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-gray-300 hover:text-purple-400 transition cursor-pointer"
        >
          Contact
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-4">
        <a
          href="https://github.com/codeasch"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-gray-500"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-schulman-806607289/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-blue-600"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://x.com/yapmapsfnc"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-white"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="https://instagram.com/yapmaps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-pink-500"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@yapmaps"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 transition hover:text-red-500"
        >
          <FaTiktok size={24} />
        </a>
      </div>
    </motion.nav>
  );
}

export default Navbar;
