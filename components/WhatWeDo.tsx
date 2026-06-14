'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function WhatWeDo() {
  const { t } = useLanguage()

  return (
    <section
      className="section-pad what-we-do-section"
      style={{ background: "#fff", display: "flex", justifyContent: "center" }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        <h2
          className="what-we-do-h2"
          style={{
            fontSize: "44px",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: "0 0 36px 0",
          }}
        >
          {t.whatHeadline}
        </h2>

        <p
          style={{
            color: "#6B6B6B",
            fontSize: "18px",
            lineHeight: 1.8,
            margin: "0 0 24px 0",
          }}
        >
          {t.whatPara1}
        </p>

        <p style={{ color: "#6B6B6B", fontSize: "18px", lineHeight: 1.8, margin: 0 }}>
          {t.whatPara2}
        </p>
      </div>
    </section>
  )
}
