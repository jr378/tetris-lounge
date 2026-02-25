import Link from "next/link";

const members = [
  "Dave Deckebach — Keyboard",
  "Kelly Ferguson — Guitar & Saxophone",
  "John Boyden — Drums",
  "David Kinard — Bass",
  "Jack Reed — Guitar",
  "Jim Emshoff — Keyboard",
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 mt-auto" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-cream text-xl font-bold mb-2">
              Tetris Lounge / Nowhere Men
            </h2>
            <p className="text-sm leading-relaxed">
              Two acts, one band. Classic rock covers and a high-fidelity
              Beatles tribute.
            </p>
          </div>

          {/* Members */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-3">
              The Band
            </h3>
            <ul className="space-y-1 text-sm">
              {members.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>

          {/* Links & Socials */}
          <div>
            <h3 className="text-cream font-semibold text-sm uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cream transition-colors"
                >
                  Book Us
                </Link>
              </li>
              <li>
                <Link
                  href="/shows"
                  className="hover:text-cream transition-colors"
                >
                  Upcoming Shows
                </Link>
              </li>
              <li>
                <Link
                  href="/media"
                  className="hover:text-cream transition-colors"
                >
                  Photos & Video
                </Link>
              </li>
            </ul>

            {/* Social placeholders */}
            <div className="mt-4 flex gap-3">
              <span
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs text-cream/50"
                title="Facebook (coming soon)"
                aria-label="Facebook placeholder"
              >
                FB
              </span>
              <span
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs text-cream/50"
                title="Instagram (coming soon)"
                aria-label="Instagram placeholder"
              >
                IG
              </span>
              <span
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs text-cream/50"
                title="YouTube (coming soon)"
                aria-label="YouTube placeholder"
              >
                YT
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-center text-cream/40">
          &copy; {new Date().getFullYear()} Tetris Lounge / Nowhere Men. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
