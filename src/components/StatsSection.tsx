"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { prefix: "", value: 12000, suffix: "K+", display: "12K+", label: "Deliveries completed" },
  { prefix: "", value: 45, suffix: " min", display: "45 min", label: "Avg. delivery time" },
  { prefix: "", value: 120, suffix: "+", display: "120+", label: "Active riders" },
  { prefix: "", value: 4.9, suffix: "★", display: "4.9★", label: "Customer rating", decimals: 1 },
];

function AnimatedStat({ value, suffix, prefix = "", decimals = 0, active }: {
  value: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const raw = eased * value;
      setCount(decimals ? Math.round(raw * 10) / 10 : Math.round(raw));
      if (elapsed < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, value, decimals]);

  const display = decimals ? count.toFixed(decimals) : count >= 1000 ? Math.round(count / 1000) : count;

  return (
    <span>
      {prefix}{display}{suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setActive(true); observer.disconnect(); }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-ink py-20 text-ink-foreground">
      <div ref={ref} className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4 md:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-4xl font-extrabold text-primary md:text-5xl">
              <AnimatedStat
                value={s.value}
                suffix={s.suffix}
                prefix={s.prefix}
                decimals={s.decimals}
                active={active}
              />
            </p>
            <p className="mt-2 text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
