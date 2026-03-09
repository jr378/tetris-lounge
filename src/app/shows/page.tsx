import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import showData from "@/data/shows.json";
import { shows } from "@/content";

export const metadata: Metadata = {
  title: shows.meta.title,
  description: shows.meta.description,
};

interface Show {
  date: string;
  venue: string;
  location: string;
  act?: string;
  time?: string;
  ticketUrl?: string;
  notes?: string;
}

export default function ShowsPage() {
  const typedShows = showData as Show[];

  return (
    <>
      <Hero
        variant="default"
        subtitle={shows.hero.subtitle}
        title={shows.hero.title}
        description={shows.hero.description}
      />

      <Section>
        {typedShows.length === 0 ? (
          <div className="text-center py-12">
            <svg
              className="w-16 h-16 mx-auto mb-6 text-muted/30"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">
              {shows.empty.heading}
            </h2>
            <p className="text-muted text-lg max-w-md mx-auto mb-8">
              {shows.empty.description}
            </p>
            <CTAButton href="/contact">{shows.empty.buttonText}</CTAButton>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {typedShows.map((show) => (
                <article
                  key={`${show.date}-${show.venue}`}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl border border-border bg-surface hover:shadow-md hover:border-ink/[0.22] transition-all"
                >
                  <div className="shrink-0 text-center sm:text-left sm:w-24">
                    <time className="font-[family-name:var(--font-display)] text-lg font-bold text-text">
                      {show.date}
                    </time>
                    {show.time && (
                      <p className="text-xs text-muted">{show.time}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-text">
                      {show.venue}
                    </h3>
                    <p className="text-muted text-sm">{show.location}</p>
                    {show.act && (
                      <span className="inline-block mt-1 text-xs px-2 py-0.5 rounded-full bg-accent-soft text-accent">
                        {show.act}
                      </span>
                    )}
                    {show.notes && (
                      <p className="text-muted/70 text-xs mt-1">
                        {show.notes}
                      </p>
                    )}
                  </div>
                  {show.ticketUrl && (
                    <a
                      href={show.ticketUrl}
                      className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Tickets
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                        />
                      </svg>
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        )}
      </Section>
    </>
  );
}
