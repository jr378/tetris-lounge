import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { SongList } from "@/components/SongList";
import { Gallery } from "@/components/Gallery";
import { CTAButton } from "@/components/CTAButton";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { SampleSetlist } from "@/components/SampleSetlist";
import songs from "@/data/songlists.nowhere.json";
import testimonials from "@/data/testimonials";
import setlists from "@/data/setlists";
import { ActCrossLink } from "@/components/ActCrossLink";
import { DownloadPdfButton } from "@/components/DownloadPdfButton";
import { nowhereMen } from "@/content";

export const metadata: Metadata = {
  title: nowhereMen.meta.title,
  description: nowhereMen.meta.description,
  alternates: { canonical: "/nowhere-men" },
  openGraph: {
    title: nowhereMen.meta.ogTitle,
    description: nowhereMen.meta.ogDescription,
  },
};

export default function NowhereManPage() {
  const nowhereSetlists = setlists.filter((s) => s.act === "nowhere-men");

  return (
    <>
      <ActCrossLink currentAct="nowhere" />
      <Hero
        variant="nowhere"
        subtitle={nowhereMen.hero.subtitle}
        title={nowhereMen.hero.title}
        description={nowhereMen.hero.description}
        ctaText={nowhereMen.hero.ctaText}
        ctaHref="/contact"
        logoSrc="/images/nowhere-men/NoWhere Men Logo.jpg"
        logoAlt="The Nowhere Men logo"
      />

      {/* Positioning */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-6">
            {nowhereMen.positioning.heading}
          </h2>
          <div className="space-y-4 text-muted leading-relaxed">
            {nowhereMen.positioning.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section dark>
        <TestimonialsSection
          testimonials={testimonials.filter(
            (t) => t.act === "nowhere-men" || t.act === "both"
          )}
          heading="What People Are Saying"
          label="Endorsements"
          columns={2}
        />
      </Section>

      {/* Sample Setlists */}
      <Section id="sample-setlists">
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          Sample Setlists
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {nowhereSetlists.map((s) => (
            <SampleSetlist key={s.id} setlist={s} />
          ))}
        </div>
      </Section>

      {/* Song List */}
      <Section dark>
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold">
            {nowhereMen.setlist.heading}
          </h2>
          <DownloadPdfButton href="/print/nowhere-men" />
        </div>
        <p className="text-muted mb-8">
          {songs.length} {nowhereMen.setlist.description}
        </p>
        <SongList songs={songs} />
      </Section>

      {/* Gallery */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-8">
          {nowhereMen.gallery.heading}
        </h2>
        <Gallery
          images={nowhereMen.gallery.images}
          alt="Nowhere Men"
        />
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            {nowhereMen.cta.heading}
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto mb-8">
            {nowhereMen.cta.description}
          </p>
          <CTAButton href="/contact">
            {nowhereMen.cta.buttonText}
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
