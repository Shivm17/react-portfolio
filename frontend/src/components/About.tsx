import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm p-8 rounded-xl"
        >
          <p className="text-lg leading-relaxed text-center text-gray-300">
            I am a passionate Full Stack Developer with expertise in both
            front-end and back-end technologies. My journey in web development
            has equipped me with a deep understanding of modern technologies and
            best practices. I am dedicated to creating seamless user experiences
            and building robust server-side solutions.
          </p>
          <div className="mt-10 m-4 pt-10 ">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  July 2024
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  FotonVR
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Started working as a Full Stack Developer in the fotonvr, its
                  base on VR(virutal reality) , provides the best eduction
                  through VR
                </p>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  March 2024
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  MSC(CA&IT)
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Complete my bachelor degree in computer application and
                  information technologies from the HNGU patan, gujrat
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-300">
                  April 2021
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Pioneer School of Science
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Completes 12th from Pioneer School of Science
                </p>
              </li>
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
