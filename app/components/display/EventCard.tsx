"use client";

import { useState } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

interface EventCardProps {
  image?: string;
  series?: string;
  status?: string;
  date?: string;
  title: string;
  performer?: string;
  venue?: string;
  price?: string;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  style?: CSSProperties;
}

const statusTones: Record<string, { fg: string; bd: string; bg: string }> = {
  "on sale": { fg: "var(--success)", bd: "rgba(63,111,85,0.3)", bg: "rgba(63,111,85,0.12)" },
  "few seats": { fg: "var(--warning)", bd: "rgba(185,132,46,0.32)", bg: "rgba(185,132,46,0.14)" },
  "sold out": { fg: "var(--danger)", bd: "rgba(154,51,68,0.3)", bg: "rgba(154,51,68,0.12)" },
};

export function EventCard({
  image,
  series,
  status,
  date,
  title,
  performer,
  venue,
  price,
  href = "#",
  onClick,
  style,
}: EventCardProps) {
  const [hovered, setHovered] = useState(false);
  const st = status ? statusTones[status.toLowerCase()] : null;

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        background: "var(--surface-card)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        boxShadow: hovered ? "var(--shadow-lg)" : "var(--shadow-sm)",
        outline: hovered ? "1px solid var(--hairline-gold)" : "1px solid var(--ivory-300)",
        outlineOffset: "-1px",
        transform: hovered ? "translateY(-3px)" : "none",
        transition:
          "box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-entrance), outline-color var(--dur-base) var(--ease-standard)",
        ...style,
      }}
    >
      {/* Image / stage-light placeholder */}
      <div
        style={{
          position: "relative",
          aspectRatio: "3 / 2",
          background: image
            ? `linear-gradient(180deg, rgba(10,19,32,0) 40%, rgba(10,19,32,0.55) 100%), url(${image}) center/cover`
            : "radial-gradient(120% 90% at 50% 0%, var(--navy-600) 0%, var(--navy-900) 70%)",
        }}
      >
        {!image && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-display)",
              fontSize: "54px",
              color: "var(--gold-500)",
              opacity: 0.55,
            }}
          >
            ♪
          </div>
        )}
        {series && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "10px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--navy-900)",
              background: "var(--gold-300)",
              padding: "5px 10px",
              borderRadius: "var(--radius-pill)",
            }}
          >
            {series}
          </span>
        )}
      </div>

      {/* Gold rule */}
      <div style={{ height: "2px", background: "var(--hairline-gold)" }} />

      {/* Body */}
      <div
        style={{
          padding: "18px 20px 22px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          flex: 1,
        }}
      >
        {date && (
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              fontSize: "11px",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-accent)",
            }}
          >
            {date}
          </div>
        )}
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "23px",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {title}
        </h3>
        {performer && (
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "15px",
              color: "var(--text-secondary)",
            }}
          >
            {performer}
          </div>
        )}
        {venue && (
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              color: "var(--text-tertiary)",
            }}
          >
            {venue}
          </div>
        )}

        {/* Price + status row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            marginTop: "auto",
            paddingTop: "12px",
          }}
        >
          {price && (
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "16px",
                color: "var(--text-primary)",
                whiteSpace: "nowrap",
              }}
            >
              {price}
            </span>
          )}
          {st && status && (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 500,
                fontSize: "10px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: st.fg,
                background: st.bg,
                border: `1px solid ${st.bd}`,
                padding: "4px 10px",
                borderRadius: "var(--radius-pill)",
                whiteSpace: "nowrap",
              }}
            >
              {status}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
