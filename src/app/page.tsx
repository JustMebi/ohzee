import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bike,
  Box,
  CheckCircle2,
  Clock3,
  MapPin,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Logo } from "@/components/Logo";
import { BookNowButton } from "@/components/BookNowButton";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { StaggerReveal } from "@/components/StaggerReveal";
import { StatsSection } from "@/components/StatsSection";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export const metadata: Metadata = {
  title: "Ohzee! Logistics — Same-day dispatch in Asaba",
  description:
    "Fast, reliable same-day delivery and dispatch riders in Asaba. Book a rider via WhatsApp in under a minute.",
  openGraph: { url: "https://ohzee.ng/" },
  alternates: { canonical: "https://ohzee.ng/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Strip />
      <RevealOnScroll><HowItWorks /></RevealOnScroll>
      <RevealOnScroll><WhyUs /></RevealOnScroll>
      <RevealOnScroll><Coverage /></RevealOnScroll>
      <StatsSection />
      {/* <TestimonialsCarousel /> */}
      <RevealOnScroll><FAQ /></RevealOnScroll>
      <RevealOnScroll><CtaBand /></RevealOnScroll>
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground">
      <div className="noise-grid absolute inset-0 opacity-60" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div className="animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Now dispatching across Asaba
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-balance md:text-6xl lg:text-7xl">
            Send anything,
            <br />
            <span className="bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              anywhere in Asaba.
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-white/70">
            Same-day pickup. Fast delivery. Trusted riders. Ohzee! handles your packages
            like they&apos;re our own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookNowButton
              label={
                <span className="flex items-center gap-2">
                  Book a delivery <ArrowRight className="h-5 w-5" />
                </span>
              }
              className="inline-flex items-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-brand transition-all hover:bg-primary/90"
            />
            <BookNowButton
              label="Track package"
              className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition-all hover:bg-white/10"
            />
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/65">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> No sign-up needed
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" /> Pay on delivery
            </div>
          </div>
        </div>

        <HeroCard />
      </div>
    </section>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -translate-x-4 translate-y-6 rounded-3xl bg-primary/30 blur-2xl" />
      <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 shadow-brand backdrop-blur-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" />
            <div>
              <p className="text-sm font-semibold">Live delivery</p>
              <p className="text-xs text-white/55">OZ-K3F92Q</p>
            </div>
          </div>
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
            In transit
          </span>
        </div>

        <div className="mt-6 space-y-5">
          <Step icon={<MapPin className="h-3.5 w-3.5" />} title="Picked up — Summit Road" time="11:42 AM" done />
          <Step icon={<Bike className="h-3.5 w-3.5" />} title="Rider en route" time="now" active />
          <Step icon={<PackageCheck className="h-3.5 w-3.5" />} title="Drop-off — GRA Phase 2" time="ETA 12:05" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["3.2 km", "Distance"],
            ["~12 min", "ETA"],
            ["₦1,800", "Fare"],
          ].map(([v, l]) => (
            <div key={l} className="rounded-xl bg-white/5 p-3">
              <p className="font-display text-base font-bold">{v}</p>
              <p className="text-[11px] text-white/55">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Step({
  icon,
  title,
  time,
  done,
  active,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  done?: boolean;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`grid h-7 w-7 place-items-center rounded-full ${
          done ? "bg-primary text-white" : active ? "animate-pulse-ring bg-white text-ink" : "bg-white/10 text-white/60"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
      </div>
      <span className="text-xs text-white/55">{time}</span>
    </div>
  );
}

function Strip() {
  const items = [
    { icon: Zap, label: "Same-day delivery" },
    { icon: ShieldCheck, label: "Insured packages" },
    { icon: Bike, label: "Verified riders" },
    { icon: Clock3, label: "Real-time updates" },
  ];
  return (
    <div className="border-y border-border bg-muted/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-6 md:grid-cols-4 md:px-8">
        {items.map(({ icon: I, label }) => (
          <div key={label} className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground">
            <I className="h-4 w-4 text-primary" /> {label}
          </div>
        ))}
      </div>
    </div>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Reach us in seconds", d: "Call or WhatsApp us with your pickup and drop-off details." },
    { n: "02", t: "Rider gets assigned", d: "A nearby verified Ohzee! rider accepts your job and heads to pickup." },
    { n: "03", t: "Delivered safe & sound", d: "Your package arrives intact. Our riders handle every job with care and confirm delivery on the spot." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <SectionHead eyebrow="How it works" title="From call to doorstep — fast." />
      <StaggerReveal className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="group rounded-2xl border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="font-display text-5xl font-extrabold text-primary/15 transition group-hover:text-primary/30">
              {s.n}
            </span>
            <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </StaggerReveal>
    </section>
  );
}

function WhyUs() {
  const features = [
    { i: Zap, t: "Lightning fast", d: "Most deliveries within Asaba complete in under 45 minutes." },
    { i: ShieldCheck, t: "Secure handling", d: "Verified riders, package insurance, and signed confirmations." },
    { i: Box, t: "Any package size", d: "From documents to bulky food orders — we move it carefully." },
    { i: Sparkles, t: "Friendly support", d: "Real humans on WhatsApp whenever you need help." },
  ];
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHead eyebrow="Why Ohzee!" title="Built for Asaba. Trusted by Asaba." />
        <StaggerReveal className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ i: I, t, d }) => (
            <div key={t} className="rounded-2xl border bg-card p-6 shadow-soft">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <I className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold">{t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

function Coverage() {
  const areas = [
    "Asaba GRA", "Okpanam Road", "Summit Road", "DLA Road", "Cable Point",
    "Anwai Road", "West End", "Nnebisi", "Ogbeogonogo", "Infant Jesus",
    "Ibusa", "Issele-Azagba",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 md:px-8">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <SectionHead eyebrow="Coverage" title="We deliver everywhere in Asaba." align="left" />
          <p className="mt-4 max-w-md text-muted-foreground">
            Need it crossing Onitsha bridge or heading to Ibusa? We&apos;ve got you. Multi-stop and
            inter-city options available — just ask.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {areas.map((a) => (
            <span key={a} className="rounded-full border bg-card px-4 py-2 text-sm font-medium shadow-soft">
              <MapPin className="mr-1 inline h-3.5 w-3.5 text-primary" />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const qs: [string, string][] = [
    ["How fast is same-day delivery?", "Most Asaba deliveries are completed within 30–60 minutes once a rider is assigned."],
    ["How do I place an order?", "Just call or WhatsApp us at 08072222822 with your pickup and drop-off details — we handle the rest."],
    ["Can I pay on delivery?", "Yes. You can pay cash on delivery to the rider, or via bank transfer."],
    ["Do you handle fragile items?", "Absolutely — let us know when you call and we assign careful, insured riders."],
    ["What areas do you cover?", "We deliver everywhere within Asaba and environs, including Ibusa, Okpanam, and surrounding areas."],
  ];
  return (
    <section className="bg-muted/40 py-24">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHead eyebrow="FAQ" title="Quick answers." />
        <Accordion className="mt-10">
          {qs.map(([q, a]) => (
            <AccordionItem key={q} value={q} className="mb-3 rounded-xl border bg-card px-5 shadow-soft">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand py-20 text-primary-foreground">
      <div className="noise-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center md:px-8">
        <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">
          Ready to send something?
        </h2>
        <p className="max-w-xl text-white/85">
          Book a rider in under a minute. No sign-up required — just call or WhatsApp us.
        </p>
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
            Talk to us
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
