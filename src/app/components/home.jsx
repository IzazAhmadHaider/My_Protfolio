import { IconDownload, IconPhoneCall } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

function Home1({onSectionChange}) {
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
  const handleNavClick = (section) => {
    onSectionChange(section);
  };

  return (
    <>
      <div className="flex items-center justify-between min-h-[80%] max-lg:justify-center max-lg:items-center">
        <div className=" pl-28 max-lg:pl-0  font">
          <p className="text-4xl text-[#4c4c4c] ">Hello!</p>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h3 className="animate-charcter">I'm Izaz Ahmad</h3>
              </div>
            </div>
          </div>
          <div className="flex space-x-1">
            <p className="text-[#4c4c4c]">Creative Frontend Web Developer</p>
            <div className="text-container">
              <h1 className="coder2">ReactJs</h1>
              <h1 className="coder3">NextJs</h1>
              <h1 className="coder1">TailwindCSS</h1>
            </div>
          </div>

          <div className="flex mt-2 space-x-2 lg:hidden">
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

          <div className="flex justify-start items-center space-x-4 w-[21rem] mt-5">
            <button
              onClick={() => handleNavClick("contacts")}
              className="group bg-[#4d4d4d] relative hover:text-[#4d4d4d] border text-white font-semibold py-2 px-2 rounded-xl flex"
            >
              <span className="w-0 group-hover:w-[102%] h-full bg-white border opacity-0 group-hover:opacity-100 absolute top-0 -left-[1px] transition-all origin-center duration-500 rounded-xl z-0"></span>
              <span className="flex z-10">
                {" "}
                <IconPhoneCall />
                &nbsp;Contact Me
              </span>
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=1PPWsKxaSs2zBIqWiTeyBBZpH3ZZleQ0w
"
              download="izazahmadReactjs
"
            >
              <button className="group bg-[#4d4d4d] relative hover:text-[#4d4d4d] border text-white font-semibold py-2 px-2 rounded-xl flex">
                <span className="w-0 group-hover:w-[102%] h-full bg-white border opacity-0 group-hover:opacity-100 absolute top-0 -left-[1px] transition-all origin-center duration-500 rounded-xl z-0"></span>
                <span className="flex z-10">
                  {" "}
                  <IconDownload />
                  &nbsp;Download CV
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home1;
