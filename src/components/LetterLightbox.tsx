"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";

interface LetterLightboxProps {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}

export function LetterLightbox({ src, alt, open, onClose }: LetterLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Full testimonial letter"
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-auto rounded-xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white transition-colors shadow-sm"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Open in new tab link */}
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-14 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-white transition-colors shadow-sm"
          aria-label="Open in new tab"
          title="Open in new tab"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </a>

        <Image
          src={src}
          alt={alt}
          width={850}
          height={1100}
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
