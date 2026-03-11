"use client";

import { useState } from "react";
import { LetterLightbox } from "./LetterLightbox";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  rotate?: number;
}

export function TestimonialCard({ testimonial, rotate = 0 }: TestimonialCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const t = testimonial;

  return (
    <>
      <blockquote
        className={`relative p-6 rounded-xl border bg-surface shadow-sm ${
          t.featured
            ? "border-accent/30 ring-1 ring-accent/10"
            : "border-border"
        }`}
        style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
      >
        {/* Label badge for featured testimonials */}
        {t.label && (
          <span className="absolute -top-3 left-4 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-accent text-text-on-ink rounded-full">
            {t.label}
          </span>
        )}

        {/* Large decorative quote mark */}
        <span
          className="absolute top-2 left-3 text-6xl font-serif text-text/[0.06] leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <p className="relative text-text text-sm leading-relaxed mb-4 italic">
          &ldquo;{t.quote}&rdquo;
        </p>

        <hr className="border-border mb-3" />

        <footer className="text-muted text-xs">
          <span className="font-medium uppercase tracking-wider">
            {t.sourceName}
          </span>
          {(t.sourceTitle || t.sourceOrg) && (
            <span className="block mt-0.5 normal-case tracking-normal">
              {[t.sourceTitle, t.sourceOrg].filter(Boolean).join(", ")}
              {t.sourceLocation && ` — ${t.sourceLocation}`}
            </span>
          )}
          {t.date && (
            <span className="block mt-0.5 normal-case tracking-normal text-muted/70">
              {t.date}
            </span>
          )}
        </footer>

        {/* Read full letter button */}
        {t.fullImagePath && (
          <button
            onClick={() => setLightboxOpen(true)}
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-hover transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
            Read full letter
          </button>
        )}
      </blockquote>

      {t.fullImagePath && (
        <LetterLightbox
          src={t.fullImagePath}
          alt={`Testimonial letter from ${t.sourceName}${t.sourceOrg ? `, ${t.sourceOrg}` : ""}`}
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
