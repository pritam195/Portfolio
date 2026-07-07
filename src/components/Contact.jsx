import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { resumePath, socialLinks } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";

const directLinks = [
  { label: "Email", value: "chavanpritam172@gmail.com", href: socialLinks.email, icon: Mail },
  { label: "Phone", value: "+91 91302 38226", href: socialLinks.phone, icon: Phone },
  { label: "Location", value: "Mumbai, Maharashtra", href: null, icon: MapPin },
  { label: "GitHub", value: "pritam195", href: socialLinks.github, icon: Github },
  { label: "LinkedIn", value: "chavanpritam", href: socialLinks.linkedin, icon: Linkedin },
  { label: "Resume", value: "Download PDF", href: resumePath, icon: Download, download: true }
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

    setStatus("Thanks for reaching out! I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="relative">
      <div className="section-divider" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Open to SDE, full stack, and ML internship opportunities."
          description="Use the form below or reach out directly through any of these channels."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Direct links */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-white mb-4">Direct Links</h3>
            <div className="grid gap-2">
              {directLinks.map(({ label, value, href, icon: Icon, download }) => {
                const content = (
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-[#7c7c8a]">{label}</p>
                      <p className="text-sm font-medium text-white truncate">{value}</p>
                    </div>
                    {href && (
                      <span className="ml-auto text-xs text-[#7c7c8a] shrink-0">↗</span>
                    )}
                  </div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    download={download}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="focus-ring card rounded-xl p-3.5 block transition hover:-translate-y-0.5"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label} className="card rounded-xl p-3.5">
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            className="card rounded-xl p-6 sm:p-7"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <h3 className="text-sm font-semibold text-white mb-5">Send a Message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[#7c7c8a]">Name</span>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="focus-ring w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4a4a5a] transition focus:border-blue-500/50 focus:bg-blue-500/5 outline-none"
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-medium text-[#7c7c8a]">Email</span>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="focus-ring w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4a4a5a] transition focus:border-blue-500/50 focus:bg-blue-500/5 outline-none"
                />
              </label>
            </div>
            <label className="mt-4 grid gap-1.5">
              <span className="text-xs font-medium text-[#7c7c8a]">Message</span>
              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about the opportunity..."
                className="focus-ring w-full resize-none rounded-lg border border-white/[0.08] bg-white/[0.03] px-3.5 py-2.5 text-sm text-white placeholder:text-[#4a4a5a] transition focus:border-blue-500/50 focus:bg-blue-500/5 outline-none"
              />
            </label>
            <div className="mt-5 flex items-center gap-4">
              <button
                type="submit"
                className="btn-primary focus-ring rounded-lg"
              >
                Send Message <Send size={15} />
              </button>
              {status && (
                <p className="text-xs text-[#7c7c8a]">{status}</p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
