"use client";
import { useEffect, useState } from "react";

// JACOB A. SMALL — runs vertically on the far-left edge, desktop only.
// Types in at 60ms / character after the hero animation completes.

const FULL_TEXT = "JACOB A. SMALL";

export default function StackedName({ startTyping }: { startTyping: boolean }) {
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setChars(i);
      if (i < FULL_TEXT.length) t = setTimeout(tick, 60);
    };
    t = setTimeout(tick, 60);
    return () => clearTimeout(t);
  }, [startTyping]);

  return (
    <div
      aria-hidden="true"
      className="stacked-name-root"
      style={{
        position: "fixed",
        left: "max(8px, calc(50vw - 560px))",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 5,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(28px, 2.8vw, 44px)",
          fontWeight: 400,
          color: "#C8BFB0",
          letterSpacing: "0.22em",
          lineHeight: 1,
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        {FULL_TEXT.slice(0, chars)}
      </div>
    </div>
  );
}
