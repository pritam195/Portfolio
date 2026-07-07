import { motion } from "framer-motion";
import { GraduationCap, Target, Zap } from "lucide-react";
import { academicProfile } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const points = [
  {
    icon: GraduationCap,
    title: "Pre-final Year at VJTI",
    text: `${academicProfile.degree} with a ${academicProfile.minor}. CGPA: ${academicProfile.cgpa}.`
  },
  {
    icon: Zap,
    title: "Builder Mindset",
    text: "Comfortable taking products from frontend UX to backend APIs, realtime events, authentication, data workflows, and deployment."
  },
  {
    icon: Target,
    title: "Engineering Focus",
    text: "Preparing for SWE roles with projects that demonstrate ownership, clean architecture, and measurable product impact."
  }
];

export default function About() {
  return (
    <section id="about" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Engineering practical products with full-stack depth."
          description="A pre-final year engineering student who likes building complete applications — polished interfaces, dependable services, realtime collaboration, and smart data features."
        />

        <div className="grid gap-4 md:grid-cols-3 mt-4">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.article
                key={point.title}
                className="card rounded-xl p-6"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                {/* blue left accent bar */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                </div>
                <h3 className="text-base font-bold text-white">{point.title}</h3>
                <p className="mt-2.5 text-sm leading-7 text-[#7c7c8a]">{point.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
