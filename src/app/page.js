"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import Fixedlayout from "./components/Fixedlayout";
import Home1 from "./components/home";
import Skills1 from "./components/skills";
import Project from "./components/project";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { navSections, personalInfo } from "./data/portfolioData";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const sectionIds = useMemo(() => navSections.map((section) => section.id), []);
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
    );

    sectionIds.forEach((id) => {
      const section = sectionsRef.current[id];
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  const handleSectionChange = (sectionId) => {
    const section = sectionsRef.current[sectionId];
    if (!section) return;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Fixedlayout onSectionChange={handleSectionChange} activeSectionprop={activeSection} />
      <Analytics />

      <main id="main">
      <div ref={(el) => (sectionsRef.current.home = el)} id="home">
        <Home1 onNavigate={handleSectionChange} />
      </div>
      <div ref={(el) => (sectionsRef.current.skills = el)} id="skills">
        <Skills1 />
      </div>
      <div ref={(el) => (sectionsRef.current.projects = el)} id="projects">
        <Project />
      </div>
      <div ref={(el) => (sectionsRef.current.experience = el)} id="experience">
        <Experience />
      </div>
      <div ref={(el) => (sectionsRef.current.education = el)} id="education">
        <Education />
      </div>
      <div ref={(el) => (sectionsRef.current.contacts = el)} id="contacts">
        <Contact />
      </div>
      </main>

      <footer className="border-t border-neutral-200 px-4 py-8 dark:border-neutral-800 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 text-sm text-neutral-500 dark:text-neutral-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & Tailwind CSS.
          </p>
          <button
            type="button"
            onClick={() => handleSectionChange("home")}
            className="self-start underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-900 dark:decoration-neutral-700 dark:hover:text-neutral-100 sm:self-auto"
          >
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}
