import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "nowhere" | "outline";
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "default",
  className = "",
}: CTAButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal";

  const variantClasses: Record<string, string> = {
    default:
      "bg-accent hover:bg-accent-hover text-charcoal focus:ring-accent",
    nowhere:
      "bg-nowhere-accent hover:bg-nowhere-accent-hover text-cream focus:ring-nowhere-accent",
    outline:
      "border-2 border-accent text-accent hover:bg-accent hover:text-charcoal focus:ring-accent",
  };

  return (
    <Link
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
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
