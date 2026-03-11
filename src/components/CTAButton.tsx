import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({
  href,
  children,
  className = "",
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-wide transition-all duration-200 bg-accent hover:bg-accent-hover text-text-on-ink shadow-sm hover:shadow-md hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-cream ${className}`}
    >
      {children}
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
    </Link>
  );
}
