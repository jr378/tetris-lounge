/**
 * Parses /data/songlist.txt and generates JSON files for each act.
 *
 * Usage: npx tsx scripts/parse-songlist.ts
 *
 * Output:
 *   /src/data/songlists.tetris.json
 *   /src/data/songlists.nowhere.json
 */

import * as fs from "fs";
import * as path from "path";

interface Song {
  title: string;
  artist: string | null;
  notes?: string;
}

const ROOT = path.resolve(__dirname, "..");
const INPUT = path.join(ROOT, "data", "songlist.txt");
const OUT_DIR = path.join(ROOT, "src", "data");

function detectSection(line: string): "nowhere" | "tetris" | null {
  const l = line.toLowerCase().trim().replace(/:$/, "");
  if (/^nowhere\s*men/.test(l)) return "nowhere";
  if (/^tetris\s*lounge/.test(l)) return "tetris";
  return null;
}

function isDivider(line: string): boolean {
  const trimmed = line.trim();
  return /^[-=]{3,}$/.test(trimmed);
}

function isHeaderRow(line: string): boolean {
  const trimmed = line.trim().toLowerCase();
  return trimmed === "title" || trimmed === "artist" || trimmed === "title artist";
}

function extractNotes(text: string): { clean: string; notes: string | undefined } {
  // Look for trailing notes in parentheses that are NOT part of the title/artist
  // e.g., "(capo 2)", "(SAX)", etc.
  // Also handle trailing annotations like "SAX"
  const trailingNotePatterns = [
    /\s+(SAX|KEYS|DRUMS|GUITAR|BASS|CAPO\s*\d+)\s*$/i,
  ];

  let clean = text;
  let notes: string | undefined;

  for (const pattern of trailingNotePatterns) {
    const match = clean.match(pattern);
    if (match) {
      notes = match[1].trim();
      clean = clean.replace(pattern, "").trim();
    }
  }

  return { clean, notes };
}

function extractStarNotes(title: string): { cleanTitle: string; notes: string | undefined } {
  // Handle asterisk annotations like "Because*" or "*The Long One - Abbey Road Side B"
  let cleanTitle = title;
  let notes: string | undefined;

  if (title.startsWith("*")) {
    // Entire line is a note/medley marker, e.g., "*The Long One - Abbey Road Side B"
    cleanTitle = title.slice(1).trim();
    notes = "Part of Abbey Road medley";
  } else if (title.endsWith("*")) {
    cleanTitle = title.slice(0, -1).trim();
    notes = "Part of Abbey Road medley";
  }

  return { cleanTitle, notes };
}

function parseSonglist(text: string): { tetris: Song[]; nowhere: Song[] } {
  const lines = text.split("\n");
  let currentSection: "nowhere" | "tetris" | null = null;

  const tetrisRaw: Song[] = [];
  const nowhereRaw: Song[] = [];

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Check for section header
    const section = detectSection(trimmed);
    if (section) {
      currentSection = section;
      i++;
      continue;
    }

    // Skip empty lines, dividers, header rows
    if (!trimmed || isDivider(trimmed) || isHeaderRow(trimmed)) {
      i++;
      continue;
    }

    if (!currentSection) {
      i++;
      continue;
    }

    // Try to parse: the format is alternating Title / Artist lines
    // Check if next non-empty line looks like an artist
    const titleLine = trimmed;
    let artistLine: string | null = null;

    // Look ahead for the artist line
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === "") {
      j++;
    }

    if (j < lines.length) {
      const nextTrimmed = lines[j].trim();
      // The next line is an artist if it's NOT a section header, NOT a divider,
      // NOT a header row, and the line after it is either empty, another title, or section header
      if (
        !detectSection(nextTrimmed) &&
        !isDivider(nextTrimmed) &&
        !isHeaderRow(nextTrimmed)
      ) {
        artistLine = nextTrimmed;
        i = j + 1;
      } else {
        i++;
      }
    } else {
      i++;
    }

    // Process the title and artist
    let { clean: title, notes: titleNotes } = extractNotes(titleLine);
    const { cleanTitle, notes: starNotes } = extractStarNotes(title);
    title = cleanTitle;

    let artist: string | null = artistLine;
    let artistNotes: string | undefined;
    if (artist) {
      const extracted = extractNotes(artist);
      artist = extracted.clean || null;
      artistNotes = extracted.notes;
    }

    const notes = [starNotes, titleNotes, artistNotes].filter(Boolean).join("; ") || undefined;

    const song: Song = { title, artist, ...(notes ? { notes } : {}) };
    const target = currentSection === "tetris" ? tetrisRaw : nowhereRaw;
    target.push(song);
  }

  // Deduplicate
  function dedup(songs: Song[]): Song[] {
    const seen = new Set<string>();
    return songs.filter((s) => {
      const key = `${s.title.toLowerCase()}|${(s.artist || "").toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  return { tetris: dedup(tetrisRaw), nowhere: dedup(nowhereRaw) };
}

// Main
const text = fs.readFileSync(INPUT, "utf-8");
const { tetris, nowhere } = parseSonglist(text);

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(OUT_DIR, "songlists.tetris.json"),
  JSON.stringify(tetris, null, 2) + "\n"
);
fs.writeFileSync(
  path.join(OUT_DIR, "songlists.nowhere.json"),
  JSON.stringify(nowhere, null, 2) + "\n"
);

console.log(`✓ Tetris Lounge: ${tetris.length} songs`);
console.log(`✓ Nowhere Men:   ${nowhere.length} songs`);
console.log(`✓ Output written to ${OUT_DIR}`);
