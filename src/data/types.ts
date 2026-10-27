export interface Song {
  title: string;
  artist: string;
  notes?: string;
}

export interface Show {
  date: string;
  venue: string;
  location: string;
  act?: string;
  time?: string;
  ticketUrl?: string;
  notes?: string;
  poster?: { src: string; width: number; height: number };
}
