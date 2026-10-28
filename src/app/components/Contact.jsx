"use client";

import { useState } from "react";
import {
  IconBrandLinkedin,
  IconCheck,
  IconCopy,
  IconMail,
  IconMapPin,
} from "@tabler/icons-react";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const { email, location, linkedin } = personalInfo;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
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
          <ul className="mt-5 space-y-3 text-sm text-neutral-700 dark:text-neutral-200">
            <li className="flex items-center gap-3">
              <IconMail size={18} className="shrink-0 text-neutral-400" aria-hidden="true" />
              <a
                href={`mailto:${email}`}
                className="break-all underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
              >
                {email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconBrandLinkedin size={18} className="shrink-0 text-neutral-400" aria-hidden="true" />
              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
              >
                LinkedIn profile
              </a>
            </li>
            <li className="flex items-center gap-3">
              <IconMapPin size={18} className="shrink-0 text-neutral-400" aria-hidden="true" />
              <span>{location} · open to remote</span>
            </li>
          </ul>
        </Card>

        <Card>
          <div className="space-y-4">
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              I’m currently open to freelance work, collaborations, and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                <IconMail size={16} aria-hidden="true" />
                Email me directly
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-900"
              >
                {copied ? (
                  <IconCheck size={16} aria-hidden="true" />
                ) : (
                  <IconCopy size={16} aria-hidden="true" />
                )}
                {copied ? "Copied" : "Copy email"}
              </button>
              <span className="sr-only" aria-live="polite">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              I usually reply within 1–2 business days.
            </p>
          </div>
        </Card>
      </div>
    </SectionShell>
  );
}
