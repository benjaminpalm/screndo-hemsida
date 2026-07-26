'use client'

import { useRef, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const imgRef = useRef<HTMLImageElement>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    function update() {
      rafRef.current = null
      if (!imgRef.current) return
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.2), 1)
      imgRef.current.style.transform = `scale(${1 + 0.08 * progress})`
    }

    function onScroll() {
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(update)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

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
            className="hero-subline"
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
              href="/product"
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

      <div className="hero-image-wrap" style={{ position: "relative", width: "100%", height: "auto", minHeight: "100vh", overflow: "hidden" }}>
        <img
          ref={imgRef}
          src="/macdashboard.png"
          alt="Hero"
          style={{
            width: "100%",
            height: "auto",
            minHeight: "100vh",
            objectFit: "cover",
            objectPosition: "center center",
            display: "block",
            transformOrigin: "center center",
          }}
        />
      </div>
    </>
  )
}
