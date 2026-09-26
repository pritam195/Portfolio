import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const highlights = [
  "Developed a responsive chatbot widget with voice-based query input and cross-device layout support.",
  "Built Node.js & Express REST APIs for query processing and keyword matching across 35+ FAQs, with RAG fallback for unmatched queries using company documentation and structured error handling.",
  "Designed a custom IP-based fixed-window rate limiter using an in-memory hash map — 10 req/min per client, returning HTTP 429 with retry intervals.",
];

const techStack = ["React.js", "Node.js", "Express", "RAG", "REST APIs"];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internship with real product ownership."
          description="Built a production chatbot with voice input, FAQ APIs, RAG fallback, and a custom rate limiter."
        />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }}>
          <article className="card-glow rounded-2xl overflow-hidden">
            <div className="h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
            <div className="p-5 sm:p-8">
              <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.5fr]">
                <div>
                  <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border border-blue-500/25 bg-blue-500/10 text-blue-400 mb-4 sm:mb-5">
                    <BriefcaseBusiness size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <p className="font-display text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-blue-400 mb-1">
                    Software Development Engineer Intern
                  </p>
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-tight">
                    Monarch Techno Engineering Solutions
                  </h3>
                  <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                    <span className="tag flex items-center gap-1.5 text-[11px] sm:text-[12px]"><MapPin size={11} /> Remote</span>
                    <span className="tag flex items-center gap-1.5 text-[11px] sm:text-[12px]"><CalendarDays size={11} /> Jun 2026</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {techStack.map((t) => <span key={t} className="tag tag-blue text-[10px] sm:text-[11px]">{t}</span>)}
                  </div>
                  <div className="mt-5 h-px bg-gradient-to-r from-cyan-500/20 to-transparent" />
                  <p className="mt-4 text-[10px] sm:text-[11px] text-[#5a5a78] font-medium uppercase tracking-widest">Key Contributions</p>
                </div>
                <div className="flex flex-col gap-2.5 sm:gap-3">
                  {highlights.map((h, i) => (
                    <motion.div key={i}
                      className="flex gap-2.5 sm:gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3.5 sm:p-4 transition-colors hover:border-blue-500/20 hover:bg-blue-500/[0.03]"
                      initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
                      <CheckCircle2 className="mt-0.5 shrink-0 text-blue-400" size={15} />
                      <p className="text-xs sm:text-sm leading-[1.65] text-[#8e8ea0]">{h}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
