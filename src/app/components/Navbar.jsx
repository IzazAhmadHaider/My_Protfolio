// components/navbar.js
"use client"
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Experience from './components/experience/page'
import Home1 from './components/home/page';

const Navbar = () => {
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
    <div
      className={`${
        showNavbar
          ? "bg-white w-[50%] h-[60px] left-[25%] right-[25%] mt-4 rounded-full  fixed"
          : "hidden"
      } `}
    >
      <div className="flex justify-between items-center text-black font-serif font-semibold mx-3">
        <ScrollLink to="home" smooth={true} duration={500}>  Home </ScrollLink>
        <ScrollLink to="skill" smooth={true} duration={500}>  Skills </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>  Projects </ScrollLink>
        <ScrollLink to="experience" smooth={true} duration={500}>  Experience </ScrollLink>
        <ScrollLink to="contacts" smooth={true} duration={500}>  Contacts </ScrollLink>
      </div>
    </div>
    <Home1/>
    <Experience/>
    </>
  );
};

export default Navbar;
