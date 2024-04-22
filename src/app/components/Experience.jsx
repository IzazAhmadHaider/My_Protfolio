import React from 'react';

function Experience() {
  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-yellow-400 to-orange-400 min-h-screen px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-4xl font-bold text-[#219ebc]">My Experience</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-6">



          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 w-40 rounded-xl  text-white">web Developer</h2>
            <p className="text-black ">React / web Developer</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Developed and maintained web applications using JavaScript, React, and Node.js.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 w-40 rounded-xl text-white">software testing</h2>
            <p className="text-black">Start testing /creating </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>The function of good software is to make the complex appear to be simple”.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 w-40 rounded-xl  text-white">Coding</h2>
            <p className="text-black te">Full Stack Developer</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Code should run as fast as necessary, but no faster; something important is always traded away to increase speed.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Experience;
