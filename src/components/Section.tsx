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
        dark ? "bg-surface2 text-text" : "bg-cream text-text"
      } ${className}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}
