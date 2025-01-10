import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Specialties from './components/Specialties';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Navbar />
      <Hero />
      <Skills />
      <Specialties />
      <About />
      <Contact />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.div>
    </div>
  );
}

export default App;