import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { asset } from "../assets";


const projects = [
  {
    title: "GitOps Based Deployment System",
    description:
      "A GitOps-based system that automatically deploys applications to Kubernetes whenever code is updated in GitHub using Argo CD.",
    tech: ["Docker", "Kubernetes", "Argo CD", "GitHub Actions"],
    link: "https://github.com/Wiesslogia/GitOps-Based-Deployment-System.git",
    image: asset.gitOps,
    accent: "#00f5d4",
    tag: "AI / Automation",
  },
  {
    title: "Vulnerability Assessment & Remediation",
    description:
      "A hands-on cybersecurity project focused on identifying, analyzing, and remediating network vulnerabilities using industry tools like Nmap and Nessus to strengthen system security and reduce attack surface.",
    tech: ["nmap","nessus","python"],
    link: "https://github.com/Wiesslogia/SIEM-Threat-Monitoring-Dashboard.git   ",
    image: asset.Nessus,
    tag: "Security",
  },
  {
    title: "Expense Split App",
    description:
      "Full-stack application to manage and split expenses efficiently.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/Wiesslogia/ExpenseSplitApp.git",
    image: asset.tracker,
    accent: "#4cc9f0",
    tag: "Full Stack",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const navigate = (dir) => {
    setDirection(dir === "right" ? 1 : -1);
    setIndex((prev) =>
      dir === "right"
        ? (prev + 1) % projects.length
        : (prev - 1 + projects.length) % projects.length
    );
  };

  const project = projects[index];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        .proj-img-wrap img { transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .proj-img-wrap:hover img { transform: scale(1.06); }
      `}</style>

      <section
        id="projects"
        className="relative py-28 overflow-hidden section-tertiary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(76,201,240,0.4)", transition: "background 0.4s" }}
      >
        {/* Ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: `radial-gradient(circle, ${project.accent}22 0%, transparent 70%)`, top: "-80px", right: "-100px", transition: "background 0.6s" }} />
          <div className="absolute w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, #f7258518 0%, transparent 70%)", bottom: "-60px", left: "-80px" }} />
        </div>

        {/* Grid lines */}
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
            className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
            style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}
          >
            🚀 Selected Work
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
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Featured</span>
            <br />
            <span style={{
              background: "linear-gradient(90deg, #00f5d4, #4cc9f0, #f72585)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Projects</span>
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

        {/* ── Card ── */}
        <div className="relative container mx-auto px-6 max-w-6xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col lg:flex-row gap-0 overflow-hidden rounded-2xl"
              style={{
                background: "rgba(10,10,20,0.85)",
                border: `1px solid ${project.accent}30`,
                boxShadow: `0 0 60px ${project.accent}18, 0 30px 80px rgba(0,0,0,0.5)`,
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Image side */}
              <div className="proj-img-wrap relative w-full lg:w-1/2 overflow-hidden" style={{ minHeight: "320px" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: "320px" }}
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(135deg, ${project.accent}30 0%, rgba(7,7,15,0.4) 100%)` }} />

                {/* Tag badge */}
                <div className="absolute top-5 left-5">
                  <span
                    className="px-3 py-1 text-xs font-medium rounded-full"
                    style={{
                      background: project.accent + "22",
                      color: project.accent,
                      border: `1px solid ${project.accent}40`,
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.05em",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Project index */}
                <div className="absolute bottom-5 left-5"
                  style={{ fontFamily: "'Syne', sans-serif", color: "rgba(255,255,255,0.2)", fontSize: "5rem", fontWeight: 800, lineHeight: 1 }}>
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content side */}
              <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                {/* Noise texture */}
                <div className="absolute inset-0 rounded-2xl opacity-[0.025] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "100px",
                  }}
                />

                <h3
                  className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#ffffff" }}
                >
                  {project.title}
                </h3>

                {/* Accent line */}
                <div className="mb-5 h-0.5 w-12 rounded-full"
                  style={{ background: project.accent }} />

                <p className="mb-8 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-lg font-medium"
                      style={{
                        background: project.accent + "12",
                        color: project.accent,
                        border: `1px solid ${project.accent}25`,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 w-fit px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}22, ${project.accent}10)`,
                    border: `1px solid ${project.accent}40`,
                    color: project.accent,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${project.accent}35, ${project.accent}20)`;
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 8px 30px ${project.accent}30`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${project.accent}22, ${project.accent}10)`;
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <FaGithub size={16} />
                  View on GitHub
                  <FaExternalLinkAlt size={11} style={{ opacity: 0.7 }} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* ── Navigation ── */}
          <div className="flex items-center justify-between mt-10 px-1">
            {/* Dots */}
            <div className="flex gap-2">
              {projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? "28px" : "8px",
                    height: "8px",
                    background: i === index ? project.accent : "rgba(255,255,255,0.15)",
                    boxShadow: i === index ? `0 0 10px ${project.accent}80` : "none",
                  }}
                />
              ))}
            </div>

            {/* Counter */}
            <span style={{ color: "rgba(255,255,255,0.25)", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem" }}>
              {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              {["left", "right"].map((dir) => (
                <button
                  key={dir}
                  onClick={() => navigate(dir)}
                  className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = project.accent + "18";
                    e.currentTarget.style.borderColor = project.accent + "40";
                    e.currentTarget.style.color = project.accent;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {dir === "left" ? <FaArrowLeft size={14} /> : <FaArrowRight size={14} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;