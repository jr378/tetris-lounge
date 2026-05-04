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

  // Cap columns at the number of testimonials so 1–2 items still center nicely.
  const effectiveColumns = Math.min(columns, sorted.length || 1) as 1 | 2 | 3;
  const colClass =
    effectiveColumns === 1
      ? "md:basis-[28rem] md:max-w-[28rem]"
      : effectiveColumns === 2
        ? "md:basis-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)]"
        : "md:basis-[calc(33.333%-1.334rem)] md:max-w-[calc(33.333%-1.334rem)]";

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

      <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
        {sorted.map((t, i) => (
          <div key={t.id} className={`w-full ${colClass}`}>
            <TestimonialCard
              testimonial={t}
              rotate={rotations[i % rotations.length]}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
