'use client'

import { LanguageProvider, useLanguage } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";

function PrivacyContent() {
  const { t } = useLanguage()

  const sections = [
    { title: t.collectTitle, text: t.collectText },
    { title: t.whyTitle, text: t.whyText },
    { title: t.keepTitle, text: t.keepText },
    { title: t.rightsTitle, text: t.rightsText },
    { title: t.contactTitle, text: t.contactText },
  ]

  return (
    <>
      <Navbar />
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "80px 24px" }}>
          <h1 style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-1px", margin: "0 0 8px 0", color: "#000" }}>
            {t.privacyHeadline}
          </h1>
          <p style={{ fontSize: "13px", color: "#aaa", margin: "0 0 56px 0" }}>{t.lastUpdated}</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map((s) => (
              <div key={s.title}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, color: "#000", margin: "0 0 8px 0" }}>{s.title}</h2>
                <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  )
}
