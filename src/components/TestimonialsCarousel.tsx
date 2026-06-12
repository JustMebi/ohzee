"use client";

import { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const ITEMS = [
  {
    n: "Chidera O.",
    r: "Restaurant owner",
    q: "Ohzee! handles all our food deliveries on Summit Road. Customers always get hot meals.",
  },
  {
    n: "Emeka N.",
    r: "Online vendor",
    q: "Booking is so easy. My customers in Asaba get items the same day, every time.",
  },
  {
    n: "Tega A.",
    r: "Working mum",
    q: "I forgot my son's lunch — booked a rider, picked from home, delivered to school in 20 mins.",
  },
  {
    n: "Nonso B.",
    r: "Small business owner",
    q: "I run an Asaba-based store and Ohzee! makes same-day fulfilment actually possible. Game changer.",
  },
  {
    n: "Adaeze M.",
    r: "Freelancer",
    q: "Sent documents across town in under 30 minutes. Professional riders, great communication.",
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

export function TestimonialsCarousel() {
  // Loop on, center-align so the active card is always centred
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Drive scale + opacity directly on DOM nodes every scroll tick — no React state involved
  // so the loop wrap-around is perfectly smooth.
  const applyScales = useCallback(() => {
    if (!emblaApi) return;
    const engine = emblaApi.internalEngine();
    const progress = emblaApi.scrollProgress();

    emblaApi.scrollSnapList().forEach((snap, i) => {
      let diff = snap - progress;

      // Shortest-path correction across the loop boundary
      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((pt) => {
          const t = pt.target();
          if (i === pt.index && t !== 0) {
            diff = t < 0 ? snap - (1 + progress) : snap + (1 - progress);
          }
        });
      }

      const d = Math.abs(diff);
      const el = emblaApi.slideNodes()[i];
      if (!el) return;
      el.style.transform = `scale(${clamp(1 - d * 0.22, 0.88, 1)})`;
      el.style.opacity   = `${clamp(1 - d * 0.55, 0.5, 1)}`;
    });
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => emblaApi?.scrollNext(), 2200);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    applyScales();
    emblaApi.on("scroll", applyScales);
    emblaApi.on("reInit", applyScales);
    startAutoplay();

    const root = emblaApi.rootNode();
    const pause  = () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
    const resume = () => startAutoplay();
    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);

    return () => {
      emblaApi.off("scroll", applyScales);
      emblaApi.off("reInit", applyScales);
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      root.removeEventListener("mouseenter", pause);
      root.removeEventListener("mouseleave", resume);
    };
  }, [emblaApi, applyScales, startAutoplay]);

  return (
    <section className="py-24">
      {/* Heading — constrained width */}
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Loved in Asaba
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance md:text-5xl">
            What our customers say.
          </h2>
        </div>
      </div>

      {/* Full-width carousel track */}
      <div className="mt-12 overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {ITEMS.map((item) => (
            <figure
              key={item.n}
              style={{ willChange: "transform, opacity" }}
              className="carousel-slide rounded-2xl border bg-card p-6 md:p-8"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-foreground">&ldquo;{item.q}&rdquo;</blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-semibold">{item.n}</span>
                <span className="block text-muted-foreground">{item.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
