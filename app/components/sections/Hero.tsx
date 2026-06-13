import { Button } from "@/app/components/core/Button";

interface HeroProps {
  onExplore?: () => void;
  onSubscribe?: () => void;
}

export function Hero({ onExplore, onSubscribe }: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        background:
          "radial-gradient(130% 120% at 80% -10%, var(--navy-600) 0%, var(--navy-900) 55%, var(--navy-950) 100%)",
        color: "var(--ivory-100)",
        overflow: "hidden",
      }}
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(40% 60% at 78% 8%, rgba(201,161,74,0.18), transparent 60%), radial-gradient(50% 70% at 12% 100%, rgba(125,34,51,0.22), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "150px var(--gutter) 130px",
        }}
      >
        <div style={{ maxWidth: "780px" }}>
          <div
            className="ph-flourish"
            style={{ color: "var(--gold-400)", marginBottom: "30px" }}
          >
            SUBSCRIPTIONS NOW OPEN
          </div>

          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(3.5rem, 8vw, 6rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "0 0 28px",
              color: "var(--ivory-50)",
            }}
          >
            The 2027 Season
            <br />
            <span style={{ fontStyle: "italic", color: "var(--gold-400)" }}>
              Romantic Splendour
            </span>
          </h1>

          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-body-lg)",
              lineHeight: 1.6,
              color: "var(--navy-300)",
              maxWidth: "56ch",
              margin: "0 0 40px",
            }}
          >
            Six evenings of the great romantic repertoire — from Mahler's Fifth to
            Beethoven's Ninth — in the Grand Hall. Reserve your seats for the whole
            season, or for a single unforgettable night.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Button variant="accent" size="lg" onClick={onSubscribe}>
              Subscribe to the Season
            </Button>
            <Button variant="ghost-on-dark" size="lg" onClick={onExplore}>
              Explore Concerts
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            marginTop: "96px",
            paddingTop: "32px",
            borderTop: "1px solid var(--border-on-dark)",
            flexWrap: "wrap",
          }}
        >
          {(
            [
              ["Sep 2026 – May 2027", "Season"],
              ["6 concerts", "Grand Hall"],
              ["From £120", "Full subscription"],
            ] as [string, string][]
          ).map(([big, small]) => (
            <div key={small}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  color: "var(--gold-400)",
                }}
              >
                {big}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "11px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--navy-300)",
                  marginTop: "4px",
                }}
              >
                {small}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
