import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaDownload, FaTimes, FaEye, FaShieldAlt, FaCode,
  FaGraduationCap, FaArrowRight,
} from "react-icons/fa";
import cv from "../assets/cv.pdf";

/* ─── Quick-glance stat pill ─── */
function StatPill({ icon: Icon, label, value, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-1 px-5 py-4 rounded-2xl relative overflow-hidden"
      style={{
        background: "rgba(10,10,20,0.85)",
        border: `1px solid ${accent}25`,
        backdropFilter: "blur(20px)",
        flex: "1 1 120px",
      }}
      whileHover={{ borderColor: accent + "55", y: -3, transition: { duration: 0.2 } }}
    >
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full pointer-events-none"
        style={{ background: accent, filter: "blur(40px)", opacity: 0.12 }} />
      <div className="w-8 h-8 flex items-center justify-center rounded-xl mb-1"
        style={{ background: accent + "15", color: accent }}>
        <Icon size={13} />
      </div>
      <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "#fff", lineHeight: 1 }}>
        {value}
      </span>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </motion.div>
  );
}

/* ─── Highlight row ─── */
function HighlightRow({ label, items, accent, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-wrap items-start gap-3"
    >
      <span style={{
        fontFamily: "'DM Mono', monospace", fontSize: "0.65rem",
        color: accent, letterSpacing: "0.08em", textTransform: "uppercase",
        paddingTop: "6px", minWidth: "80px", flexShrink: 0,
      }}>
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="px-3 py-1.5 rounded-lg text-xs"
            style={{
              background: accent + "18",
              color: "rgba(255,255,255,0.85)",
              border: `1px solid ${accent}35`,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
            }}>
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

const Resume = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800;900&display=swap');
      `}</style>

      <section
        id="resume"
        className="relative py-28 overflow-hidden section-secondary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(0,245,212,0.35)", transition: "background 0.4s" }}
      >
        {/* ── ambient glows ── */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div className="absolute rounded-full"
            style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(0,245,212,0.09) 0%, transparent 70%)", top: -120, right: -160 }}
            animate={{ scale: [1, 1.12, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute rounded-full"
            style={{ width: 500, height: 500, background: "radial-gradient(circle, rgba(247,37,133,0.07) 0%, transparent 70%)", bottom: -80, left: -120 }}
            animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(255,255,255,0.018)" strokeWidth="1" />
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          }} />
        </div>

        <div className="relative container mx-auto px-6 max-w-6xl">

          {/* ── Section header ── */}
          <div className="mb-20 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}
            >
              📄 Credentials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold leading-[0.9]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              <span style={{ background: "linear-gradient(135deg, #ffffff 30%, #ffffff60)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                My
              </span>
              <br />
              <span style={{ background: "linear-gradient(90deg, #00f5d4, #4cc9f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Resume
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="mx-auto mt-6 h-px w-32"
              style={{ background: "linear-gradient(90deg, transparent, #00f5d4, transparent)" }}
            />
          </div>

          {/* ── Two-column layout ── */}
          <div className="flex flex-col lg:flex-row gap-10 items-start">

            {/* LEFT: identity + snapshot */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12 space-y-5"
            >
              {/* Identity card */}
              <div className="rounded-2xl p-8 relative overflow-hidden"
                style={{
                  background: "rgba(10,10,20,0.9)",
                  border: "1px solid rgba(0,245,212,0.18)",
                  boxShadow: "0 0 60px rgba(0,245,212,0.05), 0 20px 60px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(24px)",
                }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                  style={{ background: "linear-gradient(90deg, #00f5d4, #4cc9f0, transparent)" }} />
                <span className="absolute top-4 right-5"
                  style={{ fontFamily: "'Syne', sans-serif", fontSize: "5rem", fontWeight: 900, color: "#00f5d4", opacity: 0.05, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
                  CV
                </span>

                <div className="mb-6">
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.63rem", color: "#00f5d4", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                    Candidate
                  </p>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "2rem", color: "#fff", lineHeight: 1.05, marginBottom: "0.3rem" }}>
                    Gotam Kumar Prajapati
                  </h3>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>
                    B.Tech CSE · LPU Phagwara
                  </p>
                </div>

                <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.1)" }} />

                <div className="space-y-4">
                  <HighlightRow label="Focus"  accent="#00f5d4" delay={0.15} items={["Cybersecurity", "DevSecOps", "Cloud"]} />
                  <HighlightRow label="Stack"  accent="#4cc9f0" delay={0.22} items={["Python", "C++", "Docker", "AWS"]} />
                  <HighlightRow label="Certs"  accent="#f72585" delay={0.29} items={["Google Cyber", "NPTEL Cloud", "Python"]} />
                  <HighlightRow label="CGPA"   accent="#ffd166" delay={0.36} items={["8.37 / 10"]} />
                </div>

                <div className="h-px my-6" style={{ background: "rgba(255,255,255,0.1)" }} />

                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#00f5d4", boxShadow: "0 0 8px #00f5d4", animation: "pulse 2s infinite" }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", color: "rgba(255,255,255,0.65)", letterSpacing: "0.05em" }}>
                    Open to opportunities
                  </span>
                </div>
              </div>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-3">
                <StatPill icon={FaCode}         label="LeetCode"      value="100+" accent="#00f5d4" delay={0.1} />
                <StatPill icon={FaShieldAlt}     label="VAPT Projects" value="3+"   accent="#f72585" delay={0.18} />
                <StatPill icon={FaGraduationCap} label="Certs"         value="3"    accent="#4cc9f0" delay={0.26} />
              </div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: 0.5 }}
                className="flex gap-3"
              >
                <motion.button
                  onClick={() => setModalOpen(true)}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: "rgba(0,245,212,0.08)",
                    border: "1px solid rgba(0,245,212,0.28)",
                    color: "#00f5d4",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  whileHover={{ background: "rgba(0,245,212,0.15)", y: -2, boxShadow: "0 10px 30px rgba(0,245,212,0.18)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaEye size={13} /> View CV
                </motion.button>

                <motion.a
                  href={cv}
                  download="Gotam_Prajapati.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm"
                  style={{
                    background: "linear-gradient(135deg, #00f5d4, #4cc9f0)",
                    color: "#07070f",
                    fontFamily: "'DM Sans', sans-serif",
                    textDecoration: "none",
                  }}
                  whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,245,212,0.38)" }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FaDownload size={13} /> Download
                </motion.a>
              </motion.div>
            </motion.div>

            {/* RIGHT: CV preview pane */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:w-7/12 w-full"
            >
              <div className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(10,10,20,0.9)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 0 80px rgba(0,245,212,0.04), 0 30px 80px rgba(0,0,0,0.5)",
                  backdropFilter: "blur(20px)",
                }}>

                {/* Browser chrome bar */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(6,6,14,0.8)" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ background: "#f72585", opacity: 0.75 }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "#ffd166", opacity: 0.75 }} />
                    <span className="w-3 h-3 rounded-full" style={{ background: "#00f5d4", opacity: 0.75 }} />
                  </div>
                  <div className="flex items-center gap-2 px-4 py-1.5 rounded-lg"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.25)" }}>
                      Gotam_Prajapati_cv.pdf
                    </span>
                  </div>
                  <motion.button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg"
                    style={{
                      background: "rgba(0,245,212,0.07)", border: "1px solid rgba(0,245,212,0.18)",
                      color: "#00f5d4", fontFamily: "'DM Mono', monospace", fontSize: "0.62rem",
                    }}
                    whileHover={{ background: "rgba(0,245,212,0.14)" }}
                    whileTap={{ scale: 0.96 }}
                  >
                    <FaEye size={9} /> expand
                  </motion.button>
                </div>

                {/* PDF embed */}
                <div className="relative" style={{ height: "520px" }}>
                  <iframe
                    src={`${cv}#toolbar=0&view=FitH`}
                    title="Gotam Prajapati Resume"
                    className="w-full h-full"
                    style={{ border: "none", display: "block" }}
                  />
                  {/* hover overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                    style={{ background: "rgba(7,7,15,0.52)", backdropFilter: "blur(3px)" }}
                    onClick={() => setModalOpen(true)}
                  >
                    <div className="flex flex-col items-center gap-3 px-10 py-7 rounded-2xl"
                      style={{ background: "rgba(0,245,212,0.08)", border: "1px solid rgba(0,245,212,0.28)", backdropFilter: "blur(12px)" }}>
                      <FaEye size={24} style={{ color: "#00f5d4" }} />
                      <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600, color: "#00f5d4", fontSize: "0.875rem" }}>
                        View full screen
                      </span>
                      <div className="flex items-center gap-1.5"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(0,245,212,0.45)" }}>
                        <FaArrowRight size={8} /> click to open
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom strip */}
                <div className="flex items-center justify-between px-5 py-3.5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(6,6,14,0.6)" }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.62rem", color: "rgba(255,255,255,0.2)" }}>
                    Last updated · March 2025
                  </span>
                  <motion.a
                    href={cv}
                    download="Gotam_Prajapati_cv.pdf"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,245,212,0.1), rgba(76,201,240,0.07))",
                      border: "1px solid rgba(0,245,212,0.22)",
                      color: "#00f5d4",
                      fontFamily: "'DM Sans', sans-serif",
                      textDecoration: "none",
                    }}
                    whileHover={{ y: -1, boxShadow: "0 6px 20px rgba(0,245,212,0.18)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaDownload size={10} /> Download PDF
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Fullscreen Modal ── */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[9999] flex flex-col"
              style={{ background: "rgba(5,5,12,0.97)", backdropFilter: "blur(24px)" }}
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center justify-between px-6 py-4 flex-shrink-0"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(7,7,15,0.8)" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg"
                    style={{ background: "rgba(0,245,212,0.1)", border: "1px solid rgba(0,245,212,0.2)" }}>
                    <FaEye size={13} style={{ color: "#00f5d4" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff", lineHeight: 1.2 }}>
                      Gotam Prajapati — <span style={{ color: "#00f5d4" }}>Curriculum Vitae</span>
                    </p>
                    <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.63rem", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>
                      B.Tech CSE · Lovely Professional University
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <motion.a
                    href={cv}
                    download="Gotam_Prajapati_cv.pdf"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
                    style={{
                      background: "linear-gradient(135deg, #00f5d4, #4cc9f0)",
                      color: "#07070f",
                      textDecoration: "none",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    whileHover={{ y: -1, boxShadow: "0 8px 28px rgba(0,245,212,0.38)" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <FaDownload size={12} /> Download
                  </motion.a>
                  <motion.button
                    onClick={() => setModalOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(247,37,133,0.08)",
                      border: "1px solid rgba(247,37,133,0.22)",
                      color: "#f72585",
                    }}
                    whileHover={{ background: "rgba(247,37,133,0.18)" }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <FaTimes size={14} />
                  </motion.button>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 p-4 md:p-8 md:pt-6"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 0 60px rgba(0,245,212,0.05)" }}>
                  <iframe
                    src={`${cv}#view=FitH`}
                    title="Gotam Prajapati CV Fullscreen"
                    className="w-full h-full"
                    style={{ border: "none", minHeight: "60vh" }}
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Resume;