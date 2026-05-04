import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { VideoGallery } from "@/components/VideoGallery";
import { media } from "@/content";

export const metadata: Metadata = {
  title: media.meta.title,
  description: media.meta.description,
  alternates: { canonical: "/media" },
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

      {/* Nowhere Men Videos */}
      <section className="bg-cream text-text pt-8 pb-16 sm:pt-10 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
            {media.nowhereVideos.heading}
          </h2>
          <p className="text-muted mb-8">
            {media.nowhereVideos.description}
          </p>
          <VideoGallery
            videos={media.nowhereVideos.videos}
          />
        </div>
      </section>
    </>
  );
}
