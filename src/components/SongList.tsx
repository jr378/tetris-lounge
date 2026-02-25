"use client";

import { useState, useMemo } from "react";

interface Song {
  title: string;
  artist: string | null;
  notes?: string;
}

interface SongListProps {
  songs: Song[];
  accentColor?: "amber" | "teal";
}

type SortMode = "title" | "artist";

export function SongList({ songs, accentColor = "amber" }: SongListProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortMode>("title");

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let result = songs;

    if (q) {
      result = songs.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          (s.artist && s.artist.toLowerCase().includes(q))
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }
      const aArtist = a.artist || "zzz";
      const bArtist = b.artist || "zzz";
      const artistCmp = aArtist.localeCompare(bArtist);
      if (artistCmp !== 0) return artistCmp;
      return a.title.localeCompare(b.title);
    });
  }, [songs, search, sortBy]);

  const accentRing =
    accentColor === "amber"
      ? "focus:ring-tetris-accent"
      : "focus:ring-nowhere-accent";
  const accentBg =
    accentColor === "amber"
      ? "bg-tetris-accent text-charcoal"
      : "bg-nowhere-accent text-cream";
  const accentBorder =
    accentColor === "amber"
      ? "border-tetris-accent text-tetris-accent"
      : "border-nowhere-accent text-nowhere-accent";

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-gray"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="search"
            placeholder="Search songs or artists…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border border-charcoal/20 bg-cream text-charcoal placeholder:text-warm-gray/60 focus:outline-none focus:ring-2 ${accentRing} transition-shadow text-sm`}
            aria-label="Search songs"
          />
        </div>
        <div className="flex gap-2" role="group" aria-label="Sort options">
          <button
            onClick={() => setSortBy("title")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
              sortBy === "title"
                ? `${accentBg} border-transparent`
                : `${accentBorder} bg-transparent hover:bg-charcoal/5`
            }`}
            aria-pressed={sortBy === "title"}
          >
            A–Z Title
          </button>
          <button
            onClick={() => setSortBy("artist")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
              sortBy === "artist"
                ? `${accentBg} border-transparent`
                : `${accentBorder} bg-transparent hover:bg-charcoal/5`
            }`}
            aria-pressed={sortBy === "artist"}
          >
            By Artist
          </button>
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-warm-gray mb-4">
        {filtered.length} {filtered.length === 1 ? "song" : "songs"}
        {search && ` matching "${search}"`}
      </p>

      {/* Song grid */}
      {filtered.length === 0 ? (
        <p className="text-warm-gray text-center py-8">
          No songs found. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
          {filtered.map((song, i) => (
            <div
              key={`${song.title}-${song.artist}-${i}`}
              className="flex items-baseline justify-between py-2.5 border-b border-charcoal/10 group"
            >
              <div className="min-w-0 flex-1">
                <span className="font-medium text-charcoal">
                  {song.title}
                </span>
                {song.notes && (
                  <span
                    className="ml-1.5 text-xs text-warm-gray/70 italic"
                    title={song.notes}
                  >
                    {song.notes}
                  </span>
                )}
              </div>
              <span className="text-sm text-warm-gray ml-3 shrink-0">
                {song.artist || "—"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
