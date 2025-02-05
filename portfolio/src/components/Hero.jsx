import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

function Hero() {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen px-6 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 flex flex-col items-center justify-center h-full w-full"
      >
        {/* Title */}
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 leading-tight">
            {!typingDone ? (
              <Typewriter
                words={["Hey, I'm Andrew"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={75}
                deleteSpeed={50}
                onTypingEnd={() => setTypingDone(true)}
              />
            ) : (
              "Hey, I'm Andrew"
            )}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Senior at VHHS | CEO of YapMaps | Curious Learner
        </motion.p>

        {/* Learn More Button */}
        <motion.div className="mt-8 flex justify-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-80}
            className="px-6 py-3 bg-purple-500 hover:bg-blue-500 transition text-white rounded-lg text-lg z-10 cursor-pointer"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 text-white text-3xl z-10 cursor-pointer"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          <FiArrowDown />
        </Link>
      </motion.div>

      {/* Moving Background Dots (Bubble Moved Up by 20px) */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-3xl top-[60px] left-10"
        animate={{ x: [0, 5, -5, 0], y: [0, -5, 5, 0], scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl bottom-[60px] right-10"
        animate={{ x: [0, -5, 5, 0], y: [0, 5, -5, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
  );
}

export default Hero;
