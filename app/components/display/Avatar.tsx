import type { CSSProperties } from "react";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: number;
  round?: boolean;
  ring?: boolean;
  style?: CSSProperties;
}

export function Avatar({
  src,
  name = "",
  size = 48,
  round = false,
  ring = true,
  style,
}: AvatarProps) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <span
      title={name || undefined}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: round ? "var(--radius-pill)" : "var(--radius-sm)",
        background: src ? `url(${src}) center/cover` : "var(--navy-700)",
        color: "var(--gold-300)",
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: size * 0.4,
        letterSpacing: "0.02em",
        boxShadow: ring
          ? "0 0 0 1px var(--hairline-gold), inset 0 0 0 2px rgba(255,255,255,0.04)"
          : "none",
        overflow: "hidden",
        flexShrink: 0,
        ...style,
      }}
    >
      {!src && initials}
    </span>
  );
}
