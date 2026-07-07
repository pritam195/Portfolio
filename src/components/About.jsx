import { motion } from "framer-motion";
import { GraduationCap, Target, Zap } from "lucide-react";
import { academicProfile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const points = [
  {
    icon: GraduationCap,
    title: "Pre-final Year at VJTI",
    text: `${academicProfile.degree} with a ${academicProfile.minor}. Current CGPA: ${academicProfile.cgpa}.`
  },
  {
    icon: Zap,
    title: "Builder Mindset",
    text: "Comfortable taking products from frontend UX to backend APIs, realtime events, authentication, data workflows, and deployment."
  },
  {
    icon: Target,
    title: "Software Engineering Focus",
    text: "Preparing for software engineering roles with projects that show ownership, clean architecture, and measurable product impact."
  }
];

export default function About() {
  return (
    <section id="about" className="border-b border-white/10 bg-surface-900/65">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering practical products with full-stack depth and AI curiosity."
          description="I am a pre-final year engineering student who likes building complete applications: polished interfaces, dependable services, realtime collaboration, and smart data-backed features."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                className="panel group rounded-xl p-6 transition hover:-translate-y-1 hover:border-teal-300/40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="mb-5 inline-flex rounded-lg border border-teal-300/30 bg-teal-300/10 p-3 text-teal-200 transition group-hover:border-teal-200/60 group-hover:bg-teal-300/15">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{point.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

