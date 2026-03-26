import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = ["Home", "About", "Skills", "Projects", "Achievements", "Certificates", "Contact"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <footer
        className="relative overflow-hidden section-primary"
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", fontFamily: "'DM Sans', sans-serif", transition: "background 0.4s" }}
      >
        {/* Top glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] pointer-events-none"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,212,0.3), transparent)" }}
        />

        <div className="container mx-auto px-6 max-w-6xl pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

            {/* Brand */}
            <div>
              <h3
                className="mb-4"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.6rem", color: "#fff" }}
              >
                Gotam{" "}
                <span style={{ background: "linear-gradient(90deg, #00f5d4, #4cc9f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Kumar Prajapati
                </span>
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                Cybersecurity enthusiast growing into DevSecOps — building secure, scalable, and observable systems.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/gotamPrajapati/", accent: "#4cc9f0" },
                  { icon: FaGithub, href: "https://github.com/Wiesslogia", accent: "#00f5d4" },
                ].map(({ icon: Icon, href, accent }) => (
                  <motion.a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-base"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                    whileHover={{ background: `${accent}12`, borderColor: `${accent}40`, color: accent, y: -2 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Icon size={15} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="mb-5 text-sm tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}
              >
                Navigation
              </h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }} transition={{ duration: 0.15 }}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={(e) => (e.target.style.color = "#00f5d4")}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="mb-5 text-sm tracking-widest uppercase"
                style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em" }}
              >
                Contact
              </h4>
              <div className="space-y-3">
                {[
                  { icon: FaMapMarkerAlt, text: "Phagwara, Punjab, India", accent: "#00f5d4" },
                  { icon: FaPhone, text: "+91 7974249749", accent: "#4cc9f0" },
                  { icon: FaEnvelope, text: "gautamprajapti799@gmail.com", accent: "#f72585" },
                ].map(({ icon: Icon, text, accent }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 flex items-center justify-center rounded-lg flex-shrink-0 mt-0.5"
                      style={{ background: `${accent}12`, color: accent }}
                    >
                      <Icon size={11} />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", lineHeight: 1.6 }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.8rem", fontFamily: "'DM Mono', monospace" }}>
              © {new Date().getFullYear()} Gotam Kumar Prajapati — crafted with React & Tailwind
            </p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#00f5d4", boxShadow: "0 0 6px #00f5d4" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "rgba(255,255,255,0.65)" }}>
                Open to work
              </span>
            </div>
          </div>
        </div>

        {/* Scroll to top */}
        <AnimatePresence>
          {showScroll && (
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              whileHover={{ y: -3, boxShadow: "0 10px 30px rgba(0,245,212,0.3)" }}
              whileTap={{ scale: 0.93 }}
              className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-xl z-50"
              style={{
                background: "linear-gradient(135deg, rgba(0,245,212,0.15), rgba(76,201,240,0.1))",
                border: "1px solid rgba(0,245,212,0.3)",
                color: "#00f5d4",
                backdropFilter: "blur(10px)",
              }}
            >
              <FiArrowUp size={16} />
            </motion.button>
          )}
        </AnimatePresence>
      </footer>
    </>
  );
};

export default Footer;