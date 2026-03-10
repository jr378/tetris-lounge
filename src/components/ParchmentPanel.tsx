interface ParchmentPanelProps {
  children: React.ReactNode;
  className?: string;
}

export function ParchmentPanel({ children, className = "" }: ParchmentPanelProps) {
  return (
    <div
      className={`relative max-w-[1200px] mx-auto bg-surface rounded-2xl border border-border shadow-sm overflow-hidden ${className}`}
    >
      {/* Subtle paper grain */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div className="relative px-6 sm:px-10 lg:px-16 py-12 sm:py-16 lg:py-20">
        {children}
      </div>
    </div>
  );
}
