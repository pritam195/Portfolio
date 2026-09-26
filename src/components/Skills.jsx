import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const allSkills = skillGroups.flatMap((g) => g.skills.map((s) => ({ skill: s, group: g.title })));
const chunk = Math.ceil(allSkills.length / 3);
const rows = [allSkills.slice(0, chunk), allSkills.slice(chunk, chunk * 2), allSkills.slice(chunk * 2)];

function MarqueeRow({ items, reverse = false, duration = 28 }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden"
      style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
      <motion.div className="flex gap-2.5 w-max"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ x: { repeat: Infinity, repeatType: "loop", duration, ease: "linear" } }}>
        {doubled.map((item, i) => (
          <span key={i} className="tag flex-shrink-0 whitespace-nowrap py-1.5 px-3 text-[13px] hover:tag-blue transition-all duration-200 cursor-default">
            {item.skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const total = skillGroups.reduce((s, g) => s + g.skills.length, 0);
  return (
    <section id="skills" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for building complete software."
          description={`${skillGroups.length} categories · ${total} technologies across real projects.`}
        />
        <motion.div className="space-y-3"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}>
          {rows.map((row, i) => <MarqueeRow key={i} items={row} reverse={i % 2 === 1} duration={26 + i * 4} />)}
        </motion.div>

        <motion.div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="card-glow rounded-xl px-4 py-3 flex items-center gap-3 group transition-all duration-200 hover:-translate-y-px">
                <div className="h-8 w-8 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition group-hover:bg-blue-500/18">
                  <Icon size={15} />
                </div>
                <div className="min-w-0">
                  <p className="text-[13px] font-medium text-white truncate">{g.title}</p>
                  <p className="text-[11px] text-[#666680]">{g.skills.length} skills</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
