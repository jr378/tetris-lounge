interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({
  children,
  className = "",
  id,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-20 ${
        dark ? "bg-charcoal text-cream" : "bg-cream"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
