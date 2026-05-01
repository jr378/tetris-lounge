import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { Gallery } from "@/components/Gallery";
import { EpkVideo } from "@/components/EpkVideo";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { VenueLogos } from "@/components/VenueLogos";
import { SampleSetlist } from "@/components/SampleSetlist";
import { epk, band, tetrisLounge, nowhereMen } from "@/content";
import testimonials from "@/data/testimonials";
import setlists from "@/data/setlists";
import tetrisSongs from "@/data/songlists.tetris.json";
import nowhereSongs from "@/data/songlists.nowhere.json";

export const metadata: Metadata = {
  title: epk.meta.title,
  description: epk.meta.description,
  alternates: { canonical: "/epk" },
  openGraph: {
    title: epk.meta.ogTitle,
    description: epk.meta.ogDescription,
    images: [
      {
        url: "/images/nowhere-men/nowhere-men-band-2025.jpg",
        width: 1440,
        height: 960,
        alt: "The band standing together in front of a brick wall",
      },
    ],
  },
};

const SAMPLE_COUNT = 15;

export default function EpkPage() {
  const tetrisSample = tetrisSongs.slice(0, SAMPLE_COUNT);
  const nowhereSample = nowhereSongs.slice(0, SAMPLE_COUNT);
  const nowhereSetlists = setlists.filter((s) => s.act === "nowhere-men");
  const tetrisSetlists = setlists.filter((s) => s.act === "tetris-lounge");

  return (
    <>
      <Hero
        variant="default"
        subtitle={epk.hero.subtitle}
        title={epk.hero.title}
        description={epk.hero.description}
      />

      {/* Header CTAs */}
      <Section>
        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton href="/contact">Check Availability</CTAButton>
          <CTAButton href="/media">Media</CTAButton>
        </div>
      </Section>

      {/* Played At */}
      <Section dark>
        <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.25em] mb-6 text-center">
          Trusted by Venues &amp; Festivals
        </p>
        <VenueLogos />
      </Section>

      {/* Two-Act Summary */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-10 text-center">
          Two Acts
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Tetris Lounge */}
          <div className="p-6 rounded-xl border border-border bg-surface card-hover">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] mb-2">
              {epk.tetris.tagline}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">
              Tetris Lounge
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {epk.tetris.description}
            </p>
            <p className="text-text text-xs font-semibold uppercase tracking-wider mb-2">
              Great for
            </p>
            <ul className="space-y-1">
              {epk.tetris.greatFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-muted text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Nowhere Men */}
          <div className="p-6 rounded-xl border border-border bg-surface card-hover">
            <p className="text-accent font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] mb-2">
              {epk.nowhere.tagline}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">
              Nowhere Men
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {epk.nowhere.description}
            </p>
            <p className="text-text text-xs font-semibold uppercase tracking-wider mb-2">
              Great for
            </p>
            <ul className="space-y-1">
              {epk.nowhere.greatFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-muted text-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Sample Setlists */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-10 text-center">
          Sample Setlists
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Nowhere Men */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-4">
              Nowhere Men
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {nowhereSetlists.map((s) => (
                <SampleSetlist key={s.id} setlist={s} />
              ))}
            </div>
          </div>
          {/* Tetris Lounge */}
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold mb-4">
              Tetris Lounge
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {tetrisSetlists.map((s) => (
                <SampleSetlist key={s.id} setlist={s} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Song Highlights */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-10 text-center">
          Song Highlights
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-1">
              Tetris Lounge
            </h3>
            <p className="text-muted text-xs mb-4">
              Sample from our list of {tetrisSongs.length}+ songs
            </p>
            <ul className="space-y-1.5 text-sm">
              {tetrisSample.map((s) => (
                <li key={s.title} className="flex justify-between border-b border-border pb-1.5">
                  <span className="font-medium text-text">{s.title}</span>
                  <span className="text-muted ml-3 shrink-0">{s.artist}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/tetris-lounge"
              className="inline-block mt-4 text-sm text-accent hover:text-accent-hover font-medium transition-colors"
            >
              View full setlist &rarr;
            </Link>
          </div>
          <div>
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-1">
              Nowhere Men
            </h3>
            <p className="text-muted text-xs mb-4">
              Sample from our list of {nowhereSongs.length}+ songs
            </p>
            <ul className="space-y-1.5 text-sm">
              {nowhereSample.map((s) => (
                <li key={s.title} className="flex justify-between border-b border-border pb-1.5">
                  <span className="font-medium text-text">{s.title}</span>
                  <span className="text-muted ml-3 shrink-0">{s.artist}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/nowhere-men"
              className="inline-block mt-4 text-sm text-accent hover:text-accent-hover font-medium transition-colors"
            >
              View full setlist &rarr;
            </Link>
          </div>
        </div>
      </Section>

      {/* Band Lineup */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8 text-center">
          The Band
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {band.members.map((m) => (
            <div key={m.name} className="text-center">
              <p className="font-semibold text-text">{m.name}</p>
              <p className="text-muted text-sm">{m.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Photos */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8 text-center">
          Photos
        </h2>
        <Gallery
          images={[
            ...tetrisLounge.photos.images,
            ...nowhereMen.gallery.images,
          ]}
          alt="Tetris Lounge / Nowhere Men"
        />
      </Section>

      {/* Video */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8 text-center">
          See Us Live
        </h2>
        <EpkVideo
          youtubeId="qKSFjA6J4ak"
          title="Nowhere Men — While My Guitar Gently Weeps"
        />
      </Section>

      {/* Testimonials / Endorsements */}
      <Section>
        <TestimonialsSection
          testimonials={testimonials.filter((t) => t.featured)}
          heading="Testimonials"
          label="Endorsements"
          columns={2}
        />
      </Section>

      {/* Booking CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {epk.cta.heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            {epk.cta.description}
          </p>
          <CTAButton href="/contact">{epk.cta.buttonText}</CTAButton>
        </div>
      </Section>
    </>
  );
}
