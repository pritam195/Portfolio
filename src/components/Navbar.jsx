import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, resumePath } from "../data/portfolio.js";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (id) =>
    `rounded px-3 py-2 text-sm font-medium transition focus-ring ${
      activeSection === id
        ? "bg-teal-300/10 text-teal-200"
        : "text-zinc-300 hover:bg-white/[0.06] hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled ? "border-white/10 bg-surface-950/88 shadow-lg shadow-black/20 backdrop-blur-xl" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Primary">
        <a href="#home" className="focus-ring rounded text-lg font-black tracking-tight text-white">
          Pritam<span className="text-teal-300">.</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={resumePath}
          download
          className="focus-ring hidden rounded border border-teal-300/40 bg-teal-300/10 px-4 py-2 text-sm font-semibold text-teal-100 transition hover:border-teal-200 hover:bg-teal-300/20 md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          className="focus-ring inline-flex rounded border border-white/10 p-2 text-zinc-200 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-surface-950/96 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={linkClass(item.id)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={resumePath}
              download
              className="focus-ring mt-2 rounded border border-teal-300/40 bg-teal-300/10 px-3 py-2 text-sm font-semibold text-teal-100"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
