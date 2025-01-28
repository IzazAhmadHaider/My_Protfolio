"use client";
import React, { useEffect, useState, useRef } from "react";
import { Analytics } from "@vercel/analytics/next";
import Home1 from "./components/home";
import Skills1 from "./components/skills";
import Project from "./components/project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Image from "next/image";
import Fixedlayout from "./components/Fixedlayout";
import "./global.scss";
import "./globals.css";
import CursorFollower from "./components/Cursor";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [timing, setTiming] = useState(true);
  const sectionsRef = useRef({});
  setTimeout(() => {
    setTiming(false);
  }, 2000);

  const isSectionVisible = (sectionId) => activeSection === sectionId;
  const handleSectionChange = (section) => {
    setActiveSection(section);
    const sectionElement = sectionsRef.current[section];
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="bg-[#fff]">
      {timing && (
        <div className="flex absolute z-[99]">
          <div className="h-screen w-[50vw] bg-black z-50 animate-left"></div>
          <div className="h-screen w-[50vw] bg-black z-50 animate-right"></div>
          <div className="h-[70vh] w-[5px] bg-gray-50 absolute z-100 animate-top"></div>
        </div>
      )}

      <div className="absolute z-10">
        <CursorFollower />
        <Fixedlayout
          onSectionChange={handleSectionChange}
          activeSectionprop={activeSection}
        />
        <Analytics />
      </div>

      <div
        ref={(el) => (sectionsRef.current.home = el)}
        className={`blockEle flex justify-center items-center transition-all  max-md:w-full `}
        id="home"
      >
        <Home1 setActiveSection={setActiveSection} />
      </div>
      <div
        ref={(el) => (sectionsRef.current.skills = el)}
        className={`blockEle flex justify-center items-center transition-all  max-md:w-full `}
        id="skills"
      >
        <Skills1 />
      </div>
      <div
        ref={(el) => (sectionsRef.current.projects = el)}
        className={`blockEle flex justify-center items-center transition-all  max-md:w-full `}
        id="projects"
      >
        <Project />
      </div>
      <div
        ref={(el) => (sectionsRef.current.experience = el)}
        className={`blockEle flex justify-center items-center transition-all   max-md:w-full `}
        id="experience"
      >
        <Experience />
      </div>
      <div
        ref={(el) => (sectionsRef.current.contacts = el)}
        className={`blockEle flex justify-center items-center transition-all  max-md:w-full `}
        id="contacts"
      >
        <Contact />
      </div>
    </div>
    </>
  );
};

export default Home;
