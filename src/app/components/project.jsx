import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiOpenstreetmap } from "react-icons/si";

const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Define an array of project objects
  const projects = [
    {
      title: "DIM Connect Website",
      description:
        "Contributed to DIM Connect website development, facilitating communication and networking. Implemented UI features, authentication, and messaging functionality.",
      technologies: [<FaReact />, <SiTailwindcss />, <FaHtml5 />],
    },
    {
      title: "GIGA Fiber Application",
      description:
        "Contributed to frontend development of GIGA Fiber application, streamlining internet service provisioning and management. Developed interactive features and integrated with backend APIs.",
      technologies: [<FaReact />, <SiTailwindcss />, <FaHtml5 />, <FaNodeJs />],
    },
    {
      title: "Map-Based Weather Application",
      description:
        "Developed a map-based weather application allowing users to view weather information by clicking on any point on the map.",
      technologies: [<FaReact />, <SiTailwindcss />, <SiOpenstreetmap />],
    },
  ];

  return (
    <div className="h-full flex justify-center items-center py-6">
      <div className="max-w-5xl w-full mx-auto h-full">
        <div className="container mx-auto px-4 py-8 shadow-2xl rounded-lg  max-w-4xl h-full overflow-auto">
          <h2 className="text-3xl text-[#4c4c4c] font-bold text-center mb-12">
            Projects
          </h2>

          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden mb-12 hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl text-[#4c4c4c] font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-[#4c4c4c] mb-4">{project.description}</p>

                {/* Technology Icons */}
                <div className="flex items-center space-x-2 mb-4 text-[#4c4c4c] text-lg">
                  <span>Technologies Used:</span>
                  {project.technologies.map((icon, i) => (
                    <span key={i} className="text-2xl hover:text-blue-700">
                      {icon}
                    </span>
                  ))}
                </div>

                {/* Visit Site Button */}
                <button
                  className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    project.title === "DIM Connect Website" ? "invisible" : ""
                  }`}
                >
                  Visit Site
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
