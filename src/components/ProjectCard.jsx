import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const visibleTechCount = 6;

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const visibleTech = project.techStack.slice(0, visibleTechCount);
  const hiddenTechCount = project.techStack.length - visibleTech.length;
  const topHighlights = project.highlights.slice(0, 3);

  return (
    <motion.article
      layout
      className="card rounded-xl overflow-hidden flex flex-col h-full group"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Top accent */}
      <div className="h-px bg-gradient-to-r from-blue-500 via-blue-400/40 to-transparent" />

      <div className="p-6 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-400 mb-1.5">
              {project.subtitle}
            </p>
            <h3 className="text-xl font-bold text-white leading-tight">{project.title}</h3>
          </div>
          <div className="shrink-0 h-10 w-10 rounded-lg border border-blue-500/20 bg-blue-500/10 flex items-center justify-center text-blue-400">
            <Icon size={20} />
          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.categories.map((cat) => (
            <span key={cat} className="tag tag-blue">{cat}</span>
          ))}
        </div>

        {/* Description */}
        <p className="text-sm leading-6 text-[#7c7c8a] mb-5">{project.description}</p>

        {/* Highlights */}
        <ul className="grid gap-2 mb-5">
          {topHighlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-xs text-[#9d9db0] leading-5">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {visibleTech.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="tag">+{hiddenTechCount}</span>
          )}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost flex-1 text-xs py-2 focus-ring rounded-lg"
          >
            <Github size={15} /> GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="btn-primary flex-1 text-xs py-2 focus-ring rounded-lg"
            >
              Live Demo <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
