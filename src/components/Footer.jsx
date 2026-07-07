import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { socialLinks } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="bg-surface-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-8 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <div>
          <p className="font-black text-white">Pritam Chavan</p>
          <p className="mt-1 text-sm text-zinc-500">Aspiring Software Engineer | Full Stack | AI/ML</p>
        </div>
        <div className="flex items-center gap-3">
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
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-teal-300/50 hover:text-teal-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}


