"use client";

import { TestimonialCard } from "./TestimonialCard";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  /** Heading text (default: "What People Are Saying") */
  heading?: string;
  /** Label above heading */
  label?: string;
  /** Max columns (default 3) */
  columns?: 2 | 3;
}

export function TestimonialsSection({
  testimonials,
  heading = "What People Are Saying",
  label = "Reviews",
  columns = 3,
}: TestimonialsSectionProps) {
  // Put featured testimonials first
  const sorted = [...testimonials].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  const rotations = [-0.3, 0, 0.3, -0.2, 0.2];

  return (
    <div className="text-center mb-10">
      {label && (
        <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
          {label}
        </p>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-text mb-10">
        {heading}
      </h2>

      <div
        className={`grid gap-8 max-w-4xl mx-auto ${
          columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {sorted.map((t, i) => (
          <TestimonialCard
            key={t.id}
            testimonial={t}
            rotate={rotations[i % rotations.length]}
          />
        ))}
      </div>
    </div>
  );
}
