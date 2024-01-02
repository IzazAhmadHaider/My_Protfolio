"use client";
// Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Home1 from "./components/home";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

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
  const redirectToInstagram = () => {
    window.location.href = 'https://www.instagram.com/code.with.izaz/';
  };
  const redirectToTwitter = () => {
    window.location.href = 'https://twitter.com/IzazAhm99546481';
  };
  const redirectToFacebook = () => {
    window.location.href = 'https://www.facebook.com/profile.php?id=100080270784104';
  };
  const redirectToLinkdin = () => {
    window.location.href = 'https://www.linkedin.com/in/izaz-ahmad-035a721a3/';
  };

  return (
    <div className="h-auto">
      <div className="bg-transparent flex items-center justify-between w-full fixed  ">
        <div className="flex items-center pt-3 pl-3">
          <div
            className="relative  w-7 h-7 bg-yellow-200 border-2 border-[#219ebc] custom-spin-animation rounded-full"
            style={{
              clipPath: "circle(90% at 0% 20%)",
            }}
          ></div>
          <img className="absolute w-6 pl-[3px] " src="mypic.png" alt="" />
          <p className="text-[#219ebc] text-lg font">&nbsp;&nbsp;Izaz Ahmad</p>
        </div>
        <div className="flex items-end pr-3 space-x-2">
          <IconBrandInstagram
          onClick={redirectToInstagram}
            color="#219ebc"
            size={20}
            className="hover:scale-110 cursor-pointer"
          />
          <IconBrandFacebook
          onClick={redirectToFacebook}
            color="#219ebc"
            size={20}
            className="hover:scale-110 cursor-pointer"
          />
          <IconBrandLinkedin
          onClick={redirectToLinkdin}
            color="#219ebc"
            size={20}
            className="hover:scale-110 cursor-pointer"
          />
          <IconBrandX
          onClick={redirectToTwitter}
            color="#219ebc"
            size={20}
            className="hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
      <div
        className={`${
          showNavbar
            ? "bg-transparent w-fit h-[60px] left-[35%] right-[35%] pt-[5px] pb-[20px] mt-4 rounded-full fixed text-[#219ebc]"
            : "hidden"
        }`}
      >
        <nav className="flex justify-center items-center space-x-3 font-serif font-semibold mx-3 z-0">
          <ScrollLink
            to="home"
            
            className="cursor-pointer hover:scale-110  "
            smooth={true}
            duration={500}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="skills"
            
            className="cursor-pointer hover:scale-110  "
            smooth={true}
            duration={500}
          >
            Skills
          </ScrollLink>
          <ScrollLink
            to="projects"
            
            className="cursor-pointer hover:scale-110  "
            smooth={true}
            duration={500}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="experience"
            
            className="cursor-pointer hover:scale-110  "
            smooth={true}
            duration={500}
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="contacts"
            
            className="cursor-pointer hover:scale-110  "
            smooth={true}
            duration={500}
          >
            Contacts
          </ScrollLink>
        </nav>
      </div>

      <section
        className="h-[100vh] bg-yellow-300  font-semibold font-serif"
        id="home"
      >
        <Home1 />
      </section>
      <section
        className="h-[100vh] bg-violet-200  font-semibold font-serif"
        id="skills"
      >
        Skills Content
      </section>
      <section
        className="h-[100vh] bg-gray-300  font-semibold font-serif"
        id="projects"
      >
        Projects Content
      </section>
      <section
        className="h-[100vh] bg-yellow-100  font-semibold font-serif"
        id="experience"
      >
        Experience Content
      </section>
      <section
        className="h-[100vh] bg-red-200  font-semibold font-serif"
        id="contacts"
      >
        Contacts Content
      </section>
    </div>
  );
};

export default Home;
