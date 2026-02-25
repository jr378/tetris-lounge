import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Gallery } from "@/components/Gallery";

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

      {/* Videos */}
      <Section>
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-2">
          Videos
        </h2>
        <p className="text-warm-gray mb-8">
          Performance clips and highlights.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Video placeholder slots */}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="aspect-video rounded-xl border-2 border-dashed border-charcoal/20 flex flex-col items-center justify-center bg-charcoal/5"
            >
              <svg
                className="w-12 h-12 mb-3 text-warm-gray/30"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              <p className="text-warm-gray/50 text-sm">Video coming soon</p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 rounded-xl bg-charcoal/5 border border-charcoal/10">
          <h3 className="font-semibold text-charcoal mb-2">
            Adding videos
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed">
            To add YouTube or Vimeo videos to this page, see the instructions
            in the project README. Videos can be embedded safely using their
            standard embed URLs.
          </p>
        </div>
      </Section>
    </>
  );
}
