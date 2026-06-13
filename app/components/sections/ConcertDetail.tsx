import { Button } from "@/app/components/core/Button";
import { Tag } from "@/app/components/core/Tag";
import { Avatar } from "@/app/components/display/Avatar";
import type { Concert } from "@/app/data/concerts";

const TICKET_TIERS = [
  { label: "Stalls — Premium", price: "£64" },
  { label: "Grand Circle", price: "£42" },
  { label: "Upper Circle", price: "£24" },
];

interface ConcertDetailProps {
  concert: Concert;
  onBack: () => void;
  onReserve: (concert: Concert) => void;
}

export function ConcertDetail({ concert: c, onBack, onReserve }: ConcertDetailProps) {
  const statusTone =
    c.status === "Sold out" ? "danger" : c.status === "Few seats" ? "warning" : "success";

  return (
    <div>
      {/* Hero band */}
      <section
        style={{
          background:
            "radial-gradient(120% 130% at 75% -20%, var(--navy-600) 0%, var(--navy-900) 55%, var(--navy-950) 100%)",
          color: "var(--ivory-100)",
        }}
      >
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "130px var(--gutter) 80px",
          }}
        >
          {/* Back link */}
          <button
            onClick={onBack}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--navy-300)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              marginBottom: "36px",
              display: "inline-flex",
              gap: "8px",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <i className="ph-thin ph-arrow-left" /> All concerts
          </button>

          {/* Tags */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "22px" }}>
            <Tag tone="gold">{c.series}</Tag>
            <Tag tone={statusTone}>{c.status}</Tag>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              margin: "0 0 18px",
              color: "var(--ivory-50)",
              maxWidth: "20ch",
            }}
          >
            {c.title}
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "var(--text-h3)",
              color: "var(--gold-400)",
              margin: "0 0 36px",
            }}
          >
            {c.performer}
          </p>

          {/* Meta row */}
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            {(
              [
                ["ph-calendar-blank", c.date],
                ["ph-map-pin", c.venue],
                ["ph-ticket", c.price],
              ] as [string, string][]
            ).map(([icon, txt]) => (
              <div key={txt} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <i
                  className={`ph-thin ${icon}`}
                  style={{ fontSize: "22px", color: "var(--gold-400)" }}
                />
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px" }}>{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content section */}
      <section style={{ background: "var(--surface-page)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "90px var(--gutter)",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "72px",
            alignItems: "start",
          }}
        >
          {/* Left: blurb + programme + artists */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-body-lg)",
                lineHeight: 1.7,
                color: "var(--text-primary)",
                marginTop: 0,
              }}
            >
              {c.blurb}
            </p>

            <div className="eyebrow" style={{ marginTop: "48px", marginBottom: "18px" }}>
              The Programme
            </div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {c.programme.map((p, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "20px",
                    padding: "18px 0",
                    borderBottom: "1px solid var(--ivory-200)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "18px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {p.work}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      color: "var(--text-tertiary)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.mins}
                  </span>
                </li>
              ))}
            </ul>

            <div className="eyebrow" style={{ marginTop: "48px", marginBottom: "20px" }}>
              Artists
            </div>
            <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
              {c.artists.map((a) => (
                <div
                  key={a.name}
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <Avatar name={a.name} size={54} />
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20px",
                        color: "var(--text-primary)",
                      }}
                    >
                      {a.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "11px",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {a.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: ticket sidebar */}
          <aside
            style={{
              position: "sticky",
              top: "96px",
              background: "var(--surface-card)",
              border: "1px solid var(--ivory-300)",
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
            }}
          >
            <div style={{ height: "3px", background: "var(--hairline-gold)" }} />
            <div style={{ padding: "28px 28px 32px" }}>
              <div className="eyebrow" style={{ marginBottom: "16px" }}>
                Tickets
              </div>
              {TICKET_TIERS.map(({ label, price }) => (
                <div
                  key={label}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "14px 0",
                    borderBottom: "1px solid var(--ivory-200)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-serif)", fontSize: "16px" }}>
                    {label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "20px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {price}
                  </span>
                </div>
              ))}
              <Button
                variant="accent"
                size="lg"
                fullWidth
                style={{ marginTop: "24px" }}
                disabled={c.status === "Sold out"}
                onClick={() => onReserve(c)}
              >
                {c.status === "Sold out" ? "Sold Out" : "Reserve Seats"}
              </Button>
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "13px",
                  color: "var(--text-tertiary)",
                  textAlign: "center",
                  margin: "16px 0 0",
                }}
              >
                Complimentary exchanges up to 48 hours before curtain.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
