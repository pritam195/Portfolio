import { motion } from "framer-motion";
import { Github } from "lucide-react";

const ICON_CLS = "bg-cyan-500/10 border-cyan-500/20 text-cyan-400";

export default function ProjectCard({ project, index }) {
  const Icon = project.icon;
  const visible = project.techStack.slice(0, 5);
  const extra   = project.techStack.length - visible.length;

  return (
    <motion.article
      layout
      className="card-glow rounded-2xl overflow-hidden flex flex-col h-full group"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
    >
      {/* ── Gradient top bar ── */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Header: title + icon */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="min-w-0 flex-1">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#666680] mb-1">
              {project.subtitle}
            </p>
            <h3 className="font-display text-lg sm:text-[19px] font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
          {/* Icon box */}
          <div className={`shrink-0 h-9 w-9 sm:h-10 sm:w-10 rounded-xl border flex items-center justify-center transition group-hover:scale-110 duration-300 ${ICON_CLS}`}>
            <Icon size={17} />
          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.categories.map((cat) => (
            <span key={cat} className="tag tag-cyan text-[10px] sm:text-[11px]">{cat}</span>
          ))}
        </div>

        {/* Description */}
        <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-[#7a7a90] mb-4.5">{project.description}</p>

        {/* Highlights */}
        <ul className="grid gap-2 mb-5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2.5 text-[11.5px] sm:text-[12px] text-[#8e8ea0] leading-[1.55]">
              <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {visible.map((t) => <span key={t} className="tag text-[10px] sm:text-[11px]">{t}</span>)}
          {extra > 0 && <span className="tag text-[10px] sm:text-[11px]">+{extra}</span>}
        </div>

        {/* Actions */}
        <div className="mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost focus-ring w-full text-[12.5px] sm:text-[13px] py-2 rounded-xl"
          >
            <Github size={14} /> View on GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
