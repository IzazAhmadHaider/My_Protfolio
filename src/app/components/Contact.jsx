import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const recaptcha = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token); // Save the token
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required");
      return;
    }

    if (!recaptcha.current.getValue()) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("https://myportfoliobackend-kappa.vercel.app/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, recaptchaToken }), // Include the recaptcha token
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        recaptcha.current.reset(); // Reset the CAPTCHA
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="h-full flex justify-center items-center py-6">
      <div className="max-w-5xl w-full mx-auto h-full overflow-hidden">
        <div className="container mx-auto px-4 py-8 shadow-2xl rounded-lg  max-w-4xl h-full">
        <div className="text-center text-4xl md:text-5xl font-bold uppercase text-[#333] mb-8">
        Reach Out to Me
              </div>
            {/* Left Column - Contact Form */}
            <div className="overflow-auto h-full">
             
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    aria-label="Enter your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    aria-label="Enter your email"
                  />
                </div>
                <div>
                  <label
                    className="block text-[#333] font-semibold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-2 border border-[#ccc] bg-[#333] text-[#f0f0f0] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    aria-label="Enter your message"
                  ></textarea>
                </div>
               
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
                  ref={recaptcha}
                  onChange={handleRecaptchaChange}
                />
                <button
                  className="w-full text-[#333] bg-[#f0f0f0] border border-[#333] px-6 py-3 rounded-lg shadow-lg hover:bg-[#333] hover:text-[#f0f0f0] transition-colors duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>

            </div>
            <Toaster />

            
        </div>
      </div>
    </div>
  );
}

export default Contact;
