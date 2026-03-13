import Image from "next/image";

const venues = [
  {
    name: "Halfway Crooks Beer",
    logo: "/logos/halfway-crooks.svg",
    url: "https://halfwaycrooks.com",
    width: 180,
    height: 50,
  },
  {
    name: "Inman Park Festival",
    logo: "/logos/inman-park-festival.png",
    url: "https://inmanparkfestival.org",
    width: 180,
    height: 100,
  },
  {
    name: "Fenders Alley",
    logo: "/logos/fenders-alley.svg",
    url: "https://www.facebook.com/fendersalley",
    width: 140,
    height: 50,
  },
];

export function VenueLogos() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-14">
        {venues.map((v) => (
          <a
            key={v.name}
            href={v.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center h-12 sm:h-14 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            title={v.name}
          >
            <Image
              src={v.logo}
              alt={v.name}
              width={v.width}
              height={v.height}
              className="h-full w-auto object-contain"
            />
          </a>
        ))}
      </div>
      <p className="text-center text-muted/40 text-[10px] mt-6">
        Logos are trademarks of their respective owners.
      </p>
    </div>
  );
}
