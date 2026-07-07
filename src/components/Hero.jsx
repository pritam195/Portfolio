import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { academicProfile, resumePath, socialLinks } from "../data/portfolio.js";

const stats = [
  { value: "1", label: "Internship" },
  { value: "5", label: "Projects" },
  { value: "500+", label: "DSA Problems" },
  { value: "3★", label: "CodeChef" }
];

const socials = [
  { label: "GitHub", href: socialLinks.github, Icon: FaGithub },
  { label: "LinkedIn", href: socialLinks.linkedin, Icon: FaLinkedin },
  { label: "LeetCode", href: socialLinks.leetcode, Icon: SiLeetcode },
  { label: "CodeChef", href: socialLinks.codechef, Icon: SiCodechef }
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Grid background */}
      <div className="grid-overlay absolute inset-0 -z-10 opacity-70" />

      {/* Glow orb */}
      <div className="absolute -top-40 left-1/2 -z-10 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="section-shell w-full pt-24 pb-16">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

          {/* ── Left: text content ─────────────────────────────── */}
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl">

            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-blue-300 mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" />
              Open to SDE Internship Opportunities
            </motion.span>

            {/* Name */}
            <motion.h1
              className="gradient-text text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl leading-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.05 }}
            >
              Pritam Chavan
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="mt-5 text-base text-[#9d9db0] sm:text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Full-stack builder crafting polished web products with strong APIs, realtime features, and AI workflows.
            </motion.p>

            {/* Academic pills */}
            <motion.div
              className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.22 }}
            >
              <span className="tag">{academicProfile.college}</span>
              <span className="tag">{academicProfile.degree}</span>
              <span className="tag">{academicProfile.minor}</span>
              <span className="tag tag-blue">CGPA {academicProfile.cgpa}</span>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
            >
              <a href="#projects" className="btn-primary focus-ring rounded-lg">
                View Projects <ArrowDown size={16} />
              </a>
              <a href={resumePath} download className="btn-ghost focus-ring rounded-lg">
                <Download size={16} /> Download Resume
              </a>
              <a href="#contact" className="btn-ghost focus-ring rounded-lg">
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
            >
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[#7c7c8a] transition hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/[0.08] hover:-translate-y-0.5"
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-10 grid grid-cols-4 gap-5 w-full max-w-sm lg:max-w-none"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
            >
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white tracking-tight">{value}</p>
                  <p className="mt-0.5 text-xs text-[#7c7c8a] font-medium leading-4">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: profile photo ───────────────────────────── */}
          <motion.div
            className="shrink-0 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* Glow ring behind photo */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl scale-110" />
              {/* Outer decorative ring */}
              <div
                className="relative rounded-full p-[2px]"
                style={{
                  background: "linear-gradient(135deg, rgba(6,182,212,0.7), rgba(34,211,238,0.2), rgba(6,182,212,0.6))"
                }}
              >
                <div className="rounded-full bg-surface-950 p-1">
                  <img
                    src="/prof.jpeg"
                    alt="Pritam Chavan"
                    className="h-64 w-64 rounded-full object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating badge — bottom right */}
              <motion.div
                className="absolute -bottom-2 -right-2 rounded-xl border border-blue-500/25 bg-surface-900 px-3 py-2 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-bold text-white">Aspiring Software Engineer</p>
                <p className="text-[10px] text-blue-400">Full Stack · ML · Data Science</p>
              </motion.div>
              {/* Floating badge — top left */}
              <motion.div
                className="absolute -top-2 -left-2 rounded-xl border border-blue-500/25 bg-surface-900 px-3 py-2 shadow-lg"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-xs font-bold text-white">VJTI Mumbai</p>
                <p className="text-[10px] text-blue-400">B.Tech EXTC</p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
