"use client";

const PROVOCATIONS = [
  "Cities are the most underrated technology platform on earth.",
  "The next great record label will be run by someone who thinks like a VC.",
  "Formal verification is going to change security the way containers changed software.",
];

export default function BigIdeas() {
  return (
    <section id="ideas" className="py-20">
      <div className="content-width">

        {/* Header */}
        <div className="ruled pt-8 mb-12">
          <div className="section-label mb-4">BIG IDEAS</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Theses in Progress
          </h2>
        </div>

        {/* Two idea cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">

          {/* Worldchangers NYC */}
          <div className="card">
            <div className="section-label mb-3">NEW YORK CITY</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.35,
                marginBottom: "16px",
              }}
            >
              One Way I'd Revitalize New York
            </h3>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#1A1814",
                marginBottom: "14px",
              }}
            >
              What if a sleek crowdrising app mapped every available urban works project across the five boroughs —
              each with a rendering of what it becomes, what it costs, and how close it is to funded? Users vote or donate.
              City approval triggers the funds. The crew ships.
            </p>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#1A1814",
              }}
            >
              StreetEasy changed how New Yorkers find housing. Citizen changed how they understand safety.
              Worldchangers could change how they build it.
            </p>
            <div
              style={{
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid #C8BFB0",
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "8px",
              }}
            >
              <span className="tag">Civic Tech</span>
              <span className="tag">Urban Infrastructure</span>
            </div>
          </div>

          {/* Buffalo */}
          <div className="card">
            <div className="section-label mb-3">BUFFALO, NY</div>
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: 1.35,
                marginBottom: "16px",
              }}
            >
              One Way I'd Revitalize Buffalo
            </h3>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#1A1814",
                marginBottom: "14px",
              }}
            >
              Buffalo has a low cost of living, a rising tech workforce, and proof of startup momentum in ACV Auctions and 43North.
              What it lacks is repeatable venture infrastructure — a founder-led studio that pairs validated ideas with local operator
              talent, deploys MVPs with pre-seed capital, and builds companies that stay, hire, and scale in place.
            </p>
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.75,
                color: "#1A1814",
              }}
            >
              I wrote the platform thesis. I think it works. I think it works in Rochester, Pittsburgh, and Syracuse too.
            </p>
            <div
              style={{
                marginTop: "20px",
                paddingTop: "20px",
                borderTop: "1px solid #C8BFB0",
                display: "flex",
                flexWrap: "wrap" as const,
                gap: "8px",
              }}
            >
              <span className="tag">Venture Studio</span>
              <span className="tag">Economic Development</span>
            </div>
          </div>
        </div>

        {/* Three italic provocations */}
        <div>
          {PROVOCATIONS.map((text, i) => (
            <div key={i}>
              <div className="ruled" />
              <div style={{ padding: "28px 0" }}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "clamp(15px, 2vw, 18px)",
                    lineHeight: 1.65,
                    color: "#1A1814",
                    maxWidth: "620px",
                  }}
                >
                  "{text}"
                </p>
              </div>
            </div>
          ))}
          <div className="ruled" />
        </div>

      </div>
    </section>
  );
}
