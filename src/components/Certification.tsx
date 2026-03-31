'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";

/* ── Icons (Same as before) ── */
const Icons = {
       Award: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <circle cx="12" cy="8" r="7" /><polyline points="8 14 12 17 16 14" /><line x1="12" y1="17" x2="12" y2="22" /><line x1="9" y1="22" x2="15" y2="22" />
              </svg>
       ),
       Trophy: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <path d="M6 9H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2" /><path d="M6 11c0 3 1 6 6 6s6-3 6-6" /><path d="M9 3h6v6c0 1-1 2-2 2h-2c-1 0-2-1-2-2V3z" />
              </svg>
       ),
       Medal: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <circle cx="7" cy="11" r="3" /><circle cx="17" cy="11" r="3" /><path d="M7 14v3a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4v-3" /><line x1="12" y1="4" x2="12" y2="2" /><line x1="12" y1="2" x2="10" y2="4" /><line x1="12" y1="2" x2="14" y2="4" />
              </svg>
       ),
       Star: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
                     <polygon points="12 2 15.09 10.26 24 10.27 17.55 16.73 19.64 25.01 12 19.54 4.36 25.01 6.45 16.73 0 10.27 8.91 10.26 12 2" />
              </svg>
       ),
       Check: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <polyline points="20 6 9 17 4 12" />
              </svg>
       ),
       ChevronRight: () => (
              <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                     <polyline points="9 18 15 12 9 6" />
              </svg>
       ),
};

const certifications = [
       { title: 'Java Full Stack Development', org: 'Linkcode Technologies', location: 'Shivaji Nagar, Pune' },
       { title: 'C / C++ Programming', org: 'Linkcode Technologies', location: 'Shivaji Nagar, Pune' },
       { title: 'Data Structure Course', org: 'Disha Computer Institute', location: 'Vishrantwadi, Pune' },
       { title: 'Python Programming', org: 'Atharva Computers', location: 'Vishrantwadi, Pune' },
];

const achievements = [
  { 
    icon: Icons.Trophy, 
    title: 'SciTech Hackathon', 
    desc: 'Innovation-driven selection', 
    badge: 'Selected' 
  },
  { 
    icon: Icons.Medal, 
    title: 'Smart India Hackathon', 
    desc: 'National-level participant', 
    badge: 'SIH' 
  },
  { 
    icon: Icons.Star, 
    title: 'Tech Competitions', 
    desc: 'Top positions in multiple events', 
    badge: 'Winner' 
  },
 

  // 🆕 Soft Skills Block
  {
    icon: Icons.Star,
    title: 'Soft Skills',
    desc: 'Leadership • Communication • Team Collaboration • Problem Solving • Time Management • Adaptability',
    badge: 'Core'
  },
   { 
    icon: Icons.Award, 
    title: 'Student of the Year', 
    desc: '🏆 Trophy Winner from LIC  • 🥋 Brown Belt (Karate) National level Player  • 🥇 Math Olympiad Gold Medalist • 🪢 Rope Climbing • 🥇 Athletics District-Level Gold • 🥈 Mini Marathon 1st Rank', 
    badge: 'Elite' 
  },
];

