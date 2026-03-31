import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };

const Skills = () => {
  // Set to 0 to have the first one open, or -1 to have all closed
  const [expandedIndex, setExpandedIndex] = useState(0);

  const categories = [
    {
      title: "Backend Architecture",
      subtitle: "Engineering resilient, distributed systems built for massive scale.",
      accentColor: "#6366f1",
      description:
        "Designing and implementing production-grade services with deep expertise in distributed patterns — event sourcing, CQRS, circuit breakers, and async messaging. Every system ships with observability and zero-downtime deployments in mind.",
      skills: [
        { name: "Spring Boot", icon: "🍃", detail: "REST + WebSocket APIs, multi-tenant SaaS" },
        { name: "Node.js", icon: "🟢", detail: "Event-driven services, real-time data pipelines" },
        { name: "FastAPI", icon: "⚡", detail: "High-throughput ML model serving" },
        { name: "Microservices", icon: "🏗️", detail: "Service mesh, API gateway, service discovery" },
        { name: "Kafka", icon: "🔁", detail: "Event streaming, distributed log processing" },
        { name: "GraphQL", icon: "◈", detail: "Schema-first design, federated graphs" },
      ],
    },
    {
      title: "AI & Intelligence",
      subtitle: "Integrating LLMs, RAG pipelines, and semantic search.",
      accentColor: "#8b5cf6",
      description:
        "End-to-end AI product development — from fine-tuning embeddings and building retrieval-augmented pipelines to deploying LLM agents with tool use and memory.",
      skills: [
        { name: "Python", icon: "🐍", detail: "Primary language for all ML/AI engineering" },
        { name: "LangChain", icon: "🦜", detail: "Agentic workflows, multi-step reasoning chains" },
        { name: "Vector DBs", icon: "🧬", detail: "Pinecone, Qdrant, Weaviate, pgvector" },
        { name: "NLP", icon: "🗣️", detail: "Named entity recognition, semantic chunking" },
        { name: "OpenAI / Claude", icon: "✦", detail: "Prompt engineering, function calling, evals" },
        { name: "HuggingFace", icon: "🤗", detail: "Fine-tuning, PEFT, model deployment" },
      ],
    },
    {
      title: "Interface Engineering",
      subtitle: "Building type-safe, accessible, and blazing-fast user experiences.",
      accentColor: "#0ea5e9",
      description:
        "Crafting component systems that scale — from design tokens and accessibility-first architecture to complex animation sequences and real-time UI.",
      skills: [
        { name: "React", icon: "⚛️", detail: "Custom hooks, compound components, concurrent mode" },
        { name: "Next.js", icon: "▲", detail: "App Router, ISR, edge rendering strategies" },
        { name: "TypeScript", icon: "🟦", detail: "Advanced generics, discriminated unions" },
        { name: "Tailwind", icon: "🌊", detail: "Design systems, responsive, dark-mode-first" },
        { name: "Framer Motion", icon: "🎞", detail: "Orchestrated animations, gesture interfaces" },
        { name: "Testing", icon: "🧪", detail: "Vitest, Playwright, Testing Library" },
      ],
    },
    {
      title: "Infrastructure & Data",
      subtitle: "Automated deployment and cloud-native reliability engineering.",
      accentColor: "#10b981",
      description:
        "Architecting cloud infrastructure that balances cost and resilience — IaC with Terraform, container orchestration with Kubernetes, and data pipeline engineering.",
      skills: [
        { name: "PostgreSQL", icon: "🐘", detail: "Query optimization, partitioning, replication" },
        { name: "Docker", icon: "🐳", detail: "Multi-stage builds, Compose, container security" },
        { name: "AWS", icon: "☁️", detail: "Lambda, ECS, RDS, S3, CloudFront, IAM" },
        { name: "Redis", icon: "🟥", detail: "Caching patterns, pub/sub, distributed locks" },
        { name: "Terraform", icon: "🔷", detail: "Module design, remote state, drift detection" },
        { name: "Kubernetes", icon: "☸️", detail: "Helm charts, HPA, network policies" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#f6f7fb] overflow-hidden"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      <div className="max-w-[1160px] mx-auto px-8 w-full">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-[1.5px] w-7 bg-indigo-400" />
          <span className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400">
            Expertise & Tools
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-indigo-500 mb-4">Skills</p>
          <h2
            className="font-black text-slate-900 tracking-[-0.03em] leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.2rem)" }}
          >
            What I <span className="text-indigo-600">Actually Build</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl">
            Scalable systems and modern interfaces, organized by domain.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[60px] top-0 bottom-0 w-[2px] bg-slate-200" />

          <div className="space-y-6">
            {categories.map((cat, i) => {
              const isOpen = expandedIndex === i;
              return (
                <motion.div key={i} variants={fadeUp} className="pl-0 md:pl-40 relative">
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="absolute left-[-13px] md:left-[47px] top-8 w-6 h-6 rounded-full border-4 border-white z-10"
                    style={{ background: cat.accentColor }}
                  />

                  {/* Card wrapper */}
                  <div
                    onClick={() => setExpandedIndex(isOpen ? -1 : i)}
                    className={`group cursor-pointer bg-white rounded-2xl p-6 md:p-8 border transition-all duration-300 ${
                      isOpen ? "border-slate-300 shadow-sm" : "border-slate-200 hover:border-indigo-300"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h3
                          className="font-black tracking-tight mb-2"
                          style={{ fontSize: "1.5rem", color: cat.accentColor }}
                        >
                          {cat.title}
                        </h3>
                        <p className={`text-slate-600 text-base leading-relaxed transition-opacity ${isOpen ? "opacity-100" : "opacity-70"}`}>
                          {cat.subtitle}
                        </p>
                        {!isOpen && (
                          <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-widest text-indigo-500 group-hover:text-indigo-600 transition-colors">
                            View More Details
                          </span>
                        )}
                      </div>

                      {/* Icon Toggle */}
                      <motion.div 
                        animate={{ rotate: isOpen ? 90 : 0 }}
                        className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 transition-colors"
                      >
                        <span className="text-xl font-medium text-slate-400 group-hover:text-indigo-600">
                          {isOpen ? "−" : "+"}
                        </span>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-8 mt-6 border-t border-slate-50">
                            <p className="text-slate-500 text-sm leading-[1.8] mb-8 max-w-3xl">
                              {cat.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {cat.skills.map((skill, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                                >
                                  <span className="text-xl flex-shrink-0 mt-0.5">{skill.icon}</span>
                                  <div className="flex-1">
                                    <p className="font-bold text-slate-800 text-sm">{skill.name}</p>
                                    <p className="text-xs text-slate-500 mt-1">{skill.detail}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;