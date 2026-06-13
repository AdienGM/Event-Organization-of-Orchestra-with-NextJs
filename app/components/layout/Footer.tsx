import type { ReactNode } from "react";

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--gold-400)",
          marginBottom: "16px",
        }}
      >
        {title}
      </div>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {items.map((item) => (
          <li
            key={item}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "15px",
              color: "var(--navy-300)",
              cursor: "pointer",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer style={{ background: "var(--navy-950)", color: "var(--ivory-100)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "80px var(--gutter) 40px",
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "56px",
            borderBottom: "1px solid var(--border-on-dark)",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                color: "var(--ivory-100)",
              }}
            >
              Philharmonia Events
            </span>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "15px",
                lineHeight: 1.6,
                color: "var(--navy-300)",
                marginTop: "20px",
                maxWidth: "34ch",
              }}
            >
              A concert society presenting the orchestral repertoire since 1921.
            </p>
          </div>
          <Col title="Attend" items={["The Season", "Concerts", "Plan your visit", "Access"]} />
          <Col title="Support" items={["Become a patron", "Corporate partners", "Legacy giving"]} />
          <Col title="Society" items={["About us", "The orchestra", "Press", "Contact"]} />
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "28px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "13px",
              color: "var(--navy-400)",
            }}
          >
            © 2026 Philharmonia Events · Concert Society
          </span>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--navy-400)",
              display: "flex",
              gap: "22px",
            }}
          >
            <span>Privacy</span>
            <span>Terms</span>
            <span>Accessibility</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
