import React from "react";
import { Carousel } from '@mantine/carousel';


function SkillCard({ title, description, image, percentage }) {
  return (
    <div className="max-w-[200px] rounded-xl shadow-2xl h-[200px] flex flex-col justify-between overflow-hidden bg-[#d9dcde] p-2">
      <img className="w-8 mx-auto mb-1 grayscale" src={image} alt={title} />
      <div className="text-center">
        <h2 className="text-sm font-bold mb-1">{title}</h2>
        <p className="text-[#4c4c4c] text-[10px] leading-tight text-left">{description}</p>
      </div>
    </div>
  );
}

function Skills1() {
  const skillsdata = {
    html: {
      title: "HTML",
      description:
        "Proficient in HTML, I've crafted dynamic web pages with semantic layouts and seamless multimedia integration. Leveraging my experience, I optimize code efficiency and ensure cross-browser compatibility, delivering polished user-centric solutions. HTML isn't just a language; it's my tool to shape captivating digital experiences.",
      image: "/html.svg",
      percentage: "95%",
    },
    css: {
      title: "CSS",
      description:
        "Mastery in CSS allows me to design captivating interfaces with fluid layouts and visually appealing styles. Utilizing my expertise, I ensure consistency and responsiveness across diverse platforms, enhancing user engagement. CSS isn't just about aesthetics; it's my medium for crafting immersive and memorable web experiences.",
      image: "/css.svg",
      percentage: "90%",
    },
    javascript: {
      title: "JavaScript",
      description:
        "With JavaScript proficiency, I build interactive and dynamic web applications, enriching user experiences through seamless functionality and engaging features. Leveraging my expertise, I implement efficient algorithms and modern frameworks to create scalable solutions tailored to user needs. JavaScript isn't just a language; it's my gateway to crafting innovative and responsive digital experiences.",
      image: "/javascript.svg",
      percentage: "80%",
    },
    react: {
      title: "ReactJS",
      description:
        "With ReactJS expertise, I develop powerful and scalable front-end applications, leveraging its component-based architecture for modular and efficient code. Harnessing React's ecosystem and state management, I create dynamic user interfaces with seamless data integration and performance optimization",
      image: "/react.svg",
      percentage: "80%",
    },
    nextjs: {
      title: "Next.js",
      description:
        "As a proficient Next.js developer, I leverage its powerful features to build fast, server-rendered React applications with ease. By harnessing Next.js's dynamic routing and built-in API routes, I create seamless and optimized user experiences",
      image: "/nextjs.svg",
      percentage: "75%",
    },
    astro: {
      title: "Astro",
      description:
        "With Astro proficiency, I craft modern websites that prioritize performance and developer experience. By leveraging its innovative approach of building sites using a unified architecture, I create fast-loading and SEO-friendly web applications.",
      image: "/astro.svg",
      percentage: "75%",
    },
  };

  return (
    <>
    <div className=" overflow-auto h-[90%]">
    <p className="text-xl text-[#4c4c4c]  font-bold text-center ">Skills</p>
    <div className="grid grid-cols-1 md:grid-cols-2  gap-4 p-8 place-items-center ">
      {Object.values(skillsdata).map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>
    </div>
    </>
  );
}

export default Skills1;
