import { IconDownload, IconPhoneCall } from "@tabler/icons-react";
import React, { useState, useEffect } from "react";
function Home1({ scrollToSection } ) {
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
    }, 100); // Adjust the interval for typing speed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between bg-gradient-to-r from-yellow-400 to-orange-400 ">
        <div className=" pl-28 font">
          <p className="text-4xl text-[#219ebc] ">Hello!</p>
          <h6 className="text-3xl text-[#219ebc]">I'm Izaz Ahmad</h6>
          <h6 className="typewriter text-[#219ebc] w-[17.5rem]">
            {`F${text}`}{" "}
          </h6>

          <div className="flex justify-start items-center space-x-4 w-[21rem] mt-5">
            <button onClick={() => scrollToSection('contacts')} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-2 rounded-xl flex  ">
              <IconPhoneCall />
              &nbsp;Contact Me
            </button>
            <a href="IZAZAHMAD.PDF" download>
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center">
                <IconDownload className="mr-2" />
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="min-h-screen flex flex-col items-end pr-48">
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
