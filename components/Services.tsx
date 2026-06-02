"use client";

import { motion, Variants } from "framer-motion";
import { Globe, Smartphone, Layout, Briefcase, Code2, Sparkles, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web App Development",
    description:
      "Full-stack web applications built with modern frameworks — scalable, performant, and production-ready.",
    features: ["React / Next.js", "Node.js backends", "REST & GraphQL APIs", "Cloud deployment"],
    iconBg: "bg-[#7C3AED]/15",
    iconColor: "text-[#7C3AED]",
    hoverBorder: "hover:border-[#7C3AED]/40",
    hoverGlow: "hover:shadow-[#7C3AED]/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native — one codebase, native performance on iOS & Android.",
    features: ["React Native", "iOS & Android", "Push notifications", "Offline support"],
    iconBg: "bg-[#EC4899]/15",
    iconColor: "text-[#EC4899]",
    hoverBorder: "hover:border-[#EC4899]/40",
    hoverGlow: "hover:shadow-[#EC4899]/10",
  },
  {
    icon: Layout,
    title: "Static Sites & Landing Pages",
    description:
      "Lightning-fast websites and high-converting landing pages optimized for SEO and performance.",
    features: ["Next.js / Astro", "Blazing fast load", "SEO optimized", "CMS integration"],
    iconBg: "bg-[#6366F1]/15",
    iconColor: "text-[#6366F1]",
    hoverBorder: "hover:border-[#6366F1]/40",
    hoverGlow: "hover:shadow-[#6366F1]/10",
  },
  {
    icon: Briefcase,
    title: "Portfolio Websites",
    description:
      "Stunning portfolio sites that make your work shine and leave a lasting impression on visitors.",
    features: ["Custom design", "Smooth animations", "Mobile responsive", "Fast delivery"],
    iconBg: "bg-[#8B5CF6]/15",
    iconColor: "text-[#8B5CF6]",
    hoverBorder: "hover:border-[#8B5CF6]/40",
    hoverGlow: "hover:shadow-[#8B5CF6]/10",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions tailored to your exact requirements — from MVPs to enterprise systems.",
    features: ["Requirement analysis", "System architecture", "Agile development", "Ongoing support"],
    iconBg: "bg-[#7C3AED]/15",
    iconColor: "text-[#7C3AED]",
    hoverBorder: "hover:border-[#7C3AED]/40",
    hoverGlow: "hover:shadow-[#7C3AED]/10",
  },
  {
    icon: Sparkles,
    title: "AI & Agentic Applications",
    description:
      "Next-gen AI-powered apps — from LLM integrations and chatbots to fully autonomous agent pipelines.",
    features: ["LLM integration", "Agentic workflows", "RAG pipelines", "OpenAI / LangChain"],
    iconBg: "bg-[#F59E0B]/15",
    iconColor: "text-[#F59E0B]",
    hoverBorder: "hover:border-[#F59E0B]/40",
    hoverGlow: "hover:shadow-[#F59E0B]/10",
    badge: "Emerging",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">What We Build</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Services Tailored to{" "}
            <span className="gradient-text">Your Vision</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            From idea to deployment — we cover every layer of the stack so you can focus on
            growing your business.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className={`service-card group relative ${service.hoverBorder} hover:shadow-xl ${service.hoverGlow}`}
            >
              {/* Emerging badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-widest text-[#F59E0B] border border-[#F59E0B]/30 bg-[#F59E0B]/10 rounded-full px-2.5 py-0.5">
                  {service.badge}
                </span>
              )}

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}>
                <service.icon className={`${service.iconColor}`} size={22} />
              </div>

              {/* Title & description */}
              <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-[#9CA3AF] text-sm leading-relaxed mb-5">
                {service.description}
              </p>

              {/* Feature bullets */}
              <ul className="space-y-2">
                {service.features.map((feat) => (
                  <li key={feat} className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <CheckCircle2 size={14} className={service.iconColor} />
                    {feat}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

