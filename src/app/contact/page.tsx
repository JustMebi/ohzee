import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_INTL,
  EMAIL,
  LOCATION,
  WA_GENERAL_URL,
  TEL_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach the Ohzee! team in Asaba — WhatsApp, call, or email. We respond fast.",
  openGraph: { url: "https://ohzee.ng/contact" },
  alternates: { canonical: "https://ohzee.ng/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-ink-foreground">
        <div className="noise-grid absolute inset-0 opacity-50" />
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-24 animate-float-up">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Get in touch
          </span>
          <h1 className="mt-3 font-display text-5xl font-extrabold leading-tight md:text-6xl">
            We&apos;re easy to reach.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/70">
            Questions about a delivery, a business partnership, or just want to say hi?
            Pick any channel below — we usually reply within minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={WA_GENERAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:border-green-500 hover:shadow-lg"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-green-500/10 text-green-600">
              <MessageCircle className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">WhatsApp</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Fastest response</p>
              <p className="mt-1 text-sm font-medium">{PHONE_DISPLAY}</p>
            </div>
          </a>

          <a
            href={TEL_URL}
            className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Phone className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">Call us</p>
              <p className="mt-0.5 text-sm text-muted-foreground">7am – 10pm daily</p>
              <p className="mt-1 text-sm font-medium">{PHONE_DISPLAY}</p>
            </div>
          </a>

          <a
            href={`mailto:${EMAIL}`}
            className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-lg"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <Mail className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="mt-0.5 text-sm text-muted-foreground">We reply within 24h</p>
              <p className="mt-1 text-sm font-medium">{EMAIL}</p>
            </div>
          </a>

          <div className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </span>
            <div>
              <p className="font-semibold">Location</p>
              <p className="mt-0.5 text-sm text-muted-foreground">Based in</p>
              <p className="mt-1 text-sm font-medium">Asaba, Delta State</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border bg-card p-8 shadow-soft">
          <h2 className="font-display text-2xl font-bold">Business hours</h2>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {[
              ["Monday – Friday", "7:00 AM – 10:00 PM"],
              ["Saturday", "8:00 AM – 10:00 PM"],
              ["Sunday", "9:00 AM – 8:00 PM"],
              ["Public holidays", "Limited availability"],
            ].map(([day, hours]) => (
              <div key={day} className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                <span className="text-sm font-medium">{day}</span>
                <span className="text-sm text-muted-foreground">{hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
