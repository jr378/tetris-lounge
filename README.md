# Tetris Lounge / Nowhere Men — Band Website

A marketing website for **Tetris Lounge** (classic rock covers from the 60s, 70s, and 80s) and **Nowhere Men** (a high-fidelity Beatles tribute act). Built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

```bash
# Install dependencies
npm install

# Generate song list JSON from the plain-text source
npm run build:songlists

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command              | Description                                            |
| -------------------- | ------------------------------------------------------ |
| `npm run dev`        | Start the development server                           |
| `npm run build`      | Build for production (runs songlist parser first)       |
| `npm run start`      | Start the production server                            |
| `npm run build:songlists` | Parse `/data/songlist.txt` → generate JSON files  |

## Project Structure

```
├── data/
│   └── songlist.txt           # Plain-text song list (source of truth)
├── public/
│   └── images/
│       ├── tetris-lounge/     # Photos for Tetris Lounge (tl-01.jpg, tl-02.jpg, …)
│       └── nowhere-men/       # Photos for Nowhere Men (nm-01.jpg, nm-02.jpg, …)
├── scripts/
│   └── parse-songlist.ts      # Song list parser
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Home
│   │   ├── tetris-lounge/     # Tetris Lounge act page
│   │   ├── nowhere-men/       # Nowhere Men act page
│   │   ├── shows/             # Shows listing
│   │   ├── media/             # Photo & video gallery
│   │   ├── contact/           # Booking form
│   │   └── api/contact/       # Contact form API route
│   ├── components/            # Reusable UI components
│   └── data/                  # Generated JSON data
│       ├── songlists.tetris.json
│       ├── songlists.nowhere.json
│       └── shows.json
```

## Updating Song Lists

1. Edit `/data/songlist.txt` — the format is alternating lines of title and artist, grouped under section headers (`Nowhere Men:` and `Tetris Lounge:`).
2. Run the parser:
   ```bash
   npm run build:songlists
   ```
3. The generated JSON files at `/src/data/songlists.*.json` will be updated automatically.

### Supported Formats

The parser handles these song line formats:
- `Song Title` followed by `Artist` on the next line (primary format)
- Asterisk annotations (e.g., `Because*`) are preserved as notes
- Blank lines and divider lines (`---`, `===`) are skipped

## Adding Photos

1. Place image files in the appropriate directory:
   - **Tetris Lounge**: `/public/images/tetris-lounge/tl-01.jpg`, `tl-02.jpg`, etc.
   - **Nowhere Men**: `/public/images/nowhere-men/nm-01.jpg`, `nm-02.jpg`, etc.
2. Use `.jpg` format. Number sequentially with zero-padded two-digit numbers.
3. The gallery components will automatically detect and display images.

## Adding Shows

Edit `/src/data/shows.json` with entries in this format:

```json
[
  {
    "date": "March 15, 2025",
    "venue": "The Venue Name",
    "location": "City, State",
    "act": "Tetris Lounge",
    "time": "8:00 PM",
    "ticketUrl": "https://example.com/tickets",
    "notes": "Optional notes"
  }
]
```

Only `date`, `venue`, and `location` are required. All other fields are optional.

## Adding Videos

To add YouTube or Vimeo videos to the Media page:

1. Open `/src/app/media/page.tsx`
2. Replace the video placeholder `<div>` blocks with iframe embeds:

```tsx
<div className="aspect-video rounded-xl overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full"
  />
</div>
```

## Environment Variables

Copy `.env.example` to `.env.local` only if you need to override defaults:

```bash
cp .env.example .env.local
```

| Variable                   | Required | Description                                                      |
| -------------------------- | -------- | ---------------------------------------------------------------- |
| `NEXT_PUBLIC_FORMSPREE_ID` | optional | Formspree form ID. Defaults to the production form (`mqenkkyv`). Override for staging/forks. |

## Contact Form

The contact form posts directly to [Formspree](https://formspree.io), which delivers booking inquiries to the configured inbox. No API keys or domain verification required — the form ID is the only configuration.

To change the destination inbox, log in to Formspree and update the recipient on the form's settings page. To point at an entirely different form, set `NEXT_PUBLIC_FORMSPREE_ID`.

### Spam protection

1. **Formspree's built-in filtering** — Akismet plus their own heuristics.
2. **Honeypot field** — a hidden `_gotcha` input. Formspree silently drops submissions where it's filled.
3. **Time-to-fill** — client-side gate: forms submitted within 3 seconds of page load fall back to `mailto:` (real users hit "send" later than that).
4. **Network failure fallback** — if Formspree is unreachable, the form opens a pre-filled `mailto:` so the inquiry isn't lost.

## Deployment

This project is Vercel-friendly. Push to your repository and connect it in the Vercel dashboard — it will auto-detect Next.js and deploy.

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- No database required
