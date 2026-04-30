import Link from "next/link";
import { Section } from "@/components/Section";
import { CTAButton } from "@/components/CTAButton";
import { notFound } from "@/content";

const quickLinks = [
  { href: "/tetris-lounge", label: "Tetris Lounge" },
  { href: "/nowhere-men", label: "Nowhere Men" },
  { href: "/shows", label: "Upcoming Shows" },
  { href: "/media", label: "Photos & Video" },
  { href: "/epk", label: "Press Kit" },
  { href: "/contact", label: "Book Us" },
];

export default function NotFound() {
  return (
    <Section>
      <div className="text-center py-12">
        <p className="text-accent font-[family-name:var(--font-display)] text-6xl font-bold mb-4">
          404
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3">
          {notFound.heading}
        </h1>
        <p className="text-muted text-lg max-w-md mx-auto mb-8">
          {notFound.description}
        </p>
        <CTAButton href="/">{notFound.buttonText}</CTAButton>

        <div className="mt-12 max-w-md mx-auto">
          <p className="text-sm uppercase tracking-wider text-muted/70 mb-4">
            Or try one of these
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 px-3 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
