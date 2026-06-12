"use client";

import { useEffect, useRef } from "react";

function MotoIcon({ className }: { className?: string }) {
  return (
    // Aerial / top-down view — motorcycle travelling downward on the road
    <svg viewBox="0 0 22 52" fill="currentColor" className={className} aria-hidden>
      {/* Front wheel */}
      <ellipse cx="11" cy="6" rx="3.5" ry="5.5" opacity="0.95" />
      {/* Handlebars */}
      <rect x="3" y="10" width="16" height="2" rx="1" opacity="0.65" />
      {/* Front fairing / upper body */}
      <path d="M7 11 L5 24 L17 24 L15 11 Z" opacity="0.8" />
      {/* Rider — helmet (head) */}
      <circle cx="11" cy="19" r="4" opacity="1" />
      {/* Rider — torso/shoulders */}
      <ellipse cx="11" cy="27" rx="5" ry="4.5" opacity="0.85" />
      {/* Lower body / seat area */}
      <path d="M6 30 L5 40 L17 40 L16 30 Z" opacity="0.7" />
      {/* Rear wheel */}
      <ellipse cx="11" cy="46" rx="3.5" ry="5.5" opacity="0.95" />
      {/* Exhaust — left */}
      <rect x="3.5" y="33" width="1.5" height="9" rx="0.75" opacity="0.45" />
      {/* Exhaust — right */}
      <rect x="17" y="33" width="1.5" height="9" rx="0.75" opacity="0.45" />
    </svg>
  );
}

export function RoadScroller() {
  const motoRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? Math.min(scrolled / total, 1) : 0;
      // Map 0→1 to 5vh→88vh so moto stays on-screen
      const topVh = 5 + progress * 83;

      if (motoRef.current) {
        motoRef.current.style.top = `${topVh}vh`;
      }
      if (trailRef.current) {
        trailRef.current.style.height = `${topVh}vh`;
      }
    };

    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    // Hidden below xl — not enough screen real estate on smaller viewports
    <div className="pointer-events-none fixed right-5 top-0 z-30 hidden h-full xl:block" style={{ width: 28 }}>
      {/* Full-height faint dashes = road ahead */}
      <div
        className="absolute left-1/2 top-0 h-full -translate-x-1/2"
        style={{ borderLeft: "2px dashed oklch(0.585 0.235 27.5 / 0.18)", width: 0 }}
      />

      {/* Solid trail = road already traveled
      <div
        ref={trailRef}
        className="absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          borderLeft: "2px solid oklch(0.585 0.235 27.5 / 0.55)",
          width: 0,
          height: "5vh",
        }}
      /> */}

      {/* Motorcycle */}
      <div
        ref={motoRef}
        className="absolute left-1/2 -translate-x-1/2 -translate-y-full text-primary transition-none"
        style={{ top: "5vh" }}
      >
        <MotoIcon className="h-12 w-6" />
        {/* Exhaust puffs trailing behind (above in scroll direction) */}
        <div className="absolute bottom-full left-1/2 flex -translate-x-1/2 flex-col-reverse items-center gap-1 pb-1">
          {[0.5, 0.32, 0.18].map((o, i) => (
            <div
              key={i}
              className="rounded-full bg-primary"
              style={{ width: 4 + i, height: 4 + i, opacity: o }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
