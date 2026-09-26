import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, resumePath } from "../data/portfolio.js";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = navItems.map((i) => document.getElementById(i.id)).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target?.id) setActive(vis.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-all duration-500 ${scrolled ? "px-4 pt-3" : "px-5 sm:px-8 lg:px-10"}`}>
        <nav className={`mx-auto flex h-14 max-w-5xl items-center justify-between transition-all duration-500 ${
          scrolled
            ? "rounded-2xl border border-white/[0.08] bg-[#060609]/88 px-5 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}>
          <a href="#home" className="focus-ring rounded font-display text-[15px] font-bold tracking-tight text-white">
            Pritam<span className="gradient-text-cyan">.</span>
          </a>

          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium rounded-xl transition-colors duration-200 focus-ring ${
                  active === item.id ? "text-white" : "text-[#666680] hover:text-[#c0c0d8]"
                }`}>
                {active === item.id && (
                  <motion.span layoutId="nav-bg"
                    className="absolute inset-0 rounded-xl bg-white/[0.07] border border-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href={resumePath} target="_blank" rel="noreferrer"
              className="hidden focus-ring rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-[13px] font-semibold text-blue-300 transition-all hover:border-blue-400/50 hover:bg-blue-500/15 hover:-translate-y-px md:inline-flex">
              Resume
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu"
              className="focus-ring inline-flex rounded-xl border border-white/[0.08] bg-white/[0.03] p-2 text-[#666680] hover:text-white lg:hidden">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div key="mobile-menu"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="mx-4 mt-2 rounded-2xl border border-white/[0.08] bg-[#060609]/96 px-4 py-4 shadow-[0_12px_48px_rgba(0,0,0,0.6)] backdrop-blur-2xl lg:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    active === item.id ? "bg-white/[0.07] text-white" : "text-[#666680] hover:bg-white/[0.04] hover:text-white"
                  }`}>
                  {item.label}
                </a>
              ))}
              <a href={resumePath} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}
                className="mt-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-center text-sm font-semibold text-blue-300 transition hover:bg-blue-500/15">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
