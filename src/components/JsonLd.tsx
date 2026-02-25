export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Tetris Lounge / Nowhere Men",
    description:
      "Two acts, one band. Tetris Lounge performs classic rock covers from the 60s, 70s, and 80s. Nowhere Men is a high-fidelity Beatles tribute act.",
    genre: ["Classic Rock", "Rock", "Beatles Tribute"],
    member: [
      {
        "@type": "Person",
        name: "Dave Deckebach",
        roleName: "Keyboard",
      },
      {
        "@type": "Person",
        name: "Kelly Ferguson",
        roleName: "Guitar and Saxophone",
      },
      {
        "@type": "Person",
        name: "John Boyden",
        roleName: "Drums",
      },
      {
        "@type": "Person",
        name: "David Kinard",
        roleName: "Bass",
      },
      {
        "@type": "Person",
        name: "Jack Reed",
        roleName: "Guitar",
      },
      {
        "@type": "Person",
        name: "Jim Emshoff",
        roleName: "Keyboard",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
