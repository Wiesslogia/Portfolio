import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { asset } from "../assets";

const Home = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800;900&display=swap');

        @keyframes avatar-float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .avatar-float { animation: avatar-float 6s ease-in-out infinite; }
      `}</style>

      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden section-primary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(0,245,212,0.35)", transition: "background 0.4s" }}
      >
        {/* Subtle grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }} />

        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div className="absolute rounded-full"
            style={{ width: 700, height: 700, background: "radial-gradient(circle, rgba(0,245,212,0.10) 0%, transparent 68%)", top: -200, right: -180 }}
            animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="absolute rounded-full"
            style={{ width: 600, height: 600, background: "radial-gradient(circle, rgba(247,37,133,0.08) 0%, transparent 68%)", bottom: -160, left: -160 }}
            animate={{ scale: [1, 1.14, 1] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
          <motion.div className="absolute rounded-full"
            style={{ width: 360, height: 360, background: "radial-gradient(circle, rgba(76,201,240,0.07) 0%, transparent 68%)", top: "42%", left: "50%", transform: "translate(-50%,-50%)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
        </div>

        {/* Floating code particles */}
        {["sudo", "#!/bin", "ssh", "git push", "docker", "nmap", "0x1F", "ping"].map((t, i) => (
          <motion.span key={i}
            className="absolute select-none pointer-events-none hidden md:block"
            style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.58rem",
              color: i % 3 === 0 ? "rgba(0,245,212,0.11)" : i % 3 === 1 ? "rgba(247,37,133,0.09)" : "rgba(76,201,240,0.08)",
              left: `${4 + i * 11}%`, top: `${10 + (i % 5) * 15}%`,
            }}
            animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i * 0.6, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
          >{t}</motion.span>
        ))}

        {/* ── Centered content — pushed down 80px to clear fixed navbar ── */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto w-full"
          style={{ paddingTop: "96px", paddingBottom: "40px" }}
        >

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="avatar-float mb-8"
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              overflow: "hidden",
              flexShrink: 0,
              border: "3px solid rgba(0,245,212,0.45)",
              boxShadow: "0 0 0 8px rgba(0,245,212,0.06), 0 0 0 16px rgba(0,245,212,0.025), 0 28px 80px rgba(0,0,0,0.65), 0 0 50px rgba(0,245,212,0.18)",
            }}
          >
            <img
              src={asset.profile}
              alt="Anshu Priya"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 900, lineHeight: 1, marginBottom: "1rem" }}
          >
            <span style={{
              fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
              background: "linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.55))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              whiteSpace: "nowrap",
            }}>
              Gotam Kumar Prajapati
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-5"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.8rem, 2vw, 1rem)", color: "rgba(255,255,255,0.45)" }}
          >
            <span style={{ color: "rgba(0,245,212,0.5)" }}>$ </span>
            <span style={{ color: "#00f5d4" }}>
              <Typewriter
                words={["Cybersecurity Enthusiast", "DevSecOps Learner", "Penetration Tester", "Cloud Explorer", "B.Tech CSE @ LPU"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={40}
                delaySpeed={2000}
              />
            </span>
          </motion.div>

          {/* Skill chips */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {["Python", "Java", "Docker", "AWS", "Linux", "React", "VAPT"].map((s, i) => (
              <motion.span key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.46 + i * 0.055, duration: 0.35 }}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  padding: "5px 14px",
                  borderRadius: "999px",
                  background: i % 3 === 0 ? "rgba(0,245,212,0.08)" : i % 3 === 1 ? "rgba(247,37,133,0.08)" : "rgba(76,201,240,0.08)",
                  border: `1px solid ${i % 3 === 0 ? "rgba(0,245,212,0.22)" : i % 3 === 1 ? "rgba(247,37,133,0.22)" : "rgba(76,201,240,0.22)"}`,
                  color: i % 3 === 0 ? "#00f5d4" : i % 3 === 1 ? "#f72585" : "#4cc9f0",
                  letterSpacing: "0.04em",
                }}
              >{s}</motion.span>
            ))}
          </motion.div>

          {/* Catchy tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.54 }}
            className="mb-9"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.1rem", lineHeight: 1.85, maxWidth: "480px" }}
          >
            Breaking things to make them unbreakable —{" "}
            <span style={{ color: "#00f5d4" }}>turning vulnerabilities into victories</span>,
            one line of secure code at a time.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.64 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <motion.button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "linear-gradient(135deg, #00f5d4, #4cc9f0)",
                color: "#07070f",
                fontFamily: "'DM Sans', sans-serif",
                border: "none",
                letterSpacing: "0.02em",
              }}
              whileHover={{ y: -2, boxShadow: "0 14px 42px rgba(0,245,212,0.38)" }}
              whileTap={{ scale: 0.97 }}
            >
              View My Work
            </motion.button>

            <motion.button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.72)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.02em",
              }}
              whileHover={{ background: "rgba(255,255,255,0.08)", y: -2, borderColor: "rgba(255,255,255,0.24)" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.button>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-3"
          >
            {[
              { icon: FaGithub,   href: "https://github.com/Wiesslogia",               accent: "#00f5d4", label: "GitHub" },
              { icon: FaLinkedin, href: "https://linkedin.com/in/gautam-kumar-87b353278/", accent: "#4cc9f0", label: "LinkedIn" },
            ].map(({ icon: Icon, href, accent, label }) => (
              <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.38)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  textDecoration: "none",
                }}
                whileHover={{ background: `${accent}12`, borderColor: `${accent}35`, color: accent, y: -2 }}
                transition={{ duration: 0.15 }}
              >
                <Icon size={13} /> {label}
              </motion.a>
            ))}
          </motion.div>

        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.58rem", color: "rgba(255,255,255,0.14)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            scroll
          </span>
          <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <FaArrowDown size={10} style={{ color: "rgba(255,255,255,0.14)" }} />
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #07070f)" }} />
      </section>
    </>
  );
};

export default Home;