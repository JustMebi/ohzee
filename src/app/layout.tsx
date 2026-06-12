import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { CustomCursor } from "@/components/CustomCursor";
import { RoadScroller } from "@/components/RoadScroller";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ohzee.ng"),
  title: {
    default: "Ohzee! Logistics — Same-day dispatch in Asaba",
    template: "%s — Ohzee!",
  },
  description:
    "Fast, reliable same-day delivery and dispatch riders in Asaba. Book via WhatsApp in under a minute.",
  openGraph: {
    siteName: "Ohzee! Logistics",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background text-foreground antialiased">
        <CustomCursor />
        <RoadScroller />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
