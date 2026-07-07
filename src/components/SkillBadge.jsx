export default function SkillBadge({ children }) {
  return (
    <span className="rounded border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-teal-300/60 hover:bg-teal-300/10 hover:text-teal-100">
      {children}
    </span>
  );
}
