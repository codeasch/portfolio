import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 
        className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-radial"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Hey, I'm Your Name
      </motion.h1>
      <p className="text-lg text-gray-400 mt-4">A Web Developer passionate about UI/UX & animations.</p>
      <motion.button 
        className="mt-6 px-6 py-3 bg-primary hover:bg-secondary transition text-white rounded-lg"
        whileHover={{ scale: 1.1 }}
      >
        View Projects
      </motion.button>
    </section>
  );
}

export default Hero;
