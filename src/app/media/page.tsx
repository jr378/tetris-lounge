import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";
import { VideoGallery } from "@/components/VideoGallery";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Photos and videos of Tetris Lounge and Nowhere Men. See the band in action and get a feel for the live experience.",
};

export default function MediaPage() {
  return (
    <>
      <Hero
        variant="default"
        subtitle="Photos & Video"
        title="Media"
        description="See the band in action. Browse photos from shows and events."
      />

      {/* Tetris Lounge Gallery */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          Tetris Lounge
        </h2>
        <p className="text-warm-gray mb-8">Classic rock covers, live on stage.</p>
        <Gallery
          imageDir="/images/tetris-lounge"
          prefix="tl"
          alt="Tetris Lounge"
          accentColor="amber"
        />
      </Section>

      {/* Nowhere Men Gallery */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          Nowhere Men
        </h2>
        <p className="text-cream/60 mb-8">The Beatles tribute experience.</p>
        <Gallery
          imageDir="/images/nowhere-men"
          prefix="nm"
          alt="Nowhere Men"
          accentColor="teal"
        />
      </Section>

      {/* Tetris Lounge Videos */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          Tetris Lounge Videos
        </h2>
        <p className="text-warm-gray mb-8">
          Performance clips and highlights.
        </p>
        <VideoGallery
          videos={[]}
          accentColor="amber"
        />
      </Section>

      {/* Nowhere Men Videos */}
      <Section dark>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          Nowhere Men Videos
        </h2>
        <p className="text-cream/60 mb-8">
          Beatles tribute performances.
        </p>
        <VideoGallery
          videos={[
            { youtubeId: "3QjqXBrRgkk", title: "Golden Slumbers" },
            { youtubeId: "qKSFjA6J4ak", title: "While My Guitar Gently Weeps" },
            { youtubeId: "2JIe5-j3A5A", title: "Got To Get You Into My Life" },
            { youtubeId: "HutmRZnRN50", title: "Nowhere Man" },
            { youtubeId: "F-OVuhXJGvM", title: "The End" },
          ]}
          accentColor="teal"
        />
      </Section>
    </>
  );
}
