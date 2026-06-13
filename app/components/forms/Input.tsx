"use client";

import { useState } from "react";
import type { CSSProperties, InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "style"> {
  label?: string;
  hint?: string;
  error?: string;
  iconLeft?: ReactNode;
  style?: CSSProperties;
}

export function Input({
  label,
  value,
  defaultValue,
  placeholder,
  type = "text",
  hint,
  error,
  iconLeft = null,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const inputId = id ?? (label ? `in-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const lineColor = error
    ? "var(--danger)"
    : focused
    ? "var(--gold-500)"
    : "var(--border-default)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "7px", ...style }}>
      {label && (
        <label
          htmlFor={inputId}
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: error ? "var(--danger)" : "var(--text-tertiary)",
          }}
        >
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.6em",
          borderBottom: `1.5px solid ${lineColor}`,
          paddingBottom: "8px",
          opacity: disabled ? 0.5 : 1,
          transition: "border-color var(--dur-base) var(--ease-standard)",
        }}
      >
        {iconLeft && (
          <span
            aria-hidden="true"
            style={{ color: "var(--text-tertiary)", display: "inline-flex", fontSize: "1.1em" }}
          >
            {iconLeft}
          </span>
        )}
        <input
          id={inputId}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-body-lg)",
            color: "var(--text-primary)",
            padding: 0,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "var(--text-caption)",
            fontStyle: "italic",
            color: error ? "var(--danger)" : "var(--text-tertiary)",
          }}
        >
          {error ?? hint}
        </span>
      )}
    </div>
  );
}
