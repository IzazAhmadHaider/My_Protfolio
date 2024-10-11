"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconMenu2, // This is the hamburger icon from Tabler Icons
  IconX, // Close icon for toggling the menu
} from "@tabler/icons-react";

function Fixedlayout({ onSectionChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');

  const handleNavClick = (section) => {
    onSectionChange(section);
    setActiveScreen(section);
    setMenuOpen(false);
  };

  const redirectToInstagram = () => {
    window.location.href = "https://www.instagram.com/izazcodes/";
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

  return (
    <div className="h-auto">
      {/* Navbar Container */}
      <div className="bg-transparent flex items-center justify-between w-[100%] fixed z-50">
        {/* Logo Section */}
        <div className="flex items-center pt-3 pl-3">
          <div
            className="relative w-7 h-7 bg-orange-400 md:hidden -2 -[#4c4c4c] custom-spin-animation rounded-full"
            style={{
              clipPath: "circle(90% at 0% 20%)",
            }}
          ></div>
          <img
            className="absolute w-6 pl-[3px] md:hidden "
            src="mypic.png"
            alt=""
          />
          <p className="text-[#4c4c4c] text-lg font">&nbsp;&nbsp;Izaz Ahmad</p>
        </div>
        <div
          className={`bg-transparent w-fit h-[60px] pt-[5px] pb-[20px] mt-2 rounded-full max-lg:hidden text-[#4c4c4c] z-40`}
        >
          <nav className="flex justify-center items-center space-x-0 font-serif font-semibold mx-3 p-3 rounded-full bg-opacity-10">
            <div
              onClick={() => handleNavClick("home")}
              className={`group bg-[#fff] relative ${activeScreen === "home" ? "text-[#fff]" : "text-[#4d4d4d]"
                } hover:text-[#fff] font-semibold py-1 px-2 flex cursor-pointer`}
            >
              <span
                className={`w-0 ${activeScreen === "home" ? "w-[102%] opacity-100" : "group-hover:w-[102%] opacity-0 group-hover:opacity-100"
                  } h-full bg-[#4d4d4d] absolute top-0 -left-[1px] transition-all origin-center duration-500 z-0`}
              ></span>
              <span className="flex z-10">Home</span>
            </div>

            <div
              onClick={() => handleNavClick("skills")}
              className={`group bg-[#fff] relative ${activeScreen === "skills" ? "text-[#fff]" : "text-[#4d4d4d]"
                } hover:text-[#fff] font-semibold py-1 px-2 flex cursor-pointer`}
            >
              <span
                className={`w-0 ${activeScreen === "skills" ? "w-[102%] opacity-100" : "group-hover:w-[102%] opacity-0 group-hover:opacity-100"
                  } h-full bg-[#4d4d4d] absolute top-0 -left-[1px] transition-all origin-center duration-500 z-0`}
              ></span>
              <span className="flex z-10">Skills</span>
            </div>

            <div
              onClick={() => handleNavClick("projects")}
              className={`group bg-[#fff] relative ${activeScreen === "projects" ? "text-[#fff]" : "text-[#4d4d4d]"
                } hover:text-[#fff] font-semibold py-1 px-2 flex cursor-pointer`}
            >
              <span
                className={`w-0 ${activeScreen === "projects" ? "w-[102%] opacity-100" : "group-hover:w-[102%] opacity-0 group-hover:opacity-100"
                  } h-full bg-[#4d4d4d] absolute top-0 -left-[1px] transition-all origin-center duration-500 z-0`}
              ></span>
              <span className="flex z-10">Projects</span>
            </div>

            <div
              onClick={() => handleNavClick("experience")}
              className={`group bg-[#fff] relative ${activeScreen === "experience" ? "text-[#fff]" : "text-[#4d4d4d]"
                } hover:text-[#fff] font-semibold py-1 px-2 flex cursor-pointer`}
            >
              <span
                className={`w-0 ${activeScreen === "experience" ? "w-[102%] opacity-100" : "group-hover:w-[102%] opacity-0 group-hover:opacity-100"
                  } h-full bg-[#4d4d4d] absolute top-0 -left-[1px] transition-all origin-center duration-500 z-0`}
              ></span>
              <span className="flex z-10">Experience</span>
            </div>

            <div
              onClick={() => handleNavClick("contacts")}
              className={`group bg-[#fff] relative ${activeScreen === "contacts" ? "text-[#fff]" : "text-[#4d4d4d]"
                } hover:text-[#fff] font-semibold py-1 px-2 flex cursor-pointer`}
            >
              <span
                className={`w-0 ${activeScreen === "contacts" ? "w-[102%] opacity-100" : "group-hover:w-[102%] opacity-0 group-hover:opacity-100"
                  } h-full bg-[#4d4d4d] absolute top-0 -left-[1px] transition-all origin-center duration-500 z-0`}
              ></span>
              <span className="flex z-10">Contacts</span>
            </div>
          </nav>

        </div>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden flex items-center pr-3">
          {menuOpen ? (
            <IconX
              size={24}
              className="text-[#4c4c4c] cursor-pointer"
              onClick={() => setMenuOpen(false)} // Close the menu
            />
          ) : (
            <IconMenu2
              size={24}
              className="text-[#4c4c4c] cursor-pointer"
              onClick={() => setMenuOpen(true)} // Open the menu
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#4d4d4d] bg-opacity-90 z-40 flex flex-col items-center justify-center">
          <nav className="flex flex-col space-y-4 text-lg font-serif font-semibold text-[#4c4c4c]">
            <Link
              to="home"
              className="cursor-pointer hover:scale-110"
              smooth={true}
              duration={500}
              onClick={() => handleNavClick("home")}
            >
              Home
            </Link>
            <Link
              to="skills"
              className="cursor-pointer hover:scale-110"
              smooth={true}
              duration={500}
              onClick={() => handleNavClick("skills")}
            >
              Skills
            </Link>
            <Link
              to="projects"
              className="cursor-pointer hover:scale-110"
              smooth={true}
              duration={500}
              onClick={() => handleNavClick("projects")}
            >
              Projects
            </Link>
            <Link
              to="experience"
              className="cursor-pointer hover:scale-110"
              smooth={true}
              duration={500}
              onClick={() => handleNavClick("experience")}
            >
              Experience
            </Link>
            <Link
              to="contacts"
              className="cursor-pointer hover:scale-110"
              smooth={true}
              duration={500}
              onClick={() => handleNavClick("contacts")}
            >
              Contacts
            </Link>
          </nav>
        </div>
      )}

      {/* Social Media Icons */}
      <div className="flex fixed bottom-4 right-4 pr-3 space-x-2 max-lg:hidden">
        <IconBrandInstagram
          onClick={redirectToInstagram}
          color="#4c4c4c"
          size={20}
          className="hover:scale-110 cursor-pointer"
        />
        <IconBrandFacebook
          onClick={redirectToFacebook}
          color="#4c4c4c"
          size={20}
          className="hover:scale-110 cursor-pointer"
        />
        <IconBrandLinkedin
          onClick={redirectToLinkdin}
          color="#4c4c4c"
          size={20}
          className="hover:scale-110 cursor-pointer"
        />
        <IconBrandX
          onClick={redirectToTwitter}
          color="#4c4c4c"
          size={20}
          className="hover:scale-110 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Fixedlayout;
