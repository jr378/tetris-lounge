import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nowhere Men — High-Fidelity Beatles Tribute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, #0E1A24 0%, #142536 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            background: "#B35A2A",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#F3EFE6",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Nowhere Men
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(243,239,230,0.78)",
            marginBottom: 8,
          }}
        >
          High-Fidelity Beatles Tribute
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(243,239,230,0.5)",
            marginTop: 16,
          }}
        >
          Two acts, one band
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(243,239,230,0.5)",
            marginTop: "auto",
          }}
        >
          tetrislounge.com
        </div>
      </div>
    ),
    { ...size }
  );
}
