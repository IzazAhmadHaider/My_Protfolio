import "../globals.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function SkillCard({ title, description, image }) {
  return (
    <div className="w-60 min-h-[50vh] z-50 group rounded-xl shadow-lg flex flex-col justify-between bg-[#d9dcde] p-4 transition-all duration-1000 transform hover:scale-[0.95]">
      <img className="w-16 mx-auto mb-2 grayscale group-hover:grayscale-0" src={image} alt={title} />
      <div className="text-center flex-grow">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-[#4c4c4c] text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const skillsdata = {
    html: {
      title: "HTML",
      description:
        "Proficient in HTML, I've crafted dynamic web pages with semantic layouts and seamless multimedia integration.",
      image: "/html.svg",
    },
    css: {
      title: "CSS",
      description:
        "Mastery in CSS allows me to design captivating interfaces with fluid layouts and visually appealing styles.",
      image: "/css.svg",
    },
    javascript: {
      title: "JavaScript",
      description:
        "With JavaScript proficiency, I build interactive and dynamic web applications, enriching user experiences.",
      image: "/javascript.svg",
    },
    react: {
      title: "ReactJS",
      description:
        "With ReactJS expertise, I develop powerful and scalable front-end applications, leveraging its component-based architecture.",
      image: "/react.svg",
    },
    nextjs: {
      title: "Next.js",
      description:
        "As a proficient Next.js developer, I leverage its powerful features to build fast, server-rendered React applications.",
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
        "Skilled in React Native, I create cross-platform mobile applications that deliver a native experience.",
      image: "/react.svg",
    },
  };

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <div className="overflow-auto h-full p-4">
      <svg
        id="progress"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="fixed bottom-4 right-4"
      >
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-gray-300 stroke-[6px] fill-none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="stroke-[#903fff] stroke-[4px] fill-none"
          style={{
            pathLength: scrollXProgress,
            transformOrigin: "center",
          }}
        />
      </svg>


      <h1 className="text-2xl text-[#4c4c4c] font-bold text-center mb-4">Skills</h1>
      <div
        ref={ref}
        className="flex space-x-4 h-full overflow-x-scroll snap-x snap-mandatory"
      >
        {Object.values(skillsdata).map((skill, index) => (
          <div key={index} className="snap-center">
            <SkillCard {...skill} />
          </div>
        ))}
      </div>
    </div>
  );
}
