import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { academicProfile, resumePath, socialLinks } from "../data/portfolio.js";

const stats = [
  [academicProfile.cgpa, "CGPA"],
  ["500+", "LeetCode"],
  ["3-Star", "CodeChef"],
  ["5", "Major Projects"]
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden border-b border-white/10 pt-20">
      <div className="grid-overlay absolute inset-0 -z-10 opacity-55" />
      <div className="absolute left-[-12rem] top-4 -z-10 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute right-[-9rem] top-28 -z-10 h-[28rem] w-[28rem] rounded-full bg-amber-300/14 blur-3xl" />
      <div className="absolute bottom-8 left-1/3 -z-10 h-56 w-56 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="section-shell grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="max-w-3xl"
        >
          <p className="mb-5 inline-flex rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-1.5 text-sm font-semibold text-teal-100 shadow-[0_0_30px_rgba(45,212,191,0.14)]">
            Aspiring Software Engineer
          </p>
          <h1 className="gradient-text text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I'm Pritam Chavan
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-200 sm:text-xl">
            Pre-final year B.Tech student at VJTI, building full-stack, realtime, and AI-enabled products.
          </p>
          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            I turn product ideas into reliable web applications with thoughtful UI, secure APIs, realtime collaboration, and data-driven intelligence, with a focus on clean execution and measurable outcomes.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 text-sm text-zinc-300">
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">{academicProfile.degree}</span>
            <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5">{academicProfile.minor}</span>
            <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-amber-100">CGPA {academicProfile.cgpa}</span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#experience"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-teal-300 px-5 py-3 font-bold text-black transition hover:-translate-y-0.5 hover:bg-teal-200"
            >
              View Experience <ArrowDown size={18} />
            </a>
            <a
              href={resumePath}
              download
              className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/15 bg-white/[0.06] px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-amber-300/60 hover:bg-amber-300/10"
            >
              Download Resume <Download size={18} />
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded border border-white/15 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:bg-white/[0.06]"
            >
              Contact Me <Mail size={18} />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded border border-white/10 bg-white/[0.05] text-zinc-200 transition hover:-translate-y-0.5 hover:border-teal-300/60 hover:text-teal-200"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="panel relative overflow-hidden rounded-xl p-5 sm:p-6"
        >
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-300/15 blur-3xl" />
          <div className="absolute -bottom-16 left-8 h-32 w-32 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="rounded-lg border border-white/10 bg-surface-900/92 p-4 shadow-2xl shadow-black/30">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-teal-300" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">profile.js</span>
            </div>
            <pre className="overflow-x-auto text-sm leading-7 text-zinc-300">
{`const pritam = {
  college: "${academicProfile.college}",
  degree: "${academicProfile.degree}",
  cgpa: "${academicProfile.cgpa}",
  focus: ["Full Stack", "Realtime", "AI/ML"],
  goal: "Software Engineering Internship"
};`}
            </pre>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {stats.map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:border-teal-300/35 hover:bg-white/[0.07]">
                <p className="text-2xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

