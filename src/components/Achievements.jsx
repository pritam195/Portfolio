import { motion } from "framer-motion";
import { achievements } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

export default function Achievements() {
  return (
    <section id="achievements" className="border-b border-white/10 bg-surface-900/70">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Competitive programming, hackathons, mentorship, and team discipline."
          description="A snapshot of the signals that complement the project work."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.article
                key={achievement.title}
                className="panel rounded-lg p-6 transition hover:-translate-y-1 hover:border-amber-300/40"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <div className="mb-5 inline-flex rounded border border-amber-300/30 bg-amber-300/10 p-3 text-amber-200">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{achievement.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
