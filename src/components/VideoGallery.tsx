"use client";

import { useState } from "react";

interface Video {
  youtubeId: string;
  title: string;
  poster?: string;
}

interface VideoGalleryProps {
  videos: Video[];
}

function VideoFacade({ video }: { video: Video }) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div>
        <div className="rounded-xl overflow-hidden">
          <iframe
            className="w-full aspect-video rounded-xl"
            src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-2 text-sm font-medium text-text">
          {video.title}
        </p>
      </div>
    );
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="relative w-full aspect-video rounded-xl overflow-hidden group cursor-pointer"
        aria-label={`Play ${video.title}`}
      >
        <img
          src={video.poster ?? `https://i.ytimg.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget;
            const fallback = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
            if (img.src !== fallback) img.src = fallback;
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        {/* Play button */}
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
      <p className="mt-2 text-sm font-medium text-text">
        {video.title}
      </p>
    </div>
  );
}

export function VideoGallery({ videos }: VideoGalleryProps) {
  if (videos.length === 0) {
    return (
      <div className="border-2 border-dashed border-border rounded-xl p-12 text-center">
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
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
        <p className="text-muted font-medium mb-1">Videos coming soon</p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {videos.map((video) => (
        <VideoFacade key={video.youtubeId} video={video} />
      ))}
    </div>
  );
}
