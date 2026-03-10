import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SongList } from "@/components/SongList";
import { Gallery } from "@/components/Gallery";
import { CTAButton } from "@/components/CTAButton";
import songs from "@/data/songlists.tetris.json";
import { ActCrossLink } from "@/components/ActCrossLink";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";
import { tetrisLounge } from "@/content";

export const metadata: Metadata = {
  title: tetrisLounge.meta.title,
  description: tetrisLounge.meta.description,
  openGraph: {
    title: tetrisLounge.meta.ogTitle,
    description: tetrisLounge.meta.ogDescription,
  },
};

export default function TetrisLoungePage() {
  return (
    <>
      <ActCrossLink currentAct="tetris" />
      <Hero
        variant="tetris"
        subtitle={tetrisLounge.hero.subtitle}
        title={tetrisLounge.hero.title}
        description={tetrisLounge.hero.description}
        ctaText={tetrisLounge.hero.ctaText}
        ctaHref="/contact"
        logoSrc="/images/tetris-lounge/Tetris Lounge Logo.webp"
        logoAlt="Tetris Lounge logo"
      />

      {/* Positioning */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            {tetrisLounge.positioning.heading}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {tetrisLounge.positioning.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </Section>

      {/* Song List */}
      <Section dark>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold">
            {tetrisLounge.setlist.heading}
          </h2>
          <DownloadPdfButton href="/print/tetris-lounge" dark />
        </div>
        <p className="text-muted-on-ink mb-8">
          {songs.length} {tetrisLounge.setlist.description}
        </p>
        <SongList songs={songs} dark />
      </Section>

      {/* Photos */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          {tetrisLounge.photos.heading}
        </h2>
        <Gallery
          images={tetrisLounge.photos.images}
          alt="Tetris Lounge"
        />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {tetrisLounge.cta.heading}
          </h2>
          <p className="text-muted-on-ink text-lg max-w-xl mx-auto mb-8">
            {tetrisLounge.cta.description}
          </p>
          <CTAButton href="/contact">{tetrisLounge.cta.buttonText}</CTAButton>
        </div>
      </Section>
    </>
  );
}
