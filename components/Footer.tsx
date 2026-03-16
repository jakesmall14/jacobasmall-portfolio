"use client";

export default function Footer() {
  return (
    <footer
      id="connect"
      style={{ paddingTop: "80px", paddingBottom: "60px" }}
    >
      <div className="content-width">
        <div className="ruled" style={{ paddingTop: "32px" }}>

          <div className="section-label" style={{ paddingTop: "28px", marginBottom: "44px" }}>
            CONNECT
          </div>

          {/* Three contact items with dividers */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              rowGap: "14px",
              columnGap: 0,
              marginBottom: "52px",
            }}
          >
            {[
              { text: "jacobasmall@gmail.com", href: "mailto:jacobasmall@gmail.com", external: false },
              { text: "LinkedIn →",            href: "https://www.linkedin.com/in/jakesmall14/", external: true },
              { text: "(716) 544-5565",         href: "tel:+17165445565", external: false },
            ].map((item, i, arr) => (
              <span key={item.text} style={{ display: "flex", alignItems: "center" }}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#1A1814",
                    textDecoration: "none",
                  }}
                >
                  {item.text}
                </a>
                {i < arr.length - 1 && (
                  <span
                    style={{
                      color: "#C8BFB0",
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "15px",
                      fontWeight: 300,
                      padding: "0 22px",
                      userSelect: "none",
                    }}
                  >
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="ruled" style={{ paddingTop: "20px" }}>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "#7A7268",
                marginTop: "20px",
                letterSpacing: "0.04em",
              }}
            >
              © 2026 Jacob A. Small
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
