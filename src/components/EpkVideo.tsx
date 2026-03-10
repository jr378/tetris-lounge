"use client";

import { useState } from "react";

export function EpkVideo({
  youtubeId,
  title,
}: {
  youtubeId: string;
  title: string;
}) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="aspect-video rounded-xl overflow-hidden">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
        <p className="text-center text-muted-on-ink text-sm mt-4">{title}</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
        aria-label={`Play ${title}`}
      >
        <img
          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/90 group-hover:bg-accent flex items-center justify-center transition-colors shadow-lg">
            <svg
              className="w-7 h-7 text-white ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </button>
      <p className="text-center text-muted-on-ink text-sm mt-4">{title}</p>
    </div>
  );
}
