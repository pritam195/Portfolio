import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="border-b border-white/10 bg-surface-900/70">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Impact-oriented builds across full stack, realtime, ML, and data."
          description="Each project card includes recruiter-friendly context: problem, stack, implementation highlights, GitHub links, and live demos only where available."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`focus-ring rounded border px-4 py-2 text-sm font-bold transition ${
                activeFilter === filter
                  ? "border-teal-300 bg-teal-300 text-black"
                  : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-teal-300/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
