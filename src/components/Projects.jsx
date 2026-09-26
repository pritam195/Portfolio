import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) => p.categories.includes(active));
  }, [active]);

  return (
    <section id="projects" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds with engineering proof."
          description="Full-stack, realtime, and AI/data projects with implementation details that matter."
        />
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 relative overflow-x-auto pb-1 no-scrollbar">
          {projectFilters.map((f) => (
            <button key={f} type="button" onClick={() => setActive(f)}
              className={`relative focus-ring shrink-0 rounded-xl border px-3.5 sm:px-4 py-1.5 text-[11px] sm:text-[12px] font-semibold transition-all duration-200 ${
                active === f ? "border-transparent text-white" : "border-white/[0.08] text-[#666680] hover:border-blue-500/30 hover:text-white"
              }`}>
              {active === f && (
                <motion.span layoutId="filter-pill"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/80 to-cyan-500/80"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }} />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>
        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => <ProjectCard key={project.title} project={project} index={i} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
