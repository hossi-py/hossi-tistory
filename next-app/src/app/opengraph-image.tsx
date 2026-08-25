import { ImageResponse } from "next/og";

import { PROFILE } from "@/lib/profile";

export const alt = "yoonho.dev — Frontend Developer 황윤호 포트폴리오";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** 히어로가 파티클로 맺어내는 워드마크를 정지 이미지로 옮긴 것. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.12), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: "-0.07em",
            color: "#ffffff",
            display: "flex",
          }}
        >
          yoonho.dev
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.5)",
            display: "flex",
          }}
        >
          {PROFILE.role}
        </div>

        <div
          style={{
            marginTop: 56,
            width: 120,
            height: 1,
            background: "rgba(255,255,255,0.25)",
          }}
        />

        <div
          style={{
            marginTop: 32,
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
            display: "flex",
          }}
        >
          {PROFILE.name} · {PROFILE.company}
        </div>
      </div>
    ),
    size
  );
}
