"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Globe, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "shivashah5152@gmail.com",
    href: "mailto:shivashah5152@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/shiva5152",
    href: "https://www.linkedin.com/in/shiva5152/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/shiva5152",
    href: "https://github.com/shiva5152",
  },
  {
    icon: Globe,
    label: "Personal Site",
    value: "shivashah.in",
    href: "https://www.shivashah.in/",
  },
];

const projectTypes = [
  "Web App",
  "Mobile App",
  "Static Site / Landing Page",
  "Portfolio Website",
  "Custom Software",
  "AI / Agentic App",
  "Other",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", project: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[CodeShila] New Project Inquiry — ${form.project || "General"}`);
    const body = encodeURIComponent(
      `Hi Shiva,\n\nName: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.project}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:shivashah5152@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Fill in the details below and I&apos;ll get back to you
            within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact links (left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-4 justify-center"
          >
            <h3 className="text-white font-semibold text-xl mb-2">Reach out directly</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed mb-4">
              Prefer a direct conversation? You can reach me through any of these channels.
              I&apos;m usually responsive within a few hours.
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#0F0A1D] border border-[#1E1535] rounded-xl hover:border-[#7C3AED]/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#7C3AED]/15 flex items-center justify-center shrink-0">
                  <link.icon size={18} className="text-[#7C3AED]" />
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-xs">{link.label}</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#EC4899] transition-colors">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form (right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#0F0A1D] border border-[#1E1535] rounded-2xl p-8 flex flex-col gap-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                    Your Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-[#07050F] border border-[#1E1535] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-[#07050F] border border-[#1E1535] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#7C3AED]/60 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                  Project Type
                </label>
                <select
                  value={form.project}
                  onChange={(e) => setForm({ ...form, project: e.target.value })}
                  className="bg-[#07050F] border border-[#1E1535] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#7C3AED]/60 transition-colors appearance-none"
                >
                  <option value="">Select a service...</option>
                  {projectTypes.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                  Tell Me About Your Project
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Briefly describe what you'd like to build, your timeline, and any other relevant details..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-[#07050F] border border-[#1E1535] rounded-lg px-4 py-3 text-white text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none focus:border-[#7C3AED]/60 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:scale-[1.02]"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={18} />
                    Opening your email client...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

