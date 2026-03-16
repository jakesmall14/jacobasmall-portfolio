"use client";
import { useEffect, useRef, useState } from "react";

const WIDGETS = [
  { src: "/autoregressive.html",    label: "Autoregressive" },
  { src: "/nonautoregressive.html", label: "Non-Autoregressive" },
  { src: "/lean4_proof_light.html", label: "LEAN4 Verification" },
];

const PROSE: string[] = [
  "Non-autoregressive AI models represent a fundamental opportunity for the future adoption of AI in critical systems. Autoregressive models generate outputs sequentially, step by step, while non-autoregressive models evaluate entire solutions at once, optimizing globally across constraints.",
  "The result is advanced mathematical reasoning, which, when combined with a LEAN4 proving lens, allows formal verification at unprecedented speed and accuracy. This approach applies directly to crypto, automating formal verification of smart contracts and blockchain protocols that previously required months of manual auditing.",
  "The same methodology scales to other critical areas, including high-frequency trading, semiconductor design, and aerospace systems. This deeply technical work is led by engineers with rigorous backgrounds including quantum physics, reinforcement learning, ICPC competitive coding, and mathematics.",
  "Experiencing this firsthand as a New York-based go-to-market lead at Logical Intelligence in Fall 2025 shaped my understanding of how these architectures are defining the next frontier of AI.",
];

export default function AIEssay() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.06 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="independent" ref={ref} style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="content-width">

        {/* Header */}
        <div className="ruled" style={{ paddingTop: "32px", marginBottom: "48px" }}>
          <div className="section-label" style={{ marginBottom: "0", paddingTop: "28px" }}>
            INDEPENDENT WORK
          </div>
        </div>

        {/* Feature card */}
        <div
          className="card"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.55s ease-out, transform 0.55s ease-out",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(20px, 3vw, 32px)",
              fontWeight: 400,
              lineHeight: 1.25,
              color: "#1A1814",
              marginBottom: "40px",
              maxWidth: "580px",
            }}
          >
            The Impact of Non-Autoregressive AI on Critical Systems
          </h2>

          {/* Widgets row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            {WIDGETS.map((w) => (
              <div key={w.src}>
                <div
                  style={{
                    height: "180px",
                    border: "1px solid #C8BFB0",
                    borderRadius: "4px",
                    overflow: "hidden",
                    backgroundColor: "#E8E2D9",
                    position: "relative",
                  }}
                >
                  <iframe
                    src={w.src}
                    scrolling="no"
                    title={w.label}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                      display: "block",
                      backgroundColor: "transparent",
                    }}
                  />
                </div>
                <p
                  className="section-label"
                  style={{
                    textAlign: "center",
                    marginTop: "10px",
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                  }}
                >
                  {w.label}
                </p>
              </div>
            ))}
          </div>

          {/* Prose */}
          <div style={{ maxWidth: "640px" }}>
            {PROSE.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "15px",
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#1A1814",
                  marginBottom: "20px",
                }}
              >
                {p}
              </p>
            ))}

            {/* Closing provocation */}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: "italic",
                fontSize: "clamp(16px, 2vw, 20px)",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#1A1814",
                borderTop: "1px solid #C8BFB0",
                paddingTop: "28px",
                marginTop: "8px",
              }}
            >
              The race isn't between humans and AI. It's between AI that can only predict and AI that can prove.
              The difference might be everything.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
