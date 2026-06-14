'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function GardenImage() {
  const { t } = useLanguage()

  return (
    <div className="garden-wrap" style={{ position: "relative", width: "100%", height: "100vh" }}>
      <img
        src="/garden.jpg"
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          display: "block",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at top right, rgba(0,0,0,0.35) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="garden-text-container"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: "48px",
          textAlign: "right",
        }}
      >
        <p
          className="garden-text"
          style={{
            color: "#fff",
            fontSize: "32px",
            fontWeight: 300,
            fontStyle: "italic",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {t.gardenText}
        </p>
      </div>
    </div>
  )
}
