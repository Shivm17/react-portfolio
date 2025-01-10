import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center pt-16"
      >
        <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-white">
          Shivam Darbar
        </h1>
        <p className="text-2xl mb-8 text-gray-300">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://github.com/Shivm17"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-black hover:text-white"
          >
            <Github className="w-6 h-6 " />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="https://www.linkedin.com/in/shivm-darbar-a7b084313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/10 hover:bg-blue-500 hover:text-white "
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
