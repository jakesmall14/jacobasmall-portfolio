"use client";
import { useState, useEffect, useCallback } from "react";

const LINKS = [
  { label: "Research", href: "#research" },
  { label: "Ideas",    href: "#ideas"    },
  { label: "Creative", href: "#creative" },
  { label: "CV",       href: "#cv"       },
  { label: "Connect",  href: "#connect"  },
];

export default function Nav() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Prevent body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const go = useCallback((href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, menuOpen ? 260 : 0);
  }, [menuOpen]);

  return (
    <>
      {/* ── Sticky bar ─────────────────────────────────────── */}
      <nav
        aria-label="Primary navigation"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
          zIndex: 60,
          borderBottom: scrolled ? "1px solid #C8BFB0" : "1px solid transparent",
          transition: "border-color 0.3s ease, background-color 0.3s ease",
          ...(scrolled
            ? {
                backdropFilter: "blur(10px) saturate(120%)",
                WebkitBackdropFilter: "blur(10px) saturate(120%)",
                backgroundColor: "rgba(232, 226, 217, 0.90)",
              }
            : { backgroundColor: "transparent" }),
        }}
      >
        <div
          className="content-width"
          style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        >
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "17px",
              fontWeight: 400,
              color: "#1A1814",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Jacob A. Small
          </a>

          {/* Desktop links */}
          <div
            className="hide-mobile"
            style={{ display: "flex", alignItems: "center", gap: "32px" }}
          >
            {LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => go(link.href)}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#1A1814",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "0",
                  opacity: 1,
                  transition: "opacity 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="hide-desktop"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "44px",
              height: "44px",
              gap: "5px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "20px",
                  height: "1px",
                  backgroundColor: "#1A1814",
                  transformOrigin: "center",
                  transition: "transform 0.22s ease, opacity 0.22s ease",
                  transform:
                    i === 0 && menuOpen ? "rotate(45deg) translateY(6px)" :
                    i === 2 && menuOpen ? "rotate(-45deg) translateY(-6px)" :
                    "none",
                  opacity: i === 1 && menuOpen ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile overlay ─────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          backgroundColor: "#E8E2D9",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.22s ease",
        }}
      >
        {LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => go(link.href)}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "36px",
              fontWeight: 400,
              color: "#1A1814",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.01em",
            }}
          >
            {link.label}
          </button>
        ))}
      </div>
    </>
  );
}
