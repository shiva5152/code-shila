"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Globe, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

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

const countryCodes = [
  { name: "India",        code: "+91",  flag: "🇮🇳", min: 10, max: 10 },
  { name: "USA",          code: "+1",   flag: "🇺🇸", min: 10, max: 10 },
  { name: "UK",           code: "+44",  flag: "🇬🇧", min: 10, max: 10 },
  { name: "Australia",    code: "+61",  flag: "🇦🇺", min: 9,  max: 9  },
  { name: "Canada",       code: "+1",   flag: "🇨🇦", min: 10, max: 10 },
  { name: "UAE",          code: "+971", flag: "🇦🇪", min: 9,  max: 9  },
  { name: "Singapore",    code: "+65",  flag: "🇸🇬", min: 8,  max: 8  },
  { name: "Germany",      code: "+49",  flag: "🇩🇪", min: 10, max: 11 },
  { name: "France",       code: "+33",  flag: "🇫🇷", min: 9,  max: 9  },
  { name: "Netherlands",  code: "+31",  flag: "🇳🇱", min: 9,  max: 9  },
  { name: "Japan",        code: "+81",  flag: "🇯🇵", min: 10, max: 11 },
  { name: "Brazil",       code: "+55",  flag: "🇧🇷", min: 10, max: 11 },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", min: 9,  max: 9  },
  { name: "South Africa", code: "+27",  flag: "🇿🇦", min: 9,  max: 9  },
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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", selectedCountry: "India", phone: "", project: "", message: "" });

  const countryData = countryCodes.find((c) => c.name === form.selectedCountry) ?? countryCodes[0];
  const phoneDigits = form.phone.replace(/\D/g, "").length;
  const phoneIsInvalid = form.phone.length > 0 && (phoneDigits < countryData.min || phoneDigits > countryData.max);
  const phoneHint = countryData.min === countryData.max ? `${countryData.min} digits` : `${countryData.min}–${countryData.max} digits`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Block if phone provided but invalid
    if (form.phone && phoneIsInvalid) {
      setPhoneTouched(true);
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, countryCode: countryData.code }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setPhoneTouched(false);
      setForm({ name: "", email: "", selectedCountry: "India", phone: "", project: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
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

              {/* Phone with country code */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-[#9CA3AF] text-xs uppercase tracking-widest">
                    Phone Number <span className="normal-case text-[#9CA3AF]/50">(optional)</span>
                  </label>
                  {/* Live digit hint */}
                  {form.phone.length > 0 && (
                    <span className={`text-xs font-mono ${phoneIsInvalid && phoneTouched ? "text-red-400" : "text-[#9CA3AF]/60"}`}>
                      {phoneDigits}/{phoneHint}
                    </span>
                  )}
                </div>
                <div className={`flex rounded-lg overflow-hidden border transition-colors ${
                  phoneIsInvalid && phoneTouched
                    ? "border-red-500/60 focus-within:border-red-500"
                    : "border-[#1E1535] focus-within:border-[#7C3AED]/60"
                }`}>
                  <select
                    value={form.selectedCountry}
                    onChange={(e) => setForm({ ...form, selectedCountry: e.target.value, phone: "" })}
                    className="bg-[#07050F] text-white text-sm px-3 py-3 focus:outline-none appearance-none border-r border-[#1E1535] cursor-pointer shrink-0"
                    style={{ width: "110px" }}
                  >
                    {countryCodes.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder={`e.g. ${"0".repeat(countryData.min)}`}
                    value={form.phone}
                    onBlur={() => form.phone.length > 0 && setPhoneTouched(true)}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value.replace(/[^0-9\s\-()]/g, "") });
                      if (phoneTouched) setPhoneTouched(true);
                    }}
                    className="bg-[#07050F] flex-1 px-4 py-3 text-white text-sm placeholder:text-[#9CA3AF]/50 focus:outline-none"
                  />
                </div>
                {/* Error message */}
                {phoneIsInvalid && phoneTouched && (
                  <p className="text-red-400 text-xs flex items-center gap-1.5 mt-0.5">
                    <AlertCircle size={12} />
                    {countryData.name} numbers must be {phoneHint} — you entered {phoneDigits}.
                  </p>
                )}
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

              {/* Error message */}
              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3">
                  <AlertCircle size={16} className="shrink-0" />
                  {errorMsg}
                </div>
              )}

              {/* Success message */}
              {status === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-4 py-3">
                  <CheckCircle size={16} className="shrink-0" />
                  Message sent! I&apos;ll get back to you within 24 hours.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="flex items-center justify-center gap-2 bg-[#7C3AED] hover:bg-[#6D28D9] disabled:opacity-60 disabled:cursor-not-allowed text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#7C3AED]/30 hover:scale-[1.02] disabled:hover:scale-100"
              >
                {status === "loading" && <><Loader2 size={18} className="animate-spin" />Sending...</>}
                {status === "success" && <><CheckCircle size={18} />Message Sent!</>}
                {(status === "idle" || status === "error") && <><Send size={18} />Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

