'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function HomeCTA() {
  const { t } = useLanguage()
  return (
    <div className="home-cta-section" style={{ textAlign: "center", padding: "80px 48px 100px" }}>
      <a
        href="/product"
        className="home-cta-btn"
        style={{
          display: "inline-block",
          background: "#fff",
          color: "#0A0A0A",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: 500,
          borderRadius: "999px",
          padding: "14px 32px",
          border: "1px solid #1A1A1A",
        }}
      >
        {t.homeCta}
      </a>
    </div>
  )
}
