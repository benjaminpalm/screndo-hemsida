'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="hero-section"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "96px",
          paddingBottom: "64px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ maxWidth: "860px", width: "100%" }}>
          <h1 className="hero-h1">
            {t.headline}
          </h1>

          <p
            style={{
              color: "#6B6B6B",
              fontSize: "18px",
              fontWeight: 400,
              margin: "0 0 40px 0",
              lineHeight: 1.5,
            }}
          >
            {t.subline}
          </p>

          <div className="hero-buttons">
            <a
              href="/book-intro"
              style={{
                background: "#04D8B5",
                color: "#000",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                borderRadius: "100px",
                padding: "12px 24px",
                display: "inline-block",
              }}
            >
              {t.getStarted}
            </a>
            <a
              href="#"
              style={{
                background: "transparent",
                color: "#000",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 500,
                borderRadius: "100px",
                padding: "12px 24px",
                border: "1px solid #000",
                display: "inline-block",
              }}
            >
              {t.seeHow}
            </a>
          </div>
        </div>
      </section>

      <div className="hero-image-wrap" style={{ position: "relative", width: "100%", height: "100vh" }}>
        <img
          src="/hero.jpg"
          alt="Hero"
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
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div className="hero-overlay">
          <p
            style={{
              color: "#fff",
              fontSize: "36px",
              fontWeight: 300,
              fontStyle: "italic",
              margin: "0 0 10px 0",
              lineHeight: 1.2,
            }}
          >
            {t.overlayTitle}
          </p>
          <p
            style={{
              color: "#fff",
              fontSize: "16px",
              opacity: 0.75,
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {t.overlaySub}
          </p>
        </div>
      </div>
    </>
  )
}
