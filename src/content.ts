/**
 * ============================================================
 *  SITE CONTENT — Edit all website text here
 * ============================================================
 *
 *  This file contains every piece of user-facing text on the
 *  site. To change wording, update the strings below and
 *  redeploy. No other files need to be touched for text edits.
 *
 *  For song lists  → edit src/data/songlists.tetris.json
 *                     and src/data/songlists.nowhere.json
 *  For show dates  → edit src/data/shows.json
 *  For photos      → add images to public/images/tetris-lounge/
 *                     and public/images/nowhere-men/
 * ============================================================
 */

// ─── Band Info (shared across pages) ───────────────────────

export const band = {
  name: "Tetris Lounge / Nowhere Men",
  tagline: "Two Acts, One Band",
  email: "thenowheremenatl@gmail.com",
  description:
    "Two acts, one band. Classic rock covers and a high-fidelity Beatles tribute.",
  genres: ["Classic Rock", "Rock", "Beatles Tribute"],

  members: [
    { name: "John Boyden", role: "Drums" },
    { name: "Dave Deckebach", role: "Keyboard" },
    { name: "Jim Emshoff", role: "Keyboard" },
    { name: "Kelly Ferguson", role: "Guitar & Saxophone" },
    { name: "David Kinard", role: "Bass" },
    { name: "Jack Reed", role: "Guitar" },
  ],

  social: {
    tetrisFacebook: "https://www.facebook.com/tetrislounge",
    nowhereFacebook:
      "https://www.facebook.com/profile.php?id=100090113956795",
  },
};

// ─── Navigation ────────────────────────────────────────────

export const nav = {
  links: [
    { href: "/", label: "Home" },
    { href: "/tetris-lounge", label: "Tetris Lounge" },
    { href: "/nowhere-men", label: "Nowhere Men" },
    { href: "/media", label: "Media" },
    { href: "/contact", label: "Contact" },
  ],
};

// ─── Home Page ─────────────────────────────────────────────

export const home = {
  hero: {
    subtitle: "Two Acts, One Band",
    title: "Tetris Lounge / Nowhere Men",
    description:
      "From timeless rock anthems to pitch-perfect Beatles harmonies, we bring two distinct live experiences to your stage.",
    ctaText: "Check Availability",
  },

  twoShows: {
    heading: "Two Shows. One Band.",
    description:
      "Whether you want a high-energy classic rock night or an immersive Beatles experience, we deliver both — with the same versatile group of musicians.",
    tetris: {
      tagline: "Classic Rock Covers",
      description:
        "The best of the 60s, 70s, and 80s. From Steely Dan to Led Zeppelin, Talking Heads to Prince, Tetris Lounge offers a deep setlist that keeps the crowd moving.",
    },
    nowhere: {
      tagline: "Beatles Tribute",
      description:
        "High-fidelity Beatles covers performed with precision, including later-era songs the Beatles themselves never performed live.",
    },
  },

  whatWePlay: {
    heading: "What We Play",
    description:
      "Over 125 songs across both acts, carefully arranged and rehearsed. Every set is tailored to the occasion.",
    tetris: {
      heading: "Tetris Lounge",
      description:
        "Rock, soul, funk, new wave, and more. Artists include Neil Young, Steely Dan, Talking Heads, Prince, The Doors, Sly & The Family Stone, Led Zeppelin, and more.",
    },
    nowhere: {
      heading: "Nowhere Men",
      description:
        "The full Beatles catalog, from early hits like Love Me Do and I Want To Hold Your Hand to Abbey Road deep cuts and the complete B-side medley.",
    },
  },

  meetTheBand: {
    heading: "Meet the Band",
    description: "Six musicians with a shared love for the music that matters.",
  },

  onStage: {
    heading: "On Stage",
    description:
      "See the band in action — performance clips, photos, and more.",
    ctaText: "Photos & Video",
  },

  cta: {
    heading: "Ready to Book?",
    description:
      "Whether it's a private event, festival, or venue night, we'll bring the right show to your stage.",
    primaryCta: "Check Availability",
  },
};

// ─── Tetris Lounge Page ────────────────────────────────────

