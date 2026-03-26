import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCode, FaReact, FaTools, FaBookOpen,
  FaUserFriends, FaCloud, FaShieldAlt,
} from "react-icons/fa";

const skillsData = [
  { title: "Languages",   icon: FaCode,        skills: ["Python", "Java", "C++", "C", "JS"],                level: 95, accent: "#00f5d4" },
  { title: "DevOps",      icon: FaTools,       skills: ["Docker", "Jenkins", "Ansible", "Kubernetes "],               level: 85, accent: "#f72585" },
  { title: "Cloud",       icon: FaCloud,       skills: ["AWS", "CI/CD"],                               level: 80, accent: "#4cc9f0" },
  { title: "Security",    icon: FaShieldAlt,   skills: ["VAPT", "Network Security","OWASP","Wireshark","nmap"],                   level: 85, accent: "#ffd60a" },
  { title: "Frameworks",  icon: FaReact,       skills: ["React", "Node.js"],                           level: 70, accent: "#7b2d8b" },
  { title: "Core CS",     icon: FaBookOpen,    skills: ["DSA", "OS", "DBMS"],                          level: 80, accent: "#ff6b35" },
  { title: "Soft Skills", icon: FaUserFriends, skills: ["Leadership", "Teamwork", "Incident Handling"," Adaptability"],                     level: 75, accent: "#06d6a0" },
];

/* ── Skill card ─────────────────────────────────────────────────────────── */
function TiltCard({ skill, index }) {
  const [hovered, setHovered] = useState(false);

  function handleLeave() {
    setHovered(false);
  }

  const circumference = 2 * Math.PI * 38;
  const offset = circumference - (skill.level / 100) * circumference;
  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        className="relative rounded-2xl cursor-default select-none"
      >
        {/* Card shell */}
        <div
          className="relative rounded-2xl p-6 h-full overflow-hidden"
          style={{
            background: "rgba(10,10,20,0.85)",
            border: `1px solid ${hovered ? skill.accent + "60" : "rgba(255,255,255,0.06)"}`,
            boxShadow: hovered
              ? `0 0 40px ${skill.accent}30, 0 20px 60px rgba(0,0,0,0.5)`
              : "0 4px 30px rgba(0,0,0,0.4)",
            transition: "border-color 0.3s, box-shadow 0.3s",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 rounded-2xl opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "100px",
            }}
          />

          {/* Accent glow blob */}
          <motion.div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
            style={{ background: skill.accent, filter: "blur(60px)", opacity: hovered ? 0.18 : 0.07 }}
            animate={{ opacity: hovered ? 0.18 : 0.07 }}
            transition={{ duration: 0.4 }}
          />

          {/* Index number */}
          <span
            className="absolute top-4 right-5 font-mono text-xs"
            style={{ color: skill.accent, opacity: 0.5, letterSpacing: "0.1em" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Icon */}
          <motion.div
            className="mb-5 w-10 h-10 flex items-center justify-center rounded-xl text-lg"
            style={{ background: skill.accent + "18", color: skill.accent }}
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <Icon />
          </motion.div>

          {/* Title */}
          <h3
            className="text-base font-semibold mb-5 tracking-wide uppercase"
            style={{ color: "#e8e8f0", letterSpacing: "0.08em", fontFamily: "'DM Sans', sans-serif" }}
          >
            {skill.title}
          </h3>

          {/* Circular progress + percentage */}
          <div className="flex items-center gap-5 mb-5">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 90 90">
                <circle cx="45" cy="45" r="38" strokeWidth="6" stroke="rgba(255,255,255,0.06)" fill="none" />
                <motion.circle
                  cx="45" cy="45" r="38"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                  stroke={skill.accent}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  whileInView={{ strokeDashoffset: offset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 + 0.3 }}
                  style={{ filter: `drop-shadow(0 0 6px ${skill.accent}80)` }}
                />
              </svg>
              <span
                className="absolute inset-0 flex items-center justify-center text-sm font-bold font-mono"
                style={{ color: skill.accent }}
              >
                {skill.level}%
              </span>
            </div>

            {/* Horizontal bar */}
            <div className="flex-1">
              <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, ${skill.accent}80, ${skill.accent})`,
                    boxShadow: `0 0 8px ${skill.accent}60`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 + 0.2 }}
                />
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {skill.skills.map((item, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs rounded-lg font-medium"
                style={{
                  background: skill.accent + "12",
                  color: skill.accent,
                  border: `1px solid ${skill.accent}25`,
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.03em",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Main section ───────────────────────────────────────────────────────── */
const SkillsSection = () => {
  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <section
        id="skills"
        className="relative py-28 overflow-hidden section-secondary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(247,37,133,0.4)", transition: "background 0.4s" }}
      >
        {/* Large ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, #00f5d430 0%, transparent 70%)", top: "-100px", left: "-150px" }} />
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, #f7258520 0%, transparent 70%)", bottom: "-80px", right: "-100px" }} />
        </div>

        {/* Grid lines (subtle) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── Header ── */}
        <div className="relative text-center mb-20 px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}
          >
            ⚡ Capabilities
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold leading-[0.9] mb-6"
            style={{
              fontFamily: "'Syne', sans-serif",
              background: "linear-gradient(135deg, #ffffff 30%, #ffffff60)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Technical
            <br />
            <span style={{
              background: "linear-gradient(90deg, #00f5d4, #4cc9f0, #f72585)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Arsenal</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto h-px w-32"
            style={{ background: "linear-gradient(90deg, transparent, #00f5d4, transparent)" }}
          />
        </div>

        {/* ── Cards grid ── */}
        <div className="relative container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skillsData.map((skill, i) => (
            <TiltCard key={i} skill={skill} index={i} />
          ))}
        </div>

        {/* Bottom stat row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mt-20 mx-auto max-w-2xl px-6"
        >
          <div
            className="rounded-2xl px-8 py-5 flex justify-between items-center gap-6 flex-wrap"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(10px)",
            }}
          >
            {[
              { label: "Skills", value: skillsData.length },
              { label: "Avg. Proficiency", value: `${Math.round(skillsData.reduce((a, s) => a + s.level, 0) / skillsData.length)}%` },
              { label: "Technologies", value: skillsData.flatMap(s => s.skills).length + "+" },
            ].map((stat, i) => (
              <div key={i} className="text-center flex-1">
                <div className="text-2xl font-bold font-mono" style={{ color: "#fff", fontFamily: "'Syne', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs mt-1 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'DM Mono', monospace" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default SkillsSection;