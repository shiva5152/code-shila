"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Python", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    label: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase", "Firebase"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Nginx", "Linux"],
  },
  {
    label: "AI & Tools",
    items: ["OpenAI API", "LangChain", "LlamaIndex", "Pinecone", "Hugging Face", "Vector DBs"],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-28 px-6 bg-[#060B18]">
      <div className="max-w-7xl mx-auto">
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
          <p className="text-[#8899AA] text-lg max-w-2xl mx-auto leading-relaxed">
            A modern, battle-tested stack chosen for performance, developer experience,
            and long-term maintainability.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {techCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            >
              {/* Category label */}
              <div className="shrink-0 w-32 text-[#8899AA] text-xs uppercase tracking-widest font-medium">
                {cat.label}
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {cat.items.map((tech, techIdx) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + techIdx * 0.04 }}
                    whileHover={{ scale: 1.05, borderColor: "#0057FF" }}
                    className="px-4 py-2 bg-[#0D1526] border border-[#1A2A40] rounded-lg text-sm text-[#8899AA] hover:text-white transition-colors duration-200 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#8899AA] text-sm mt-12"
        >
          Don&apos;t see your tech? I adapt to your existing stack.{" "}
          <a href="#contact" className="text-[#0057FF] hover:underline">
            Let&apos;s talk.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
