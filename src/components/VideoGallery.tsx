interface Video {
  youtubeId: string;
  title: string;
}

interface VideoGalleryProps {
  videos: Video[];
  /** @deprecated No longer used — kept for backwards compatibility */
  accentColor?: string;
  dark?: boolean;
}

export function VideoGallery({
  videos,
  dark = false,
}: VideoGalleryProps) {
  if (videos.length === 0) {
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
        <div key={video.youtubeId}>
          <div className="rounded-xl overflow-hidden">
            <iframe
              className="w-full aspect-video rounded-xl"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className={`mt-2 text-sm font-medium ${
            dark ? "text-text-on-ink/80" : "text-text"
          }`}>
            {video.title}
          </p>
        </div>
      ))}
    </div>
  );
}
