import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { socialLinks } from "../data/portfolio.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="section-divider" />
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <p className="text-sm font-bold text-white">
              Pritam<span className="text-blue-400">.</span>
            </p>
            <p className="mt-0.5 text-xs text-[#7c7c8a]">
              © {year} · Aspiring Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-2">
            {[
              ["GitHub", socialLinks.github, FaGithub],
              ["LinkedIn", socialLinks.linkedin, FaLinkedin],
              ["LeetCode", socialLinks.leetcode, SiLeetcode],
              ["CodeChef", socialLinks.codechef, SiCodechef]
            ].map(([label, href, Icon]) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-[#7c7c8a] transition hover:border-blue-500/30 hover:text-blue-400 hover:-translate-y-0.5"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
