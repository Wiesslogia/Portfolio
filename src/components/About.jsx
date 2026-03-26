import React from "react";
import cv from "../assets/cv.pdf";
import { motion } from "framer-motion";
import { FaDownload, FaShieldAlt, FaDocker, FaEnvelope, FaLaptopCode, FaCloud } from "react-icons/fa";

/* ── small info card ── */
function InfoCard({ icon: Icon, label, value, accent }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
      style={{
        background: "rgba(10,10,20,0.7)",
        border: `1px solid ${accent}22`,
        backdropFilter: "blur(12px)",
        flex: "1 1 160px",
      }}
    >
      <div
        className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
        style={{ background: `${accent}15`, color: accent }}
      >
        <Icon size={13} />
      </div>
      <div>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.6rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2px" }}>
          {label}
        </p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.82rem", color: "#fff", fontWeight: 600 }}>
          {value}
        </p>
      </div>
    </div>
  );
}

const About = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <section
        id="about"
        className="relative py-28 overflow-hidden section-secondary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(247,37,133,0.4)", transition: "background 0.4s" }}
      >
        {/* Background layers */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute rounded-full"
            style={{ width: 560, height: 560, background: "radial-gradient(circle, rgba(247,37,133,0.11) 0%, transparent 70%)", top: -160, left: -160 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full"
            style={{ width: 480, height: 480, background: "radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)", bottom: -120, right: -120 }}
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(255,255,255,0.025)" strokeWidth="1" />
          </svg>
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%)",
          }} />
        </div>

        {/* ── Single centered content column ── */}
        <div className="relative container mx-auto px-6 max-w-3xl">

          {/* Eyebrow: Who I Am */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div style={{ width: 24, height: 1, background: "#f72585" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#f72585" }}>
              Who I Am
            </span>
          </motion.div>

          {/* Heading: About Me */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.8rem, 5.5vw, 4rem)", fontWeight: 800, lineHeight: 1.05, color: "#fff", marginBottom: "1rem" }}
          >
            About{" "}
            <span style={{
              background: "linear-gradient(90deg, #f72585 0%, #4cc9f0 60%, #00f5d4 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Me
            </span>
          </motion.h2>

          {/* Catchy code sub-line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", color: "#00f5d4", letterSpacing: "0.04em", marginBottom: "1.5rem" }}
          >
            // I break things to make them unbreakable.
          </motion.p>

          {/* Accent line */}
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{ height: "2px", width: "64px", borderRadius: "9999px", background: "linear-gradient(90deg, #f72585, #4cc9f0)", marginBottom: "2.5rem" }}
          />

          {/* Body text */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-5"
            style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.95, fontSize: "1rem", marginBottom: "2.5rem" }}
          >
            <p>
              I'm a{" "}
              <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>fresher with a cybersecurity foundation</span>
              {" "}— passionate about vulnerability assessment, penetration testing, and understanding how systems break under pressure.
            </p>
            <p>
              I'm now growing into{" "}
              <span style={{ color: "#00f5d4", fontWeight: 500 }}>DevOps and cloud infrastructure</span>,
              learning to weave security into every stage of CI/CD. The goal: become a{" "}
              <span style={{ color: "rgba(255,255,255,0.78)", fontWeight: 500 }}>DevSecOps engineer</span>
              {" "}who ships fast without cutting corners on safety.
            </p>
          </motion.div>

          {/* Quick info cards */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-3"
            style={{ marginBottom: "2.5rem" }}
          >
            <InfoCard icon={FaShieldAlt}  label="Focus"    value="Cybersecurity"  accent="#f72585" />
            <InfoCard icon={FaCloud}      label="Learning" value="DevOps & Cloud" accent="#4cc9f0" />
            <InfoCard icon={FaLaptopCode} label="CGPA"     value="8.25 / 10"      accent="#ffd166" />
          </motion.div>

          {/* Journey track */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex items-center gap-4"
            style={{ marginBottom: "2.5rem" }}
          >
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-shrink-0"
              style={{ background: "rgba(247,37,133,0.08)", border: "1px solid rgba(247,37,133,0.2)" }}>
              <FaShieldAlt style={{ color: "#f72585", fontSize: "0.8rem" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#f72585" }}>Security</span>
            </div>

            <div className="flex-1 relative h-[2px] rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.06)" }}>
              <motion.div
                style={{ position: "absolute", inset: "0 auto 0 0", background: "linear-gradient(90deg, #f72585, #4cc9f0, #00f5d4)", borderRadius: "9999px" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "65%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl flex-shrink-0"
              style={{ background: "rgba(0,245,212,0.07)", border: "1px solid rgba(0,245,212,0.2)" }}>
              <FaDocker style={{ color: "#00f5d4", fontSize: "0.8rem" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "#00f5d4" }}>DevSecOps</span>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-3"
          >
            <motion.a
              href={cv}
              download
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "linear-gradient(135deg, rgba(247,37,133,0.15), rgba(76,201,240,0.1))",
                border: "1px solid rgba(247,37,133,0.3)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.02em",
                textDecoration: "none",
              }}
              whileHover={{ background: "linear-gradient(135deg, rgba(247,37,133,0.25), rgba(76,201,240,0.18))", borderColor: "rgba(247,37,133,0.5)", y: -2, boxShadow: "0 10px 30px rgba(247,37,133,0.2)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <FaDownload size={12} style={{ color: "#f72585" }} />
              Download CV
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{
                background: "rgba(0,245,212,0.08)",
                border: "1px solid rgba(0,245,212,0.25)",
                color: "#00f5d4",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.02em",
                textDecoration: "none",
                cursor: "pointer",
              }}
              whileHover={{ background: "rgba(0,245,212,0.15)", borderColor: "rgba(0,245,212,0.5)", y: -2, boxShadow: "0 10px 30px rgba(0,245,212,0.18)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <FaEnvelope size={12} style={{ color: "#00f5d4" }} />
              Contact Me
            </motion.a>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default About;