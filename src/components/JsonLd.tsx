import { band, seo } from "@/content";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: band.name,
    description: seo.schemaDescription,
    genre: band.genres,
    member: band.members.map((m) => ({
      "@type": "Person",
      name: m.name,
      roleName: m.role,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
