import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Electronic Press Kit — Tetris Lounge / Nowhere Men";
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
          background: "linear-gradient(180deg, #FBF4E8 0%, #F5ECDC 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 80,
            height: 4,
            background: "#2D6F73",
            marginBottom: 32,
          }}
        />
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#1A2430",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Electronic Press Kit
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#556270",
            marginBottom: 8,
          }}
        >
          Tetris Lounge / Nowhere Men
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(26,36,48,0.5)",
            marginTop: 16,
          }}
        >
          Two acts, one band
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(26,36,48,0.5)",
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
