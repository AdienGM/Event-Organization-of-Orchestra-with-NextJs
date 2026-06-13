"use client";

import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type Variant = "primary" | "accent" | "secondary" | "ghost" | "ghost-on-dark" | "link";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: CSSProperties;
}

const sizes: Record<Size, { padding: string; fontSize: string; tracking: string }> = {
  sm: { padding: "8px 16px", fontSize: "11px", tracking: "0.12em" },
  md: { padding: "12px 24px", fontSize: "12.5px", tracking: "0.12em" },
  lg: { padding: "16px 34px", fontSize: "14px", tracking: "0.14em" },
};

const variants: Record<Variant, CSSProperties> = {
  primary: { background: "var(--navy-800)", color: "var(--ivory-100)", borderColor: "var(--navy-800)" },
  accent: { background: "var(--gold-500)", color: "var(--navy-900)", borderColor: "var(--gold-500)" },
  secondary: { background: "transparent", color: "var(--navy-800)", borderColor: "var(--navy-800)" },
  ghost: { background: "transparent", color: "var(--navy-700)", borderColor: "transparent" },
  "ghost-on-dark": { background: "transparent", color: "var(--ivory-100)", borderColor: "var(--border-on-dark)" },
  link: {
    background: "transparent",
    color: "var(--gold-600)",
    borderColor: "transparent",
    padding: "0",
    textTransform: "none",
    letterSpacing: "0.02em",
    fontFamily: "var(--font-serif)",
    fontSize: "var(--text-body)",
  },
};

const hoverStyles: Record<Variant, CSSProperties> = {
  primary: { background: "var(--navy-700)", boxShadow: "var(--shadow-md)" },
  accent: { background: "var(--gold-600)", boxShadow: "var(--shadow-gold)" },
  secondary: { background: "var(--navy-800)", color: "var(--ivory-100)" },
  ghost: { background: "var(--ivory-200)" },
  "ghost-on-dark": { background: "rgba(244,241,234,0.08)", borderColor: "var(--gold-400)" },
  link: { color: "var(--gold-700)" },
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);
  const s = sizes[size];
  const hv = !disabled && hovered ? hoverStyles[variant] : {};

  const base: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.6em",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: s.fontSize,
    letterSpacing: s.tracking,
    textTransform: "uppercase",
    padding: s.padding,
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    opacity: disabled ? 0.45 : 1,
    transition:
      "background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    whiteSpace: "nowrap",
    lineHeight: 1,
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...base,
        ...variants[variant],
        ...hv,
        transform: !disabled && hovered && variant !== "link" ? "translateY(-1px)" : "none",
        ...style,
      }}
    >
      {iconLeft && (
        <span aria-hidden="true" style={{ display: "inline-flex", fontSize: "1.25em" }}>
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span aria-hidden="true" style={{ display: "inline-flex", fontSize: "1.25em" }}>
          {iconRight}
        </span>
      )}
    </button>
  );
}
