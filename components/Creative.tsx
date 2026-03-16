"use client";

const ITEMS = [
  {
    category: "PRODUCT",
    title: "Reta",
    description: "A music app I've been designing.",
    links: [{ label: "retamusic.app", href: "https://retamusic.app" }],
  },
  {
    category: "MUSIC",
    title: "Singer / Songwriter & Guitar Player",
    description: "22 years of guitar. Writing songs in New York.",
    links: [
      { label: "Spotify", href: "https://open.spotify.com/user/2244ac43pcanxux5krpf2xqxq" },
      { label: "The Baker Pyramid (newspaper I design)", href: "https://www.instagram.com/thebakerpyramid/" },
    ],
  },
];

export default function Creative() {
  return (
    <section id="creative" className="py-20">
      <div className="content-width">

        {/* Header */}
        <div className="ruled pt-8 mb-12">
          <div className="section-label mb-4">CREATIVE</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Making Things
          </h2>
        </div>

        {/* Items */}
        <div>
          {ITEMS.map((item, i) => (
            <div key={i}>
              <div className="ruled" />
              <div
                style={{
                  padding: "28px 0",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "16px",
                  alignItems: "start",
                }}
              >
                <div>
                  <div className="section-label" style={{ marginBottom: "8px" }}>
                    {item.category}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      marginBottom: "6px",
                      color: "#1A1814",
                    }}
                  >
                    {item.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#7A7268",
                      marginBottom: item.links.length > 1 ? "14px" : "0",
                    }}
                  >
                    {item.description}
                  </p>
                  {item.links.length > 1 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                      {item.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontSize: "13px",
                            fontWeight: 400,
                            color: "#1A1814",
                          }}
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Single link on the right */}
                {item.links.length === 1 && (
                  <a
                    href={item.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: "#1A1814",
                      whiteSpace: "nowrap",
                      marginTop: "4px",
                    }}
                  >
                    {item.links[0].label} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
          <div className="ruled" />
        </div>

      </div>
    </section>
  );
}
