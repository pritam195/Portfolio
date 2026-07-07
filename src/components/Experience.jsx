import { motion } from "framer-motion";
import { BriefcaseBusiness, CalendarDays, CheckCircle2, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const internshipHighlights = [
  "Built a responsive chatbot widget using React.js and Tailwind CSS with realtime message rendering, input validation, loading states, and a mobile-friendly UI.",
  "Integrated the chatbot frontend with Node.js/Express REST APIs for query dispatch, FAQ-based response matching, fallback handling, and API error-state management."
];

export default function Experience() {
  return (
    <section id="experience" className="relative border-b border-white/10 bg-surface-900/70">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-teal-300/[0.06] to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Internship"
          title="Hands-on internship experience with frontend ownership and API integration."
          description="A quick role snapshot with company, timeline, stack, and implementation work recruiters can scan fast."
        />

        <motion.div
          className="mx-auto max-w-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <article className="panel relative overflow-hidden rounded-xl p-6 sm:p-8">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-300 via-amber-300 to-transparent" />
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-teal-300/12 blur-3xl" />
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg border border-teal-300/40 bg-teal-300/10 p-3 text-teal-200">
                  <BriefcaseBusiness size={24} />
                </div>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">
                  Software Development Engineer Intern
                </p>
                <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                  Monarch Techno Engineering Solutions Pvt. Ltd.
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-zinc-400 sm:grid-cols-2 lg:grid-cols-1">
                  <span className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-2">
                    <MapPin size={16} /> Navi Mumbai
                  </span>
                  <span className="inline-flex items-center gap-2 rounded border border-white/10 bg-white/[0.04] px-3 py-2">
                    <CalendarDays size={16} /> Jun 2026
                  </span>
                </div>
              </div>

              <div>
                <div className="mb-5 flex flex-wrap gap-2">
                  {["React.js", "Tailwind CSS", "Node.js", "Express APIs"].map((item) => (
                    <span key={item} className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-bold text-amber-100">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="grid gap-4 leading-7 text-zinc-300">
                  {internshipHighlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                      <CheckCircle2 className="mt-1 shrink-0 text-teal-300" size={18} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}

