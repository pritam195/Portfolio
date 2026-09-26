import { motion } from "framer-motion";
import { GraduationCap, Target, Zap } from "lucide-react";
import { academicProfile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const points = [
  { icon: GraduationCap, title: "Pre-final Year at VJTI",
    text: `${academicProfile.degree} with a ${academicProfile.minor}. CGPA: ${academicProfile.cgpa}.` },
  { icon: Zap, title: "Builder Mindset",
    text: "Comfortable taking products from frontend UX to backend APIs, realtime events, authentication, data workflows, and deployment." },
  { icon: Target, title: "Engineering Focus",
    text: "Preparing for SWE roles with projects that demonstrate ownership, clean architecture, and measurable product impact." },
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering practical products with full-stack depth."
          description="A pre-final year engineering student who builds complete applications — polished interfaces, dependable services, realtime collaboration, and smart data features."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {points.map((pt, i) => {
            const Icon = pt.icon;
            return (
              <motion.article key={pt.title}
                className="card-glow rounded-2xl p-5 sm:p-6 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                whileHover={{ y: -4 }}>
                <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-cyan-500 to-blue-400" />
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "rgba(6,182,212,0.18)" }} />
                <div className="mb-4 sm:mb-5 flex items-center gap-3">
                  <div className="h-8.5 w-8.5 sm:h-9 sm:w-9 rounded-xl border border-blue-500/20 bg-blue-500/10 flex items-center justify-center shrink-0 text-blue-400">
                    <Icon size={16} />
                  </div>
                  <div className="h-px flex-1 rounded-full opacity-20 bg-gradient-to-r from-cyan-500 to-transparent" />
                </div>
                <h3 className="font-display text-[14.5px] sm:text-[15px] font-semibold text-white">{pt.title}</h3>
                <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm leading-relaxed sm:leading-[1.75] text-[#8e8ea0]">{pt.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
