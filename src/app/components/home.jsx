import Image from "next/image";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import SectionShell from "./UI/SectionShell";
import { personalInfo } from "../data/portfolioData";

export default function Home1({ onNavigate }) {
  return (
    <SectionShell id="home" className="pt-24 md:pt-28">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Full Stack Engineer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-200">{personalInfo.title}</p>
          <p className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-300">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("contacts")}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Contact Me <IconArrowRight size={16} />
            </button>
            <a
              href="/IZAZAHMAD.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-900"
            >
              Download Resume <IconDownload size={16} />
            </a>
          </div>

          <SocialLinks className="mt-6" />
        </div>

        <div className="mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-100 p-3 dark:border-neutral-700 dark:bg-neutral-900">
            <Image
              src="/mypic.png"
              width={640}
              height={800}
              alt="Portrait of Izaz Ahmad"
              className="h-auto w-full rounded-2xl object-cover grayscale"
              priority
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
