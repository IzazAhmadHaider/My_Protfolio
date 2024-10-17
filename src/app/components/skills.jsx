import React from "react";

function SkillCard({ title, description, image }) {
  return (
    <div className="w-60 h-64 group rounded-xl shadow-lg flex flex-col justify-between overflow-hidden bg-[#d9dcde] p-4 transition-transform transform hover:scale-105">
      <img className="w-16 mx-auto mb-2 grayscale group-hover:grayscale-0" src={image} alt={title} />
      <div className="text-center flex-grow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-[#4c4c4c] text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
}

function Skills1() {
  const skillsdata = {
    html: {
      title: "HTML",
      description:
        "Proficient in HTML, I've crafted dynamic web pages with semantic layouts and seamless multimedia integration. Leveraging my experience, I optimize code efficiency and ensure cross-browser compatibility, delivering polished user-centric solutions.",
      image: "/html.svg",
    },
    css: {
      title: "CSS",
      description:
        "Mastery in CSS allows me to design captivating interfaces with fluid layouts and visually appealing styles. Utilizing my expertise, I ensure consistency and responsiveness across diverse platforms, enhancing user engagement.",
      image: "/css.svg",
    },
    javascript: {
      title: "JavaScript",
      description:
        "With JavaScript proficiency, I build interactive and dynamic web applications, enriching user experiences through seamless functionality and engaging features.",
      image: "/javascript.svg",
    },
    react: {
      title: "ReactJS",
      description:
        "With ReactJS expertise, I develop powerful and scalable front-end applications, leveraging its component-based architecture for modular and efficient code.",
      image: "/react.svg",
    },
    nextjs: {
      title: "Next.js",
      description:
        "As a proficient Next.js developer, I leverage its powerful features to build fast, server-rendered React applications with ease.",
      image: "/nextjs.svg",
    },
    astro: {
      title: "Astro",
      description:
        "With Astro proficiency, I craft modern websites that prioritize performance and developer experience.",
      image: "/astro.svg",
    },
    reactNative: {
      title: "React Native",
      description:
        "Skilled in React Native, I create cross-platform mobile applications that deliver a native experience on both iOS and Android. My focus is on optimizing performance and ensuring a seamless user interface.",
      image: "/react.svg",
    },
  };

  return (
    <div className="overflow-auto h-full p-4">
      <h1 className="text-2xl text-[#4c4c4c] font-bold text-center mb-4">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.values(skillsdata).map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills1;
