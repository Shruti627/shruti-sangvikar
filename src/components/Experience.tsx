import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const Experience = () => {
  const experiences = [
    {
      role: "Practical Training Intern",
      company: "Bhabha Atomic Research Centre",
      shortCompany: "BARC",
      duration: "Feb 2026 – Present",
      accentColor: "#6366f1",
      type: "Govt. of India",
      mode: "On-site", // ✅ added
      slogan: "Building systems for the nation.",
      emoji: "🇮🇳",
      image: "/barclogo.jpeg",
      points: [
        "Full-stack systems for GOI projects",
        "Designing scalable backend architectures",
        "Production-grade engineering & deployment",
      ],
    },
    {
      role: "Software Developer Trainee",
      company: "TECHONSY",
      shortCompany: "TECHONSY",
      duration: "Jan 2026 – Feb 2026",
      accentColor: "#8b5cf6",
      type: "Startup",
      mode: "On-site", // ✅
      slogan: "Startup hustle, full stack magic.",
      emoji: "⚡",
      image: "/techonsy.jpeg",
      points: [
        "MERN stack with API integration",
        "Frontend-backend communication optimization",
        "Real-world debugging & system design",
      ],
    },
    {
      role: "Full Stack Development Intern",
      company: "Linkcode Technologies",
      shortCompany: "Linkcode",
      duration: "May 2025 – Nov 2025",
      accentColor: "#0ea5e9",
      type: "Web Dev",
      mode: "On-site", // ✅
      slogan: "Code that connects & converts.",
      emoji: "🔗",
      image: "/linkcode.jpeg",
      points: [
        "Spring Boot, React, MySQL development",
        "REST API design & backend optimization",
        "Business application deployment",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-[#fafafa]">
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Compact Header */}
        <div className="mb-12 relative">

  {/* Floating Tag */}
  <div className="inline-block mb-4">
    <span className="px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
      Experience
    </span>
  </div>

  {/* Heading */}
  <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
    Work <span className="text-slate-400 font-light">History</span>
  </h2>

  {/* Accent Line */}
  <div className="mt-4 w-20 h-[3px] bg-gradient-to-r from-indigo-500 to-transparent rounded-full" />

  {/* Subtle Background Number */}
  <div className="absolute -top-6 right-0 text-[5rem] font-black text-slate-100 select-none pointer-events-none">
    03
  </div>

</div>
        {/* Wide Integrated Cards */}
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ExperienceCard({ exp, index }) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const rotateX = useTransform(mouseY, [0, 300], [1, -1]);
  const rotateY = useTransform(mouseX, [0, 1000], [-1, 1]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        style={{ rotateX: isHovered ? rotateX : 0, rotateY: isHovered ? rotateY : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all"
      >
        {/* IMAGE SIDE: Now occupies a clean 40% with no padding */}
        <div className="relative w-full md:w-[38%] h-52 md:h-auto overflow-hidden">
          <img
            src={exp.image}
            alt={exp.company}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Internal image labels to "contain everything" */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r" />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">{exp.type}</p>
            <h4 className="text-xl font-black leading-tight">{exp.shortCompany}</h4>
          </div>
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl">
            <span className="text-xl leading-none">{exp.emoji}</span>
          </div>
        </div>

        {/* CONTENT SIDE: Tightened text and smaller fonts */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
              {exp.role}
            </h3>
            <span className="text-[11px] font-bold text-slate-400 mt-1">{exp.duration}</span>
          </div>

          <p className="text-sm font-bold mb-3" style={{ color: exp.accentColor }}>
            {exp.company}
          </p>

          <p className="text-xs italic text-slate-500 mb-4 border-l-2 pl-3" style={{ borderColor: exp.accentColor + '40' }}>
            "{exp.slogan}"
          </p>

          <div className="grid grid-cols-1 gap-2">
            {exp.points.map((point, i) => (
              <div key={i} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: exp.accentColor }} />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;