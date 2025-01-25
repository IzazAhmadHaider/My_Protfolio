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
      <div className="items-center mx-auto flex justify-center h-screen">
        <div className="flex justify-between flex-col fixed overflow-y-scroll bg-gray-50 w-[90vw] items-center mx-auto h-[80vh] rounded-3xl shadow-sm">
          <section
            ref={(el) => (sectionsRef.current.home = el)}
            className={`h-[82vh] flex justify-center items-center transition-all w-[70%] max-md:w-full ${
              isSectionVisible("home") && "flipper "
            }`}
            id="home"
          >
            <Home1 setActiveSection={setActiveSection} />
          </section>
          <section
            ref={(el) => (sectionsRef.current.skills = el)}
            className={`h-full flex justify-center items-center transition-all w-[70%] max-md:w-full ${
              isSectionVisible("skills") && "flipper "
            }`}
            id="skills"
          >
            <Skills1 />
          </section>
          <section
            ref={(el) => (sectionsRef.current.projects = el)}
            className={`h-screen flex justify-center items-center transition-all w-[70%] max-md:w-full ${
              isSectionVisible("projects") && "flipper "
            }`}
            id="projects"
          >
            <Project />
          </section>
          <section
            ref={(el) => (sectionsRef.current.experience = el)}
            className={`h-[130vh] flex justify-center items-center transition-all w-[70%]  max-md:w-full ${
              isSectionVisible("experience") && "flipper "
            }`}
            id="experience"
          >
            <Experience />
          </section>
          <section
            ref={(el) => (sectionsRef.current.contacts = el)}
            className={`min-h-[120vh] flex justify-center items-center transition-all w-[70%] max-md:w-full ${
              isSectionVisible("contacts") && "flipper "
            }`}
            id="contacts"
          >
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
