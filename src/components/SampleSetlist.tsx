import type { Setlist } from "@/data/setlists";

interface SampleSetlistProps {
  setlist: Setlist;
  /** Collapsed by default (for EPK accordion style) */
  collapsed?: boolean;
}

export function SampleSetlist({ setlist }: SampleSetlistProps) {
  const dateStr = new Date(setlist.date + "T12:00:00").toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="rounded-xl border border-border bg-surface p-5 sm:p-6 card-hover">
      <div className="mb-4">
        <h4 className="font-[family-name:var(--font-display)] text-lg font-semibold text-text">
          {setlist.title}
        </h4>
        <p className="text-muted text-xs mt-0.5">
          {setlist.venue} · {setlist.location} · {dateStr}
        </p>
      </div>
      <ol className="space-y-1 text-sm">
        {setlist.songs.map((song, i) => (
          <li
            key={song}
            className="flex items-baseline gap-3 border-b border-border/50 pb-1 last:border-0"
          >
            <span className="text-muted/50 text-xs font-mono w-5 text-right shrink-0">
              {i + 1}
            </span>
            <span className="text-text">{song}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
