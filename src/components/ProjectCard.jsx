import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SkillBadge from "./SkillBadge.jsx";

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <motion.article
      layout
      className="panel group relative flex h-full flex-col overflow-hidden rounded-lg p-5 transition hover:-translate-y-1 hover:border-teal-300/40 sm:p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-amber-300 to-teal-300 opacity-70" />
      <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-teal-300/10 blur-3xl transition group-hover:bg-teal-300/20" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{project.subtitle}</p>
          <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.categories.map((category) => (
              <span key={category} className="rounded border border-amber-300/25 bg-amber-300/10 px-2.5 py-1 text-xs font-bold text-amber-100">
                {category}
              </span>
            ))}
          </div>
        </div>
        <span className="rounded border border-teal-300/30 bg-teal-300/10 p-3 text-teal-200">
          <Icon size={24} />
        </span>
      </div>

      <p className="relative mt-4 leading-7 text-zinc-400">{project.description}</p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <SkillBadge key={tech}>{tech}</SkillBadge>
        ))}
      </div>

      <ul className="relative mt-6 grid gap-3 text-sm leading-6 text-zinc-300">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition hover:border-teal-300/60 hover:bg-white/[0.06]"
        >
          <Github size={17} /> GitHub
        </a>
        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-bold text-black transition hover:bg-teal-200"
          >
            Live Demo <ExternalLink size={17} />
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
