import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const toneClasses = {
  teal: {
    icon: "border-teal-300/30 bg-teal-300/10 text-teal-100",
    rail: "bg-teal-300/80",
    chip: "hover:border-teal-300/55 hover:bg-teal-300/10 hover:text-teal-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(45,212,191,0.16)]"
  },
  amber: {
    icon: "border-amber-300/30 bg-amber-300/10 text-amber-100",
    rail: "bg-amber-300/80",
    chip: "hover:border-amber-300/55 hover:bg-amber-300/10 hover:text-amber-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(251,191,36,0.14)]"
  },
  sky: {
    icon: "border-sky-300/30 bg-sky-300/10 text-sky-100",
    rail: "bg-sky-300/80",
    chip: "hover:border-sky-300/55 hover:bg-sky-300/10 hover:text-sky-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(56,189,248,0.14)]"
  },
  emerald: {
    icon: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
    rail: "bg-emerald-300/80",
    chip: "hover:border-emerald-300/55 hover:bg-emerald-300/10 hover:text-emerald-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(52,211,153,0.14)]"
  },
  cyan: {
    icon: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    rail: "bg-cyan-300/80",
    chip: "hover:border-cyan-300/55 hover:bg-cyan-300/10 hover:text-cyan-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(34,211,238,0.14)]"
  },
  orange: {
    icon: "border-orange-300/30 bg-orange-300/10 text-orange-100",
    rail: "bg-orange-300/80",
    chip: "hover:border-orange-300/55 hover:bg-orange-300/10 hover:text-orange-100",
    glow: "group-hover:shadow-[0_18px_60px_rgba(251,146,60,0.14)]"
  },
  slate: {
    icon: "border-slate-300/25 bg-slate-300/10 text-slate-100",
    rail: "bg-slate-300/70",
    chip: "hover:border-slate-300/45 hover:bg-slate-300/10 hover:text-white",
    glow: "group-hover:shadow-[0_18px_60px_rgba(148,163,184,0.12)]"
  }
};

const stackSignals = [
  {
    label: "Product frontend",
    value: "React, Vite, Tailwind",
    detail: "Responsive interfaces with clean component structure."
  },
  {
    label: "Backend systems",
    value: "Node, Express, Flask",
    detail: "APIs, auth, services, and practical integrations."
  },
  {
    label: "Realtime features",
    value: "Socket.IO, WebRTC",
    detail: "Chat, meetings, collaboration, and live state."
  },
  {
    label: "AI and data",
    value: "Python, ML, Gemini",
    detail: "Resume analysis, scoring, parsing, and model workflows."
  }
];

export default function Skills() {
  const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <section id="skills" className="relative isolate overflow-hidden border-b border-white/10 bg-surface-950">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_50%_0%,rgba(45,212,191,0.12),transparent_34rem)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-px w-[min(88rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building complete software products."
          description="Grouped by where each skill shows up in real projects: UI, APIs, databases, realtime systems, AI/data workflows, tooling, and fundamentals."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.55fr]">
          <motion.aside
            className="panel relative overflow-hidden rounded-xl p-6 sm:p-7 lg:sticky lg:top-24 lg:self-start"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teal-300">Engineering range</p>
            <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl">
              From interface polish to realtime backend behavior.
            </h3>
            <p className="mt-4 leading-7 text-zinc-400">
              The strongest signal is full-stack product ownership: building user-facing flows, connecting them to
              reliable APIs, and adding data or realtime features where they improve the product.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-3xl font-black text-white">{skillGroups.length}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Categories</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                <p className="text-3xl font-black text-white">{totalSkills}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Tools</p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {stackSignals.map((signal) => (
                <div key={signal.label} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-bold text-white">{signal.label}</p>
                    <p className="text-xs font-semibold text-teal-200">{signal.value}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{signal.detail}</p>
                </div>
              ))}
            </div>
          </motion.aside>

          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              const tone = toneClasses[group.tone] ?? toneClasses.teal;

              return (
                <motion.article
                  key={group.title}
                  className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-4 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055] sm:p-5 ${tone.glow}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.035 }}
                >
                  <div className={`absolute inset-y-5 left-0 w-1 rounded-r-full ${tone.rail}`} />
                  <div className="flex items-start justify-between gap-3 pl-2">
                    <div className="flex min-w-0 items-start gap-3">
                      <span className={`shrink-0 rounded-lg border p-2.5 ${tone.icon}`}>
                        <Icon size={20} />
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base font-black text-white sm:text-lg">{group.title}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                          {group.skills.length} skills
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-xs font-bold text-zinc-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2 pl-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-md border border-white/10 bg-black/20 px-2.5 py-1.5 text-sm font-medium text-zinc-300 transition ${tone.chip}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
