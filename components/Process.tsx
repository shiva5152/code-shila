"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Terminal, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Planning",
    description:
      "We start with a deep-dive call to understand your goals, requirements, and constraints. Then I map out a clear project plan with timelines and milestones.",
    details: ["Requirements gathering", "Technical feasibility", "Timeline & pricing", "Project roadmap"],
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Architecture",
    description:
      "Before writing a single line of code, I design the system architecture and UI/UX flow — ensuring the solution is scalable and maintainable from day one.",
    details: ["UI/UX wireframes", "System architecture", "Database design", "Tech stack selection"],
  },
  {
    number: "03",
    icon: Terminal,
    title: "Development & Testing",
    description:
      "Iterative development with regular check-ins. Every feature is tested thoroughly — unit tests, integration tests, and real-world scenarios.",
    details: ["Agile sprints", "Code reviews", "Testing & QA", "Regular demos"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Delivery & Support",
    description:
      "Seamless deployment to production with complete handover documentation. I stay available post-launch for support, fixes, and future enhancements.",
    details: ["Deployment & CI/CD", "Documentation", "Knowledge transfer", "Post-launch support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex">How We Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
            A Process Built for{" "}
            <span className="gradient-text">Clarity</span>
          </h2>
          <p className="text-[#8899AA] text-lg max-w-2xl mx-auto leading-relaxed">
            No black boxes. No surprises. Just a transparent, collaborative process
            that takes your idea from concept to live product.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1A2A40] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                className="relative"
              >
                {/* Step number + icon */}
                <div className="flex flex-col items-center lg:items-start mb-6">
                  <div className="relative mb-3">
                    <div className="w-14 h-14 rounded-2xl bg-[#0D1526] border border-[#1A2A40] flex items-center justify-center z-10 relative">
                      <step.icon size={22} className="text-[#0057FF]" />
                    </div>
                    {/* Connector dot (desktop) */}
                    <div className="hidden lg:block absolute -right-[calc(50%+28px)] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#0057FF]" />
                  </div>
                  <span className="text-[#8899AA] text-xs font-mono tracking-widest">{step.number}</span>
                </div>

                {/* Content */}
                <div className="lg:text-left text-center">
                  <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
                  <p className="text-[#8899AA] text-sm leading-relaxed mb-4">{step.description}</p>

                  <ul className="space-y-1.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-[#8899AA] lg:justify-start justify-center">
                        <span className="w-1 h-1 rounded-full bg-[#0057FF] shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
