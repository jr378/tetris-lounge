import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ActCard } from "@/components/ActCard";
import { CTAButton } from "@/components/CTAButton";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VenueLogos } from "@/components/VenueLogos";
import { home } from "@/content";
import testimonials from "@/data/testimonials";
import setlists from "@/data/setlists";

export default function Home() {
  const nowhereSetlist = setlists.find((s) => s.act === "nowhere-men");
  const tetrisSetlist = setlists.find((s) => s.act === "tetris-lounge");

  return (
    <>
      {/* Hero with band photo */}
      <Hero
        variant="home"
        subtitle={home.hero.subtitle}
        title={home.hero.title}
        description={home.hero.description}
        ctaText={home.hero.ctaText}
        ctaHref="/contact"
        imageSrc="/images/nowhere-men/nowhere-men-band-2025.jpg"
        imageAlt="The band standing together in front of a brick wall"
      />

      {/* ── Two Acts ── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4 text-text">
              {home.twoShows.heading}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {home.twoShows.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <ActCard
              title="Tetris Lounge"
              tagline={home.twoShows.tetris.tagline}
              description={home.twoShows.tetris.description}
              href="/tetris-lounge"
              logoShape="round"
              logoSrc="/images/tetris-lounge/Tetris Lounge Logo.webp"
              logoAlt="Tetris Lounge logo"
            />
            <ActCard
              title="Nowhere Men"
              tagline={home.twoShows.nowhere.tagline}
              description={home.twoShows.nowhere.description}
              href="/nowhere-men"
              logoShape="square"
              logoSrc="/images/nowhere-men/NoWhere Men Logo.jpg"
              logoAlt="The Nowhere Men logo"
            />
          </div>
        </div>
      </section>

      {/* ── Played At ── */}
      <section className="bg-surface2 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-6 text-center">
            Played At
          </p>
          <VenueLogos />
        </div>
      </section>

      {/* ── Sample Setlists teaser ── */}
      <section className="bg-surface2 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
              From the Stage
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-text">
              Sample Setlists
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Tetris Lounge card */}
            {tetrisSetlist && (
              <Link
                href="/tetris-lounge#sample-setlists"
                className="block rounded-xl border border-border bg-surface p-6 card-hover"
              >
                <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] mb-1">
                  Classic Rock Covers
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-text mb-2">
                  Tetris Lounge
                </h3>
                <p className="text-muted text-sm mb-3">
                  {tetrisSetlist.venue} · {tetrisSetlist.location}
                </p>
                <p className="text-muted text-xs">
                  {tetrisSetlist.songs.slice(0, 5).join(" · ")} …
                </p>
                <span className="inline-block mt-3 text-sm text-accent font-medium">
                  View setlists →
                </span>
              </Link>
            )}
            {/* Nowhere Men card */}
            {nowhereSetlist && (
              <Link
                href="/nowhere-men#sample-setlists"
                className="block rounded-xl border border-border bg-surface p-6 card-hover"
              >
                <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] mb-1">
                  Beatles Tribute
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-text mb-2">
                  Nowhere Men
                </h3>
                <p className="text-muted text-sm mb-3">
                  {nowhereSetlist.venue} · {nowhereSetlist.location}
                </p>
                <p className="text-muted text-xs">
                  {nowhereSetlist.songs.slice(0, 5).join(" · ")} …
                </p>
                <span className="inline-block mt-3 text-sm text-accent font-medium">
                  View setlist →
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* ── What People Are Saying ── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <TestimonialsSection
            testimonials={testimonials}
            heading={home.testimonials.heading}
          />
        </div>
      </section>

      {/* ── On Stage CTA ── */}
      <section className="bg-surface2 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
            On Stage
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4 text-text">
            {home.onStage.heading}
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto mb-8">
            {home.onStage.description}
          </p>
          <CTAButton href="/media">{home.onStage.ctaText}</CTAButton>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="haze-teal relative overflow-hidden bg-cream py-16 sm:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4 text-text">
            {home.cta.heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            {home.cta.description}
          </p>
          <CTAButton href="/contact">{home.cta.primaryCta}</CTAButton>
        </div>
      </section>
    </>
  );
}
