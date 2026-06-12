"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Phone, MessageCircle, X } from "lucide-react";
import { PHONE_DISPLAY, WA_BOOKING_URL, TEL_URL } from "@/lib/constants";

interface Props {
  label: React.ReactNode;
  className?: string;
}

export function BookNowButton({ label, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {label}
      </button>

      {open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm rounded-2xl border bg-background p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="font-display text-xl font-bold">Book a delivery</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Reach us instantly — we respond within minutes.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href={WA_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border p-4 transition-colors hover:border-green-500 hover:bg-green-500/5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-green-500/10 text-green-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-muted-foreground">{PHONE_DISPLAY} — fastest response</p>
                </div>
              </a>

              <a
                href={TEL_URL}
                className="flex items-center gap-3 rounded-xl border p-4 transition-colors hover:border-primary hover:bg-primary/5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Call us</p>
                  <p className="text-sm text-muted-foreground">{PHONE_DISPLAY}</p>
                </div>
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
