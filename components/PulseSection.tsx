'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function PulseSection() {
  const { t } = useLanguage()

  return (
    <section className="product-feature-section" style={{ background: "#fff", padding: "100px 64px" }}>
      <div
        className="product-feature-inner"
        style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", gap: "72px" }}
      >
        {/* Text */}
        <div className="product-feature-text" style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "2px", color: "#04D8B5", textTransform: "uppercase", margin: "0 0 14px 0" }}>
            {t.pulseLabel}
          </p>
          <h2
            className="product-feature-h2"
            style={{ fontSize: "38px", fontWeight: 700, letterSpacing: "-1px", color: "#0A0A0A", lineHeight: 1.15, margin: "0 0 20px 0" }}
          >
            {t.pulseHeadline}
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "17px", lineHeight: 1.8, margin: 0 }}>
            {t.pulseParagraph}
          </p>
        </div>

        {/* Image */}
        <div className="product-feature-image" style={{ flex: 1 }}>
          <div style={{ padding: "28px", background: "#F8F7F4", borderRadius: "20px" }}>
            <img
              src="/svarfrekvensscrendo.jpg"
              alt=""
              style={{ width: "100%", borderRadius: "12px", display: "block" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
