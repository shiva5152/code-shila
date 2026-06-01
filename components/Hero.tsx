"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="mesh-blob blob-1 bg-[#0057FF] w-[650px] h-[650px]"
          style={{ top: "-150px", left: "-150px" }}
        />
        <div
          className="mesh-blob blob-2 bg-[#00B4FF] w-[500px] h-[500px]"
          style={{ top: "15%", right: "-150px" }}
        />
        <div
          className="mesh-blob blob-3 bg-[#0A2E6E] w-[750px] h-[750px]"
          style={{ bottom: "-250px", left: "25%" }}
        />
      </div>

      {/* Noise/overlay for depth */}
      <div className="absolute inset-0 bg-[#060B18]/65" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-20">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex"
        >
          <span className="section-tag">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Freelance Projects
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          Solutions That{" "}
          <span className="gradient-text">Scale</span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#8899AA] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Custom software, web apps, mobile apps &amp; AI solutions —
          built with precision and designed to grow with your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="#services"
            className="bg-[#0057FF] hover:bg-[#0046CC] text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-[#0057FF]/30 w-full sm:w-auto text-center"
          >
            View Services
          </Link>
          <Link
            href="#contact"
            className="border border-[#1A2A40] hover:border-[#0057FF]/60 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:bg-[#0057FF]/10 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            Let&apos;s Talk <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col sm:flex-row gap-8 justify-center items-center"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "SDE", label: "@ Shiprocket" },
            { value: "6+", label: "Services Offered" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-[#8899AA] text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2 text-[#8899AA] text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-5 h-8 border border-[#1A2A40] rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-[#0057FF] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
