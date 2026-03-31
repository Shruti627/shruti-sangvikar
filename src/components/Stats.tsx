import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

/* ── Animated counter ── */
function Counter({ target }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 55, damping: 16 });
  const display = useTransform(spring, (v) =>
    target === "9.86" ? v.toFixed(2) : Math.round(v).toString()
  );

  useEffect(() => {
    if (inView) raw.set(parseFloat(target));
  }, [inView, raw, target]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  {
    value: "9.86",
    numeric: true,
    suffix: "",
    label: "CGPA",
    descriptor: "Academic Excellence",
    detail: "Top of batch · B.E. Computer Engineering",
    index: "01",
  },
  {
    value: "3",
    numeric: true,
    suffix: "+",
    label: "Internships",
    descriptor: "Industry Experience",
    detail: "BARC (Govt. of India) · SaaS · Startups",
    index: "02",
  },
  {
    value: "15",
    numeric: true,
    suffix: "+",
    label: "Projects",
    descriptor: "Shipped to Production",
    detail: "Distributed systems · AI pipelines · APIs",
    index: "03",
  },
  {
    value: "AI+FS",
    numeric: false,
    suffix: "",
    label: "Specialization",
    descriptor: "Full-Stack AI Engineer",
    detail: "Backend · LLMs · RAG · Microservices",
    index: "04",
  },
];

const Stats = () => {
  return (
    <section
      className="relative py-0 bg-[#f6f7fb] overflow-hidden"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #6366f1 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* ── Section Heading ── */}
        <div className="pt-14 pb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Performance Overview
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            A quick snapshot of impact, experience, and specialization.
          </p>
        </div>

        {/* ── Top rule ── */}
        <div className="flex items-center gap-4 py-7 border-b border-slate-200">
          <span className="text-[9px] font-black uppercase tracking-[0.38em] text-slate-400">
            Shruti Sangvikar
          </span>
          <div className="flex-1 h-[1px] bg-slate-200" />
          <span className="text-[9px] font-black uppercase tracking-[0.38em] text-indigo-500">
            Performance Metrics
          </span>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }} // subtle lift
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative px-8 py-10 first:pl-0 overflow-hidden cursor-default transition-all"
            >

              {/* Hover background */}
              <div className="absolute inset-0 bg-indigo-50/0 group-hover:bg-indigo-50/60 transition duration-300" />

              {/* Index */}
              <div className="absolute top-6 right-4 text-5xl font-black text-indigo-100 group-hover:text-indigo-200 transition">
                {s.index}
              </div>

              {/* Dot */}
              <div className="w-2 h-2 rounded-full bg-indigo-500 mb-6 relative z-10 shadow-md shadow-indigo-400/40" />

              {/* Value */}
              <div className="relative z-10">
                <div className="text-[2.8rem] font-black tracking-tight leading-none text-slate-900 mb-1 tabular-nums font-mono">
                  {s.numeric ? (
                    <>
                      <Counter target={s.value} />
                      {s.suffix && (
                        <span className="text-indigo-500">{s.suffix}</span>
                      )}
                    </>
                  ) : (
                    <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {s.value}
                    </span>
                  )}
                </div>

                {/* Label */}
                <p className="text-[10px] font-black uppercase tracking-[0.28em] text-indigo-500 mt-2 mb-3">
                  {s.label}
                </p>

                {/* Descriptor */}
                <p className="text-sm font-semibold text-slate-700 mb-1">
                  {s.descriptor}
                </p>

                {/* Detail */}
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {s.detail}
                </p>
              </div>

              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.7 }}
                  className="h-full w-full bg-gradient-to-r from-indigo-500 to-indigo-200"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom rule ── */}
        <div className="flex items-center gap-4 py-6 border-t border-slate-200">
          <span className="text-[9px] font-black uppercase tracking-[0.38em] text-slate-400">
            Updated 2025
          </span>
          <div className="flex-1 h-[1px] bg-slate-200" />

          {/* Status */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">
              Available for Opportunities
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Stats;