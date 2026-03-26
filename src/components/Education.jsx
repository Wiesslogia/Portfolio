import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology — Computer Science & Engineering",
    grade: "CGPA: 8.37",
    period: "August 2023 – Present",
    icon: FaUniversity,
    accent: "#00f5d4",
    status: "current",
    tags: ["CSE", "B.Tech", "LPU"],
  },
  {
    institution: "Kendriya Vidhayala",
    location: "Ojhar, MH",
    degree: "Intermediate (PCM)",
    grade: "Percentage: 67%",
    period: "April 2020 – March 2022",
    icon: FaSchool,
    accent: "#4cc9f0",
    status: "completed",
    tags: ["PCM", "Science", "Class XII"],
  },
  {
    institution: "Kendriya Vidhayala",
    location: "Ojhar, MH",
    degree: "Matriculation",
    grade: "Percentage: 85%",
    period: "April 2018 – March 2020",
    icon: FaGraduationCap,
    accent: "#f72585",
    status: "completed",
    tags: ["Class X", "Distinction"],
  },
];

const Education = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <section
        id="education"
        className="relative py-28 overflow-hidden section-tertiary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(0,245,212,0.35)", transition: "background 0.4s" }}
      >
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)", top: "-100px", right: "-100px" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(247,37,133,0.06) 0%, transparent 70%)", bottom: "-60px", left: "-80px" }} />
        </div>

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-5xl">

          {/* Header */}
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}
            >
              🎓 Academic Journey
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-[0.9]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{
                background: "linear-gradient(135deg, #ffffff 30%, #ffffff60)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>My</span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #00f5d4, #4cc9f0, #f72585)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Education</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 h-px w-32"
              style={{ background: "linear-gradient(90deg, transparent, #00f5d4, transparent)" }}
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(0,245,212,0.3), rgba(76,201,240,0.2), rgba(247,37,133,0.2), transparent)", transform: "translateX(-50%)" }}
            />

            <div className="space-y-10">
              {educationData.map((edu, i) => {
                const Icon = edu.icon;
                const isLeft = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex flex-col md:flex-row gap-8 items-start ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} pl-16 md:pl-0`}>
                      <motion.div
                        className="rounded-2xl p-7 relative overflow-hidden"
                        style={{
                          background: "rgba(10,10,20,0.9)",
                          border: `1px solid ${edu.accent}25`,
                          boxShadow: `0 4px 40px rgba(0,0,0,0.4)`,
                          backdropFilter: "blur(20px)",
                        }}
                        whileHover={{
                          borderColor: edu.accent + "55",
                          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${edu.accent}15`,
                          y: -4,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {/* Top bar */}
                        <div className={`absolute top-0 ${isLeft ? "right-0" : "left-0"} w-1/2 h-0.5 rounded`}
                          style={{ background: `linear-gradient(${isLeft ? "to left" : "to right"}, ${edu.accent}, transparent)` }} />

                        {/* Bg number */}
                        <span
                          className={`absolute top-3 ${isLeft ? "left-4" : "right-4"}`}
                          style={{ fontFamily: "'Syne', sans-serif", fontSize: "4rem", fontWeight: 900, color: edu.accent, opacity: 0.06, lineHeight: 1 }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        {/* Icon + status */}
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "md:justify-end" : ""}`}>
                          <div className="w-10 h-10 flex items-center justify-center rounded-xl"
                            style={{ background: `${edu.accent}15`, color: edu.accent }}>
                            <Icon size={16} />
                          </div>
                          {edu.status === "current" && (
                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                              style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.25)", color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}>
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5d4", animation: "pulse 2s infinite" }} />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Period */}
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: edu.accent, letterSpacing: "0.08em", marginBottom: "0.4rem" }}>
                          {edu.period}
                        </p>

                        {/* Institution */}
                        <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "0.3rem", lineHeight: 1.2 }}>
                          {edu.institution}
                        </h3>

                        {/* Location */}
                        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.6rem" }}>
                          📍 {edu.location}
                        </p>

                        {/* Degree */}
                        <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.82)", marginBottom: "0.4rem", lineHeight: 1.5 }}>
                          {edu.degree}
                        </p>

                        {/* Grade */}
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg"
                          style={{ background: `${edu.accent}12`, border: `1px solid ${edu.accent}25` }}>
                          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", fontWeight: 700, color: edu.accent }}>
                            {edu.grade}
                          </span>
                        </div>

                        {/* Tags */}
                        <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                          {edu.tags.map((tag, j) => (
                            <span key={j} className="px-2.5 py-1 rounded-lg text-xs"
                              style={{
                                background: "rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.6)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                fontFamily: "'DM Mono', monospace",
                              }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-6 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 300 }}
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: edu.accent, boxShadow: `0 0 16px ${edu.accent}80` }}
                      >
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;