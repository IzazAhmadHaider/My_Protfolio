import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { personalInfo } from "../data/portfolioData";

const links = [
  { href: personalInfo.github, label: "GitHub", Icon: IconBrandGithub },
  { href: personalInfo.linkedin, label: "LinkedIn", Icon: IconBrandLinkedin },
  { href: "https://twitter.com/IzazAhm99546481", label: "X", Icon: IconBrandX },
  { href: `mailto:${personalInfo.email}`, label: "Email", Icon: IconMail },
];

export default function SocialLinks({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className="rounded-full border border-neutral-200 p-2 text-neutral-700 transition hover:border-neutral-300 hover:text-neutral-900"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}