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
    id: "fenders-alley-sold-out",
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
    id: "fenders-alley-intricate-details",
    act: "nowhere-men",
    quote:
      "These guys studied the intricate details of The Beatles recordings, and they did an amazing job delivering a true Beatles fan experience.",
    sourceName: "Robert Fortin",
    sourceTitle: "Talent Buyer",
    sourceOrg: "Fenders Alley",
    sourceLocation: "Cornelia, GA",
    date: "May 16, 2023",
    fullImagePath: "/testimonials/fenders-alley-robert-fortin-2023-05-16.png",
  },
  {
    id: "fenders-alley-professional",
    act: "nowhere-men",
    quote:
      "An extremely professional, highly entertaining performance. I received numerous positive comments from our customers on how much they enjoyed the show.",
    sourceName: "Robert Fortin",
    sourceTitle: "Talent Buyer",
    sourceOrg: "Fenders Alley",
    sourceLocation: "Cornelia, GA",
    date: "May 16, 2023",
    fullImagePath: "/testimonials/fenders-alley-robert-fortin-2023-05-16.png",
  },
];

export default testimonials;
