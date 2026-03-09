"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export type PreferredAct = "tetris" | "nowhere" | null;

const STORAGE_KEY = "preferredAct";

export function usePreferredAct() {
  const [act, setActState] = useState<PreferredAct>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "tetris" || stored === "nowhere") {
      setActState(stored);
    }
  }, []);

  const setAct = (value: PreferredAct) => {
    setActState(value);
    if (value) {
      localStorage.setItem(STORAGE_KEY, value);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return [act, setAct] as const;
}

export function ActSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [preferred, setPreferred] = usePreferredAct();

  // Determine active state from URL or preference
  const isOnTetris = pathname.startsWith("/tetris-lounge");
  const isOnNowhere = pathname.startsWith("/nowhere-men");

  const active: "tetris" | "nowhere" | null = isOnTetris
    ? "tetris"
    : isOnNowhere
      ? "nowhere"
      : preferred;

  const handleClick = (act: "tetris" | "nowhere") => {
    setPreferred(act);
    if (act === "tetris" && !isOnTetris) {
      router.push("/tetris-lounge");
    } else if (act === "nowhere" && !isOnNowhere) {
      router.push("/nowhere-men");
    }
  };

  return (
    <div
      className="hidden md:flex items-center gap-0.5 bg-text-on-ink/[0.06] rounded-lg p-0.5"
      role="group"
      aria-label="Choose act"
    >
      <button
        onClick={() => handleClick("tetris")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          active === "tetris"
            ? "bg-accent text-text-on-ink shadow-sm"
            : "text-text-on-ink/60 hover:text-text-on-ink"
        }`}
        aria-pressed={active === "tetris"}
      >
        Tetris Lounge
      </button>
      <button
        onClick={() => handleClick("nowhere")}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          active === "nowhere"
            ? "bg-accent text-text-on-ink shadow-sm"
            : "text-text-on-ink/60 hover:text-text-on-ink"
        }`}
        aria-pressed={active === "nowhere"}
      >
        Nowhere Men
      </button>
    </div>
  );
}
