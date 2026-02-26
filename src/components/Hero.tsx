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
  const bgClasses: Record<string, string> = {
    home: "bg-charcoal",
    tetris: "bg-charcoal",
    nowhere: "bg-charcoal",
    default: "bg-charcoal",
  };

  const accentClasses: Record<string, string> = {
    home: "text-accent",
    tetris: "text-tetris-accent",
    nowhere: "text-nowhere-accent",
    default: "text-accent",
  };

  return (
    <section
      className={`${bgClasses[variant]} text-cream relative overflow-hidden`}
    >
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              variant === "nowhere"
                ? "radial-gradient(circle, #64a8a8 0%, transparent 70%)"
                : "radial-gradient(circle, #daa852 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
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
          <p
            className={`${accentClasses[variant]} font-[family-name:var(--font-display)] text-sm sm:text-base uppercase tracking-[0.2em] mb-4`}
          >
            {subtitle}
          </p>
        )}
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-cream/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
            {description}
          </p>
        )}
        {ctaText && ctaHref && (
          <CTAButton href={ctaHref} variant={variant === "nowhere" ? "nowhere" : "default"}>
            {ctaText}
          </CTAButton>
        )}
      </div>
    </section>
  );
}
