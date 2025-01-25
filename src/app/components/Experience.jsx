import React from 'react';

const experiences = [
  {
    role: 'Software Engineer at MetaFront LLP',
    position: 'Full Stack Developer',
    description: [
      'Developed full-stack applications using Node.js for the backend and React for the frontend.',
      'Managed database design and integration using MongoDB and ensured data integrity.',
      'Optimized application performance and reduced server response time by 20%.',
      'Worked closely with the product team to identify requirements and deliver features on time.',
      'Implemented caching and other performance optimization techniques to enhance scalability.',
    ],
  },
  {
    role: 'Junior Software Engineer at MetaFront LLP',
    position: 'Full Stack Developer',
    description: [
      'Developed full-stack applications using Node.js for the backend and React for the frontend.',
      'Managed database design and integration using MongoDB and ensured data integrity.',
      'Optimized application performance and reduced server response time by 20%.',
      'Worked closely with the product team to identify requirements and deliver features on time.',
      'Implemented caching and other performance optimization techniques to enhance scalability.',
    ],
  },

  {
    role: 'Associate Web Developer at MetaFront LLP',
    position: 'React / Tailwind Developer',
    description: [
      'Led the development of multiple client-facing projects using React and Tailwind CSS.',
      'Implemented dynamic, responsive web components to improve user interaction and experience.',
      'Optimized web applications for better performance and cross-browser compatibility.',
      'Collaborated with backend teams to integrate APIs and manage data handling in the frontend.',
      'Ensured the applications followed best practices in security, scalability, and accessibility.',
    ],
  },
  {
    role: 'Intern At HiWIFI',
    position: 'React / Web Developer',
    description: [
      'Developed and maintained web applications using JavaScript, React, and Tailwind.',
      'Collaborated with senior developers to fix bugs and improve code efficiency.',
      'Assisted in integrating RESTful APIs to fetch and display data on the frontend.',
      'Participated in daily standups, contributing to agile development processes.',
      'Worked on building responsive and accessible user interfaces across various devices.',
    ],
  },
];

function Experience() {
  return (
    <div className="flex items-center h-full justify-center bg-[#f9f9f9] py-4">
      <div className="max-w-4xl w-full mx-auto ">
        {/* Sticky title section */}
        <div className="top-0 bg-[#f9f9f9] z-10 pb-4">
          <h1 className="text-4xl font-bold text-[#4c4c4c] text-center">The Teams I've Been a Part Of</h1>
        </div>

        {/* Scrollable content */}
        <div className="h-[calc(100%-4rem)] overflow-auto">
          <div className="flex gap-6">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className="bg-white min-w-[280px] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <h2 className="text-lg font-semibold text-center bg-[#4c4c4c] min-h-[13%] m-auto text-white rounded-lg px-4 py-2 mx-auto mb-4">
                  {experience.role}
                </h2>
                <p className="text-[#4c4c4c] text-center font-medium h-12">{experience.position}</p>
                <ul className="list-disc list-inside text-[#4c4c4c] space-y-2 mt-4">
                  {experience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
