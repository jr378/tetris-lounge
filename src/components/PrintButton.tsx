"use client";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-5 right-5 px-5 py-2.5 bg-accent hover:bg-accent-hover text-text-on-ink rounded-lg font-semibold text-sm shadow-lg transition-colors print:hidden"
    >
      Print / Save as PDF
    </button>
  );
}
