"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function StaggerReveal({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("stagger-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("stagger-grid", className)}>
      {children}
    </div>
  );
}
