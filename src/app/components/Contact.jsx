import React from "react";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
  const email = 'izazahamdhaider0@gmail.com';

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
            <p>izazahmadhaider0@gmail.com</p>
            <p>Islamabad, Pakistan</p>
          </div>
        </Card>

        <Card>
          <div className="space-y-4">
            <p className="text-sm text-neutral-700 dark:text-neutral-200">
              I’m currently open to freelance work, collaborations, and full-time opportunities.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center rounded-xl bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                Email me directly
              </a>
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
