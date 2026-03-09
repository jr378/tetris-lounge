"use client";

import Image from "next/image";

interface GalleryProps {
  images: string[];
  alt: string;
}

export function Gallery({ images, alt }: GalleryProps) {
  if (images.length === 0) {
    return (
      <div
        className="border-2 border-dashed border-border rounded-xl p-12 text-center"
      >
        <svg
          className="w-12 h-12 mx-auto mb-4 text-muted/40"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
          />
        </svg>
        <p className="text-muted font-medium mb-1">Photos coming soon</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <div
          key={src}
          className="aspect-[4/3] relative rounded-lg overflow-hidden group"
        >
          <Image
            src={src}
            alt={`${alt} photo ${i + 1}`}
            fill
            loading={i < 6 ? "eager" : "lazy"}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
}
