import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SongList } from "@/components/SongList";
import { Gallery } from "@/components/Gallery";
import { CTAButton } from "@/components/CTAButton";
import songs from "@/data/songlists.tetris.json";

export const metadata: Metadata = {
  title: "Tetris Lounge — Classic Rock Covers from the 60s, 70s & 80s",
  description:
    "Tetris Lounge plays classic rock covers spanning the 60s, 70s, and 80s — from Steely Dan and Led Zeppelin to Talking Heads and Prince. Browse our full setlist and book us for your next event.",
  openGraph: {
    title: "Tetris Lounge — Classic Rock Covers",
    description:
      "The best of the 60s, 70s, and 80s performed live. Browse our setlist of 75+ songs.",
  },
};

export default function TetrisLoungePage() {
  return (
    <>
      <Hero
        variant="tetris"
        subtitle="Classic Rock Covers"
        title="Tetris Lounge"
        description="The 60s, 70s, and 80s — performed live with energy, feel, and respect for the originals. Rock, soul, funk, new wave, and everything in between."
        ctaText="Book Tetris Lounge"
        ctaHref="/contact"
        logoSrc="/images/tetris-lounge/Tetris Lounge Logo.png"
        logoAlt="Tetris Lounge logo"
      />

      {/* Great For */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            A Great Fit For
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Bars & restaurants",
              "Private parties & celebrations",
              "Corporate events",
              "Outdoor festivals & concerts",
              "Community events",
              "Fundraisers & benefits",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-tetris-accent shrink-0" />
                <span className="text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Song List */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          The Setlist
        </h2>
        <p className="text-cream/60 mb-8">
          {songs.length} songs and counting. Search by title or artist.
        </p>
        <SongList songs={songs} accentColor="amber" dark />
      </Section>

      {/* Gallery */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          Photos
        </h2>
        <Gallery
          imageDir="/images/tetris-lounge"
          prefix="tl"
          alt="Tetris Lounge"
          accentColor="amber"
        />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Book Tetris Lounge
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto mb-8">
            Bring the classics to your next event. Get in touch and let&apos;s
            find the right setlist for your crowd.
          </p>
          <CTAButton href="/contact">Check Availability</CTAButton>
        </div>
      </Section>
    </>
  );
}
