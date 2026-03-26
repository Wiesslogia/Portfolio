import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMedal, FaShieldAlt } from "react-icons/fa";

const achievements = [
  {
    title: "Golden Badges on HackerRank",
    description:
      "Earned Golden Badges in Java and C++ on HackerRank for consistent problem-solving and skill demonstration.",
    tags: ["Java", "C++", "Coding"],
    icon: FaLaptopCode,
    accent: "#ffd166",
    number: "01",
  },
  {
    title: "100+ LeetCode Problems Solved",
    description:
      "Solved 100+ LeetCode problems, sharpening data structures, algorithms, and logical problem-solving abilities.",
    tags: ["DSA", "Algorithms", "Problem Solving"],
    icon: FaMedal,
    accent: "#4cc9f0",
    number: "02",
  },
  {
    title: "Cybersecurity VAPT Projects",
    description:
      "Completed multiple vulnerability assessment and penetration testing exercises on web and network systems.",
    tags: ["VAPT", "Security", "Networking"],
    icon: FaShieldAlt,
    accent: "#f72585",
    number: "03",
  },
];

const Achievements = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <section
        id="achievements"
        className="relative py-28 overflow-hidden section-secondary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(255,209,102,0.45)", transition: "background 0.4s" }}
      >
        {/* Ambient */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(255,209,102,0.07) 0%, transparent 70%)", top: "-80px", right: "-120px" }}
          />
          <div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(76,201,240,0.06) 0%, transparent 70%)", bottom: "-60px", left: "-80px" }}
          />
        </div>

        {/* Grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-6xl">

          {/* Header */}
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#ffd166", fontFamily: "'DM Mono', monospace" }}
            >
              🏆 Recognition
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-[0.9]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ background: "linear-gradient(135deg, #ffffff 30%, #ffffff60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                My
              </span>
              <br />
              <span style={{ background: "linear-gradient(90deg, #ffd166, #f72585, #4cc9f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Achievements
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 h-px w-32"
              style={{ background: "linear-gradient(90deg, transparent, #ffd166, transparent)" }}
            />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((a, i) => {
              const Icon = a.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="relative rounded-2xl p-8 overflow-hidden"
                  style={{
                    background: "rgba(10,10,20,0.85)",
                    border: `1px solid ${a.accent}22`,
                    boxShadow: `0 4px 40px rgba(0,0,0,0.4)`,
                    backdropFilter: "blur(20px)",
                    cursor: "default",
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${a.accent}50`;
                    e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${a.accent}15`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${a.accent}22`;
                    e.currentTarget.style.boxShadow = "0 4px 40px rgba(0,0,0,0.4)";
                  }}
                >
                  {/* Background glow */}
                  <div
                    className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: a.accent, filter: "blur(60px)", opacity: 0.08 }}
                  />

                  {/* Number */}
                  <span
                    className="absolute top-5 right-6"
                    style={{ fontFamily: "'Syne', sans-serif", fontSize: "3.5rem", fontWeight: 900, color: a.accent, opacity: 0.08, lineHeight: 1 }}
                  >
                    {a.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-12 h-12 flex items-center justify-center rounded-xl mb-6 text-xl"
                    style={{ background: `${a.accent}15`, color: a.accent }}
                  >
                    <Icon />
                  </div>

                  {/* Title */}
                  <h3
                    className="font-bold mb-3 leading-tight"
                    style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.1rem", color: "#fff" }}
                  >
                    {a.title}
                  </h3>

                  {/* Accent line */}
                  <div className="mb-4 h-0.5 w-10 rounded-full" style={{ background: a.accent }} />

                  {/* Description */}
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.72)" }}>
                    {a.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {a.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium"
                        style={{
                          background: `${a.accent}12`,
                          color: a.accent,
                          border: `1px solid ${a.accent}25`,
                          fontFamily: "'DM Mono', monospace",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievements;