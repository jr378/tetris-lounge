import { band, seo } from "@/content";

export function JsonLd() {
  const sameAs = [
    band.social.tetrisFacebook,
    band.social.nowhereFacebook,
  ].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: band.name,
    url: "https://tetrislounge.com",
    description: seo.schemaDescription,
    genre: band.genres,
    ...(sameAs.length > 0 && { sameAs }),
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
