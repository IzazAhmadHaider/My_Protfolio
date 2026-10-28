"use client";

import Image from "next/image";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import SectionShell from "./UI/SectionShell";
import DotField from "./UI/DotField";
import { useTheme } from "../theme/ThemeProvider";
import { personalInfo, stats } from "../data/portfolioData";

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
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {personalInfo.availability}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-slate-200 md:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-neutral-700 dark:text-neutral-200">{personalInfo.title}</p>
          <p className="mt-6 max-w-2xl text-neutral-600 dark:text-neutral-300">
            {personalInfo.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onNavigate("contacts")}
              className="inline-flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              Contact Me <IconArrowRight size={16} aria-hidden="true" />
            </button>
            <a
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-neutral-500 dark:hover:bg-neutral-900"
            >
              Download Resume <IconDownload size={16} aria-hidden="true" />
            </a>
          </div>

          <SocialLinks className="mt-6" />

          <dl className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-neutral-200 pt-6 dark:border-neutral-800 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</dt>
                <dd className="text-lg font-semibold tracking-tight sm:text-xl text-neutral-900 dark:text-neutral-50">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative isolate mx-auto w-full max-w-xs md:max-w-sm">
          <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-700" aria-hidden="true">
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
          <div className="relative overflow-hidden rounded-3xl px-4 pt-4 sm:px-5 sm:pt-5">
            <Image
              src="/mypic.png"
              width={640}
              height={800}
              alt="Portrait of Izaz Ahmad"
              className="block h-auto w-full rounded-t-2xl object-cover brightness-150 contrast-200 sepia-0 saturate-150 dark:brightness-100 dark:contrast-100 dark:sepia-0 dark:saturate-100"
              priority
            />
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
