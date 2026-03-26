import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const socials = [
  { icon: FaGithub,   label: "GitHub",   href: "https://github.com/Wiesslogia",  accent: "#00f5d4" },
  { icon: FaLinkedin, label: "LinkedIn",  href: "https://www.linkedin.com/in/gotamPrajapati/",                               accent: "#4cc9f0" },
  { icon: FaEnvelope, label: "Email",     href: "mailto:gautamprajapati799@email.com",            accent: "#f72585" },
];

const inputBase = {
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  color: "#e8e8f0",
  borderRadius: "12px",
  padding: "12px 16px",
  width: "100%",
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.9rem",
  transition: "border-color 0.25s, box-shadow 0.25s",
};

function Field({ as: Tag = "input", label, focusAccent = "#00f5d4", ...props }) {
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex flex-col gap-1.5">
      <label style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
        {label}
      </label>
      <Tag
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          borderColor: focused ? focusAccent + "60" : "rgba(255,255,255,0.08)",
          boxShadow: focused ? `0 0 0 3px ${focusAccent}14` : "none",
          resize: Tag === "textarea" ? "none" : undefined,
        }}
      />
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        ::placeholder { color: rgba(255,255,255,0.2) !important; }
      `}</style>

      <section
        id="contact"
        className="relative py-28 overflow-hidden section-tertiary"
        style={{ fontFamily: "'DM Sans', sans-serif", borderTop: "2px solid rgba(247,37,133,0.4)", transition: "background 0.4s" }}
      >
        {/* Ambient glows — animated */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, #00f5d425 0%, transparent 70%)", top: "-100px", left: "-100px" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, #f7258520 0%, transparent 70%)", bottom: "-60px", right: "-80px" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
          {/* Floating accent orb */}
          <motion.div
            className="absolute w-40 h-40 rounded-full"
            style={{ background: "radial-gradient(circle, #4cc9f030 0%, transparent 70%)", top: "40%", left: "50%" }}
            animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Grid lines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative container mx-auto px-6 max-w-6xl">

          {/* ── Header ── */}
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-medium tracking-[0.3em] uppercase mb-4"
              style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace" }}
            >
              ✉️ Contact
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
              }}>Get In</span>
              <br />
              <span style={{
                background: "linear-gradient(90deg, #00f5d4, #4cc9f0, #f72585)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>Touch</span>
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

          {/* ── Body ── */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">

            {/* Left — copy + socials */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:w-5/12 space-y-8"
            >
              <div>
                <h3
                  className="text-3xl md:text-4xl font-extrabold leading-tight mb-4"
                  style={{ fontFamily: "'Syne', sans-serif", color: "#fff" }}
                >
                  Let's Build Something Amazing
                </h3>
                <motion.div
                  className="h-0.5 w-10 rounded-full mb-5"
                  style={{ background: "#00f5d4" }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                />
                <p style={{ color: "rgba(255,255,255,0.72)", lineHeight: 1.8, fontSize: "0.975rem" }}>
                  Whether you have a project idea, a collaboration opportunity, or just want to connect —
                  I'm always open to meaningful conversations and exciting challenges.
                </p>
              </div>

              {/* Social links */}
              <motion.div
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}
              >
                {socials.map(({ icon: Icon, label, href, accent }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } } }}
                    className="flex items-center gap-4 px-5 py-3.5 rounded-xl group transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      display: "flex",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = accent + "10";
                      e.currentTarget.style.borderColor = accent + "35";
                      e.currentTarget.style.transform = "translateX(6px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <motion.div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-sm"
                      style={{ background: accent + "15", color: accent }}
                      whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    >
                      <Icon />
                    </motion.div>
                    <span style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", fontFamily: "'DM Mono', monospace" }}>
                      {label}
                    </span>
                    <span className="ml-auto text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>↗</span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Availability badge */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3 rounded-xl w-fit"
                style={{ background: "#00f5d410", border: "1px solid #00f5d425" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.03 }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00f5d4" }} />
                <span style={{ color: "#00f5d4", fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:w-7/12 w-full"
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(10,10,20,0.85)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  boxShadow: "0 0 60px rgba(0,245,212,0.06), 0 30px 80px rgba(0,0,0,0.4)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Noise texture */}
                <div className="absolute inset-0 rounded-2xl opacity-[0.025] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    backgroundSize: "100px",
                  }}
                />

                <motion.form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="space-y-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
                >
                  <input type="hidden" name="access_key" value="cd1175c4-c526-4153-8e14-49100a4d8523" />

                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16,1,0.3,1] } } }}
                  >
                    <Field label="First Name" type="text" name="first_name" placeholder="John" focusAccent="#00f5d4" />
                    <Field label="Last Name"  type="text" name="last_name"  placeholder="Doe"  focusAccent="#00f5d4" />
                  </motion.div>

                  {[
                    { label: "Email",   type: "email", name: "email",   placeholder: "john@example.com",        accent: "#4cc9f0" },
                    { label: "Subject", type: "text",  name: "subject", placeholder: "Project idea, collab...", accent: "#4cc9f0" },
                  ].map(f => (
                    <motion.div key={f.name} variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16,1,0.3,1] } } }}>
                      <Field label={f.label} type={f.type} name={f.name} placeholder={f.placeholder} focusAccent={f.accent} />
                    </motion.div>
                  ))}

                  <motion.div variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16,1,0.3,1] } } }}>
                    <Field as="textarea" label="Message" name="message" placeholder="Tell me about your project..." rows={5} focusAccent="#f72585" />
                  </motion.div>

                  <motion.div
                    variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16,1,0.3,1] } } }}
                  >
                    <motion.button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2.5 text-sm"
                      style={{
                        background: "linear-gradient(135deg, #00f5d4, #4cc9f0)",
                        color: "#07070f",
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "0.02em",
                      }}
                      whileHover={{ y: -2, boxShadow: "0 12px 40px rgba(0,245,212,0.35)" }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.span
                        animate={{ x: [0, 2, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <FaPaperPlane size={13} />
                      </motion.span>
                      Send Message
                    </motion.button>
                  </motion.div>
                </motion.form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;