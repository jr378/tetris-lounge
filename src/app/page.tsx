import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ActCard } from "@/components/ActCard";
import { CTAButton } from "@/components/CTAButton";

const members = [
  { name: "Dave Deckebach", role: "Keyboard" },
  { name: "Kelly Ferguson", role: "Guitar & Saxophone" },
  { name: "John Boyden", role: "Drums" },
  { name: "David Kinard", role: "Bass" },
  { name: "Jack Reed", role: "Guitar" },
  { name: "Jim Emshoff", role: "Keyboard" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero
        variant="home"
        subtitle="Two Acts, One Band"
        title="Tetris Lounge / Nowhere Men"
        description="From timeless rock anthems to pitch-perfect Beatles harmonies — we bring two distinct live experiences to your stage."
        ctaText="Check Availability"
        ctaHref="/contact"
      />

      {/* Two Acts */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Two Shows. One Band.
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            Whether you want a high-energy classic rock night or an immersive
            Beatles experience, we deliver both — with the same tight,
            versatile group of musicians.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <ActCard
            title="Tetris Lounge"
            tagline="Classic Rock Covers"
            description="The best of the 60s, 70s, and 80s. From Steely Dan to Led Zeppelin, Talking Heads to Prince — a deep setlist that keeps the crowd moving all night."
            href="/tetris-lounge"
            accentColor="amber"
            logoSrc="/images/tetris-lounge/Tetris Lounge Logo.png"
            logoAlt="Tetris Lounge logo"
          />
          <ActCard
            title="Nowhere Men"
            tagline="Beatles Tribute"
            description="High-fidelity Beatles covers performed with care and precision — including later-era songs the Beatles themselves never performed live."
            href="/nowhere-men"
            accentColor="teal"
            logoSrc="/images/nowhere-men/NoWhere Men Logo.jpg"
            logoAlt="The Nowhere Men logo"
          />
        </div>
      </Section>

      {/* What We Play */}
      <Section dark>
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            What We Play
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Over 125 songs across both acts, carefully arranged and
            rehearsed. Every set is tailored to the occasion.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div>
            <h3 className="text-accent font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
              Tetris Lounge
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Rock, soul, funk, new wave, and more. Artists include Neil Young,
              Steely Dan, Talking Heads, Prince, The Doors, Sly & The Family
              Stone, Led Zeppelin, and many others.
            </p>
          </div>
          <div>
            <h3 className="text-nowhere-accent font-[family-name:var(--font-display)] text-lg font-semibold mb-3">
              Nowhere Men
            </h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              The full Beatles catalog — from early hits like Love Me Do and I
              Want To Hold Your Hand to Abbey Road deep cuts and the complete
              Side B medley.
            </p>
          </div>
        </div>
      </Section>

      {/* Meet the Band */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Meet the Band
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            Six musicians with a shared love for the music that matters.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-charcoal/10 flex items-center justify-center">
                <span className="text-warm-gray/50 text-2xl font-[family-name:var(--font-display)] font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <p className="font-semibold text-charcoal text-sm">
                {member.name}
              </p>
              <p className="text-warm-gray text-xs">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* On Stage */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            On Stage
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto mb-8">
            See the band in action — performance clips, photos, and more.
          </p>
          <CTAButton href="/media">Photos &amp; Video</CTAButton>
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold mb-4">
            Ready to Book?
          </h2>
          <p className="text-warm-gray text-lg max-w-xl mx-auto mb-8">
            Whether it&apos;s a private event, festival, or venue night — let&apos;s
            talk about bringing the right show to your stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact">Check Availability</CTAButton>
            <CTAButton href="/shows" variant="outline">
              View Shows
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
