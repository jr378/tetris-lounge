import Image from "next/image";
import Link from "next/link";

const posters = [
  { src: "/posters/poster-01.svg", caption: "Sample Poster" },
  { src: "/posters/poster-02.svg", caption: "Sample Poster" },
  { src: "/posters/poster-03.svg", caption: "Sample Poster" },
  { src: "/posters/poster-04.svg", caption: "Sample Poster" },
];

export function PosterWall() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {posters.map((poster) => (
        <Link
          key={poster.src}
          href="/media"
          className="group block rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
        >
          <Image
            src={poster.src}
            alt={poster.caption}
            width={400}
            height={560}
            className="w-full h-auto"
          />
          <div className="py-2 text-center">
            <span className="text-muted-on-ink text-xs group-hover:text-accent transition-colors">
              {poster.caption}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
