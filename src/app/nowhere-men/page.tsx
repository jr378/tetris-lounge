import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SongList } from "@/components/SongList";
import { Gallery } from "@/components/Gallery";
import { CTAButton } from "@/components/CTAButton";
import songs from "@/data/songlists.nowhere.json";

export const metadata: Metadata = {
  title: "Nowhere Men — High-Fidelity Beatles Tribute",
  description:
    "Nowhere Men is a high-fidelity Beatles tribute act performing faithful covers of the full Beatles catalog — including later-era songs the Beatles themselves never performed live. Browse our setlist and book the experience.",
  openGraph: {
    title: "Nowhere Men — High-Fidelity Beatles Tribute",
    description:
      "Faithful Beatles covers including songs the Beatles never played live. 50+ songs from the full catalog.",
  },
};

export default function NowhereManPage() {
  return (
    <>
      <Hero
        variant="nowhere"
        subtitle="High-Fidelity Beatles Tribute"
        title="Nowhere Men"
        description="Faithful, carefully arranged covers of the Beatles catalog — from the early hits through the studio masterpieces. Including later-era songs the Beatles themselves never performed live."
        ctaText="Book Nowhere Men"
        ctaHref="/contact"
        logoSrc="/images/nowhere-men/NoWhere Men Logo.jpg"
        logoAlt="The Nowhere Men logo"
      />

      {/* Positioning */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            The Beatles, Performed Live
          </h2>
          <div className="space-y-4 text-warm-gray leading-relaxed">
            <p>
              The Beatles stopped touring in 1966 — which means some of their
              greatest music was never performed on stage. Nowhere Men brings
              those songs to life alongside the beloved early hits, delivering
              the full breadth of the catalog in a single show.
            </p>
            <p>
              From <em>Love Me Do</em> to <em>A Day In The Life</em>, from
              the energy of <em>Back In The U.S.S.R.</em> to the beauty of{" "}
              <em>Here Comes The Sun</em> — every song is performed with care,
              tight harmonies, and attention to the arrangements that made
              them timeless.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {[
              "High-fidelity arrangements",
              "Full-catalog coverage",
              "Later-era songs performed live",
              "Abbey Road Side B medley",
              "Tight vocal harmonies",
              "Perfect for themed events",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-nowhere-accent shrink-0" />
                <span className="text-charcoal">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          Gallery
        </h2>
        <Gallery
          imageDir="/images/nowhere-men"
          prefix="nm"
          alt="Nowhere Men"
          accentColor="teal"
        />
      </Section>

      {/* Song List */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          The Setlist
        </h2>
        <p className="text-warm-gray mb-8">
          {songs.length} songs from across the Beatles catalog. Search by title.
        </p>
        <SongList songs={songs} accentColor="teal" />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Book Nowhere Men
          </h2>
          <p className="text-cream/60 text-lg max-w-xl mx-auto mb-8">
            Bring the Beatles experience to your next event. Get in touch
            and let&apos;s make it happen.
          </p>
          <CTAButton href="/contact" variant="nowhere">
            Check Availability
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
