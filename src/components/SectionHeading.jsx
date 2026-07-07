import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center lg:mb-14"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5 }}
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-300">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-400 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
