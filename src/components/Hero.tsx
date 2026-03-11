import Image from "next/image";
import { CTAButton } from "./CTAButton";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: "home" | "tetris" | "nowhere" | "default";
  logoSrc?: string;
  logoAlt?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  variant = "default",
  logoSrc,
  logoAlt,
}: HeroProps) {
  return (
    <section
      className="hero-grain relative overflow-hidden text-text-on-ink"
      style={{
        background: "linear-gradient(180deg, #121417 0%, #1B1F24 100%)",
      }}
    >
      {/* Subtle parchment spotlight behind headline */}
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(245,236,220,0.1) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        {logoSrc && (
          <div className="mb-6">
            {variant === "tetris" ? (
              <div className="w-36 h-36 rounded-full overflow-hidden">
                <Image
                  src={logoSrc}
                  alt={logoAlt || title}
                  width={160}
                  height={160}
                  className="w-full h-full object-cover scale-[1.35]"
                />
              </div>
            ) : (
              <Image
                src={logoSrc}
                alt={logoAlt || title}
                width={160}
                height={160}
                className="rounded-lg"
              />
            )}
          </div>
        )}
        {subtitle && (
          <p className="text-accent font-[family-name:var(--font-display)] text-sm sm:text-base uppercase tracking-[0.2em] mb-4">
            {subtitle}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-muted-on-ink text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
        )}
        {ctaText && ctaHref && (
          <CTAButton href={ctaHref}>
            {ctaText}
          </CTAButton>
        )}
      </div>
    </section>
  );
}
