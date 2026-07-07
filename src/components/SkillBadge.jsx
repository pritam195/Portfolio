export default function SkillBadge({ children }) {
  return (
    <span className="tag transition hover:border-blue-500/30 hover:text-blue-300">
      {children}
    </span>
  );
}
