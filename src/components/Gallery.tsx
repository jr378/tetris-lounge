"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface GalleryProps {
  imageDir: string;
  prefix: string;
  alt: string;
  accentColor?: "amber" | "teal";
}

export function Gallery({
  imageDir,
  prefix,
  alt,
  accentColor = "amber",
}: GalleryProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const checkImages = async () => {
      const found: string[] = [];
      for (let i = 1; i <= 20; i++) {
        if (cancelled) return;
        const num = String(i).padStart(2, "0");
        const imgPath = `${imageDir}/${prefix}-${num}.jpg`;
        try {
          const res = await fetch(imgPath, {
            method: "HEAD",
            signal: controller.signal,
          });
          if (res.ok) {
            found.push(imgPath);
          }
        } catch {
          if (cancelled) return;
        }
      }
      if (!cancelled) {
        setImages(found);
        setLoading(false);
      }
    };
    checkImages();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [imageDir, prefix]);

  if (loading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={`skeleton-${i}`}
            className="aspect-[4/3] rounded-lg bg-charcoal/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (images.length === 0) {
    const borderColor =
      accentColor === "amber"
        ? "border-tetris-accent/30"
        : "border-nowhere-accent/30";

    return (
      <div
        className={`border-2 border-dashed ${borderColor} rounded-xl p-12 text-center`}
      >
        <svg
          className="w-12 h-12 mx-auto mb-4 text-warm-gray/40"
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
        <p className="text-warm-gray font-medium mb-1">Photos coming soon</p>
        <p className="text-warm-gray/60 text-sm">
          Add images to{" "}
          <code className="text-xs bg-charcoal/10 px-1.5 py-0.5 rounded">
            {imageDir}/
          </code>{" "}
          to populate this gallery.
        </p>
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
