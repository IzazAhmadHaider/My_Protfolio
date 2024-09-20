"use client";
import React, { useEffect, useState, useRef } from "react";
import Home1 from "./components/home";
import Skills1 from "./components/skills";
import Project from "./components/project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Image from "next/image";
import Fixedlayout from "./components/Fixedlayout";
import "./global.scss";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home"); // Manage active section
  const sectionsRef = useRef({}); // Store references to all sections



  const isSectionVisible = (sectionId) => activeSection === sectionId;
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="bg-[#fff]">
      <div className="absolute">
        <Fixedlayout onSectionChange={handleSectionChange} />
      </div>
      <div className="items-center mx-auto flex justify-center h-screen">
        <div className="flex justify-between flex-row-reverse bg-gray-50 w-[90vw] items-center mx-auto h-[80vh] rounded-3xl shadow-sm">
          {isSectionVisible("home") && (
            <section
              ref={(el) => (sectionsRef.current.home = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] ${
                isSectionVisible("home") && "flipper "
              }`}
              id="home"
            >
              <Home1 />
            </section>
          )}
          {isSectionVisible("skills") && (
            <section
              ref={(el) => (sectionsRef.current.skills = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] ${
                isSectionVisible("skills") && "flipper "
              }`}
              id="skills"
            >
              <Skills1 />
            </section>
          )}
          {isSectionVisible("projects") && (
            <section
              ref={(el) => (sectionsRef.current.projects = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] ${
                isSectionVisible("projects") && "flipper "
              }`}
              id="projects"
            >
              <Project />
            </section>
          )}
          {isSectionVisible("experience") && (
            <section
              ref={(el) => (sectionsRef.current.experience = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] ${
                isSectionVisible("experience") && "flipper "
              }`}
              id="experience"
            >
              <Experience />
            </section>
          )}
          {isSectionVisible("contacts") && (
            <section
              ref={(el) => (sectionsRef.current.contacts = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] ${
                isSectionVisible("contacts") && "flipper "
              }`}
              id="contacts"
            >
              <Contact />
            </section>
          )}
          <div className="z-50 w-[30%] h-[80%] max-md:hidden">
            <div
              className="flex-grow w-full h-full glitch bg-transparent border rounded-3xl flex items-center justify-center"
              style={{
                backgroundImage: "url(/mypic.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Image
                className="grayscale"
                src="/mypic.png"
                width={300}
                height={300}
                alt="My Picture"
              />

              <div className="channel r"></div>
              <div className="channel g"></div>
              <div className="channel b"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
