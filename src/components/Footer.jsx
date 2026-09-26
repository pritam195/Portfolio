import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { socialLinks } from "../data/portfolio.js";

const socials = [
  ["GitHub",   socialLinks.github,   FaGithub  ],
  ["LinkedIn", socialLinks.linkedin, FaLinkedin],
  ["LeetCode", socialLinks.leetcode, SiLeetcode],
  ["CodeChef", socialLinks.codechef, SiCodechef],
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row text-center sm:text-left">

          <div>
            <p className="font-display text-sm font-bold text-white">
              Pritam<span className="gradient-text-cyan">.</span>
            </p>
            <p className="mt-0.5 text-[11px] text-[#444458]">
              © {year} · Built with React & Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socials.map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] text-[#555570] transition-all duration-200 hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-cyan-500/[0.06] hover:-translate-y-px"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
