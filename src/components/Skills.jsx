import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Skills() {
  const totalSkills = skillGroups.reduce((sum, group) => sum + group.skills.length, 0);

  return (
    <section id="skills" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building complete software."
          description={`${skillGroups.length} skill categories · ${totalSkills} tools and technologies used across real projects.`}
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3 mt-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                className="card rounded-xl p-5 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 transition group-hover:bg-blue-500/15">
                      <Icon size={16} />
                    </div>
                    <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                  </div>
                  <span className="text-xs text-[#7c7c8a] font-medium tabular-nums">
                    {group.skills.length}
                  </span>
                </div>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tag transition hover:border-blue-500/30 hover:text-blue-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
