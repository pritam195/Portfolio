import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { resumePath, socialLinks } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const directLinks = [
  { label: "Email", href: socialLinks.email, icon: Mail },
  { label: "Phone", href: socialLinks.phone, icon: Phone },
  { label: "GitHub", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Resume", href: resumePath, icon: Download, download: true }
];

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name")?.toString().trim();
    const email = data.get("email")?.toString().trim();
    const message = data.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill in all fields before sending.");
      return;
    }

    setStatus("Thanks! This demo form is ready to connect to EmailJS, Formspree, or a backend endpoint.");
    form.reset();
  };

  return (
    <section id="contact" className="border-b border-white/10">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to SDE, full stack, and ML internship opportunities."
          description="Use the form for the site experience, or use the direct links for fast recruiter screening."
        />

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="panel rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-black text-white">Direct links</h3>
            <p className="mt-3 leading-7 text-zinc-400">
              Keep these visible for quick recruiter screening and easy follow-up.
            </p>
            <div className="mt-6 grid gap-3">
              {directLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.download}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-4 py-3 text-zinc-200 transition hover:border-teal-300/50 hover:bg-white/[0.07] hover:text-white"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Icon size={19} />
                      {link.label}
                    </span>
                    <span className="text-sm text-zinc-500">Open</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="panel rounded-lg p-6 sm:p-8"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                Name
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="focus-ring rounded border border-white/10 bg-black/30 px-4 py-3 text-base font-normal text-white placeholder:text-zinc-600"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-zinc-200">
                Email
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="focus-ring rounded border border-white/10 bg-black/30 px-4 py-3 text-base font-normal text-white placeholder:text-zinc-600"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-zinc-200">
              Message
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the opportunity..."
                className="focus-ring min-h-40 resize-y rounded border border-white/10 bg-black/30 px-4 py-3 text-base font-normal text-white placeholder:text-zinc-600"
              />
            </label>
            <button
              type="submit"
              className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-teal-300 px-5 py-3 font-black text-black transition hover:bg-teal-200 sm:w-auto"
            >
              Send Message <Send size={18} />
            </button>
            {status ? <p className="mt-4 text-sm text-zinc-400">{status}</p> : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
