import songsData from "@/data/songlists.nowhere.json";
import { PrintButton } from "@/components/PrintButton";
import type { Song } from "@/data/types";

export default function PrintNowhereMen() {
  const songs = songsData as Song[];
  const sorted = [...songs].sort((a, b) => a.title.localeCompare(b.title));
  const mid = Math.ceil(sorted.length / 2);
  const left = sorted.slice(0, mid);
  const right = sorted.slice(mid);

  return (
    <div className="font-[family-name:var(--font-body)] text-text p-10 print:p-5 text-[11px] leading-snug max-w-4xl mx-auto">
      <header className="border-b-2 border-accent pb-3 mb-5">
        <h1 className="font-[family-name:var(--font-display)] text-2xl font-bold">
          Nowhere Men
        </h1>
        <p className="text-muted text-sm mt-0.5">
          High-Fidelity Beatles Tribute — Tetris Lounge / Nowhere Men
        </p>
        <p className="text-muted text-[10px] mt-1">tetrislounge.com</p>
      </header>
      <p className="text-muted text-[11px] mb-4">{sorted.length} songs</p>
      <div className="grid grid-cols-2 gap-x-8">
        <div>
          {left.map((s) => (
            <div
              key={s.title}
              className="flex justify-between py-0.5 border-b border-border"
            >
              <span>
                <span className="font-medium">{s.title}</span>
                {s.notes && (
                  <span className="text-muted/70 italic text-[9px] ml-1">
                    {s.notes}
                  </span>
                )}
              </span>
              <span className="text-muted ml-2 shrink-0">{s.artist || "—"}</span>
            </div>
          ))}
        </div>
        <div>
          {right.map((s) => (
            <div
              key={s.title}
              className="flex justify-between py-0.5 border-b border-border"
            >
              <span>
                <span className="font-medium">{s.title}</span>
                {s.notes && (
                  <span className="text-muted/70 italic text-[9px] ml-1">
                    {s.notes}
                  </span>
                )}
              </span>
              <span className="text-muted ml-2 shrink-0">{s.artist || "—"}</span>
            </div>
          ))}
        </div>
      </div>
      <PrintButton />
    </div>
  );
}
