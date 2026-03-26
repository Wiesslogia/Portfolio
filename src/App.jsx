import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Achievements from "./components/Achievements.jsx";
import Certificates from "./components/Certificate.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ElegantCursor from "./components/ElegantCursor.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <div
      className="min-h-screen section-primary"
      style={{ color: "var(--text-primary)", transition: "background 0.4s, color 0.4s" }}
    >
      <ElegantCursor />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;