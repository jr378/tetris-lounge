import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { VideoGallery } from "@/components/VideoGallery";
import { media } from "@/content";

export const metadata: Metadata = {
  title: media.meta.title,
  description: media.meta.description,
};

export default function MediaPage() {
  return (
    <>
      <Hero
        variant="default"
        subtitle={media.hero.subtitle}
        title={media.hero.title}
        description={media.hero.description}
      />

      {/* Tetris Lounge Videos */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          {media.tetrisVideos.heading}
        </h2>
        <p className="text-warm-gray mb-8">
          {media.tetrisVideos.description}
        </p>
        <VideoGallery
          videos={media.tetrisVideos.videos}
          accentColor="amber"
        />
      </Section>

      {/* Nowhere Men Videos */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          {media.nowhereVideos.heading}
        </h2>
        <p className="text-cream/60 mb-8">
          {media.nowhereVideos.description}
        </p>
        <VideoGallery
          videos={media.nowhereVideos.videos}
          accentColor="teal"
        />
      </Section>
    </>
  );
}
