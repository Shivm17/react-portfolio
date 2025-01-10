import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Figma,
  Box,
  TabletSmartphone,
} from "lucide-react";
const specialties = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Web Design",
    description: "Creating beautiful, responsive interfaces",
  },
  {
    icon: <Figma className="w-8 h-8" />,
    title: "Figma",
    description: "UI/UX design and prototyping",
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend",
    description: "Building modern web applications",
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Backend",
    description: "Developing robust server solutions",
  },
  {
    icon: (
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path
          fill="currentColor"
          d="M18.036.131C9.271-.989 1.255 5.198.131 13.964c-1.12 8.765 5.067 16.781 13.833 17.905c8.765 1.12 16.781-5.067 17.9-13.833C32.989 9.271 26.803 1.255 18.036.131zm3.292 9.984c-.297 0-.579.12-.787.333l-5.937 5.932l-.411-.407l-.855-.859c5.849-5.833 6.907-5.891 7.989-5zm-6.479 6.478l5.916-5.921a.831.831 0 0 1 1.204.005a.825.825 0 0 1-.073 1.197l-6.265 5.5zm.438.928l-1.469.317a.085.085 0 0 1-.088-.047a.08.08 0 0 1 .016-.095l.859-.859zm-3.74-.614l1.568-1.563l1.172 1.172l-2.641.567a.1.1 0 0 1-.115-.052a.102.102 0 0 1 .016-.124zm-4.859 8.077c-.057-.005-.1-.057-.095-.109a.122.122 0 0 1 .032-.063h.005l1.26-1.26l1.631 1.631zm3.233-1.677a.313.313 0 0 0-.156.344l.271 1.152c.043.167-.161.28-.281.156H9.75l-1.635-1.636l5.016-5.011l2.427-.525l1.161 1.167c-1.672 1.468-3.959 2.932-6.797 4.353zm7.038-4.567l-1.12-1.12l6.265-5.5c.057-.052.109-.109.156-.167c-.192 1.792-2.703 4.323-5.301 6.787zm4.88-8.615h-.005c-2.183-2.193.901-5.563 3.276-3.584l-2.145 2.152a.161.161 0 0 0 0 .228l1.661 1.663a2.418 2.418 0 0 1-2.787-.459zm3.432 0a2.136 2.136 0 0 1-.359.291l-1.609-1.609l2.041-2.047a2.428 2.428 0 0 1-.073 3.365zm-.131-2.057a.19.19 0 0 0-.072.208a.548.548 0 0 1-.068.599a.185.185 0 0 0 .031.265a.198.198 0 0 0 .109.037c.057 0 .111-.021.141-.063a.931.931 0 0 0 .12-1.005a.185.185 0 0 0-.261-.041z"
        ></path>
      </svg>
    ),
    title: "Postman",
    description: "Testing And Making Api using postman",
  },
  {
    icon: <Box className="w-8 h-8" />,
    title: "3d Website",
    description:
      "Developing 3d websites using gsap and react three fiber and three js",
  },
  {
    icon: <TabletSmartphone className="w-8 h-8" />,
    title: "testing",
    description: "Testing The and QA porject  ",
  },
];

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 px-4 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">What I Do Best</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="mb-4 text-blue-400">{specialty.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
              <p className="text-gray-400">{specialty.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
