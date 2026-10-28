import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import clsx from "clsx";
import { personalInfo } from "../data/portfolioData";

const links = [
  { href: personalInfo.github, label: "GitHub", Icon: IconBrandGithub },
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: personalInfo.x, label: "X (Twitter)", Icon: IconBrandX },
  { href: `mailto:${personalInfo.email}`, label: "Email", Icon: IconMail },
];

export default function SocialLinks({ className = "", floating = false }) {
  return (
    <ul className={clsx("flex items-center gap-2", className)} aria-label="Social links">
      {links.map(({ href, label, Icon }) => {
        const external = href.startsWith("http");
        return (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              title={label}
              className={clsx(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-neutral-50",
                floating && "bg-white/90 backdrop-blur dark:bg-neutral-950/90"
              )}
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
