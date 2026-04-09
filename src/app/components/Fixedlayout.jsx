import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./UI/ThemeToggle";
import { navSections, personalInfo } from "../data/portfolioData";

export default function Fixedlayout({ activeSectionprop, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/70 bg-white/90 backdrop-blur dark:border-neutral-800/70 dark:bg-neutral-950/90">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => handleNavigate("home")}
              className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-100"
            >
              {personalInfo.name}
            </button>
          </div>

          <nav className="hidden items-center gap-1 md:flex">
            {navSections.map((section) => {
              const isActive = activeSectionprop === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavigate(section.id)}
                  className={`rounded-lg px-3 py-2 text-sm transition ${
                    isActive
                      ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                      : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="text-neutral-800 dark:text-neutral-100 md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-40 bg-white pt-20 dark:bg-neutral-950 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4">
            {navSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => handleNavigate(section.id)}
                className="rounded-xl border border-neutral-200 px-4 py-3 text-left text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {section.label}
              </button>
            ))}
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      ) : null}

      <div className="fixed bottom-5 right-5 z-30 hidden md:block">
        <SocialLinks />
      </div>
    </>
  );
}
