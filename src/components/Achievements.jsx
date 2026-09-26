import { motion } from "framer-motion";
import { achievements } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const ACCENT = { bg: "bg-cyan-500/10", border: "border-cyan-500/22", text: "text-cyan-400", num: "text-cyan-500/30" };

export default function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Achievements"
          title="Hackathons, competitive programming, and community."
          description="Signals that complement the engineering work."
        />

        <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            const acc  = ACCENT;
            return (
              <motion.article
                key={item.title}
                className="card-glow rounded-2xl p-4 sm:p-5 flex gap-3.5 sm:gap-4 group relative overflow-hidden"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
              >
                {/* Big background index number */}
                <span
                  className={`pointer-events-none absolute -bottom-3 -right-2 font-display text-[4rem] sm:text-[5rem] font-black leading-none select-none ${acc.num}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="shrink-0 flex flex-col items-center gap-2 relative z-10">
                  <div className={`h-8 w-8 sm:h-9 sm:w-9 rounded-xl border flex items-center justify-center transition duration-200 group-hover:scale-110 ${acc.bg} ${acc.border} ${acc.text}`}>
                    <Icon size={15} />
                  </div>
                </div>

                {/* Text */}
                <div className="min-w-0 relative z-10">
                  <h3 className="font-display text-[13.5px] sm:text-[14px] font-bold text-white leading-snug">{item.title}</h3>
                  <p className="mt-1 text-[11.5px] sm:text-[12px] leading-relaxed sm:leading-5 text-[#7a7a90]">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
