import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { academicProfile, resumePath, socialLinks } from "../data/portfolio.js";

const stats = [
  { value: "1",    label: "Internship"    },
  { value: "8",    label: "Projects"      },
  { value: "500+", label: "DSA Solved"    },
  { value: "1867", label: "LeetCode Peak" },
];

const socials = [
  { label: "GitHub",   href: socialLinks.github,   Icon: FaGithub   },
  { label: "LinkedIn", href: socialLinks.linkedin,  Icon: FaLinkedin },
  { label: "LeetCode", href: socialLinks.leetcode,  Icon: SiLeetcode },
  { label: "CodeChef", href: socialLinks.codechef,  Icon: SiCodechef },
];

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden min-h-screen flex items-center">
      {/* Aurora orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora-1 absolute top-[-15%] left-[15%] h-[400px] w-[400px] sm:h-[640px] sm:w-[640px] rounded-full bg-blue-600/12 blur-[100px] sm:blur-[130px]" />
        <div className="animate-aurora-2 absolute top-[5%] right-[10%] h-[350px] w-[350px] sm:h-[520px] sm:w-[520px] rounded-full bg-cyan-500/14 blur-[100px] sm:blur-[130px]" />
        <div className="animate-aurora-3 absolute bottom-[5%] left-[35%] h-[300px] w-[300px] sm:h-[420px] sm:w-[420px] rounded-full bg-blue-800/08 blur-[80px] sm:blur-[100px]" />
      </div>
      <div className="dot-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="section-shell w-full pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="flex flex-col-reverse items-center gap-10 sm:gap-14 lg:flex-row lg:items-center lg:justify-between">

          {/* LEFT */}
          <div className="flex-1 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl w-full">

            <motion.div
              className="mb-5 sm:mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/[0.08] px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-300 max-w-full"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400 animate-pulse" />
              <Sparkles size={11} className="shrink-0" />
              <span className="truncate">Open to SDE Internship Opportunities</span>
            </motion.div>

            <motion.h1
              className="font-display gradient-text text-[3rem] xs:text-[3.5rem] sm:text-[4.75rem] lg:text-[6rem] font-bold tracking-tight leading-[1.04]"
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.06 }}>
              Pritam<br />Chavan
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-[#8e8ea0] sm:text-[17px] max-w-xl"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.16 }}>
              Full-stack builder crafting polished products with strong APIs, real-time features, and AI workflows.
            </motion.p>

            <motion.div className="mt-4 sm:mt-5 flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.24 }}>
              <span className="tag text-[11px] sm:text-xs">{academicProfile.college}</span>
              <span className="tag text-[11px] sm:text-xs">{academicProfile.degree}</span>
              <span className="tag text-[11px] sm:text-xs">{academicProfile.minor}</span>
              <span className="tag tag-blue text-[11px] sm:text-xs">CGPA {academicProfile.cgpa}</span>
            </motion.div>

            <motion.div className="mt-6 sm:mt-8 flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 w-full sm:w-auto"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.32 }}>
              <a href="#projects" className="btn-primary focus-ring text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5">View Projects <ArrowDown size={15} /></a>
              <a href={resumePath} target="_blank" rel="noreferrer" className="btn-ghost focus-ring text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5"><Download size={14} /> Resume</a>
              <a href="#contact" className="btn-ghost focus-ring text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5"><Mail size={14} /> Contact</a>
            </motion.div>

            <motion.div className="mt-5 sm:mt-6 flex items-center gap-2"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-[#666680] transition-all duration-200 hover:border-blue-500/35 hover:bg-blue-500/[0.08] hover:text-blue-300 hover:-translate-y-0.5">
                  <Icon size={15} />
                </a>
              ))}
            </motion.div>

            <motion.div className="mt-8 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full max-w-sm lg:max-w-none"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-white/[0.015] sm:bg-transparent p-2.5 sm:p-0 rounded-xl border border-white/[0.04] sm:border-none">
                  <p className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">{value}</p>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] text-[#5a5a78] font-medium leading-tight">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: photo */}
          <motion.div className="shrink-0"
            initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}>
            <div className="relative">
              <div className="absolute inset-0 animate-glow-pulse rounded-full bg-cyan-500/18 blur-3xl scale-105" />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl scale-[1.02]" />

              <div className="relative" style={{ padding: "3px" }}>
                <div className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{ background: "conic-gradient(from 0deg, #06b6d4 0%, #22d3ee 33%, #67e8f9 66%, #06b6d4 100%)", filter: "blur(2px)", opacity: 0.75 }} />
                <div className="relative rounded-full bg-[#060609] p-[3px]">
                  <img src="/prof.jpeg" alt="Pritam Chavan"
                    className="h-56 w-56 rounded-full object-cover sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
                    loading="eager" />
                </div>
              </div>

              <motion.div
                className="absolute -bottom-2 -right-1 sm:-bottom-3 sm:-right-4 rounded-2xl border border-blue-500/25 bg-[#0b0b14]/90 px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(6,182,212,0.18)] backdrop-blur-xl"
                animate={{ y: [0, -6, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
                <p className="font-display text-[11px] sm:text-[12px] font-bold text-white">Aspiring SDE</p>
                <p className="text-[9px] sm:text-[10px] text-blue-400 mt-0.5">Full-Stack · Real-Time · AI/RAG</p>
              </motion.div>

              <motion.div
                className="absolute -top-2 -left-1 sm:-top-3 sm:-left-4 rounded-2xl border border-cyan-500/25 bg-[#0b0b14]/90 px-2.5 sm:px-3 py-2 sm:py-2.5 shadow-[0_8px_32px_rgba(6,182,212,0.15)] backdrop-blur-xl"
                animate={{ y: [0, 6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                <p className="font-display text-[11px] sm:text-[12px] font-bold text-white">VJTI Mumbai</p>
                <p className="text-[9px] sm:text-[10px] text-cyan-400 mt-0.5">B.Tech EXTC</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
