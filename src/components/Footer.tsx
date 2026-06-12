import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/Logo";
import { PHONE_DISPLAY, EMAIL, LOCATION, WA_BOOKING_URL, SOCIAL } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <Logo className="h-10 w-10" />
            <span className="font-display text-xl font-bold">
              Ohzee<span className="text-primary">!</span> Logistics
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-white/65">
            Fast, reliable same-day dispatch across Asaba and environs. Send packages, food and
            documents with riders you can trust.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={WA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.tiktok.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href={SOCIAL.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              aria-label="Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-full bg-white/10 p-2.5 transition-colors hover:bg-white/20"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li><Link href="/" className="transition-colors hover:text-white">Home</Link></li>
            <li><Link href="/pricing" className="transition-colors hover:text-white">Pricing</Link></li>
            <li><Link href="/about" className="transition-colors hover:text-white">About us</Link></li>
            <li><Link href="/contact" className="transition-colors hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/50">Reach us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {LOCATION}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {PHONE_DISPLAY}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {EMAIL}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-white/55 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Ohzee! Logistics. All rights reserved.</p>
          <p>Built for Asaba.</p>
        </div>
      </div>
    </footer>
  );
}
