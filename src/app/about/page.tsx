import type { Metadata } from "next";
import { ArrowRight, Heart, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { BookNowButton } from "@/components/BookNowButton";
import { OpportunityCards } from "@/components/OpportunityCards";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ohzee! Logistics is Asaba's neighbourhood dispatch network — fast, friendly, and trusted by hundreds of senders every week.",
  openGraph: { url: "https://ohzee.ng/about" },
  alternates: { canonical: "https://ohzee.ng/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="noise-grid absolute inset-0 opacity-50" />
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28 animate-float-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Our story
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            We&apos;re moving Asaba,
            <br />
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              one delivery at a time.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Ohzee! started with a simple goal — give people in Asaba a dispatch service that
            actually shows up. Today our riders move thousands of packages every month, from food
            and parcels to urgent documents.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Mission
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold md:text-4xl">
              Reliable dispatch should be the default — not the exception.
            </h2>
            <p className="mt-4 text-muted-foreground">
              We&apos;re building the most trusted last-mile network in the Asaba metro area.
              Every rider is verified, every package is insured, and every customer gets
              direct updates from pickup to drop-off.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { i: Heart, t: "Locally rooted", d: "Built by Asaba people who know the streets." },
              { i: ShieldCheck, t: "Verified riders", d: "ID-checked, trained, and insured." },
              { i: Sparkles, t: "Always-on care", d: "WhatsApp support whenever you need us." },
              { i: MapPin, t: "Wide coverage", d: "Every neighbourhood in Asaba and Ibusa." },
            ].map(({ i: I, t, d }) => (
              <div key={t} className="rounded-2xl border bg-card p-5 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                  <I className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
          {[
            ["12K+", "Deliveries"],
            ["120+", "Active riders"],
            ["45 min", "Avg. delivery"],
            ["4.9★", "Customer rating"],
          ].map(([v, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-4xl font-extrabold text-primary md:text-5xl">{v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <OpportunityCards />
      </section>

      <section className="relative overflow-hidden bg-gradient-brand py-16 text-primary-foreground">
        <div className="noise-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-5 px-4 text-center md:px-8">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Ready to send something?
          </h2>
          <BookNowButton
            label={
              <span className="flex items-center gap-2">
                Book a delivery <ArrowRight className="h-5 w-5" />
              </span>
            }
            className="inline-flex items-center rounded-lg bg-ink px-6 py-3 font-semibold text-ink-foreground transition-all hover:bg-ink/80"
          />
        </div>
      </section>
    </>
  );
}
