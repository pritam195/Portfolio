import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const internshipHighlights = [
  "Developed a responsive chatbot widget with voice-based query input and cross-device layout support.",
  "Built Node.js and Express REST APIs for query processing and keyword matching across 35+ FAQs, with RAG fallback for unmatched queries using relevant company documentation and structured error handling.",
  "Designed a custom IP-based fixed-window rate limiter using an in-memory hash map to track request counts and timestamps, limiting each client to 10 requests per minute and returning HTTP 429 responses with retry intervals."
];

const techStack = ["React.js", "Node.js", "Express", "RAG", "REST APIs"];

export default function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Hands-on internship with frontend ownership and API integration."
          description="A focused role snapshot with company, timeline, stack, and implementation details."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <article className="card rounded-xl overflow-hidden">
            {/* Top accent bar */}
            <div className="h-px bg-gradient-to-r from-blue-500 via-blue-400/50 to-transparent" />

            <div className="p-6 sm:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                {/* Left: role info */}
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/25 bg-blue-500/10 text-blue-400 mb-5">
                    <BriefcaseBusiness size={22} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 mb-1">
                    Software Development Engineer Intern
                  </p>
                  <h3 className="text-xl font-bold text-white sm:text-2xl leading-tight">
                    Monarch Techno Engineering Solutions
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="tag flex items-center gap-1.5">
                      <MapPin size={12} /> Remote
                    </span>
                    <span className="tag flex items-center gap-1.5">
                      <CalendarDays size={12} /> Jun 2026
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {techStack.map((item) => (
                      <span key={item} className="tag tag-blue">{item}</span>
                    ))}
                  </div>
                </div>

                {/* Right: highlights */}
                <div className="flex flex-col gap-3">
                  {internshipHighlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-3 rounded-lg border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <CheckCircle2 className="mt-0.5 shrink-0 text-blue-400" size={16} />
                      <p className="text-sm leading-6 text-[#9d9db0]">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
