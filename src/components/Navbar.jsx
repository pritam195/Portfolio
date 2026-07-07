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
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.15, 0.35, 0.6] }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (id) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md focus-ring ${activeSection === id
      ? "text-white"
      : "text-[#7c7c8a] hover:text-white"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#07070a]/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
        }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary"
      >
        {/* Logo */}
        <a href="#home" className="focus-ring rounded text-base font-bold tracking-tight text-white">
          Pritam<span className="text-blue-400">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={linkClass(item.id)}>
              {item.label}
              {activeSection === item.id && (
                <span className="absolute inset-x-2 -bottom-px h-px bg-blue-400 rounded-full" />
              )}
            </a>
          ))}
        </div>

        {/* Resume button */}
        <a
          href={resumePath}
          download
          className="focus-ring hidden rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-200 md:inline-flex"
        >
          Resume
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="focus-ring inline-flex rounded-md border border-white/[0.08] p-2 text-[#7c7c8a] hover:text-white lg:hidden transition"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/[0.06] bg-[#07070a]/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="mx-auto grid max-w-6xl gap-1">
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
              className="focus-ring mt-3 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-sm font-semibold text-blue-300 text-center transition hover:bg-blue-500/15"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
