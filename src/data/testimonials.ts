export interface Testimonial {
  id: string;
  act: "nowhere-men" | "tetris-lounge" | "both";
  quote: string;
  sourceName: string;
  sourceTitle?: string;
  sourceOrg?: string;
  sourceLocation?: string;
  date?: string;
  fullImagePath?: string;
  /** Label shown on featured cards (e.g. "Venue Endorsement") */
  label?: string;
  /** Whether this is a featured/verified testimonial with a full letter */
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: "fenders-alley-robert-fortin-2023",
    act: "nowhere-men",
    quote:
      "Our entire venue was sold out for this show with standing room only. The Nowhere Men had our audience completely engaged from their first song until the encore.",
    sourceName: "Robert Fortin",
    sourceTitle: "Talent Buyer",
    sourceOrg: "Fenders Alley",
    sourceLocation: "Cornelia, GA",
    date: "May 16, 2023",
    fullImagePath: "/testimonials/fenders-alley-robert-fortin-2023-05-16.png",
    label: "Venue Endorsement",
    featured: true,
  },
  {
    id: "private-event-host",
    act: "both",
    quote:
      "These guys absolutely killed it at our event. The energy was incredible from start to finish.",
    sourceName: "Private Event Host",
  },
  {
    id: "venue-manager",
    act: "nowhere-men",
    quote:
      "Best Beatles tribute I've heard. The harmonies and arrangements are spot-on — you'd think you were hearing the real thing.",
    sourceName: "Venue Manager",
  },
  {
    id: "festival-organizer",
    act: "both",
    quote:
      "We've had them back three times now. The crowd loves them every single time.",
    sourceName: "Festival Organizer",
  },
];

export default testimonials;

/** Additional short excerpts from the Fenders Alley letter for variety */
export const fendersAlleyExcerpts = [
  "Studied the intricate details of The Beatles recordings, and they did an amazing job delivering a true Beatles fan experience.",
  "An extremely professional, highly entertaining performance.",
];
