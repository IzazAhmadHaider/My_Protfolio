import { IconDownload, IconPhoneCall } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

function Home1({ scrollToSection }) {
  const [text, setText] = useState("");
  const fullText = "rontend Web Developer | ReactJs";
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(intervalId);
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
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
    <>
      <div className="flex items-center justify-between min-h-screen bg-gradient-to-r from-yellow-400 to-orange-400 max-lg:justify-center max-lg:items-center">
        <div className=" pl-28 max-lg:pl-0  font">
          <p className="text-4xl text-[#219ebc] ">Hello!</p>
          <h6 className="text-3xl text-[#219ebc]">I'm Izaz Ahmad</h6>
          <h6 className="typewriter text-[#219ebc] w-[17.5rem]">
            {`F${text}`}{" "}
          </h6>

          <div className="flex mt-2 space-x-2 lg:hidden">
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

          <div className="flex justify-start items-center space-x-4 w-[21rem] mt-5">
            <button
              onClick={() => scrollToSection("contacts")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded-xl flex  "
            >
              <IconPhoneCall />
              &nbsp;Contact Me
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=11pov35U5WhmYLds9tdCriu06O6bHG62V
"
              download="https://drive.google.com/uc?export=download&id=11pov35U5WhmYLds9tdCriu06O6bHG62V
"
            >
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center">
                <IconDownload className="mr-2" />
                Download CV
              </button>
            </a>
          </div>
        </div>
   
            <div className="flex flex-col items-end pr-48 max-lg:pr-10 max-md:hidden">
              <div className="flex-grow bg-transparent flex items-center justify-center">
                <div
                  className="relative  w-72 h-72 bg-orange-400 border-2 border-[#219ebc] custom-spin-animation rounded-full"
                  style={{
                    clipPath: "circle(90% at 0% 20%)",
                  }}
                ></div>
                <img className="absolute w-64" src="mypic.png" alt="" />
              </div>
            </div>
        
      </div>
    </>
  );
}

export default Home1;
