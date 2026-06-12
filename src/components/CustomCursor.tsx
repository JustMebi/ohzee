"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only activate on pointer (mouse) devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.documentElement.classList.add("custom-cursor-active");

    let ringX = 0;
    let ringY = 0;
    let curX = 0;
    let curY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      curX = e.clientX;
      curY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${curX - 5}px, ${curY - 5}px)`;
      }
    };

    // Ring lags behind for a smooth trailing effect
    const tick = () => {
      ringX += (curX - ringX) * 0.15;
      ringY += (curY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  return (
    <>
      {/* Solid dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2.5 w-2.5 rounded-full bg-primary"
        style={{ willChange: "transform" }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 rounded-full border-2 border-primary/60"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
