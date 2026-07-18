'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function ProductGetStarted() {
  const { t } = useLanguage()
  return (
    <div style={{ textAlign: "center", padding: "0 48px 100px" }}>
      <a
        href="/book-intro"
        style={{
          display: "inline-block",
          background: "#04D8B5",
          color: "#000",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: 600,
          borderRadius: "100px",
          padding: "12px 24px",
        }}
      >
        {t.getStartedFree}
      </a>
    </div>
  )
}
