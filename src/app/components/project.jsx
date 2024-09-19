import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Define an array of project objects
  const projects = [
    {
      title: "DIM Connect Website",
      description: "Contributed to DIM Connect website development, facilitating communication and networking. Implemented UI features, authentication, and messaging functionality.",
      technologies: "Technologies Used: React.js, Tailwind CSS, HTML."
    },
    {
      title: "GIGA Fiber Application",
      description: "Contributed to frontend development of GIGA Fiber application, streamlining internet service provisioning and management. Developed interactive features and integrated with backend APIs.",
      technologies: "Technologies Used: React.js, Tailwind CSS, HTML, REST APIs."
    },
    {
      title: "Map-Based Weather Application",
      description: "Developed a map-based weather application allowing users to view weather information by clicking on any point on the map.",
      technologies: "Technologies Used: React.js, Tailwind CSS, MapLibre, Open-source Weather API."
    }
  ];

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-400 to-orange-400 min-h-screen p-10">
      <div className="bg-transparent py-12 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl text-[#4c4c4c] md:text-4xl lg:text-5xl font-bold text-center mb-12">Projects</h2>

        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
            <div className="p-6">
              <h3 className="text-xl text-black md:text-2xl lg:text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <p className="text-gray-700">{project.technologies}</p>

              <button className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${project.title=="DIM Connect Website" ? "invisible" : ""}`}>
                Visit Site
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
