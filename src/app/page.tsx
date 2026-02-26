import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ActCard } from "@/components/ActCard";

import { CTAButton } from "@/components/CTAButton";
import { home } from "@/content";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="home"
        subtitle={home.hero.subtitle}
        title={home.hero.title}
        description={home.hero.description}
        ctaText={home.hero.ctaText}
        ctaHref="/contact"
      />

      {/* Two Acts */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {home.twoShows.heading}
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            {home.twoShows.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ActCard
            title="Tetris Lounge"
            tagline={home.twoShows.tetris.tagline}
            description={home.twoShows.tetris.description}
            href="/tetris-lounge"
            accentColor="amber"
            logoSrc="/images/tetris-lounge/Tetris Lounge Logo.png"
            logoAlt="Tetris Lounge logo"
          />
          <ActCard
            title="Nowhere Men"
            tagline={home.twoShows.nowhere.tagline}
            description={home.twoShows.nowhere.description}
            href="/nowhere-men"
            accentColor="teal"
            logoSrc="/images/nowhere-men/NoWhere Men Logo.jpg"
            logoAlt="The Nowhere Men logo"
          />
        </div>
      </Section>

      {/* What We Play */}
      <Section dark>
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {home.whatWePlay.heading}
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            {home.whatWePlay.description}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-accent font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
              {home.whatWePlay.tetris.heading}
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {home.whatWePlay.tetris.description}
            </p>
          </div>
          <div>
            <h3 className="text-nowhere-accent font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
              {home.whatWePlay.nowhere.heading}
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              {home.whatWePlay.nowhere.description}
            </p>
          </div>
        </div>
      </Section>

      {/* On Stage */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {home.onStage.heading}
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            {home.onStage.description}
          </p>
          <CTAButton href="/media">{home.onStage.ctaText}</CTAButton>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {home.cta.heading}
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto mb-8">
            {home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">{home.cta.primaryCta}</CTAButton>
            <CTAButton href="/shows" variant="outline">
              {home.cta.secondaryCta}
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
