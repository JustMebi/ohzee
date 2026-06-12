import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/ohzee-logo.jpeg"
      alt="Ohzee!"
      width={56}
      height={56}
      className={cn("rounded-xl object-cover", className)}
    />
  );
}
