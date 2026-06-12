import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock3, Package, Zap } from "lucide-react";
import { BookNowButton } from "@/components/BookNowButton";
import { formatNaira } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent dispatch pricing for Asaba. Pay by distance — no surprises, no hidden fees.",
  openGraph: { url: "https://ohzee.ng/pricing" },
  alternates: { canonical: "https://ohzee.ng/pricing" },
};

const TIERS = [
  {
    name: "Standard",
    price: 1200,
    icon: Package,
    tag: "Most popular",
    desc: "Same-day delivery within Asaba metro.",
    perks: [
      "Pickup within 30 minutes",
      "Delivery updates via WhatsApp",
      "Pay cash or bank transfer",
      "Up to 5 kg parcel",
    ],
    accent: false,
  },
  {
    name: "Express",
    price: 2000,
    icon: Zap,
    tag: "Fastest",
    desc: "Priority pickup. Direct to drop-off.",
    perks: [
      "Pickup within 15 minutes",
      "No multi-stop delays",
      "Priority WhatsApp support",
      "Up to 5 kg parcel",
    ],
    accent: true,
  },
  {
    name: "Bulky / Fragile",
    price: 2500,
    icon: Clock3,
    tag: "Special handling",
    desc: "For larger or delicate items.",
    perks: [
      "Trained handler assigned",
      "Insured up to ₦50,000",
      "Padded box available",
      "Up to 15 kg parcel",
    ],
    accent: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="noise-grid absolute inset-0 opacity-50" />
        <div className="absolute left-1/2 -top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center md:px-8 md:py-24 animate-float-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Pricing
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            Simple, distance-based fares.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            Starting from{" "}
            <span className="font-bold text-primary">{formatNaira(1200)}</span> within Asaba.
            What you see is what you pay — no hidden fees.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border bg-card p-7 shadow-soft transition hover:-translate-y-1 ${
                t.accent ? "border-primary ring-2 ring-primary/30" : ""
              }`}
            >
              {t.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
                  {t.tag}
                </span>
              )}
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${
                  t.accent ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                }`}
              >
                <t.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-5 font-display text-4xl font-extrabold">
                {formatNaira(t.price)}
                <span className="text-sm font-medium text-muted-foreground"> /from</span>
              </p>
              <ul className="mt-5 space-y-2.5">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {p}
                  </li>
                ))}
              </ul>
              <BookNowButton
                label={`Book ${t.name.split(" ")[0].toLowerCase()}`}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2.5 text-sm font-semibold transition-all ${
                  t.accent
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center font-display text-3xl font-extrabold md:text-4xl">
            How fares are calculated
          </h2>
          <div className="mt-10 grid gap-3">
            {[
              ["Base fare", "Covers pickup and the first 2 km."],
              ["Per-km rate", "Each additional kilometre is added on top."],
              ["Express", "+50% of base for priority pickup and delivery."],
              ["Fragile", "+₦300 handling fee for delicate items."],
              ["Cash on delivery", "No extra charge — collect from receiver."],
            ].map(([k, v]) => (
              <div key={k} className="flex items-start justify-between gap-4 rounded-xl border bg-card p-4">
                <span className="font-semibold">{k}</span>
                <span className="max-w-md text-right text-sm text-muted-foreground">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-brand py-16 text-primary-foreground">
        <div className="noise-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Ready to send something?
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <BookNowButton
              label={
                <span className="flex items-center gap-2">
                  Book delivery <ArrowRight className="h-5 w-5" />
                </span>
              }
              className="inline-flex items-center rounded-lg bg-ink px-6 py-3 font-semibold text-ink-foreground transition-all hover:bg-ink/80"
            />
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
