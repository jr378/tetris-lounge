import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tetris Lounge / Nowhere Men",
    short_name: "Tetris Lounge",
    description:
      "Two acts, one band. Classic rock covers and a high-fidelity Beatles tribute.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5ECDC",
    theme_color: "#F5ECDC",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
