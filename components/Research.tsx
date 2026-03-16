"use client";
import { useState } from "react";

const CASES = [
  {
    title: "EcoFi",
    label: "HBS Case 326-079",
    date: "Nov 2025",
    stat: "$100K → $6M revenue in 18 months",
    quote: "We went from doing $100, $200,000 a year to doing $2 million, $5 million, $6 million over the course of basically 12 to 18 months.",
    attr: "Richard Lamondin, CEO of EcoFi",
    body: "EcoFi built national scale doing something no one else could: providing highly localized sustainable retrofits across real estate portfolios at national volume. Small upgrades mattered enormously — new showerheads running at 1.5 gallons per minute instead of 2.5, compounded across thousands of units. The executive team scrutinized climate policy to optimize deal economics while surviving inflation, shifting incentives, and changing tariffs.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Ecofi's Traveling Plumbers: Blue Collar Skills for Green Impact.\" Harvard Business School Case 326-079, November 2025. (Revised November 2025.)",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=67091",
    tags: ["Retrofits", "Real Estate", "Climate Policy"],
  },
  {
    title: "Climate Pledge Arena",
    label: "HBS Case 325-110",
    date: "Mar 2025",
    stat: "$1.15B · 100% renewable · 92% waste diverted",
    quote: "I don't want to be the only carbon-neutral arena in the world. If we're the only one, we've failed.",
    attr: "Tim Leiweke, CEO, Oak View Group",
    body: "The world's first net-zero carbon sports and entertainment venue didn't happen by accident. It required bridging public agencies, private capital, and a $1.15 billion price tag — nearly double the original estimate. The Arena sources 100% of its electricity from renewables, diverts 92% of waste from landfills, and includes free public transit with every ticket. A landmark designation alone unlocked $50–$70 million in federal tax credits. The harder question wasn't how to build it — it was whether anyone else would follow, given the extraordinary resources the project demanded.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Seattle's Climate Pledge Arena: Ticket to a Greener Future.\" Harvard Business School Case 325-110, March 2025. (Revised February 2026.)",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65148",
    tags: ["Net Zero", "Sports & Entertainment", "Infrastructure"],
  },
  {
    title: "Highland Electric Fleets",
    label: "HBS Case 324-107",
    date: "Mar 2024",
    stat: "$38 / charge vs. $180–$240 diesel · LA28 sponsor",
    quote: "These are school buses, and there can be no problems. There are kids on that thing!",
    attr: "Sean Leach, CTO of Highland Electric Fleets",
    body: "Scaling an electric school bus company meant solving two problems simultaneously: national procurement and hyper-local execution. Every district relationship, state incentive, and charging schedule had to be built from scratch. The economics hold up: a full charge costs $38, versus $180–$240 for diesel. Highland nationalized in four years and became the official bus sponsor of the LA28 Olympic Games. Every project detail, state and municipal tax advantage, school district relationship, and bus driver mattered.",
    cite: "Kanter, Rosabeth M., and Jacob A. Small. \"'The Wheels on the Bus' Go Electric: Highland Electric Fleets and Partners.\" Harvard Business School Case 324-107, March 2024. (Revised April 2024.)",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64498",
    tags: ["Electric Vehicles", "Education", "Procurement"],
  },
  {
    title: "Can Cities Beat the Heat",
    label: "HBS Case 324-080",
    date: "Feb 2024",
    stat: "14 U.S. cities · comparative climate action analysis",
    quote: "",
    attr: "",
    body: "Cities that actively coordinate innovation across utilities, companies, and communities are often best positioned to respond to climate risk. Policies like California's Zero-Emission Vehicle mandate have accelerated electric mobility in places like San Jose, while Detroit's 27.5-mile Joe Louis Greenway expands multimodal transit for bikes, scooters, and pedestrians. In Boston, Greentown Labs connects startups with research from MIT to scale new climate technologies. The takeaway: when cities align policy, infrastructure, and local innovation, climate solutions move faster.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Can Cities Beat the Heat? (A): A Comparative Analysis of Climate Actions and Change Enablers in 14 U.S. Cities.\" Harvard Business School Case 324-080, February 2024.",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64198",
    tags: ["Urban Policy", "Climate Action", "14 Cities"],
  },
  {
    title: "Miccosukee & the Everglades",
    label: "HBS Teaching Note 325-139",
    date: "Jun 2025",
    stat: "3M+ people rely on the restored water system",
    quote: "We were very clear on what we wanted, and we were unambiguous on how important it was to us. We put on suits. We went to serious locations. This is a government-to-government meeting, and we are asking the government to do a thing.",
    attr: "Curtis Osceola, Chief of Staff, Miccosukee Tribe",
    body: "The Miccosukee Tribe of Florida became unlikely public leaders in restoring the Florida Everglades, protecting both their historic lands and a water system that more than 3 million people rely on for drinking water. Through the Western Everglades Restoration Project, the tribe pushed to restore freshwater flow and improve water quality across Big Cypress National Preserve. Tribal leaders worked directly with Florida state officials, Broward and Miami-Dade counties, and environmental NGOs to build political support. The project became a model of how Indigenous leadership can drive large-scale environmental restoration.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"The Miccosukee Tribe and the Battle to Save the Everglades (B): The Art of Coalition Building.\" Harvard Business School Teaching Note 325-139, June 2025.",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=66066",
    tags: ["Indigenous Leadership", "Environmental Restoration", "Coalition Building"],
  },
  {
    title: "Vineyard Wind",
    label: "HBS Case 324-113",
    date: "Mar 2024",
    stat: "$4B · 800 MW · ~400,000 homes powered",
    quote: "Don't tell me, the CEO of Vineyard Wind, which has hit so many roadblocks, that it can't be done. We've seen it all.",
    attr: "Klaus Moeller, CEO of Vineyard Wind",
    body: "Building America's first large-scale offshore wind farm required years of permitting negotiations, community opposition, and importing much of the supply chain from Europe. The $4 billion Vineyard Wind project, completed in March 2026, marked a turning point for U.S. offshore energy development. Its 62 turbines generate 800 megawatts of power — enough clean electricity for roughly 400,000 homes in Massachusetts. The project illustrated the difficulty of launching a new heavy industry in the United States, overcoming constituent opposition, permitting hurdles, supply chain setbacks, and project disasters, including a turbine falling into the ocean.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Vineyard Wind Starts Spinning (A): Overcoming Onshore Challenges to Offshore Wind.\" Harvard Business School Case 324-113, March 2024. (Revised September 2024.)",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64499",
    tags: ["Offshore Wind", "Energy", "Permitting"],
  },
  {
    title: "Blue Frontier",
    label: "HBS Case 325-088",
    date: "Jan 2025",
    stat: "HVAC = 3% global emissions · 85% more efficient",
    quote: "We were extremely frugal, and we focused on building a strong enough storyline that we could raise external capital at a valuation consistent with our expectations.",
    attr: "Daniel Betts, CEO of Blue Frontier",
    body: "HVAC accounts for 3% of global emissions — a quiet number with enormous consequences as temperatures rise and demand for cooling surges. Blue Frontier, a Florida-based startup, engineered a rooftop AC unit 85% more efficient than standard models, developed in partnership with the National Renewable Energy Laboratory. The system doubles as an energy storage device. Early contracts came from the Department of Defense, the General Services Administration, Waffle House, and major Florida theme parks. This startup is an example of how climate hardware companies must balance technical innovation with compelling capital strategies.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Blue Frontier: Disrupting Air Conditioning.\" Harvard Business School Case 325-088, January 2025. (Revised April 2025.)",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65082",
    tags: ["HVAC", "Climate Hardware", "Startups"],
  },
  {
    title: "GE Appliances",
    label: "HBS Case 325-089",
    date: "Jan 2025",
    stat: "Net Zero Neighborhoods · heat-pump water heaters · smart grid",
    quote: "We have free, good, clean energy. Why can't we use it all?",
    attr: "Kevin Nolan, CEO, GE Appliances",
    body: "Early in his tenure as CEO of Louisville-based GE Appliances, Kevin Nolan set out to make the products of the legacy American manufacturer more sustainable. Under his leadership, the company brought new products to market including a heat-pump-integrated water heater and a 2-in-1 washer-dryer, both designed to reduce household electricity and water consumption. Nolan also emerged as a national advocate for electrification, signing GE Appliances onto Net Zero Neighborhood initiatives in Illinois and working with major utilities on the expansion of smart meters and grid-responsive homes.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"GE Appliances 2025: Energizing Change.\" Harvard Business School Case 325-089, January 2025.",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=65083",
    tags: ["Electrification", "Consumer Products", "Grid"],
  },
  {
    title: "Climate Action in Miami",
    label: "HBS Supplement 324-135",
    date: "May 2024",
    stat: "Rising seas · Citadel · living seawalls · tech hub blueprint",
    quote: "",
    attr: "",
    body: "Miami faces some of the most acute climate risk in the country — rising seas, stronger storms, and the chronic flooding threat that comes with both. In response, city officials, major employers like Citadel, universities, and startups aligned around a climate-focused technology hub designed to attract investment and accelerate solutions. Startups like Kind Designs brought living seawalls to Miami's ports. The city's climate initiatives became a blueprint for how cities may pool resources to work together on social impact.",
    cite: "Kanter, Rosabeth Moss, and Jacob A. Small. \"Miami's Climate Tech Potential (B): The 2024 Tech Hub Proposal.\" Harvard Business School Supplement 324-135, May 2024.",
    href: "https://www.hbs.edu/faculty/Pages/item.aspx?num=64729",
    tags: ["Climate Risk", "Urban Resilience", "Tech Hubs"],
  },
  {
    title: "Carbon Capture",
    label: "HBS Research",
    date: "2024",
    stat: "36,000 t CO₂ /yr removed · ~$1,000 / ton · DOE DAC Hubs",
    quote: "",
    attr: "",
    body: "At Mammoth in Iceland, the world's largest direct air capture facility, machines remove 36,000 metric tons of CO₂ each year — roughly the equivalent of taking 8,600 cars off the road. The technology remains expensive, with capture costs still near $1,000 per ton, but companies like Climeworks are pushing forward with new projects in Oklahoma, Louisiana, and California through the U.S. Department of Energy's DAC Hubs initiative. Early carbon removal purchases from Amazon and Microsoft have helped finance the first wave of deployment.",
    cite: "",
    href: "",
    tags: ["Direct Air Capture", "Carbon Removal", "DOE"],
  },
  {
    title: "Green Buildings",
    label: "HBS Research",
    date: "2024",
    stat: "75% less energy · 75% less water · 85%+ renewable electricity",
    quote: "",
    attr: "",
    body: "Seattle's Living Building Pilot Program set a different kind of bar: participating buildings must use 75% less energy and 75% less water than comparable structures, while retaining at least half of all stormwater on-site. Seattle City Light, drawing over 85% of its power from renewables, anchors projects like the Watershed Building and the 3Zero3 Highrise. The city's culture of sustainable development shows what happens when utilities, designers, and developers align around the same ambition and see the construction process through.",
    cite: "",
    href: "",
    tags: ["Green Buildings", "Living Buildings", "Seattle"],
  },
];

