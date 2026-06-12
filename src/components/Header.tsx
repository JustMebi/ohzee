"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { BookNowButton } from "@/components/BookNowButton";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkCls = (active: boolean) =>
  cn(
    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
    active ? "bg-accent text-accent-foreground font-semibold" : "text-muted-foreground"
  );

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="h-9 w-9" />
          <span className="font-display text-lg font-bold">
            Ohzee<span className="text-primary">!</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className={linkCls(pathname === item.href)}>
              {item.label}
            </Link>
          ))}
          <BookNowButton
            label={
              <span className="flex items-center gap-1.5">
                Book delivery <ArrowRight className="h-3.5 w-3.5" />
              </span>
            }
            className={cn(buttonVariants({ size: "sm" }), "ml-2 px-4 py-2")}
          />
        </nav>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-muted-foreground hover:bg-accent md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background px-4 pb-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent",
                pathname === item.href ? "bg-accent font-semibold" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3">
            <BookNowButton
              label={
                <span className="flex items-center justify-center gap-1.5">
                  Book delivery <ArrowRight className="h-3.5 w-3.5" />
                </span>
              }
              className={cn(buttonVariants(), "w-full px-4 py-2.5")}
            />
          </div>
        </div>
      )}
    </header>
  );
}
