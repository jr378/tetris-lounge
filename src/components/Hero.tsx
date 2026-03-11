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
  imageSrc?: string;
  imageAlt?: string;
  /** Render a smaller image (e.g. for the home hero) */
  imageSmall?: boolean;
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
  imageSrc,
  imageAlt,
  imageSmall,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section
      className="hero-grain relative overflow-hidden bg-surface2"
      style={{
        background: "linear-gradient(180deg, var(--color-surface2) 0%, var(--color-cream) 100%)",
      }}
    >
      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 relative z-10 ${
          isHome && imageSrc
            ? "py-12 sm:py-16 lg:py-20 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            : "py-14 sm:py-20"
        }`}
      >
        <div>
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
          <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-text">
            {title}
          </h1>
          {description && (
            <p className="text-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
          )}
          {ctaText && ctaHref && (
            <CTAButton href={ctaHref}>{ctaText}</CTAButton>
          )}
        </div>

        {/* Band photo — two-column on home, full-width below text on other variants */}
        {imageSrc && (
          <div className={`rounded-2xl overflow-hidden border border-border shadow-sm ${
            !isHome ? "mt-8 max-w-3xl" : ""
          } ${imageSmall ? "max-w-sm lg:max-w-md" : ""}`}>
            <Image
              src={imageSrc}
              alt={imageAlt || "Band photo"}
              width={imageSmall ? 420 : 720}
              height={imageSmall ? 280 : 480}
              className="w-full h-auto object-cover"
              priority
              sizes={imageSmall ? "(max-width: 1024px) 320px, 420px" : isHome ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 768px) 100vw, 768px"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
