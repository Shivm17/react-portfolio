import React, { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Specialties from "./components/Specialties";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const { scrollYProgress } = useScroll();
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // Check if user is near bottom (within 100px)
      setIsBottom(scrollTop + windowHeight > documentHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPosition = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

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
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer bg-white/5 backdrop-blur-sm rounded-full p-2 hover:bg-gradient-to-r from-blue-400 to-blue-600 transition-colors"
        onClick={scrollToPosition}
      >
        {isBottom ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
      </motion.div>
    </div>
  );
}

export default App;
