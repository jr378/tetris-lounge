import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SongList } from "@/components/SongList";
import { CTAButton } from "@/components/CTAButton";
import { SampleSetlist } from "@/components/SampleSetlist";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import songs from "@/data/songlists.tetris.json";
import setlists from "@/data/setlists";
import testimonials from "@/data/testimonials";
import { ActCrossLink } from "@/components/ActCrossLink";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";
import { RichText } from "@/components/RichText";
import { tetrisLounge } from "@/content";

export const metadata: Metadata = {
  title: tetrisLounge.meta.title,
  description: tetrisLounge.meta.description,
  alternates: { canonical: "/tetris-lounge" },
  openGraph: {
    title: tetrisLounge.meta.ogTitle,
    description: tetrisLounge.meta.ogDescription,
    images: [{ url: "/images/tetris-lounge/band-steely-dan-jackets.webp", width: 1536, height: 1024, alt: "Tetris Lounge band" }],
  },
};

export default function TetrisLoungePage() {
  const tetrisSetlists = setlists.filter((s) => s.act === "tetris-lounge");

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
        imageSrc="/images/tetris-lounge/band-steely-dan-jackets.webp"
        imageAlt="The six members of Tetris Lounge in sport coats against a brick wall"
      />

      {/* Positioning */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            {tetrisLounge.positioning.heading}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {tetrisLounge.positioning.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </div>
      </Section>

      {/* Sample Setlists */}
      <Section dark id="sample-setlists">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          Sample Setlists
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {tetrisSetlists.map((s) => (
            <SampleSetlist key={s.id} setlist={s} />
          ))}
        </div>
      </Section>

      {/* Song List */}
      <Section>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold">
            {tetrisLounge.setlist.heading}
          </h2>
          <DownloadPdfButton href="/print/tetris-lounge" />
        </div>
        <p className="text-muted mb-8">
          {songs.length} {tetrisLounge.setlist.description}
        </p>
        <SongList songs={songs} />
      </Section>

      {/* Testimonial */}
      <Section dark>
        <TestimonialsSection
          testimonials={testimonials.filter(
            (t) => t.act === "tetris-lounge" || t.act === "both"
          )}
          heading="What People Are Saying"
          label="Reviews"
          columns={2}
        />
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {tetrisLounge.cta.heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            {tetrisLounge.cta.description}
          </p>
          <CTAButton href="/contact">{tetrisLounge.cta.buttonText}</CTAButton>
        </div>
      </Section>
    </>
  );
}