function CaseCard({ c }: { c: (typeof CASES)[0] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="card"
      style={{ cursor: "pointer", userSelect: "none" }}
      onClick={() => setOpen((o) => !o)}
    >
      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="section-label" style={{ marginBottom: "8px" }}>
            {c.label}&ensp;·&ensp;{c.date}
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: 1.35,
              color: "#1A1814",
            }}
          >
            {c.title}
          </h3>
        </div>
        <span
          style={{
            color: "#7A7268",
            fontSize: "18px",
            lineHeight: 1,
            flexShrink: 0,
            marginTop: "18px",
            display: "block",
            transition: "transform 0.22s ease",
            transform: open ? "rotate(45deg)" : "none",
          }}
        >
          +
        </span>
      </div>

      {/* Stat */}
      <p
        style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "#7A7268",
          letterSpacing: "0.04em",
          marginTop: "10px",
          marginBottom: 0,
        }}
      >
        {c.stat}
      </p>

      {/* Expanded body */}
      <div
        style={{
          maxHeight: open ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div style={{ paddingTop: "20px" }}>
          {/* Quote */}
          {c.quote && (
            <blockquote className="bq" style={{ marginBottom: "18px" }}>
              "{c.quote}"
              {c.attr && (
                <footer className="section-label" style={{ marginTop: "8px", fontStyle: "normal" }}>
                  — {c.attr}
                </footer>
              )}
            </blockquote>
          )}

          {/* Body */}
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "13.5px",
              fontWeight: 300,
              lineHeight: 1.78,
              color: "#1A1814",
              marginBottom: "16px",
            }}
          >
            {c.body}
          </p>

          {/* Tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
          </div>

          {/* Citation */}
          {c.cite && (
            <p
              style={{
                fontFamily: "'Inter', system-ui, sans-serif",
                fontSize: "11px",
                color: "#7A7268",
                lineHeight: 1.6,
                fontStyle: "italic",
              }}
            >
              {c.cite}{" "}
              {c.href && (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1A1814", fontStyle: "normal" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  Link ↗
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Research() {
  return (
    <section id="research" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="content-width">

        {/* Header */}
        <div className="ruled" style={{ paddingTop: "32px", marginBottom: "48px" }}>
          <div className="section-label" style={{ paddingTop: "28px", marginBottom: "16px" }}>RESEARCH</div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 400,
              lineHeight: 1.15,
              marginBottom: "16px",
            }}
          >
            Harvard Business School
          </h2>
          <p
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#7A7268",
              lineHeight: 1.7,
              maxWidth: "500px",
            }}
          >
            Research Associate under Professor Rosabeth Moss Kanter, 2023–2025.
            Co-authored 20+ published case studies on sustainable building, infrastructure, and climate innovation.
          </p>
        </div>

        {/* Cases — auto-fill grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 295px), 1fr))",
            gap: "14px",
          }}
        >
          {CASES.map((c) => <CaseCard key={c.title} c={c} />)}
        </div>
      </div>
    </section>
  );
}
