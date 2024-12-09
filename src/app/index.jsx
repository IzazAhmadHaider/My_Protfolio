"use client";
// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Analytics } from '@vercel/analytics/next';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

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

  return (
    <>
    <div className="h-auto">
    <div
      className={`${
        showNavbar
          ? "bg-white w-[50%] h-[60px] left-[25%] right-[25%] mt-4 rounded-full  fixed"
          : "hidden"
      } `}
    >
      <nav className="flex justify-between items-center text-black saira-condensed-regular font-semibold mx-3">
        <ScrollLink to="home" smooth={true} duration={500}>
          Home
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          Skills
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          Projects
        </ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>
          Experience
        </ScrollLink>
        <ScrollLink to="contacts" smooth={true} duration={500}>
          Contacts
        </ScrollLink>
      </nav>
   
    </div>
    </div>
    </>
  );
};

export default Home;
