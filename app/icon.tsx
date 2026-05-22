import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4EFE6",
        }}
      >
        <div
          style={{
            display: "flex",
            fontFamily: "sans-serif",
            fontWeight: 700,
            fontSize: 19,
            lineHeight: 1,
            letterSpacing: "-0.5px",
          }}
        >
          <span style={{ color: "#1C1914" }}>E</span>
          <span style={{ color: "#C16B4F" }}>L</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
