import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const links = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "achievements",
  "certificates",
  "resume",
  "contact",
];

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Pick whichever section has the most visible pixels in the viewport.
      // This correctly handles both short and very tall sections (education, resume).
      const viewH = window.innerHeight;
      let current = "home";
      let maxVisible = 0;

      links.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Clamp the visible slice of this section within the viewport
        const visibleTop = Math.max(rect.top, 0);
        const visibleBottom = Math.min(rect.bottom, viewH);
        const visiblePx = Math.max(0, visibleBottom - visibleTop);
        if (visiblePx > maxVisible) {
          maxVisible = visiblePx;
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once on mount to set correct initial state
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
      `}</style>

      <motion.header
        className="fixed top-0 w-full z-50"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: scrolled
            ? darkMode ? "rgba(7,7,15,0.92)" : "rgba(240,244,255,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(128,128,180,0.12)" : "none",
          transition: "background 0.4s, backdrop-filter 0.4s, border 0.4s",
        }}
      >
        <div className="container mx-auto px-5 py-3.5 flex items-center justify-between gap-2">

          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "var(--text-primary)",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "none",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#00f5d4" }}>G</span>otam
            <span style={{
              color: "rgba(255,255,255,0.22)",
              fontWeight: 400,
              fontSize: "0.65rem",
              fontFamily: "'DM Mono', monospace",
              marginLeft: 7,
            }}>
              .portfolio
            </span>
          </button>

          {/* Desktop nav — all 9 links, no overflow */}
          <nav
            className="hidden xl:flex items-center"
            style={{ flex: 1, justifyContent: "center", gap: "2px" }}
          >
            {links.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="relative rounded-lg capitalize"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.61rem",
                  letterSpacing: "0.03em",
                  color: active === link ? "#00f5d4" : "var(--text-muted)",
                  background: "none",
                  border: "none",
                  cursor: "none",
                  transition: "color 0.2s",
                  whiteSpace: "nowrap",
                  padding: "6px 10px",
                }}
                onMouseEnter={(e) => {
                  if (active !== link) e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  if (active !== link) e.currentTarget.style.color = "var(--text-muted)";
                }}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(0,245,212,0.08)",
                      border: "1px solid rgba(0,245,212,0.2)",
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{link}</span>
              </button>
            ))}
          </nav>

          {/* Right-side icon buttons */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              style={{
                width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
                cursor: "none",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
            >
              {darkMode ? <FaSun size={12} /> : <FaMoon size={12} />}
            </button>

            {/* Hamburger — visible below xl */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden"
              style={{
                width: 34, height: 34,
                display: "flex", alignItems: "center", justifyContent: "center",
                borderRadius: "8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.4)",
                cursor: "none",
              }}
            >
              {mobileOpen ? <FaTimes size={12} /> : <FaBars size={12} />}
            </button>
          </div>
        </div>

        {/* Mobile / tablet dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28 }}
              style={{
                background: darkMode ? "rgba(7,7,15,0.98)" : "rgba(240,244,255,0.98)",
                borderBottom: "1px solid rgba(128,128,180,0.12)",
                overflow: "hidden",
              }}
            >
              <div className="container mx-auto px-5 py-4 grid grid-cols-3 gap-1.5">
                {links.map((link, i) => (
                  <motion.button
                    key={link}
                    onClick={() => scrollTo(link)}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                    className="text-left px-3 py-2.5 rounded-lg capitalize"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: active === link ? "#00f5d4" : "rgba(255,255,255,0.45)",
                      background: active === link ? "rgba(0,245,212,0.07)" : "transparent",
                      border: active === link
                        ? "1px solid rgba(0,245,212,0.18)"
                        : "1px solid transparent",
                      cursor: "none",
                    }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

export default Navbar;