import React from "react";

function Contact() {
  return (
    <div className="py-6 scale-90 flex justify-center items-center h-[90%] overflow-y-auto bg-[#fff]">
      <div className="max-w-5xl mx-auto overflow-hidden h-full">
        <div className="container h-[100%] mx-auto px-4 py-8 shadow-2xl rounded-lg bg-[#4d4d4d] max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            <div className="overflow-y-auto h-full">
              <div className="text-center text-5xl font-bold text-[#fff] mb-8">
                Contact Me
              </div>
              <form>
                <div className="mb-6">
                  <label
                    className="block text-[#fff] font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#4c4c4c] bg-[#fff] text-[#4c4c4c] rounded-xl shadow-lg focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#fff] font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#4c4c4c] bg-[#fff] text-[#4c4c4c] rounded-xl shadow-lg focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-[#fff] font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-[#4c4c4c] bg-[#fff] text-[#4c4c4c] rounded-xl shadow-lg focus:outline-none"
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  className="w-full text-[#fff] bg-[#4c4c4c] px-6 py-3 rounded-lg shadow-lg hover:bg-[#fff] hover:text-[#4c4c4c] transition-colors duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="shadow-lg w-96 h-full bg-[#4c4c4c] rounded-xl p-6 text-[#fff]">
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
