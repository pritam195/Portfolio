import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mb-8 sm:mb-12 lg:mb-16"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-5">
        <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full" />
        <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-blue-400">{eyebrow}</p>
      </div>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-[2.75rem] font-bold tracking-tight text-white max-w-2xl leading-[1.18] sm:leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed sm:leading-7 text-[#8e8ea0] sm:text-[17px] max-w-2xl">{description}</p>
      )}
    </motion.div>
  );
}