const fadeUp = {
       hidden: { opacity: 0, y: 18 },
       show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

const Certifications = () => {
       const [expandedCert, setExpandedCert] = useState<number | null>(null);

       return (
              <section
                     id="achievements"
                     className="relative py-24 px-8 bg-[#f6f7fb] overflow-hidden"
                     style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                     {/* ── Background Decals (Hero Style) ── */}
                     <div className="absolute inset-0 -z-10 pointer-events-none">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_10%,rgba(99,102,241,0.05),transparent_70%)]" />
                            <div className="absolute right-0 top-1/4 text-[20rem] font-black leading-none select-none pointer-events-none opacity-[0.02]" style={{ color: "#6366f1", letterSpacing: "-0.05em" }}>
                                   02
                            </div>
                     </div>

                     <div className="max-w-[1160px] mx-auto">
                            {/* ── Header ── */}
                            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-16">
                                   <p className="text-[10px] font-black uppercase tracking-[0.32em] text-slate-400 mb-4">
                                          Recognition · Training · Excellence
                                   </p>
                                 <h2
  className="font-black text-slate-900 leading-[1.07] tracking-[-0.025em]"
  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
>
  Certifications &{" "}
  <span
    style={{
      background: "linear-gradient(125deg,#4f46e5 0%,#7c3aed 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    }}
  >
    Achievements
  </span>
</h2>
                            </motion.div>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                                   {/* ── LEFT: Certifications ── */}
                                   <div className="lg:col-span-7 space-y-6">
                                          <h3 className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4">Technical Training</h3>
                                          {certifications.map((cert, idx) => (
                                                 <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                                                        <button
                                                               onClick={() => setExpandedCert(expandedCert === idx ? null : idx)}
                                                               className={`w-full text-left transition-all duration-300 rounded-2xl border ${expandedCert === idx ? 'bg-white border-indigo-200 shadow-xl' : 'bg-white/50 border-slate-200 hover:bg-white'}`}
                                                        >
                                                               <div className="p-5 flex items-center gap-5">
                                                                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-sm font-black transition-colors ${expandedCert === idx ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                                                                             {String(idx + 1).padStart(2, '0')}
                                                                      </div>
                                                                      <div className="flex-1">
                                                                             <h4 className={`text-base font-bold tracking-tight ${expandedCert === idx ? 'text-indigo-600' : 'text-slate-800'}`}>{cert.title}</h4>
                                                                             <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{cert.org}</p>
                                                                      </div>
                                                                      <div className={`w-6 h-6 transition-transform duration-300 ${expandedCert === idx ? 'rotate-90 text-indigo-600' : 'text-slate-300'}`}>
                                                                             <Icons.ChevronRight />
                                                                      </div>
                                                               </div>
                                                               {expandedCert === idx && (
                                                                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-5 pb-5 overflow-hidden">
                                                                             <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between border border-slate-100">
                                                                                    <div className="text-xs font-bold text-slate-600">📍 {cert.location}</div>
                                                                                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-tighter">
                                                                                           <div className="w-3 h-3"><Icons.Check /></div> Verified
                                                                                    </div>
                                                                             </div>
                                                                      </motion.div>
                                                               )}
                                                        </button>
                                                 </motion.div>
                                          ))}

                                          {/* ── HOVER IMAGE ANIMATION (Black & White to Color) ── */}
                                        <div className="mt-10 flex justify-center">
  <motion.div
    initial="initial"
    whileHover="hovered"
    className="relative w-[75%] cursor-pointer group overflow-hidden rounded-3xl border border-slate-200 shadow-2xl bg-white p-2"
  >
    <motion.img
      variants={{
        initial: { filter: "grayscale(100%) brightness(0.9)", scale: 1 },
        hovered: { filter: "grayscale(0%) brightness(1.1)", scale: 1.05 }
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      src="/winner.jpeg"
      alt="Achievement"
      className="w-full h-auto object-contain"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 pointer-events-none" />

    <div className="absolute bottom-6 left-6">
      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-indigo-300 mb-1">
        Hover to reveal color
      </p>
      <h4 className="text-white font-black text-2xl tracking-tight">
        Competitive Resilience
      </h4>
    </div>
  </motion.div>
</div>
                                   </div>

                                   {/* ── RIGHT: Achievements ── */}
                                   <div className="lg:col-span-5 space-y-4">
                                          <h3 className="text-xs font-black uppercase tracking-widest text-indigo-500 mb-4">Key Wins</h3>
                                          <div className="grid grid-cols-1 gap-4">
                                                 {achievements.map((item, idx) => {
                                                        const Icon = item.icon;
                                                        return (
                                                               <motion.div
                                                                      key={idx}
                                                                      initial={{ opacity: 0, x: 20 }}
                                                                      whileInView={{ opacity: 1, x: 0 }}
                                                                      transition={{ delay: idx * 0.1 }}
                                                                      viewport={{ once: true }}
                                                                      className="flex gap-4 bg-white p-5 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-all shadow-sm hover:shadow-lg group"
                                                               >
                                                                      <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 p-3 flex-shrink-0 group-hover:rotate-6 transition-transform">
                                                                             <Icon />
                                                                      </div>
                                                                      <div>
                                                                             <span className="text-[9px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{item.badge}</span>
                                                                             <h4 className="text-sm font-black text-slate-900 mt-1">{item.title}</h4>
                                                                             <p className="text-xs text-slate-500 font-medium leading-relaxed mt-1">{item.desc}</p>
                                                                      </div>
                                                               </motion.div>
                                                        );
                                                 })}
                                          </div>

                                          {/* Dark Quote Card */}
                                          <div className="mt-8 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
                                                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-indigo-600/20 rounded-full blur-2xl" />
                                                 <p className="text-xl font-bold leading-tight relative z-10 italic">
                                                        "Growth is the only evidence of life."
                                                 </p>
                                                 <div className="mt-4 flex items-center gap-2 text-indigo-400">
                                                        <div className="w-8 h-[1px] bg-indigo-400" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest">Continuous Evolution</span>
                                                 </div>
                                          </div>
                                   </div>

                            </div>
                     </div>
              </section>
       );
};

export default Certifications;