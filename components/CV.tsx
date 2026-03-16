"use client";

const EXPERIENCE = [
  {
    role: "Estimator",
    org: "Petretti & Associates",
    detail: "New York, NY",
    dates: "Jan 2026 – Present",
    notes: "Commercial interior construction management, Manhattan. Corporate tenant build-outs, medical spa fit-outs, CSI division estimating.",
  },
  {
    role: "Research Associate",
    org: "Harvard Business School",
    detail: "Cambridge, MA",
    dates: "2023 – 2025",
    notes: "Under Professor Rosabeth Moss Kanter. Co-authored 20+ published case studies on sustainable building, HVAC, climate tech, and infrastructure.",
  },
  {
    role: "GTM Lead",
    org: "Logical Intelligence",
    detail: "New York, NY · Greylock-backed",
    dates: "Fall 2025",
    notes: "Go-to-market strategy for non-autoregressive AI applied to formal verification of smart contracts and critical systems.",
  },
  {
    role: "Impact Investments Analyst",
    org: "Oxford Centre for Innovation",
    detail: "Oxford, UK",
    dates: "2022",
    notes: "",
  },
  {
    role: "Equities Product Controllers",
    org: "Goldman Sachs",
    detail: "New York, NY",
    dates: "2021",
    notes: "",
  },
];

const EDUCATION = [
  {
    role: "B.A. International and Comparative Studies",
    org: "University of Michigan",
    detail: "Ann Arbor, MI",
    dates: "2019 – 2023",
    notes: "Minor: Energy Science & Policy. Study Abroad: Barcelona, Spain, Spring 2022.",
  },
];

const PUBLICATIONS = [
  { role: "Ecofi's Traveling Plumbers: Blue Collar Skills for Green Impact", org: "HBS Case 326-079", dates: "Nov 2025", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=67091" },
  { role: "Seattle's Climate Pledge Arena: Ticket to a Greener Future", org: "HBS Case 325-110", dates: "Mar 2025", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65148" },
  { role: "The Miccosukee Tribe and the Battle to Save the Everglades (B)", org: "HBS Teaching Note 325-139", dates: "Jun 2025", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=66066" },
  { role: "Blue Frontier: Disrupting Air Conditioning", org: "HBS Case 325-088", dates: "Jan 2025", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65082" },
  { role: "GE Appliances 2025: Energizing Change", org: "HBS Case 325-089", dates: "Jan 2025", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65083" },
  { role: "Miami's Climate Tech Potential (B): The 2024 Tech Hub Proposal", org: "HBS Supplement 324-135", dates: "May 2024", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64729" },
  { role: "'The Wheels on the Bus' Go Electric: Highland Electric Fleets and Partners", org: "HBS Case 324-107", dates: "Mar 2024", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64498" },
  { role: "Vineyard Wind Starts Spinning (A): Overcoming Onshore Challenges to Offshore Wind", org: "HBS Case 324-113", dates: "Mar 2024", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64499" },
  { role: "Can Cities Beat the Heat? (A): A Comparative Analysis of Climate Actions and Change Enablers in 14 U.S. Cities", org: "HBS Case 324-080", dates: "Feb 2024", link: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64198" },
];

type CVItem = {
  role: string;
  org: string;
  detail?: string;
  dates: string;
  notes?: string;
  link?: string;
};

function CVBlock({ title, items }: { title: string; items: CVItem[] }) {
  return (
    <div style={{ marginBottom: "52px" }}>
      <div className="section-label" style={{ marginBottom: "20px" }}>{title}</div>
      <div>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px 32px",
              paddingBottom: "24px",
              marginBottom: "24px",
              borderBottom: i < items.length - 1 ? "1px solid #C8BFB0" : "none",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: "#1A1814",
                  marginBottom: "4px",
                }}
              >
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: "#1A1814" }}>
                    {item.role}
                  </a>
                ) : item.role}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "#7A7268",
                  marginBottom: item.notes ? "8px" : "0",
                }}
              >
                {item.org}{item.detail ? ` · ${item.detail}` : ""}
              </div>
              {item.notes && (
                <p
                  style={{
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "#7A7268",
                    lineHeight: 1.65,
                    maxWidth: "520px",
                  }}
                >
                  {item.notes}
                </p>
              )}
            </div>
            <div
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "#7A7268",
                whiteSpace: "nowrap",
                textAlign: "right",
                paddingTop: "1px",
              }}
            >
              {item.dates}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CV() {
  return (
    <section id="cv" className="py-20">
      <div className="content-width">

        {/* Header */}
        <div className="ruled pt-8 mb-12">
          <div className="section-label mb-4">CV</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            Curriculum Vitae
          </h2>
        </div>

        <CVBlock title="EXPERIENCE" items={EXPERIENCE} />
        <CVBlock title="EDUCATION" items={EDUCATION} />
        <CVBlock
          title="SELECTED PUBLICATIONS"
          items={PUBLICATIONS.map((p) => ({ ...p, detail: undefined, notes: undefined }))}
        />

        <div
          style={{
            paddingTop: "20px",
            borderTop: "1px solid #C8BFB0",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#7A7268",
            }}
          >
            Full CV available upon request —{" "}
            <a href="mailto:jacobasmall@gmail.com" style={{ color: "#1A1814" }}>
              jacobasmall@gmail.com
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
