"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Clock, Star } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid development cycles without sacrificing quality.",
  },
  {
    icon: Shield,
    title: "Production-Grade Code",
    description: "Built with best practices, security, and scalability in mind.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "Clear timelines, consistent communication, no surprises.",
  },
  {
    icon: Star,
    title: "Real-World Experience",
    description: "3+ years shipping features at scale — not just side projects.",
  },
];

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "SDE", label: "at Shiprocket" },
  { value: "100%", label: "Client Focus" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-[#060B18]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag mb-5 inline-flex">About CodeShila</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Engineering Quality,{" "}
              <span className="gradient-text">Delivered Fast</span>
            </h2>
            <p className="text-[#8899AA] text-base leading-relaxed mb-5">
              Hi, I&apos;m <span className="text-white font-medium">Shiva Shah</span> — a Software
              Development Engineer at{" "}
              <span className="text-white font-medium">Shiprocket</span>, one of India&apos;s
              leading e-commerce logistics platforms. With 3+ years of hands-on experience building
              and scaling production systems, I started CodeShila to bring that same engineering
              rigour to freelance clients.
            </p>
            <p className="text-[#8899AA] text-base leading-relaxed mb-8">
              Whether you need a sleek landing page, a full-stack web application, a mobile app, or
              an AI-powered product — I bring deep technical expertise and a product mindset to
              every engagement. You get clean code, clear communication, and software that
              actually ships.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="flex items-start gap-3 p-4 bg-[#0D1526] border border-[#1A2A40] rounded-xl"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#0057FF]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <h.icon size={16} className="text-[#0057FF]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold mb-0.5">{h.title}</p>
                    <p className="text-[#8899AA] text-xs leading-snug">{h.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            {/* Glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#0057FF]/20 to-[#00B4FF]/10 rounded-3xl blur-2xl" />

            <div className="relative bg-[#0D1526] border border-[#1A2A40] rounded-2xl p-8">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {stats.map((s) => (
                  <div key={s.label} className="text-center p-4 bg-[#060B18] rounded-xl border border-[#1A2A40]">
                    <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
                    <p className="text-[#8899AA] text-xs">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Current role card */}
              <div className="bg-[#060B18] rounded-xl border border-[#1A2A40] p-5">
                <p className="text-[#8899AA] text-xs uppercase tracking-widest mb-3">Currently</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0057FF] to-[#00B4FF] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    SR
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Software Development Engineer</p>
                    <p className="text-[#8899AA] text-xs">Shiprocket · Full-time</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["React", "Node.js", "TypeScript", "AWS"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[#8899AA] border border-[#1A2A40] rounded-full px-2.5 py-0.5 bg-[#1A2A40]/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
