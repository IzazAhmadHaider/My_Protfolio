import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import toast, { Toaster } from "react-hot-toast";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const recaptcha = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_SITE_KEY;

  const handleRecaptchaChange = (token) => setRecaptchaToken(token);

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

    if (!recaptchaSiteKey) {
      toast.error("reCAPTCHA is not configured. Add NEXT_PUBLIC_SITE_KEY to your env.");
      return;
    }

    const token = recaptcha.current?.getValue?.();
    if (!token) {
      toast.error("Please complete the CAPTCHA");
      return;
    }

    try {
      const response = await fetch("https://myportfoliobackend-kappa.vercel.app/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        recaptcha.current?.reset?.();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <SectionShell id="contacts">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s Build Something Great"
        description="If you have an opportunity, product idea, or role in mind, feel free to reach out."
      />
      <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
        <Card>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            Get in touch
          </h3>
          <div className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
        </Card>

        <Card>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Name
              </span>
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:border-neutral-500"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Email
              </span>
              <input
                className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:border-neutral-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-200">
                Message
              </span>
              <textarea
                className="w-full rounded-xl border border-neutral-300 px-4 py-2.5 text-neutral-900 outline-none transition focus:border-neutral-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:focus:border-neutral-500"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
              />
            </label>

            {recaptchaSiteKey ? (
              <ReCAPTCHA
                sitekey={recaptchaSiteKey}
                ref={recaptcha}
                onChange={handleRecaptchaChange}
              />
            ) : (
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
                Add <span className="font-medium">NEXT_PUBLIC_SITE_KEY</span> to your environment to
                enable reCAPTCHA for this form.
              </div>
            )}

            <button
              className="rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </Card>
      </div>
      <Toaster />
    </SectionShell>
  );
}
