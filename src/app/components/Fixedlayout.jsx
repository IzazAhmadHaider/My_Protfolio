import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import SocialLinks from "./SocialLinks";
import ThemeToggle from "./UI/ThemeToggle";
import { navSections, personalInfo } from "../data/portfolioData";

export default function Fixedlayout({ activeSectionprop, onSectionChange }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (sectionId) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  // Header shadow once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll and close on Escape.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isMenuOpen]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-neutral-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white dark:focus:bg-neutral-100 dark:focus:text-neutral-900"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur transition-shadow dark:bg-neutral-950/90 ${
          scrolled
            ? "border-neutral-200/70 shadow-sm dark:border-neutral-800/70"
            : "border-transparent"
        }`}
      >
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

          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {navSections.map((section) => {
              const isActive = activeSectionprop === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavigate(section.id)}
                  aria-current={isActive ? "true" : undefined}
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

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-neutral-800 dark:text-neutral-100 md:hidden"
              onClick={() => setIsMenuOpen((value) => !value)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <IconX size={22} aria-hidden="true" /> : <IconMenu2 size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 overflow-y-auto bg-white pt-20 dark:bg-neutral-950 md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto flex max-w-6xl flex-col gap-2 px-4 pb-10">
            {navSections.map((section) => {
              const isActive = activeSectionprop === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleNavigate(section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={`rounded-xl border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-neutral-900 bg-neutral-900 text-white dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                      : "border-neutral-200 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
                  }`}
                >
                  {section.label}
                </button>
              );
            })}
            <SocialLinks className="mt-6" />
          </nav>
        </div>
      ) : null}

      <div className="fixed bottom-5 right-5 z-30 hidden xl:block">
        <SocialLinks floating />
      </div>
    </>
  );
}
