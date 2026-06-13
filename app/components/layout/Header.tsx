"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onHome?: () => void;
  onTickets?: () => void;
}

const NAV_LINKS = ["Season", "Concerts", "Patrons", "Visit"] as const;

export function Header({ onHome, onTickets }: HeaderProps) {
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when viewport widens past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const close = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  const handleHome = () => {
    setMenuOpen(false);
    onHome?.();
  };

  const handleTickets = () => {
    setMenuOpen(false);
    onTickets?.();
  };

  const desktopLinkStyle = {
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
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          marginBottom: "-76px",
          background: solid || menuOpen ? "rgba(10,19,32,0.95)" : "transparent",
          backdropFilter: solid || menuOpen ? "blur(10px)" : "none",
          WebkitBackdropFilter: solid || menuOpen ? "blur(10px)" : "none",
          borderBottom:
            solid || menuOpen
              ? "1px solid var(--border-on-dark)"
              : "1px solid transparent",
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
            onClick={handleHome}
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

          {/* Desktop nav — hidden on mobile via .header-nav CSS class */}
          <nav className="header-nav" style={{ alignItems: "center", gap: "34px" }}>
            {NAV_LINKS.map((label) => (
              <span
                key={label}
                style={desktopLinkStyle}
                onClick={label === "Concerts" ? handleHome : undefined}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = "var(--gold-400)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.82";
                  e.currentTarget.style.color = "var(--ivory-100)";
                }}
              >
                {label}
              </span>
            ))}
            <button
              onClick={handleTickets}
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

          {/* Hamburger — visible on mobile only via .header-hamburger CSS class */}
          <button
            className="header-hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <i className={`ph-thin ${menuOpen ? "ph-x" : "ph-list"}`} />
          </button>
        </div>
      </header>

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              onClick={() => {
                if (label === "Concerts") handleHome();
                else setMenuOpen(false);
              }}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 400,
                fontSize: "15px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ivory-100)",
                background: "none",
                border: "none",
                borderBottom: "1px solid var(--border-on-dark)",
                cursor: "pointer",
                padding: "18px 0",
                textAlign: "left",
                opacity: 0.82,
              }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={handleTickets}
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--navy-900)",
              background: "var(--gold-500)",
              border: "none",
              padding: "14px 0",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              marginTop: "20px",
            }}
          >
            Tickets
          </button>
        </nav>
      )}
    </>
  );
}
