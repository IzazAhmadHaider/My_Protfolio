import React from 'react';

function Experience() {
  return (
    <div className="flex items-center justify-center h-[90%] overflow-auto px-10 py-5">
      <div className="max-w-5xl mx-auto h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#4c4c4c] pb-10">My Experience</h1>
        </div>
        <div className="flex flex-col flex-wrap justify-center gap-2">



          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 rounded-xl  px-2 text-white w-fit">Intern At HiWIFI</h2>
            <p className="text-black ">React / web Developer</p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Developed and maintained web applications using JavaScript, React and tailwind</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 w-fit rounded-xl px-2 text-white">Associate Web Develpor at MetaFront LLP</h2>
            <p className="text-black">React/Tailwind </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Built Responsive Web Applications Using React/Tailwind.</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex-1 min-w-300px">
            <h2 className="text-xl text-center bg-red-600 w-fit rounded-xl px-2 text-white">Junior Software Engineer At MetaFront LLP</h2>
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
