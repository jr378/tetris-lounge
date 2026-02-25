import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Tetris Lounge / Nowhere Men — Two Acts, One Band",
    template: "%s | Tetris Lounge / Nowhere Men",
  },
  description:
    "Tetris Lounge delivers classic rock covers from the 60s, 70s, and 80s. Nowhere Men is a high-fidelity Beatles tribute featuring songs the Beatles never played live. Two acts, one incredible band.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Tetris Lounge / Nowhere Men",
    title: "Tetris Lounge / Nowhere Men — Two Acts, One Band",
    description:
      "Classic rock covers and a high-fidelity Beatles tribute. Two acts, one incredible band available for your next event.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <JsonLd />
      </head>
      <body className="grain-overlay min-h-screen flex flex-col">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Nav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
