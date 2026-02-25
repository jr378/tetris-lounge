"use client";

import { useState, useEffect } from "react";

interface VideoGalleryProps {
  videoDir: string;
  prefix: string;
  accentColor?: "amber" | "teal";
}

export function VideoGallery({
  videoDir,
  prefix,
  accentColor = "amber",
}: VideoGalleryProps) {
  const [videos, setVideos] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();

    const checkVideos = async () => {
      const found: string[] = [];
      for (let i = 1; i <= 20; i++) {
        if (cancelled) return;
        const num = String(i).padStart(2, "0");
        const vidPath = `${videoDir}/${prefix}-${num}.mp4`;
        try {
          const res = await fetch(vidPath, {
            method: "HEAD",
            signal: controller.signal,
          });
          if (res.ok) {
            found.push(vidPath);
          }
        } catch {
          if (cancelled) return;
        }
      }
      if (!cancelled) {
        setVideos(found);
        setLoading(false);
      }
    };
    checkVideos();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [videoDir, prefix]);

  if (loading) {
    return (
      <div className="grid md:grid-cols-2 gap-6">
        {Array.from({ length: 2 }, (_, i) => (
          <div
            key={`skeleton-${i}`}
            className="aspect-video rounded-xl bg-charcoal/10 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (videos.length === 0) {
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
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <p className="text-warm-gray font-medium mb-1">Videos coming soon</p>
        <p className="text-warm-gray/60 text-sm">
          Add MP4 files to{" "}
          <code className="text-xs bg-charcoal/10 px-1.5 py-0.5 rounded">
            {videoDir}/
          </code>{" "}
          to populate this section.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {videos.map((src, i) => (
        <div key={src} className="rounded-xl overflow-hidden">
          <video
            controls
            preload="metadata"
            className="w-full aspect-video bg-black rounded-xl"
            aria-label={`Video ${i + 1}`}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}
