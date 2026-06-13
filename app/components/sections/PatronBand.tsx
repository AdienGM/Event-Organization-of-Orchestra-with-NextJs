import { Button } from "@/app/components/core/Button";

interface PatronBandProps {
  onBecome?: () => void;
}

export function PatronBand({ onBecome }: PatronBandProps) {
  return (
    <section style={{ background: "var(--wine-700)", color: "var(--ivory-100)" }}>
      <div
        style={{
          maxWidth: "var(--container-narrow)",
          margin: "0 auto",
          padding: "96px var(--gutter)",
          textAlign: "center",
        }}
      >
        <div
          className="ph-flourish"
          style={{ color: "var(--gold-300)", marginBottom: "24px" }}
        >
          PATRONAGE
        </div>
        <h2
          style={{
            fontSize: "var(--text-display-sm)",
            color: "var(--ivory-50)",
            margin: "0 0 18px",
          }}
        >
          Keep the music playing
        </h2>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-body-lg)",
            lineHeight: 1.65,
            color: "rgba(244,241,234,0.82)",
            margin: "0 auto 36px",
            maxWidth: "52ch",
          }}
        >
          Our patrons make every season possible — from commissioning new work to bringing
          young audiences into the hall. Join their company, and enjoy priority booking and
          the conductor's circle.
        </p>
        <Button variant="accent" size="lg" onClick={onBecome}>
          Become a Patron
        </Button>
      </div>
    </section>
  );
}
