import React, { useEffect, useRef, useState } from "react";

const ElegantCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const raf = useRef(null);
  const [state, setState] = useState("default"); // default | hover | click

  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.1);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.1);
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mouse.current.x - 4}px, ${mouse.current.y - 4}px)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY }; };
    const onDown = () => setState("click");
    const onUp = () => setState("default");

    const onOver = (e) => {
      if (e.target.closest("a,button,[data-cursor]")) setState("hover");
    };
    const onOut = (e) => {
      if (e.target.closest("a,button,[data-cursor]")) setState("default");
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.style.cursor = "none";

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/* Solid dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 8, height: 8,
          borderRadius: "50%",
          background: state === "hover" ? "#00f5d4" : state === "click" ? "#f72585" : "#ffffff",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "background 0.15s",
          willChange: "transform",
        }}
      />
      {/* Soft ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: state === "hover" ? 48 : state === "click" ? 24 : 40,
          height: state === "hover" ? 48 : state === "click" ? 24 : 40,
          borderRadius: "50%",
          border: `1px solid ${state === "hover" ? "rgba(0,245,212,0.6)" : "rgba(255,255,255,0.25)"}`,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.2s, margin 0.3s",
          marginTop: state === "hover" ? "-4px" : state === "click" ? "8px" : 0,
          marginLeft: state === "hover" ? "-4px" : state === "click" ? "8px" : 0,
          willChange: "transform",
        }}
      />
    </>
  );
};

export default ElegantCursor;