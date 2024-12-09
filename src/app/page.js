"use client";
import React, { useEffect, useState, useRef } from "react";
import { Analytics } from '@vercel/analytics/next';
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
        <CursorFollower/>
        <Fixedlayout onSectionChange={handleSectionChange} />
        <Analytics />
        
      </div>
      <div className="items-center mx-auto flex justify-center h-screen">
        <div className="flex justify-between flex-row-reverse bg-gray-50 w-[90vw] items-center mx-auto h-[80vh] rounded-3xl shadow-sm">
          {isSectionVisible("home") && (
            <section
              ref={(el) => (sectionsRef.current.home = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] max-md:w-full ${
                isSectionVisible("home") && "flipper "
              }`}
              id="home"
            >
              <Home1 setActiveSection={setActiveSection} />
            </section>
          )}
          {isSectionVisible("skills") && (
            <section
              ref={(el) => (sectionsRef.current.skills = el)}
              className={`h-full flex justify-center items-center transition-all w-[70%] max-md:w-full ${
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
              className={`h-full flex justify-center items-center transition-all w-[70%] max-md:w-full ${
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
              className={`h-full flex justify-center items-center transition-all w-[70%]  max-md:w-full ${
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
              className={`h-full flex justify-center items-center transition-all w-[70%] max-md:w-full ${
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
