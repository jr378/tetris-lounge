import Image from "next/image";

const posters = [
  {
    name: "Nowhere Men at Inman Park Festival",
    image: "/images/Nowhere Men at IPF poster.png",
    url: "https://inmanparkfestival.org",
    width: 1054,
    height: 1492,
  },
  {
    name: "Tetris Lounge at Halfway Crooks Beer",
    image: "/images/Halfway Crooks poster.png",
    url: "https://halfwaycrooks.com",
    width: 1053,
    height: 1494,
  },
];

export function VenueLogos() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 max-w-3xl mx-auto">
        {posters.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl overflow-hidden border border-border bg-surface shadow-sm hover:shadow-md hover:-translate-y-px transition-all duration-300"
            title={p.name}
          >
            <Image
              src={p.image}
              alt={p.name}
              width={p.width}
              height={p.height}
              className="w-full h-auto"
              sizes="(max-width: 640px) 90vw, 360px"
            />
          </a>
        ))}
      </div>
      <p className="text-center text-muted/40 text-[10px] mt-6">
        Posters are property of their respective venues and festivals.
      </p>
    </div>
  );
}
