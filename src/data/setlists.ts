export interface Setlist {
  id: string;
  act: "tetris-lounge" | "nowhere-men";
  title: string;
  date: string;
  venue: string;
  location: string;
  songs: string[];
}

const setlists: Setlist[] = [
  {
    id: "nowhere-men-inman-park-2025",
    act: "nowhere-men",
    title: "Inman Park Festival 2025",
    date: "2025-04-26",
    venue: "Inman Park Festival",
    location: "Atlanta, GA",
    songs: [
      "Sgt. Pepper's",
      "Penny Lane",
      "Saw Her Standing There",
      "Don't Let Me Down",
      "Revolution",
      "We Can Work It Out",
      "A Day in the Life",
      "Back in the USSR",
      "Drive My Car",
      "I Am the Walrus",
      "And Your Bird Can Sing",
      "Nowhere Man",
      "Got to Get You Into My Life",
      "While My Guitar Gently Weeps",
      "Golden Slumbers Medley",
    ],
  },
  {
    id: "tetris-lounge-halfway-crooks-set1",
    act: "tetris-lounge",
    title: "Halfway Crooks Oktoberfest – Set 1",
    date: "2023-10-01",
    venue: "Halfway Crooks Beer",
    location: "Atlanta, GA",
    songs: [
      "I Won't Back Down",
      "Do It Again",
      "Black Magic Woman",
      "Year of the Cat",
      "Cinnamon Girl",
      "Baker Street",
      "Love Train",
      "Friday, I'm in Love",
      "Lovely Day",
      "Rikki Don't Lose That Number",
    ],
  },
  {
    id: "tetris-lounge-halfway-crooks-set2",
    act: "tetris-lounge",
    title: "Halfway Crooks Oktoberfest – Set 2",
    date: "2023-10-01",
    venue: "Halfway Crooks Beer",
    location: "Atlanta, GA",
    songs: [
      "One of These Nights",
      "American Woman",
      "Nights on Broadway",
      "You May Be Right",
      "Spanish Moon",
      "Third Rate Romance",
      "Take Me to the River",
      "Come Together",
      "Hold Me Now",
      "And She Was",
    ],
  },
];

export default setlists;
