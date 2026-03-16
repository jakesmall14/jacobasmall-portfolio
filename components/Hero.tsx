"use client";
import { useEffect, useState, useRef, useCallback } from "react";

// ── Live clock — client only ────────────────────────────────────────────────
function useLiveClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () => {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes().toString().padStart(2, "0");
      const s = d.getSeconds().toString().padStart(2, "0");
      const ap = h >= 12 ? "pm" : "am";
      h = h % 12 || 12;
      return `${h}:${m}:${s}${ap}`;
    };
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ── Typewriter ──────────────────────────────────────────────────────────────
function useTypewriter(
  text: string,
  msPerChar: number,
  active: boolean,
  onDone?: () => void
): string {
  const [count, setCount] = useState(0);
  const cbRef = useRef(onDone);
  cbRef.current = onDone;

  useEffect(() => {
    if (!active) { setCount(0); return; }
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i++;
      setCount(i);
      if (i < text.length) {
        timer = setTimeout(tick, msPerChar);
      } else {
        cbRef.current?.();
      }
    };
    timer = setTimeout(tick, msPerChar);
    return () => clearTimeout(timer);
  }, [active, text, msPerChar]);

  return text.slice(0, count);
}

// ── Component ───────────────────────────────────────────────────────────────
export default function Hero({ onHeroComplete }: { onHeroComplete: () => void }) {
  const clock = useLiveClock();

  const [nameGo,       setNameGo]       = useState(false);
  const [subGo,        setSubGo]        = useState(false);
  const [cursorOn,     setCursorOn]     = useState(true);
  const [showBio,      setShowBio]      = useState(false);
  const [showPortrait, setShowPortrait] = useState(false);

  // Stage 1 — start name after 100ms
  useEffect(() => {
    const t = setTimeout(() => setNameGo(true), 100);
    return () => clearTimeout(t);
  }, []);

  const onNameDone = useCallback(() => {
    setTimeout(() => setSubGo(true), 300);
  }, []);

  const onSubDone = useCallback(() => {
    // cursor fades, then bio, then portrait, then signal complete
    setCursorOn(false);
    setTimeout(() => setShowBio(true),      200);
    setTimeout(() => setShowPortrait(true), 500);
    setTimeout(() => onHeroComplete(),      900);
  }, [onHeroComplete]);

  const nameText = useTypewriter("Jake Small.",          40, nameGo, onNameDone);
  const subText  = useTypewriter("Researcher, builder.", 35, subGo,  onSubDone);

  const showNameCursor = nameGo && !subGo  && cursorOn;
  const showSubCursor  = subGo  && cursorOn;

  return (
    <section
      style={{ paddingTop: "86px", paddingBottom: "80px" }}
    >
      <div className="content-width">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="hero-grid"
        >
          {/* ── Left ── */}
          <div>
            {/* Eyebrow */}
            <div
              className="section-label"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "28px",
                flexWrap: "wrap",
              }}
            >
              <span>NEW YORK CITY</span>
              <span style={{ color: "#C8BFB0", fontWeight: 300 }}>·</span>
              <span suppressHydrationWarning style={{ fontVariantNumeric: "tabular-nums" }}>
                {clock}
              </span>
            </div>

            {/* Name — Playfair Display, large */}
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(40px, 6.5vw, 72px)",
                fontWeight: 400,
                lineHeight: 1.0,
                letterSpacing: "-0.015em",
                color: "#1A1814",
                marginBottom: "12px",
                minHeight: "1.1em",
              }}
            >
              {nameText || "\u00A0"}
              {showNameCursor && <span className="cursor-blink" />}
            </h1>

            {/* Subtitle — italic Playfair */}
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(22px, 3.8vw, 40px)",
                fontWeight: 400,
                lineHeight: 1.25,
                color: "#1A1814",
                marginBottom: "40px",
                minHeight: "1.3em",
              }}
            >
              {subText || (subGo ? "" : "\u00A0")}
              {showSubCursor && <span className="cursor-blink" />}
            </div>

            {/* Bio — fade in */}
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#1A1814",
                maxWidth: "460px",
                marginBottom: "28px",
                opacity: showBio ? 1 : 0,
                transition: "opacity 400ms ease-out",
              }}
            >
              I study how systems work and try to improve them — cities, companies, and the infrastructure connecting them. Living in New York City. Previously at Harvard Business School and Logical Intelligence.
            </p>

            {/* Tags — fade in with delay */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                opacity: showBio ? 1 : 0,
                transition: "opacity 400ms ease-out 150ms",
              }}
            >
              {["Social Impact", "Music", "New York"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* ── Portrait ── */}
          <div
            style={{
              opacity: showPortrait ? 1 : 0,
              transition: "opacity 500ms ease-out",
            }}
            className="portrait-col"
          >
            {/* 3:4 frame */}
            <div
              style={{
                position: "relative",
                aspectRatio: "3 / 4",
                borderRadius: "4px",
                border: "1px solid #C8BFB0",
                overflow: "hidden",
                backgroundColor: "#D4CCBF",
                maxWidth: "320px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {/* Portrait — multiply blend makes white areas transparent */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me.png"
                alt="Jacob A. Small"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "center top",
                  mixBlendMode: "multiply",
                  display: "block",
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            <p
              className="section-label"
              style={{
                textAlign: "center",
                marginTop: "12px",
                fontSize: "9px",
                letterSpacing: "0.2em",
              }}
            >
              BUFFALO, NY · B. 2001
            </p>
          </div>
        </div>
      </div>

      {/* ── Responsive grid styles ── */}
      <style>{`
        @media (min-width: 640px) {
          .hero-grid {
            grid-template-columns: 1fr 260px;
            gap: 48px;
          }
          .portrait-col {
            margin-top: 12px;
          }
        }
        @media (min-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr 300px;
            gap: 64px;
          }
        }
      `}</style>
    </section>
  );
}