export const tetrisLounge = {
  meta: {
    title: "Tetris Lounge — Classic Rock Covers from the 60s, 70s & 80s",
    description:
      "Tetris Lounge plays classic rock covers spanning the 60s, 70s, and 80s — from Steely Dan and Led Zeppelin to Talking Heads and Prince. Browse our full setlist and book us for your next event.",
    ogTitle: "Tetris Lounge — Classic Rock Covers",
    ogDescription:
      "The best of the 60s, 70s, and 80s performed live. Browse our setlist of 75+ songs.",
  },

  hero: {
    subtitle: "Classic Rock Covers",
    title: "Tetris Lounge",
    description:
      "The 60s, 70s, and 80s — performed live with energy, feel, and respect for the originals. Rock, soul, funk, new wave, and everything in between.",
    ctaText: "Book Tetris Lounge",
  },

  positioning: {
    heading: "Classic Rock, Performed Live",
    paragraphs: [
      "From Steely Dan to Led Zeppelin, Talking Heads to Prince — Tetris Lounge delivers a deep, curated setlist that spans the best of the 60s, 70s, and 80s. Every song is arranged with energy, feel, and respect for the originals.",
      "Whether it's a laid-back evening or a high-energy party, the band brings rock, soul, funk, new wave, and everything in between — tailored to your event and your crowd.",
    ],
    features: [
      "Deep, curated setlist",
      "Rock, soul, funk & new wave",
      "Songs from the 60s, 70s & 80s",
      "High-energy live performances",
      "Tailored sets for any event",
      "Tight, versatile musicianship",
    ],
  },

  setlist: {
    heading: "The Setlist",
    // Note: the song count is auto-inserted from the data file
    description: "songs and counting. Search by title or artist.",
  },

  photos: {
    heading: "Photos",
    images: [
      "/images/tetris-lounge/Tetris Lounge Downtown 2.jpg",
      "/images/tetris-lounge/TL pool party.jpg"
    ],
  },

  cta: {
    heading: "Book Tetris Lounge",
    description:
      "Bring the classics to your next event. Get in touch and let's find the right setlist for your party.",
    buttonText: "Check Availability",
  },
};

// ─── Nowhere Men Page ──────────────────────────────────────

export const nowhereMen = {
  meta: {
    title: "Nowhere Men — High-Fidelity Beatles Tribute",
    description:
      "Nowhere Men is a high-fidelity Beatles tribute act performing faithful covers of the full Beatles catalog — including later-era songs the Beatles themselves never performed live. Browse our setlist and book the experience.",
    ogTitle: "Nowhere Men — High-Fidelity Beatles Tribute",
    ogDescription:
      "Faithful Beatles covers including songs the Beatles never played live. 50+ songs from the full catalog.",
  },

  hero: {
    subtitle: "High-Fidelity Beatles Tribute",
    title: "Nowhere Men",
    description:
      "Faithful, carefully arranged covers of the Beatles catalog — from the early hits through the studio masterpieces. Including later-era songs the Beatles themselves never performed live.",
    ctaText: "Book Nowhere Men",
  },

  positioning: {
    heading: "The Beatles, Performed Live",
    paragraphs: [
      "The Beatles stopped touring in 1966 — which means some of their greatest music was never performed on stage. The Nowhere Men bring those songs to life alongside the beloved early hits, delivering the full breadth of the catalog in a single show.",
      'From <em>Love Me Do</em> to <em>A Day In The Life</em>, from the energy of <em>Back In The U.S.S.R.</em> to the beauty of <em>Here Comes The Sun</em> — every song is performed with care, tight harmonies, and attention to the arrangements that made them timeless.',
    ],
    features: [
      "High-fidelity arrangements",
      "Full-catalog coverage",
      "Later-era songs performed live",
      "Abbey Road B-side medley",
      "Tight vocal harmonies",
      "Perfect for themed events",
    ],
  },

  meetTheBand: {
    heading: "Meet the Band",
    description:
      "The musicians behind the music.",
    members: [
      {
        name: "Dave Deckebach",
        role: "Keyboard",
        photo: "/images/nowhere-men/Dave Deckebach.jpg",
      },
      {
        name: "Kelly Ferguson",
        role: "Guitar & Saxophone",
      },
      {
        name: "John Boyden",
        role: "Drums",
        photo: "/images/nowhere-men/John Boyden.jpg",
      },
      {
        name: "David Kinard",
        role: "Bass",
        photo: "/images/nowhere-men/David Kinard.jpg",
      },
      {
        name: "Jack Reed",
        role: "Guitar",
        photo: "/images/nowhere-men/Jack Reed.jpg",
      },
      {
        name: "Jim Emshoff",
        role: "Keyboard",
        photo: "/images/nowhere-men/Jim Emshoff.jpg",
      },
    ],
    groupPhoto: {
      src: "/images/nowhere-men/Nowhere Men Fender's Alley.jpg",
      alt: "Nowhere Men performing at Fender's Alley",
    },
  },

  gallery: {
    heading: "Gallery",
    images: [
      "/images/nowhere-men/Nowhere Men Fender's Alley.jpg",
      "/images/nowhere-men/Fender's Alley 2.jpg",
    ],
  },

  setlist: {
    heading: "The Setlist",
    // Note: the song count is auto-inserted from the data file
    description: "songs from across the Beatles catalog. Search by title.",
  },

  cta: {
    heading: "Book Nowhere Men",
    description:
      "Bring the Beatles experience to your next event. Get in touch and let's make it happen.",
    buttonText: "Check Availability",
  },
};

