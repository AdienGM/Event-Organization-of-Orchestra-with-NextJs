"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onHome?: () => void;
  onTickets?: () => void;
}

export function Header({ onHome, onTickets }: HeaderProps) {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: 400,
    fontSize: "13px",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "var(--ivory-100)",
    cursor: "pointer",
    opacity: 0.82,
    transition: "opacity var(--dur-fast) var(--ease-standard), color var(--dur-fast)",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        marginBottom: "-76px",
        background: solid ? "rgba(10,19,32,0.9)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: solid ? "1px solid var(--border-on-dark)" : "1px solid transparent",
        transition: "background var(--dur-base), border-color var(--dur-base)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 var(--gutter)",
          height: "76px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <span
          onClick={onHome}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "0.06em",
            color: "var(--ivory-100)",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          Philharmonia Events
        </span>

        {/* Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "34px" }}>
          {(["Season", "Concerts", "Patrons", "Visit"] as const).map((label) => (
            <span
              key={label}
              style={linkStyle}
              onClick={label === "Concerts" ? onHome : undefined}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "1";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--gold-400)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLSpanElement).style.opacity = "0.82";
                (e.currentTarget as HTMLSpanElement).style.color = "var(--ivory-100)";
              }}
            >
              {label}
            </span>
          ))}
          <button
            onClick={onTickets}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--navy-900)",
              background: "var(--gold-500)",
              border: "none",
              padding: "11px 22px",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
            }}
          >
            Tickets
          </button>
        </nav>
      </div>
    </header>
  );
}
