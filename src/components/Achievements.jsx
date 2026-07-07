import { motion } from "framer-motion";
import { achievements } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathons, competitive programming, and community."
          description="Signals that complement the project work."
        />

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.article
                key={achievement.title}
                className="card rounded-xl p-5 group flex gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {/* Index number + icon */}
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <span className="text-xs font-bold text-[#7c7c8a] tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="h-8 w-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition group-hover:bg-blue-500/15">
                    <Icon size={16} />
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-white leading-snug">{achievement.title}</h3>
                  <p className="mt-1.5 text-xs leading-5 text-[#7c7c8a]">{achievement.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
