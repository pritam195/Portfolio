import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-blue-500" />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">{eyebrow}</p>
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl max-w-2xl leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#7c7c8a] sm:text-lg max-w-2xl">{description}</p>
      ) : null}
    </motion.div>
  );
}
