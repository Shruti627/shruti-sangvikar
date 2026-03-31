import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ── Typed text hook ── */
function useTyped(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wIdx, setWIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wIdx];
    const delay = deleting ? speed / 2 : cIdx === word.length ? pause : speed;
    const t = setTimeout(() => {
      if (!deleting && cIdx < word.length) {
        setDisplay(word.slice(0, cIdx + 1)); setCIdx(c => c + 1);
      } else if (!deleting && cIdx === word.length) {
        setDeleting(true);
      } else if (deleting && cIdx > 0) {
        setDisplay(word.slice(0, cIdx - 1)); setCIdx(c => c - 1);
      } else {
        setDeleting(false); setWIdx(w => (w + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(t);
  }, [cIdx, deleting, wIdx, words, speed, pause]);

  return display;
}

const floatA = { animate: { y: [0,-8,0], transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } } };
const floatB = { animate: { y: [0,7,0],  transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 } } };

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22,1,0.36,1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } };

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start","end start"] });
  const bgY = useTransform(scrollYProgress, [0,1], ["0%","18%"]);
  const typed = useTyped(["Distributed Systems","AI Pipelines","High-Perf APIs","Microservices"]);

  return (
    <section
    id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#f6f7fb]"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ── Background ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_8%_18%,rgba(99,102,241,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_35%_at_92%_82%,rgba(139,92,246,0.07),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle,#6366f1 1px,transparent 1px)",
            backgroundSize: "38px 38px",
          }}
        />
        {/* Ghost watermark */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-black leading-none select-none pointer-events-none"
          style={{ color: "rgba(99,102,241,0.022)", letterSpacing: "-0.05em" }}
        >
          01
        </div>
      </motion.div>

      <div className="max-w-[1160px] mx-auto px-8 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-center">

          {/* ════ LEFT ════ */}
          <motion.div variants={stagger} initial="hidden" animate="show">

            {/* Status pill — split style */}
            {/* <motion.div variants={fadeUp} className="flex items-center gap-0 mb-9 w-fit">
              <div className="flex items-center gap-2 px-4 py-1.5 rounded-l-full bg-white border border-r-0 border-slate-200 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
                </span>
                <span className="text-[11px] font-black uppercase tracking-widest text-indigo-600">BARC Intern</span>
              </div>
              <div className="px-4 py-1.5 rounded-r-full bg-indigo-600 shadow-sm">
                <span className="text-[11px] font-black uppercase tracking-widest text-white">9.86 CGPA</span>
              </div>
            </motion.div> */}

            {/* Eyebrow */}
            <motion.p variants={fadeUp} className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400 mb-4">
              Backend Engineer · AI Systems · India
            </motion.p>

            {/* ── Headline — controlled sizes ── */}
            <motion.h1
              variants={fadeUp}
              className="font-black text-slate-900 leading-[1.07] tracking-[-0.025em] mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              I Build Systems<br />
              <span className="text-slate-350 font-light">That </span>
              <span
                style={{
                  background: "linear-gradient(125deg,#4f46e5 0%,#7c3aed 55%,#a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Handle Reality
              </span>
            </motion.h1>

            {/* Animated typed subline */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="h-[1.5px] w-7 bg-indigo-400 flex-shrink-0" />
              <span className="text-sm font-mono font-semibold text-indigo-500 min-w-[190px]">
                {typed}
                <span className="inline-block w-[2px] h-3.5 bg-indigo-400 ml-0.5 align-middle animate-pulse" />
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeUp} className="text-[0.95rem] text-slate-500 max-w-[440px] leading-[1.78] mb-8">
              Hi, I'm <span className="font-bold text-slate-800">Ms. Shruti P. Sangvikar</span> — a
              backend-focused engineer building resilient distributed architectures,
              high-performance APIs, and AI-powered production pipelines.
              I ship software that survives the real world.
            </motion.p>

            {/* CTAs */}
           <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-10">

  {/* View Projects */}
  <button
    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
    className="group relative overflow-hidden px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-md hover:shadow-indigo-400/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
    style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
  >
    <span className="relative z-10 flex items-center gap-2">
      View Projects
      <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
    </span>
    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-500 skew-x-12" />
  </button>

  {/* Contact */}
  <button
    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
    className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all duration-300"
  >
    Let's Connect ↗
  </button>

</motion.div>

            {/* Stats row */}
            <motion.div variants={fadeUp} className="flex items-stretch gap-0 flex-wrap mb-9">
              {[
                { value: "9.86", label: "CGPA",        sub: "T.E. ECE ." },
                { value: "3+",   label: "Internships", sub: "Incl. Govt. of India" },
                { value: "15+",   label: "Projects",    sub: "Production systems"  },
              ].map((s, i) => (
                <div key={i} className="flex items-center">
                  <div className={`${i > 0 ? "px-8" : "pr-8"}`}>
                    <p className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">{s.value}</p>
                    <p className="text-xs font-black uppercase tracking-widest text-indigo-500">{s.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{s.sub}</p>
                  </div>
                  {i < 2 && <div className="w-[1px] h-10 bg-slate-200 self-center" />}
                </div>
              ))}
            </motion.div>

            {/* Tech stack pills */}
            <motion.div variants={fadeUp} className="flex items-center gap-2.5 flex-wrap">
              {/* <span className="text-xs font-black uppercase tracking-widest text-slate-400 mr-1">Stack:</span> */}
              {[
                { icon:"🍃", name:"Spring Boot" },
                { icon:"⚡", name:"FastAPI" },
                { icon:"🧠", name:"LLMs / RAG" },
                { icon:"☁️", name:"AWS" },
                { icon:"🐳", name:"Docker" },
                { icon:"🐍", name:"Python" },
                //mern
                {icon:"🌐", name:"MERN" } ,
              ].map((t,i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-semibold text-slate-600 shadow-sm">
                  <span>{t.icon}</span>{t.name}
                </span>
              ))}
            </motion.div>

          </motion.div>

          {/* ════ RIGHT — Photo ════ */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22,1,0.36,1], delay: 0.2 }}
          className="flex justify-center items-center mt-10 md:mt-0"
          >
            <div className="relative group">

              {/* Glow */}
              <div
                className="absolute -inset-5 rounded-[2.5rem] opacity-50 group-hover:opacity-75 transition duration-700"
                style={{
                  background: "radial-gradient(ellipse at 40% 30%,rgba(99,102,241,0.22) 0%,rgba(139,92,246,0.1) 55%,transparent 75%)",
                  filter: "blur(22px)",
                }}
              />

              {/* Corner brackets */}
              {[
                { pos:"top-1 left-1",     bt:"2px solid",  bb:"none",   bl:"2px solid",  br:"none",   r:"6px 0 0 0"   },
                { pos:"top-1 right-1",    bt:"2px solid",  bb:"none",   bl:"none",        br:"2px solid", r:"0 6px 0 0" },
                { pos:"bottom-1 left-1",  bt:"none",        bb:"2px solid", bl:"2px solid", br:"none",  r:"0 0 0 6px"  },
                { pos:"bottom-1 right-1", bt:"none",        bb:"2px solid", bl:"none",      br:"2px solid",r:"0 0 6px 0"},
              ].map((c,i) => (
                <motion.div
                  key={i}
                  initial={{ opacity:0 }} animate={{ opacity:1 }}
                  transition={{ delay: 0.9 + i*0.07 }}
                  className={`absolute ${c.pos} w-5 h-5 z-20`}
                  style={{ borderTop:c.bt, borderBottom:c.bb, borderLeft:c.bl, borderRight:c.br, borderColor:"rgba(99,102,241,0.45)", borderRadius:c.r }}
                />
              ))}

              {/* Photo card */}
              <div className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] md:w-[350px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-200/70 shadow-[0_20px_56px_rgba(0,0,0,0.11)]">
                <img
                  src="/shruti.jpeg"
                  alt="Shruti Sangvikar"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/45" />
                {/* <div className="absolute bottom-3.5 left-3 right-3">
                  <div className="bg-black/40 backdrop-blur-md px-3 py-2 rounded-xl border border-white/10">
                    <p className="text-[8px] tracking-[0.28em] text-white/50 uppercase font-bold mb-0.5">Backend Engineer</p>
                    <p className="text-[13px] font-bold text-white">Systems · Scale · AI</p>
                  </div>
                </div> */}
              </div>

              {/* Float: BARC */}
              <motion.div
                variants={floatA} animate="animate"
                className="absolute -top-3 right-0 md:-right-[4.5rem] bg-white border border-slate-200 shadow-xl px-3 py-2.5 rounded-2xl flex items-center gap-2 z-30"
                style={{ boxShadow:"0 8px 26px rgba(99,102,241,0.13)" }}
              >
                <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center text-sm flex-shrink-0">🔬</div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-indigo-600 leading-none mb-0.5">BARC</p>
                  <p className="text-[11px] font-bold text-slate-700 leading-none">Govt. of India</p>
                  <p className="text-[9px] text-slate-400">Research Intern</p>
                </div>
              </motion.div>

              {/* Float: Live API */}
              <motion.div
                variants={floatB} animate="animate"
                className="absolute -bottom-5 left-0 md:-left-[4.5rem] bg-white border border-slate-200 shadow-xl px-3 py-2.5 rounded-2xl z-30"
                style={{ boxShadow:"0 8px 26px rgba(0,0,0,0.08)" }}
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600">Live</span>
                </div>
                <p className="text-[11px] font-bold text-slate-800">Production API</p>
                <p className="text-[9px] font-mono text-slate-400 mt-0.5">99.9% · p95 &lt;120ms</p>
              </motion.div>

              {/* CGPA badge */}
              {/* <motion.div
                initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
                transition={{ delay:1.1, duration:0.4 }}
                className="absolute top-1/2 -translate-y-1/2 -left-[3.5rem] bg-white border border-slate-200 shadow-lg px-2.5 py-2 rounded-xl z-30 flex items-center gap-1.5"
              >
                <span className="text-base">🏅</span>
                <div>
                  <p className="text-sm font-black text-slate-900 leading-none">9.86</p>
                  <p className="text-[9px] text-slate-400 font-semibold">CGPA</p>
                </div>
              </motion.div> */}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;