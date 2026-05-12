export interface Testimonial {
  id: string;
  act: "nowhere-men" | "tetris-lounge" | "both";
  quote: string;
  /** Optional shorter pull-quote for use on the home page */
  quoteShort?: string;
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
    id: "fenders-alley-robert-fortin",
    act: "nowhere-men",
    quote:
      "Our entire venue was sold out for this show with standing room only. The Nowhere Men had our audience completely engaged from their first song until the encore. These guys studied the intricate details of The Beatles recordings, and they did an amazing job delivering a true Beatles fan experience. An extremely professional, highly entertaining performance. I received numerous positive comments from our customers on how much they enjoyed the show.",
    quoteShort:
      "Our entire venue was sold out for this show with standing room only. The Nowhere Men had our audience completely engaged from their first song until the encore.",
    sourceName: "Robert Fortin",
    sourceTitle: "Talent Buyer",
    sourceOrg: "Fenders Alley",
    sourceLocation: "Cornelia, GA",
    date: "May 16, 2023",
    fullImagePath: "/testimonials/fenders-alley-robert-fortin-2023-05-16.png",
    label: "Nowhere Men — Venue Endorsement",
    featured: true,
  },
  {
    id: "inman-park-festival-bradley-cole-smith",
    act: "nowhere-men",
    quote:
      "IPF takes pride in providing the best music experiences for our festival guests. Everyone loves the Beatles and the Nowhere Men do an excellent job of recreating their music from all albums and eras. Tight and faithful renderings pleased the packed crowd - which led us to invite them back for a second successful year. We would be happy to book them again - we highly recommend them.",
    quoteShort:
      "The Nowhere Men do an excellent job of recreating their music from all albums and eras. Tight and faithful renderings pleased the packed crowd - which led us to invite them back for a second successful year.",
    sourceName: "Bradley Cole Smith",
    sourceTitle: "Musician and Co-Chair, Music Committee",
    sourceOrg: "Inman Park Festival",
    label: "Nowhere Men — Festival Endorsement",
  },
  {
    id: "private-party-brad-r",
    act: "tetris-lounge",
    quote:
      "The Tetris Lounge played at our house for a client party and I could have not been more impressed. Who says you need a large venue to have a kickin’ show?! They were excellent and their set list was a great mix of favorites both old and new. The band fully engaged with our guests and made the day one we won’t forget. We now live in Connecticut and we need to figure out a way to get the band up here!!",
    quoteShort:
      "The Tetris Lounge played at our house for a client party and I could have not been more impressed. Who says you need a large venue to have a kickin’ show?!",
    sourceName: "Brad R.",
    sourceTitle: "Private Party Host",
    sourceLocation: "Atlanta, GA",
    date: "June 2022",
    label: "Tetris Lounge — Private Party",
  },
];

export default testimonials;
