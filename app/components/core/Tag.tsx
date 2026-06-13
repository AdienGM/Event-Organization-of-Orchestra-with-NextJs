import type { CSSProperties, ReactNode } from "react";

type Tone = "neutral" | "gold" | "navy" | "wine" | "success" | "warning" | "danger";

interface TagProps {
  children: ReactNode;
  tone?: Tone;
  outline?: boolean;
  style?: CSSProperties;
}

const tones: Record<Tone, { bg: string; fg: string; bd: string }> = {
  neutral: { bg: "var(--ivory-200)", fg: "var(--ink-700)", bd: "var(--ivory-300)" },
  gold: { bg: "var(--gold-200)", fg: "var(--gold-700)", bd: "var(--gold-300)" },
  navy: { bg: "var(--navy-800)", fg: "var(--ivory-100)", bd: "var(--navy-800)" },
  wine: { bg: "var(--wine-600)", fg: "var(--ivory-100)", bd: "var(--wine-600)" },
  success: { bg: "rgba(63,111,85,0.12)", fg: "var(--success)", bd: "rgba(63,111,85,0.3)" },
  warning: { bg: "rgba(185,132,46,0.14)", fg: "var(--warning)", bd: "rgba(185,132,46,0.32)" },
  danger: { bg: "rgba(154,51,68,0.12)", fg: "var(--danger)", bd: "rgba(154,51,68,0.3)" },
};

export function Tag({ children, tone = "neutral", outline = false, style }: TagProps) {
  const t = tones[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4em",
        fontFamily: "var(--font-sans)",
        fontWeight: 500,
        fontSize: "10.5px",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        padding: "5px 11px",
        borderRadius: "var(--radius-pill)",
        background: outline ? "transparent" : t.bg,
        color: t.fg,
        border: `1px solid ${t.bd}`,
        lineHeight: 1,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
