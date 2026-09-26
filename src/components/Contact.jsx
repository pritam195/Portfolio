import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { resumePath, socialLinks } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const links = [
  { label: "Email",    value: "chavanpritam172@gmail.com", href: socialLinks.email,    Icon: Mail,     dl: false },
  { label: "Phone",    value: "+91 91302 38226",           href: socialLinks.phone,    Icon: Phone,    dl: false },
  { label: "Location", value: "Mumbai, Maharashtra",       href: null,                 Icon: MapPin,   dl: false },
  { label: "GitHub",   value: "pritam195",                 href: socialLinks.github,   Icon: Github,   dl: false },
  { label: "LinkedIn", value: "chavanpritam",              href: socialLinks.linkedin, Icon: Linkedin, dl: false },
  { label: "Resume",   value: "Google Drive PDF",          href: resumePath,           Icon: Download, dl: false },
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name    = fd.get("name")?.toString().trim();
    const email   = fd.get("email")?.toString().trim();
    const message = fd.get("message")?.toString().trim();
    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Thanks for reaching out! I'll get back to you soon.");
    e.currentTarget.reset();
  };

  const inputCls =
    "focus-ring w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 sm:px-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-[#444458] transition-all duration-200 outline-none focus:border-cyan-500/50 focus:bg-cyan-500/[0.04] focus:shadow-[0_0_0_3px_rgba(6,182,212,0.12)]";

  return (
    <section id="contact" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to SDE, full-stack, and ML internship opportunities."
          description="Reach out through any channel below or send a message directly."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.25fr]">

          {/* Direct links */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#5a5a78] mb-3.5">Direct Links</p>
            <div className="grid gap-2">
              {links.map(({ label, value, href, Icon, dl }) => {
                const inner = (
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon size={13} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] sm:text-[11px] text-[#555570]">{label}</p>
                      <p className="text-[12px] sm:text-[13px] font-medium text-white truncate">{value}</p>
                    </div>
                    {href && <span className="ml-auto text-[11px] text-[#444458] shrink-0">↗</span>}
                  </div>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    download={dl || undefined}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring card-glow rounded-xl p-3 sm:p-3.5 block transition-all duration-200 hover:-translate-y-px"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="card-glow rounded-xl p-3 sm:p-3.5">{inner}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card-glow rounded-2xl p-5 sm:p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            {/* Gradient top bar */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent" />

            <p className="font-display text-[14px] sm:text-[15px] font-bold text-white mb-5 sm:mb-6">Send a Message</p>

            <div className="grid gap-3.5 sm:gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#666680]">Name</span>
                <input name="name" type="text" placeholder="Your name" className={inputCls} />
              </label>
              <label className="grid gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-medium text-[#666680]">Email</span>
                <input name="email" type="email" placeholder="you@example.com" className={inputCls} />
              </label>
            </div>

            <label className="mt-3.5 sm:mt-4 grid gap-1.5">
              <span className="text-[10px] sm:text-[11px] font-medium text-[#666680]">Message</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Tell me about the opportunity..."
                className={`${inputCls} resize-none`}
              />
            </label>

            <div className="mt-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button type="submit" className="btn-primary focus-ring text-xs sm:text-sm py-2.5">
                Send <Send size={14} />
              </button>
              {status && (
                <motion.p
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-[11px] sm:text-[12px] text-[#8e8ea0] text-center sm:text-left"
                >
                  {status}
                </motion.p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
