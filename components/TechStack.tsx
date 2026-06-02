"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud, Sparkles } from "lucide-react";

const techCategories = [
  {
    icon: Monitor,
    label: "Frontend",
    color: "text-[#7C3AED]",
    borderHover: "hover:border-[#7C3AED]/40",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
  },
  {
    icon: Server,
    label: "Backend",
    color: "text-[#EC4899]",
    borderHover: "hover:border-[#EC4899]/40",
    items: ["Node.js", "Express", "Python", "Go", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    icon: Database,
    label: "Database",
    color: "text-[#A78BFA]",
    borderHover: "hover:border-[#A78BFA]/40",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    color: "text-[#38BDF8]",
    borderHover: "hover:border-[#38BDF8]/40",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx", "Linux"],
  },
  {
    icon: Sparkles,
    label: "AI & Tools",
    color: "text-[#F59E0B]",
    borderHover: "hover:border-[#F59E0B]/40",
    items: ["OpenAI API", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face", "Vector DBs"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

function CategoryCard({ cat, index }: { cat: (typeof techCategories)[0]; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`bg-white/[0.04] border border-white/[0.07] backdrop-blur-sm rounded-2xl p-6 text-center transition-all duration-300 ${cat.borderHover} hover:bg-white/[0.06] hover:shadow-xl`}
    >
      {/* Icon + label */}
      <div className="flex items-center justify-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
          <cat.icon size={15} className={cat.color} />
        </div>
        <h3 className="text-white font-semibold text-sm uppercase tracking-widest">{cat.label}</h3>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {cat.items.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-white/[0.05] border border-white/[0.08] rounded-lg text-xs text-[#9CA3AF] hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-28 px-6 bg-[#07050F]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">Tech Stack</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            Built with the{" "}
            <span className="gradient-text">Right Tools</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto leading-relaxed">
            A modern, battle-tested stack chosen for performance, developer experience,
            and long-term maintainability.
          </p>
        </motion.div>

        {/* Row 1 — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {techCategories.slice(0, 3).map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>

        {/* Row 2 — 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-2/3 mx-auto">
          {techCategories.slice(3).map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i + 3} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#9CA3AF] text-sm mt-12"
        >
          Don&apos;t see your tech? I adapt to your existing stack.{" "}
          <a href="#contact" className="text-[#7C3AED] hover:text-[#EC4899] transition-colors">
            Let&apos;s talk.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
