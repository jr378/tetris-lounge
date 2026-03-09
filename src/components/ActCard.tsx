import Link from "next/link";
import Image from "next/image";

interface ActCardProps {
  title: string;
  tagline: string;
  description: string;
  href: string;
  accentColor: "amber" | "teal";
  logoSrc?: string;
  logoAlt?: string;
}

export function ActCard({
  title,
  tagline,
  description,
  href,
  accentColor,
  logoSrc,
  logoAlt,
}: ActCardProps) {
  return (
    <Link
      href={href}
      className="group block p-8 rounded-xl border border-border bg-surface transition-all duration-300 hover:shadow-lg hover:border-ink/[0.22]"
    >
      {logoSrc && (
        <div className="mb-4">
          {accentColor === "amber" ? (
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <Image
                src={logoSrc}
                alt={logoAlt || title}
                width={80}
                height={80}
                className="w-full h-full object-cover scale-[1.35]"
              />
            </div>
          ) : (
            <Image
              src={logoSrc}
              alt={logoAlt || title}
              width={80}
              height={80}
              className="rounded"
            />
          )}
        </div>
      )}
      <p className="text-brass font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.2em] mb-2">
        {tagline}
      </p>
      <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold mb-3 text-text group-hover:translate-x-1 transition-transform">
        {title}
      </h3>
      <p className="text-muted leading-relaxed mb-4">{description}</p>
      <span className="text-brass text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
        Explore
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </Link>
  );
}
