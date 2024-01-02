import React,{ useState,useEffect } from "react";
function Home1() {
  const [text, setText] = useState('');
  const fullText = 'Frontend Web Developer | ReactJs';
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
      <div className="flex items-center justify-between bg-yellow-300 ">
        <div className=" pl-28 font">
          <p className="text-4xl text-[#219ebc] ">Hello!</p>
          <h6 className="text-3xl text-[#219ebc]">I'm Izaz Ahmad</h6>
          <h6 className="typewriter text-[#219ebc]">{text} </h6>
        </div>
        <div className="min-h-screen flex flex-col items-end pr-48">
          <div className="flex-grow bg-yellow-300 flex items-center justify-center">
            <div
              className="relative  w-72 h-72 bg-yellow-200 border-2 border-[#219ebc] custom-spin-animation rounded-full"
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
