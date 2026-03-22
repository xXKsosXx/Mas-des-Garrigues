"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleHover = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    document.addEventListener("mousemove", move);

    const addListeners = () => {
      const interactives = document.querySelectorAll("a, button, [data-cursor]");
      interactives.forEach((el) => {
        el.addEventListener("mouseenter", handleHover);
        el.addEventListener("mouseleave", handleLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`@media (min-width: 768px) { * { cursor: none !important; } }`}</style>

      <div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) rotate(${isHovering ? "45deg" : "0deg"})`,
          transition: "transform 0.3s ease",
        }}
      >
        <svg
          width={isHovering ? "28" : "22"}
          height={isHovering ? "28" : "22"}
          viewBox="0 0 24 24"
          fill="none"
          style={{ transition: "all 0.3s ease" }}
        >
          <path
            d="M7 2v5c0 1.1.9 2 2 2v13h2V9c1.1 0 2-.9 2-2V2h-1v4H9V2H7z"
            fill="#D4A843"
            opacity={isHovering ? "1" : "0.85"}
          />
        </svg>
      </div>

      <div
        className="fixed pointer-events-none z-[9998] rounded-full border border-[#D4A843]/30"
        style={{
          left: pos.x,
          top: pos.y,
          width: isHovering ? "48px" : "32px",
          height: isHovering ? "48px" : "32px",
          transform: "translate(-50%, -50%)",
          transition: "all 0.4s ease",
          backgroundColor: isHovering ? "rgba(212, 168, 67, 0.08)" : "transparent",
        }}
      />
    </>
  );
}