// ─── Shows Page ────────────────────────────────────────────

export const shows = {
  meta: {
    title: "Shows",
    description:
      "See upcoming shows and public dates for Tetris Lounge and Nowhere Men. Contact us to book the band for your next event.",
  },

  hero: {
    subtitle: "Live Dates",
    title: "Shows",
    description:
      "Catch us live. Public shows are listed below — for private events, get in touch.",
  },

  empty: {
    heading: "No Public Dates Posted",
    description:
      "We're always playing — just not always publicly listed. Contact us for availability.",
    buttonText: "Check Availability",
  },
};

// ─── Media Page ────────────────────────────────────────────

export const media = {
  meta: {
    title: "Media",
    description:
      "Videos of Tetris Lounge and Nowhere Men. See the band in action and get a feel for the live experience.",
  },

  hero: {
    subtitle: "Video",
    title: "Media",
    description: "See the band in action. Watch performance clips and highlights.",
  },

  tetrisVideos: {
    heading: "Tetris Lounge Videos",
    description: "Performance clips and highlights.",
    videos: [
      { youtubeId: "i9wT--wWbg0", title: "Take Me To The River" },
      { youtubeId: "zUKSy5ViM0M", title: "One Of These Nights" },
    ],
  },

  nowhereVideos: {
    heading: "Nowhere Men Videos",
    description: "Beatles tribute performances.",
    videos: [
      { youtubeId: "3QjqXBrRgkk", title: "Golden Slumbers" },
      { youtubeId: "qKSFjA6J4ak", title: "While My Guitar Gently Weeps" },
      { youtubeId: "2JIe5-j3A5A", title: "Got To Get You Into My Life" },
      { youtubeId: "HutmRZnRN50", title: "Nowhere Man" },
      { youtubeId: "F-OVuhXJGvM", title: "The End" },
    ],
  },
};

// ─── Contact Page ──────────────────────────────────────────

export const contact = {
  meta: {
    title: "Contact & Booking",
    description:
      "Book Tetris Lounge or Nowhere Men for your next event. Fill out our booking form and we'll be in touch.",
  },

  hero: {
    subtitle: "Get in Touch",
    title: "Book the Band",
    description:
      "Interested in Tetris Lounge, Nowhere Men, or both? Fill out the form below and we'll get back to you.",
  },

  greatFit: {
    heading: "A Great Fit For",
    items: [
      "Private parties & celebrations",
      "Fundraisers & benefits",
      "Outdoor festivals & concerts",
      "Bars & restaurants",
      "Corporate events",
    ],
  },

  form: {
    sendButton: "Send Inquiry",
    sendingButton: "Sending\u2026",
    privacyNote: "Your information is used only to respond to your inquiry.",
    successHeading: "Inquiry Received",
    successMessage: "Thanks for reaching out. We'll be in touch.",
    successRetry: "Send another inquiry",
    fallbackHeading: "Opening Your Email Client",
    fallbackMessage:
      "Your email app should have opened with the inquiry details pre-filled. If it didn't, you can email us directly at",
    fallbackRetry: "Try the form again",
    errorMessage:
      "Something went wrong. Please try again, or email us directly at",
  },
};

// ─── 404 Page ──────────────────────────────────────────────

export const notFound = {
  heading: "Page Not Found",
  description:
    "Looks like this page took an unexpected solo. Let's get you back to the main stage.",
  buttonText: "Back to Home",
};

// ─── Footer ────────────────────────────────────────────────

export const footer = {
  description:
    "Two acts, one band. Classic rock covers and a high-fidelity Beatles tribute.",
  bandHeading: "The Band",
  linksHeading: "Quick Links",
  socialHeading: "Follow Us",
  quickLinks: [
    { href: "/contact", label: "Book Us" },
    { href: "/media", label: "Video" },
  ],
};

// ─── SEO / Schema.org ──────────────────────────────────────

export const seo = {
  siteTitle: "Tetris Lounge / Nowhere Men — Two Acts, One Band",
  titleTemplate: "%s | Tetris Lounge / Nowhere Men",
  siteDescription:
    "Tetris Lounge delivers classic rock covers from the 60s, 70s, and 80s. Nowhere Men is a high-fidelity Beatles tribute featuring songs the Beatles never played live. Two acts, one incredible band.",
  ogDescription:
    "Classic rock covers and a high-fidelity Beatles tribute. Two acts, one incredible band available for your next event.",
  schemaDescription:
    "Two acts, one band. Tetris Lounge performs classic rock covers from the 60s, 70s, and 80s. Nowhere Men is a high-fidelity Beatles tribute act.",
};
