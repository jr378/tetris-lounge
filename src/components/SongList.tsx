"use client";

import { useState, useMemo } from "react";

interface Song {
  title: string;
  artist: string | null;
  notes?: string;
}

interface SongListProps {
  songs: Song[];
  dark?: boolean;
}

type SortMode = "title" | "artist";

export function SongList({ songs, dark = false }: SongListProps) {
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

  // Colors that adapt to dark/light background
  const titleColor = dark ? "text-text-on-ink" : "text-text";
  const artistColor = dark ? "text-muted-on-ink" : "text-muted";
  const notesColor = dark ? "text-text-on-ink/40" : "text-muted/70";
  const countColor = dark ? "text-text-on-ink/50" : "text-muted";
  const emptyColor = dark ? "text-text-on-ink/50" : "text-muted";
  const borderColor = dark ? "border-border-on-ink" : "border-border";
  const inputBg = dark
    ? "bg-white/10 text-text-on-ink placeholder:text-text-on-ink/40 border-border-on-ink"
    : "bg-cream text-text placeholder:text-muted/60 border-border";
  const inactiveBtnBg = dark ? "hover:bg-white/5" : "hover:bg-ink/5";

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg
            className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${dark ? "text-text-on-ink/40" : "text-muted"}`}
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
            className={`w-full pl-10 pr-4 py-2.5 rounded-lg border ${inputBg} focus:outline-none focus:ring-2 focus:ring-accent transition-shadow text-sm`}
            aria-label="Search songs"
          />
        </div>
        <div className="flex gap-2" role="group" aria-label="Sort options">
          <button
            onClick={() => setSortBy("title")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
              sortBy === "title"
                ? "bg-accent text-text-on-ink border-transparent"
                : `border-accent text-accent bg-transparent ${inactiveBtnBg}`
            }`}
            aria-pressed={sortBy === "title"}
          >
            A–Z Title
          </button>
          <button
            onClick={() => setSortBy("artist")}
            className={`px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
              sortBy === "artist"
                ? "bg-accent text-text-on-ink border-transparent"
                : `border-accent text-accent bg-transparent ${inactiveBtnBg}`
            }`}
            aria-pressed={sortBy === "artist"}
          >
            By Artist
          </button>
        </div>
      </div>

      {/* Count */}
      <p className={`text-sm ${countColor} mb-4`}>
        {filtered.length} {filtered.length === 1 ? "song" : "songs"}
        {search && ` matching "${search}"`}
      </p>

      {/* Song grid — flows vertically down each column */}
      {filtered.length === 0 ? (
        <p className={`${emptyColor} text-center py-8`}>
          No songs found. Try a different search.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {(() => {
            const mid = Math.ceil(filtered.length / 2);
            const leftCol = filtered.slice(0, mid);
            const rightCol = filtered.slice(mid);
            return (
              <>
                <div>
                  {leftCol.map((song) => (
                    <div
                      key={`${song.title}|${song.artist}`}
                      className={`flex items-baseline justify-between py-2.5 border-b ${borderColor}`}
                    >
                      <div className="min-w-0 flex-1">
                        <span className={`font-medium ${titleColor}`}>
                          {song.title}
                        </span>
                        {song.notes && (
                          <span
                            className={`ml-1.5 text-xs ${notesColor} italic`}
                            title={song.notes}
                          >
                            {song.notes}
                          </span>
                        )}
                      </div>
                      <span className={`text-sm ${artistColor} ml-3 shrink-0`}>
                        {song.artist || "—"}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  {rightCol.map((song) => (
                    <div
                      key={`${song.title}|${song.artist}|r`}
                      className={`flex items-baseline justify-between py-2.5 border-b ${borderColor}`}
                    >
                      <div className="min-w-0 flex-1">
                        <span className={`font-medium ${titleColor}`}>
                          {song.title}
                        </span>
                        {song.notes && (
                          <span
                            className={`ml-1.5 text-xs ${notesColor} italic`}
                            title={song.notes}
                          >
                            {song.notes}
                          </span>
                        )}
                      </div>
                      <span className={`text-sm ${artistColor} ml-3 shrink-0`}>
                        {song.artist || "—"}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            );
          })()}
        </div>
      )}
    </div>
  );
}
