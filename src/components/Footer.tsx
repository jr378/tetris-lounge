import Link from "next/link";
import { band, footer } from "@/content";

export function Footer() {
  return (
    <footer className="bg-ink text-muted-on-ink mt-auto" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-text-on-ink text-xl font-bold mb-2">
              {band.name}
            </h2>
            <p className="text-sm leading-relaxed">
              {footer.description}
            </p>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-text-on-ink font-semibold text-sm uppercase tracking-wider mb-3">
              {footer.bandHeading}
            </h3>
            <ul className="space-y-1 text-sm">
              {band.members.map((m) => (
                <li key={m.name}>
                  {m.name} &mdash; {m.role}
                </li>
              ))}
            </ul>
          </div>

          {/* Links & Socials */}
          <div>
            <h3 className="text-text-on-ink font-semibold text-sm uppercase tracking-wider mb-3">
              {footer.linksHeading}
            </h3>
            <ul className="space-y-1 text-sm">
              {footer.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social links */}
            <h3 className="text-text-on-ink font-semibold text-sm uppercase tracking-wider mt-6 mb-3">
              {footer.socialHeading}
            </h3>
            <ul className="space-y-1 text-sm">
              {band.social.tetrisFacebook && (
                <li>
                  <a
                    href={band.social.tetrisFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Tetris Lounge on Facebook
                  </a>
                </li>
              )}
              {band.social.nowhereFacebook && (
                <li>
                  <a
                    href={band.social.nowhereFacebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-colors"
                  >
                    Nowhere Men on Facebook
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-border-on-ink mt-8 pt-6 text-xs text-center text-text-on-ink/40">
          &copy; {new Date().getFullYear()} {band.name}. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
