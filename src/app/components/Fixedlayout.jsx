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
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const handleNavClick = (section) => {
    onSectionChange(section);
    setMenuOpen(false); // Close menu when an item is clicked
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

  return (
    <div className="h-auto">
      {/* Navbar Container */}
      <div className="bg-transparent flex items-center justify-between w-[100%] fixed z-50">
        {/* Logo Section */}
        <div className="flex items-center pt-3 pl-3">
          <div
            className="relative w-7 h-7 bg-orange-400 md:hidden border-2 border-[#4c4c4c] custom-spin-animation rounded-full"
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

        {/* Navbar Links for larger screens */}
        <div
          className={`bg-transparent w-fit h-[60px] pt-[5px] pb-[20px] mt-2 rounded-full max-lg:hidden text-[#4c4c4c] z-40`}
        >
          <nav className="flex justify-center items-center space-x-3 font-serif font-semibold mx-3 bg-white p-3 rounded-full bg-opacity-10 ">
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
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 z-40 flex flex-col items-center justify-center">
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
