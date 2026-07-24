"use client";

import Image from "next/image";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import SectionShell from "./UI/SectionShell";
import DotField from "./UI/DotField";
import { useTheme } from "../theme/ThemeProvider";
import { personalInfo } from "../data/portfolioData";

const DOT_FIELD_COLORS = {
  light: {
    gradientFrom: "rgba(124, 58, 237, 0.55)",
    gradientTo: "rgba(91, 33, 182, 0.35)",
    glowColor: "#4c1d95",
  },
  dark: {
    gradientFrom: "rgba(168, 85, 247, 0.35)",
    gradientTo: "rgba(180, 151, 207, 0.25)",
    glowColor: "#120F17",
  },
};

export default function Home1({ onNavigate }) {
  const { theme } = useTheme();
  const dotFieldColors = DOT_FIELD_COLORS[theme] ?? DOT_FIELD_COLORS.light;

  return (
    <SectionShell id="home" className="pt-24 md:pt-28">
      <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Full Stack Engineer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-slate-200 md:text-6xl">
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

        <div className="relative isolate mx-auto w-full max-w-sm">
          <div className="pointer-events-none absolute -inset-0 overflow-hidden rounded-3xl -z-10 xl border border-neutral-200  dark:border-neutral-700">
            <DotField
              dotRadius={1.5}
              dotSpacing={10}
              bulgeStrength={67}
              glowRadius={100}
              sparkle={false}
              waveAmplitude={0}
              gradientFrom={dotFieldColors.gradientFrom}
              gradientTo={dotFieldColors.gradientTo}
              glowColor={dotFieldColors.glowColor}
              {...dotFieldColors}
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl  dark:border-neutral-700  bg-none">
            <Image
              src="/mypic.png"
              width={640}
              height={800}
              alt="Portrait of Izaz Ahmad"
              className="h-auto w-full rounded-2xl object-cover brightness-150 contrast-200 sepia-0 saturate-150 dark:brightness-100 dark:contrast-100 dark:sepia-0 dark:saturate-100"
              priority
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
