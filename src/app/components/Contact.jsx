import React from "react";

function Contact() {
  return (
    <div className="py-6 scale-90 flex justify-center items-center h-[90%] overflow-y-auto bg-[#333]">
      <div className="max-w-5xl mx-auto overflow-hidden h-full w-full">
        <div className="container h-[100%] mx-auto px-4 py-8 shadow-2xl rounded-lg bg-[#f0f0f0] max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Left Column */}
            <div className="overflow-y-auto h-full">
              <div className="text-center text-4xl md:text-5xl font-bold text-[#333] mb-8">
                Contact Me
              </div>
              <form>
                <div className="mb-6">
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  className="w-full text-[#333] bg-[#f0f0f0] border border-[#333] px-6 py-3 rounded-lg shadow-lg hover:bg-[#333] hover:text-[#f0f0f0] transition-colors duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Column (Contact Information) */}
            <div className="shadow-lg w-full h-full bg-[#333] rounded-xl p-6 text-[#f0f0f0]">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Contact Information
              </h2>
              <ul>
                <li className="mb-4">
                  <span className="font-semibold">Address:</span> Swabi, KPK,
                  Pakistan
                </li>
                <li className="mb-4">
                  <span className="font-semibold">Phone:</span> +923098967345
                </li>
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  izazahmadhaider0@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
