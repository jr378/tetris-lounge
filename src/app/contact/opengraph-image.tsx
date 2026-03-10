import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Contact & Booking — Tetris Lounge / Nowhere Men";
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
          background: "linear-gradient(180deg, #121417 0%, #1B1F24 100%)",
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
            color: "#F3EFE6",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Book the Band
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(243,239,230,0.78)",
            marginBottom: 8,
          }}
        >
          Tetris Lounge / Nowhere Men
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(243,239,230,0.5)",
            marginTop: "auto",
          }}
        >
          tetrislounge.com/contact
        </div>
      </div>
    ),
    { ...size }
  );
}
