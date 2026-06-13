"use client";

import { useState } from "react";
import { EventCard } from "@/app/components/display/EventCard";
import type { Concert } from "@/app/data/concerts";

const SERIES = ["All", "2026 Season", "Recital", "Chamber", "Choral"];

interface SeasonGridProps {
  concerts: Concert[];
  onOpen: (concert: Concert) => void;
}

export function SeasonGrid({ concerts, onOpen }: SeasonGridProps) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? concerts : concerts.filter((c) => c.series === active);

  return (
    <section style={{ background: "var(--surface-page)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "110px var(--gutter)",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <div className="eyebrow">What's On</div>
          <h2 style={{ fontSize: "var(--text-display-sm)", margin: "10px 0 0" }}>
            The Concert Calendar
          </h2>
        </div>

        {/* Gold rule */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "48px" }}>
          <hr className="ph-rule" style={{ width: "120px" }} />
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "48px",
          }}
        >
          {SERIES.map((s) => {
            const on = s === active;
            return (
              <button
                key={s}
                onClick={() => setActive(s)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  fontSize: "11.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "9px 18px",
                  borderRadius: "var(--radius-pill)",
                  cursor: "pointer",
                  border: `1px solid ${on ? "var(--navy-800)" : "var(--border-default)"}`,
                  background: on ? "var(--navy-800)" : "transparent",
                  color: on ? "var(--ivory-100)" : "var(--text-secondary)",
                  transition: "all var(--dur-fast) var(--ease-standard)",
                }}
              >
                {s}
              </button>
            );
          })}
        </div>

        {/* Card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {shown.map((c) => (
            <EventCard
              key={c.id}
              series={c.series}
              date={c.date}
              title={c.title}
              performer={c.performer}
              venue={c.venue}
              price={c.price}
              status={c.status}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onOpen(c);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
