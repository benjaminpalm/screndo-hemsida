'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function CTA() {
  const { t } = useLanguage()

  return (
    <section
      className="section-pad"
      style={{
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2 className="cta-h2">
        {t.ctaHeadline}
      </h2>

      <a
        href="/book-intro"
        style={{
          background: "#04D8B5",
          color: "#000",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "100px",
          padding: "14px 28px",
          display: "inline-block",
        }}
      >
        {t.ctaButton}
      </a>
    </section>
  )
}
