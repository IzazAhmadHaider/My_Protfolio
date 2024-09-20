"use client";
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Home1 from "./components/home";
import Skills1 from "./components/skills";
import Project from "./components/project";
import "./global.scss";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Image from "next/image";
import Fixedlayout from "./components/Fixedlayout";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldShowNavbar = scrollY > 10;
      setShowNavbar(shouldShowNavbar);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/code.with.izaz/";
  };
  const redirectToTwitter = () => {
    window.location.href = "https://twitter.com/IzazAhm99546481";
  };
  const redirectToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/profile.php?id=100080270784104";
  };
  const redirectToLinkdin = () => {
    window.location.href = "https://www.linkedin.com/in/izaz-ahmad-035a721a3/";
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#fff]">
      <div className="absolute">
        <Fixedlayout />
      </div>
      <div className=" items-center mx-auto flex justify-center h-screen">
        <div className="flex justify-between bg-gray-50 w-[90vw] items-center mx-auto h-[80vh] rounded-3xl shadow-sm">
          <section className="" id="home">
            <Home1 scrollToSection={scrollToSection} />
          </section>
          <section className="hidden" id="skills">
            <Skills1 />
          </section>
          <section className="hidden" id="projects">
            <Project />
          </section>
          <section className="hidden" id="experience">
            <Experience />
          </section>
          <section className="hidden" id="contacts">
            <Contact />
          </section>
          <div className="z-50 max-md:hidden">
            <div
              className="flex-grow glitch bg-transparent border rounded-3xl flex items-center justify-center"
              style={{
                backgroundImage:
                  "url(/mypic.png)",
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
