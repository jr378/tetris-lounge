"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/tetris-lounge", label: "Tetris Lounge" },
  { href: "/nowhere-men", label: "Nowhere Men" },
  { href: "/shows", label: "Shows" },
  { href: "/media", label: "Media" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isTetris = pathname === "/tetris-lounge";
  const isNowhere = pathname === "/nowhere-men";

  const closeMenu = useCallback(() => setOpen(false), []);

  // Close on ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);

    // Lock scroll while menu is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, closeMenu]);

  // Close menu on route change
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  return (
    <nav
      className="sticky top-0 z-40 bg-charcoal/95 backdrop-blur-sm border-b border-white/10"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-cream font-bold text-lg tracking-tight hover:text-accent transition-colors"
            onClick={closeMenu}
          >
            TL{" "}
            <span className="text-warm-gray font-normal">/</span>{" "}
            NM
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              const isTetrisLink = link.href === "/tetris-lounge";
              const isNowhereLink = link.href === "/nowhere-men";

              let activeColor = "text-accent";
              if (isTetrisLink && isActive) activeColor = "text-tetris-accent";
              if (isNowhereLink && isActive)
                activeColor = "text-nowhere-accent";

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? `${activeColor} bg-white/10`
                      : "text-cream/70 hover:text-cream hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-cream/80 hover:text-cream p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/10">
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent bg-white/10"
                      : "text-cream/70 hover:text-cream hover:bg-white/5"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Act mode indicator */}
      {(isTetris || isNowhere) && (
        <div
          className={`h-0.5 ${
            isTetris ? "bg-tetris-accent" : "bg-nowhere-accent"
          } transition-colors`}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}
