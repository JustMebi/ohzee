"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRight, Bike, ImageIcon, MapPin, Users, X } from "lucide-react";
import { BookNowButton } from "@/components/BookNowButton";

type CardKey = "riders" | "businesses" | "everyone";

const CARDS = [
  {
    key: "riders" as CardKey,
    icon: Bike,
    title: "For riders",
    teaser: "Earn flexible income with steady runs across Asaba.",
    backHeadline: "Want to ride with us?",
    backBody:
      "Join our growing fleet of verified dispatch riders. Flexible hours, steady jobs, fair pay — on your terms.",
    ctaLabel: "Applications opening soon",
    ctaDisabled: true,
  },
  {
    key: "businesses" as CardKey,
    icon: Users,
    title: "For businesses",
    teaser: "Reliable same-day delivery for your customers.",
    backHeadline: "A delivery partner for your brand?",
    backBody:
      "We handle last-mile fulfilment for restaurants, retailers, and online vendors across Asaba — no logistics headache.",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
  {
    key: "everyone" as CardKey,
    icon: MapPin,
    title: "For everyone",
    teaser: "Send anything, anywhere in the city — fast.",
    backHeadline: "Need something sent?",
    backBody:
      "From documents to dinner, Ohzee! moves it safely across Asaba — book in under a minute, no sign-up needed.",
    ctaLabel: "Book a delivery",
    ctaModal: true,
  },
] as const;

type Card = typeof CARDS[number];

function Placeholder() {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-muted"
      style={{ aspectRatio: "3/2" }}
    >
      <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
      <span className="text-xs text-muted-foreground/50">Photo coming soon</span>
    </div>
  );
}

function FlipModal({ card, onClose }: { card: Card; onClose: () => void }) {
  // `flipped` drives the CSS transition — starts false, set to true on next paint
  const [flipped, setFlipped] = useState(false);
  const I = card.icon;

  useEffect(() => {
    // Double rAF ensures the browser paints the start state before transitioning
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setFlipped(true))
    );
    return () => cancelAnimationFrame(id);
  }, []);

  const close = () => {
    setFlipped(false);
    setTimeout(onClose, 420);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const cardStyle: React.CSSProperties = {
    transformStyle: "preserve-3d",
    transform: flipped
      ? "scale(1) rotateY(180deg)"
      : "scale(0.35) rotateY(0deg)",
    transition: `transform ${flipped ? "0.55s" : "0.4s"} cubic-bezier(0.4,0,0.2,1)`,
    position: "relative",
    width: "100%",
    minHeight: 480,
  };

  const faceBase: React.CSSProperties = {
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    position: "absolute",
    inset: 0,
  };

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={close}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        style={{ opacity: flipped ? 1 : 0, transition: "opacity 0.35s ease" }}
      />

      {/* Perspective container — stops click propagation so card clicks don't close */}
      <div
        style={{
          perspective: "1200px",
          width: "min(90vw, 448px)",
          minHeight: 480,
          position: "relative",
          zIndex: 1,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* The flipping card */}
        <div style={cardStyle}>

          {/* ── Front face ── */}
          <div
            className="rounded-2xl border bg-card p-6 shadow-xl"
            style={faceBase}
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <I className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{card.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{card.teaser}</p>
          </div>

          {/* ── Back face ── */}
          <div
            className="flex flex-col rounded-2xl border bg-card p-6 shadow-xl"
            style={{ ...faceBase, transform: "rotateY(180deg)" }}
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <Placeholder />

            <div className="mt-4 flex-1">
              <h3 className="font-display text-xl font-bold">{card.backHeadline}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.backBody}</p>
            </div>

            <div className="mt-5">
              {"ctaDisabled" in card && card.ctaDisabled ? (
                <span className="inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg border bg-muted px-4 py-2.5 text-sm font-semibold text-muted-foreground">
                  {card.ctaLabel}
                </span>
              ) : "ctaModal" in card && card.ctaModal ? (
                <BookNowButton
                  label={
                    <span className="flex items-center gap-2">
                      {card.ctaLabel} <ArrowRight className="h-4 w-4" />
                    </span>
                  }
                  className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                />
              ) : (
                <Link
                  href={"ctaHref" in card ? card.ctaHref! : "/contact"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {card.ctaLabel} <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}

export function OpportunityCards() {
  const [active, setActive] = useState<CardKey | null>(null);
  const activeCard = CARDS.find((c) => c.key === active) ?? null;

  return (
    <>
      <div className="grid gap-10 md:grid-cols-3">
        {CARDS.map(({ key, icon: I, title, teaser }) => (
          <div key={key} className="rounded-2xl border bg-card p-6 shadow-soft">
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
              <I className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{teaser}</p>
            <button
              type="button"
              onClick={() => setActive(key)}
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      {activeCard && (
        <FlipModal card={activeCard} onClose={() => setActive(null)} />
      )}
    </>
  );
}
