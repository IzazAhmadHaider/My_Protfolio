"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import Card from "./UI/Card";
import SectionHeading from "./UI/SectionHeading";
import SectionShell from "./UI/SectionShell";
import TagList from "./UI/TagList";
import { projectFilters, projects } from "../data/portfolioData";

function ProjectLinks({ links }) {
  if (!links?.length) return null;
  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
        >
          {link.label}
          <IconArrowUpRight size={14} aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

function ProjectMeta({ project }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
      <span className="uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
        {project.context}
      </span>
      {project.status ? (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          {project.status}
        </span>
      ) : null}
    </div>
  );
}

function FeaturedProject({ project }) {
  return (
    <Card className="flex h-full flex-col transition hover:border-neutral-300 dark:hover:border-neutral-700">
      <ProjectMeta project={project} />
      <h3 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-neutral-50 md:text-2xl">
        {project.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-neutral-500 dark:text-neutral-400">
        {project.subtitle}
      </p>
      <p className="mt-4 text-neutral-700 dark:text-neutral-200">{project.description}</p>
      {project.highlights?.length ? (
        <ul className="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2">
              <IconCheck
                size={16}
                className="mt-0.5 shrink-0 text-neutral-400 dark:text-neutral-500"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-auto pt-5">
        <TagList items={project.stack} />
        <ProjectLinks links={project.links} />
      </div>
    </Card>
  );
}

function CompactProject({ project }) {
  return (
    <Card className="flex h-full flex-col p-5 transition hover:border-neutral-300 dark:hover:border-neutral-700">
      <ProjectMeta project={project} />
      <h3 className="mt-2 text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {project.name}
      </h3>
      <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{project.subtitle}</p>
      <p className="mt-3 text-sm text-neutral-700 dark:text-neutral-200">{project.description}</p>
      <div className="mt-auto pt-4">
        <TagList items={project.stack} size="sm" />
        <ProjectLinks links={project.links} />
      </div>
    </Card>
  );
}

export default function Project() {
  const [filter, setFilter] = useState("all");

  const { featured, others } = useMemo(() => {
    const visible =
      filter === "all" ? projects : projects.filter((project) => project.categories.includes(filter));
    return {
      featured: visible.filter((project) => project.featured),
      others: visible.filter((project) => !project.featured),
    };
  }, [filter]);

  const counts = useMemo(
    () =>
      Object.fromEntries(
        projectFilters.map((f) => [
          f.id,
          f.id === "all" ? projects.length : projects.filter((p) => p.categories.includes(f.id)).length,
        ])
      ),
    []
  );

  return (
    <SectionShell id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Projects"
        description="Products and platforms I have designed, built, and shipped — at work and on my own."
      />

      <div
        role="group"
        aria-label="Filter projects by type"
        className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:px-0"
      >
        {projectFilters.map((item) => {
          const isActive = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={isActive}
              className={clsx(
                "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                isActive
                  ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                  : "border-neutral-200 text-neutral-700 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
              )}
            >
              {item.label}
              <span
                className={clsx(
                  "text-xs tabular-nums",
                  isActive ? "opacity-70" : "text-neutral-400 dark:text-neutral-500"
                )}
              >
                {counts[item.id]}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {featured.length + others.length} projects
      </p>

      {featured.length ? (
        <div className="grid gap-4 md:grid-cols-2">
          {featured.map((project) => (
            <FeaturedProject key={project.name} project={project} />
          ))}
        </div>
      ) : null}

      {others.length ? (
        <>
          {featured.length ? (
            <h3 className="mb-4 mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
              More projects
            </h3>
          ) : null}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((project) => (
              <CompactProject key={project.name} project={project} />
            ))}
          </div>
        </>
      ) : null}
    </SectionShell>
  );
}
