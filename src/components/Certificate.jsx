import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { FaPython } from "react-icons/fa";

const certificates = [
  {
    title: "NPTEL Cloud Computing",
    issuer: "NPTEL — IIT",
    date: "October 2025",
    description:
      "Completed NPTEL certification in Cloud Computing with strong cloud fundamentals including deployment models, services, and security.",
    tags: ["Cloud", "AWS", "IaaS", "PaaS"],
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL25CS107S145870100210780446",
    accent: "#06d6a0",
    icon: "nptel",
  },
  {
    title: "Google Cybersecurity",
    issuer: "Google — Coursera",
    date: "2024",
    description:
      "Completed the Google Cybersecurity Professional Certificate covering SIEM, Linux command line, SQL, threat detection and incident response.",
    tags: ["SIEM", "Linux", "SQL", "Threat Detection"],
    link: "https://www.coursera.org/account/accomplishments/specialization/9HEVO1P2IUG3",
    accent: "#4cc9f0",
    icon: "google",
  },
  {
    title: "Introduction to Python",
    issuer: "Online Platform",
    date: "2023",
    description:
      "Built a strong foundation in Python including data types, control structures, functions, OOP, and file handling.",
    tags: ["Python", "OOP", "Scripting"],
    link: "https://drive.google.com/file/d/1PEd1kA6qezxUHt-0OwZrAnVB3dxH4sDa/view",
    accent: "#f72585",
    icon: "python",
  },
];

const iconMap = {
  nptel: ({ accent }) => (
    <span style={{
      fontFamily: "'DM Mono', monospace",
      fontWeight: 700,
      fontSize: "0.75rem",
      color: accent,
      letterSpacing: "0.08em",
    }}>NPTEL</span>
  ),
  google: ({ accent }) => <SiGoogle size={24} style={{ color: accent }} />,
  python: ({ accent }) => <FaPython size={24} style={{ color: accent }} />,
};

const Certificates = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + certificates.length) % certificates.length);
  };

  const cert = certificates[current];
  const IconComp = iconMap[cert.icon];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <section
        id="certificates"
        className="relative py-28 overflow-hidden section-tertiary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(6,214,160,0.45)", transition: "background 0.4s" }}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: `radial-gradient(circle, ${cert.accent}18 0%, transparent 70%)`, top: "-100px", left: "50%", transform: "translateX(-50%)", transition: "background 0.5s" }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-4xl">

          {/* Header */}
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#06d6a0", fontFamily: "'DM Mono', monospace" }}
            >
              📜 Credentials
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
              <span style={{ background: "linear-gradient(90deg, #06d6a0, #4cc9f0, #f72585)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Certificates
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mx-auto mt-6 h-px w-32"
              style={{ background: "linear-gradient(90deg, transparent, #06d6a0, transparent)" }}
            />
          </div>

          {/* Slider */}
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => navigate(-1)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-20 w-11 h-11 flex items-center justify-center rounded-xl"
              style={{
                background: "rgba(10,10,20,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cert.accent}50`;
                e.currentTarget.style.color = cert.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <FaArrowLeft size={13} />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => navigate(1)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-20 w-11 h-11 flex items-center justify-center rounded-xl"
              style={{
                background: "rgba(10,10,20,0.9)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${cert.accent}50`;
                e.currentTarget.style.color = cert.accent;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              }}
            >
              <FaArrowRight size={13} />
            </button>

            {/* Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -60, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl p-10 relative overflow-hidden"
                style={{
                  background: "rgba(10,10,20,0.9)",
                  border: `1px solid ${cert.accent}30`,
                  boxShadow: `0 0 60px ${cert.accent}12, 0 30px 80px rgba(0,0,0,0.5)`,
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(90deg, ${cert.accent}, transparent)` }}
                />

                {/* Corner number */}
                <span
                  className="absolute top-6 right-8"
                  style={{ fontFamily: "'Syne', sans-serif", fontSize: "5rem", fontWeight: 900, color: cert.accent, opacity: 0.06, lineHeight: 1 }}
                >
                  {String(current + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col sm:flex-row gap-8 items-start">
                  {/* Icon box */}
                  <div
                    className="w-16 h-16 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: `${cert.accent}15`, border: `1px solid ${cert.accent}30` }}
                  >
                    <IconComp accent={cert.accent} />
                  </div>

                  <div className="flex-1">
                    {/* Issuer + date */}
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: cert.accent, letterSpacing: "0.08em" }}
                      >
                        {cert.issuer}
                      </span>
                      <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.7rem" }}>•</span>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)" }}>
                        {cert.date}
                      </span>
                    </div>

                    <h3
                      className="font-extrabold mb-3 leading-tight"
                      style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.5rem", color: "#fff" }}
                    >
                      {cert.title}
                    </h3>

                    <div className="mb-4 h-0.5 w-12 rounded-full" style={{ background: cert.accent }} />

                    <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.75)" }}>
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {cert.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-2.5 py-1 text-xs rounded-lg"
                            style={{
                              background: `${cert.accent}12`,
                              color: cert.accent,
                              border: `1px solid ${cert.accent}25`,
                              fontFamily: "'DM Mono', monospace",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View link */}
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
                        style={{
                          background: `${cert.accent}18`,
                          border: `1px solid ${cert.accent}40`,
                          color: cert.accent,
                          fontFamily: "'DM Sans', sans-serif",
                          textDecoration: "none",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${cert.accent}28`;
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = `${cert.accent}18`;
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        View Certificate
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {certificates.map((c, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    background: i === current ? cert.accent : "rgba(255,255,255,0.15)",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: i === current ? `0 0 10px ${cert.accent}80` : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certificates;