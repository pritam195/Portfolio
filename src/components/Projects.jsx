import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projectFilters, projects } from "../data/portfolio.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Projects"
          title="Selected builds with engineering proof."
          description="Full-stack, realtime, and AI/data projects with implementation details that matter."
        />

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`focus-ring rounded-lg border px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? "border-blue-500 bg-blue-500/15 text-blue-200"
                  : "border-white/[0.08] text-[#7c7c8a] hover:border-blue-500/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div layout className="grid gap-4 lg:grid-cols-2">
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
