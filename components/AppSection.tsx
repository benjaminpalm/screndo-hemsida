'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function AppSection() {
  const { t } = useLanguage()

  return (
    <section className="product-feature-section" style={{ background: "#fff", padding: "120px 48px" }}>
      <div className="product-feature-inner" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", alignItems: "center", gap: "80px" }}>
        {/* Left column */}
        <div className="product-feature-text" style={{ flex: 1 }}>
          <p style={{ fontSize: "13px", fontWeight: 600, letterSpacing: "1.5px", color: "#04D8B5", textTransform: "uppercase", margin: "0 0 16px 0" }}>
            {t.appLabel}
          </p>
          <h2 className="product-feature-h2" style={{ fontSize: "40px", fontWeight: 700, letterSpacing: "-1.5px", color: "#0A0A0A", lineHeight: 1.15, margin: "0 0 20px 0" }}>
            {t.appHeadline}
          </h2>
          <p style={{ color: "#6B6B6B", fontSize: "17px", lineHeight: 1.8, margin: 0 }}>
            {t.appParagraph}
          </p>
        </div>

        {/* Right column */}
        <div className="product-feature-image" style={{ flex: 1 }}>
          <img
            src="/screndoiphone.png"
            alt=""
            className="product-iphone-img"
            style={{ width: "100%", maxWidth: "420px", marginLeft: "auto", marginRight: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  )
}
