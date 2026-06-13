"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/app/components/core/Button";
import type { Concert } from "@/app/data/concerts";

const TIERS = [
  { id: "premium", label: "Stalls — Premium", price: 64 },
  { id: "grand", label: "Grand Circle", price: 42 },
  { id: "upper", label: "Upper Circle", price: 24 },
];

const stepBtn = {
  width: "38px",
  height: "38px",
  borderRadius: "var(--radius-pill)",
  border: "1px solid var(--border-default)",
  background: "transparent",
  cursor: "pointer",
  fontSize: "16px",
  color: "var(--text-primary)",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
} as const;

interface TicketModalProps {
  concert: Concert | null;
  onClose: () => void;
}

export function TicketModal({ concert, onClose }: TicketModalProps) {
  const [tierId, setTierId] = useState("grand");
  const [qty, setQty] = useState(2);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset state when a new concert opens
  useEffect(() => {
    if (concert) {
      setTierId("grand");
      setQty(2);
      setDone(false);
    }
  }, [concert]);

  if (!concert || !mounted) return null;

  const sel = TIERS.find((t) => t.id === tierId)!;
  const total = sel.price * qty;

  const overlay = (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(7,13,23,0.62)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "kit-fade var(--dur-base) var(--ease-entrance)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(520px, 100%)",
          background: "var(--surface-card)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-xl)",
          overflow: "hidden",
        }}
      >
        {/* Gold top bar */}
        <div style={{ height: "3px", background: "var(--hairline-gold)" }} />

        {!done ? (
          <div style={{ padding: "32px 34px 36px" }}>
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: "8px" }}>
                  Reserve Seats
                </div>
                <h3 style={{ fontSize: "26px", margin: 0 }}>{concert.title}</h3>
                <p
                  style={{
                    fontFamily: "var(--font-serif)",
                    color: "var(--text-tertiary)",
                    margin: "6px 0 0",
                    fontSize: "15px",
                  }}
                >
                  {concert.date} · {concert.venue}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "24px",
                  color: "var(--text-tertiary)",
                  lineHeight: 1,
                }}
              >
                <i className="ph-thin ph-x" />
              </button>
            </div>

            {/* Section picker */}
            <div className="eyebrow" style={{ margin: "30px 0 14px" }}>
              Section
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {TIERS.map((t) => {
                const on = t.id === tierId;
                return (
                  <button
                    key={t.id}
                    onClick={() => setTierId(t.id)}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "15px 18px",
                      borderRadius: "var(--radius-md)",
                      cursor: "pointer",
                      background: on ? "var(--ivory-100)" : "transparent",
                      border: `1px solid ${on ? "var(--hairline-gold)" : "var(--ivory-300)"}`,
                      textAlign: "left",
                      transition: "all var(--dur-fast) var(--ease-standard)",
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          border: `1.5px solid ${on ? "var(--gold-600)" : "var(--border-default)"}`,
                          background: on
                            ? "radial-gradient(circle, var(--gold-500) 0 4px, transparent 5px)"
                            : "transparent",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "16px",
                          color: "var(--text-primary)",
                        }}
                      >
                        {t.label}
                      </span>
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "20px",
                        color: "var(--text-primary)",
                      }}
                    >
                      £{t.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quantity */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "26px",
              }}
            >
              <span className="eyebrow">Quantity</span>
              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  style={stepBtn}
                >
                  <i className="ph-thin ph-minus" />
                </button>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "24px",
                    minWidth: "24px",
                    textAlign: "center",
                  }}
                >
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => Math.min(8, q + 1))}
                  style={stepBtn}
                >
                  <i className="ph-thin ph-plus" />
                </button>
              </div>
            </div>

            {/* Total */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "28px",
                paddingTop: "22px",
                borderTop: "1px solid var(--ivory-200)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "12px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-tertiary)",
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "34px",
                  color: "var(--text-primary)",
                }}
              >
                £{total}
              </span>
            </div>

            <Button
              variant="accent"
              size="lg"
              fullWidth
              style={{ marginTop: "22px" }}
              onClick={() => setDone(true)}
            >
              Confirm Reservation
            </Button>
          </div>
        ) : (
          /* Confirmation screen */
          <div style={{ padding: "52px 34px 48px", textAlign: "center" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                border: "1px solid var(--hairline-gold)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
                color: "var(--gold-600)",
                fontSize: "32px",
              }}
            >
              <i className="ph-thin ph-check" />
            </div>
            <h3 style={{ fontSize: "28px", margin: "0 0 12px" }}>
              Your seats are reserved
            </h3>
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "16px",
                color: "var(--text-secondary)",
                margin: "0 auto 30px",
                maxWidth: "40ch",
              }}
            >
              We've held {qty} × {sel.label} for <em>{concert.title}</em>. A confirmation
              and your programme notes are on their way to your inbox.
            </p>
            <Button variant="primary" onClick={onClose}>
              Back to the Season
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(overlay, document.body);
}
