"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function RevealOnScroll({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={cn(
        "w-full transition-all duration-[1100ms] ease-out",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14",
        className
      )}
    >
      {children}
    </div>
  );
}
