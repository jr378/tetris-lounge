import { Hero } from "@/components/Hero";
import { ActCard } from "@/components/ActCard";
import { CTAButton } from "@/components/CTAButton";
import { home } from "@/content";

export default function Home() {
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

      {/* ── What We Play — Program Notes ── */}
      <section className="bg-surface2 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
              Program Notes
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-text mb-4">
              {home.whatWePlay.heading}
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              {home.whatWePlay.description}
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-0">
              <div className="sm:pr-8 sm:border-r sm:border-border pb-8 sm:pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-accent" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text">
                    {home.whatWePlay.tetris.heading}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-9">
                  {home.whatWePlay.tetris.description}
                </p>
              </div>

              <hr className="sm:hidden border-border my-0" />

              <div className="sm:pl-8 pt-8 sm:pt-0">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-6 h-px bg-accent" aria-hidden="true" />
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text">
                    {home.whatWePlay.nowhere.heading}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed pl-9">
                  {home.whatWePlay.nowhere.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What People Are Saying ── */}
      <section className="bg-cream py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-3">
              Reviews
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-text">
              {home.testimonials.heading}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {home.testimonials.items.map((t, i) => (
              <blockquote
                key={t.name}
                className="relative p-6 rounded-xl border border-border bg-surface shadow-sm"
                style={{
                  transform: `rotate(${i === 0 ? -0.3 : i === 2 ? 0.3 : 0}deg)`,
                }}
              >
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
                <footer className="text-muted text-xs font-medium uppercase tracking-wider">
                  {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
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
      <section className="bg-cream py-16 sm:py-24 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
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
