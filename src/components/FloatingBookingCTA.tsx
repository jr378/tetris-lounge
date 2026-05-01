"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function FloatingBookingCTA() {
  const pathname = usePathname();

  if (pathname === "/contact" || pathname?.startsWith("/print")) {
    return null;
  }

  return (
    <Link
      href="/contact"
      className="sm:hidden fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm tracking-wide bg-accent hover:bg-accent-hover text-text-on-ink shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream"
    >
      Book the Band
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  );
}
