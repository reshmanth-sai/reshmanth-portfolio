import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { profile } from "@/lib/content";

export const alt = `${profile.name}: ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const clash = await readFile(path.join(process.cwd(), "public/fonts/clash-display-600.ttf"));
  const satoshi = await readFile(path.join(process.cwd(), "public/fonts/satoshi-400.ttf"));
  const photo = await readFile(path.join(process.cwd(), "public/reshmanth.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0a0a0b",
          color: "#ededed",
          padding: 72,
          fontFamily: "Satoshi",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(245,185,66,0.16)",
            filter: "blur(120px)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#8a8a93",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#f5b942" }} />
            {profile.status}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Clash", fontSize: 64, lineHeight: 1.05 }}>
            <span>{profile.name}</span>
            <span style={{ color: "#8a8a93" }}>builds AI systems</span>
            <span style={{ color: "#8a8a93", display: "flex" }}>
              you can&nbsp;<span style={{ color: "#f5b942" }}>audit</span>.
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#8a8a93" }}>VIT Chennai, {profile.location}</div>
        </div>
        <div
          style={{
            display: "flex",
            width: 300,
            height: 375,
            marginLeft: "auto",
            borderRadius: 36,
            padding: 10,
            background: "rgba(237,237,237,0.05)",
            border: "1px solid rgba(237,237,237,0.1)",
            transform: "rotate(2deg)",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={280}
            height={355}
            style={{ objectFit: "cover", borderRadius: 26, width: 280, height: 355 }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Clash", data: clash, weight: 600, style: "normal" },
        { name: "Satoshi", data: satoshi, weight: 400, style: "normal" },
      ],
    },
  );
}
