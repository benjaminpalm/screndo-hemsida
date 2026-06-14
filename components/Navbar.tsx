'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, setLanguage } = useLanguage()

  return (
    <nav
      className="navbar"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "64px",
        background: "#fff",
        borderBottom: "1px solid #ECECEC",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a href="/"><img src="/logo.png" alt="Screndo" className="navbar-logo" style={{ height: "46px", width: "auto" }} /></a>
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px" }}>
          <button
            onClick={() => setLanguage('sv')}
            style={{ background: "none", border: "none", cursor: lang === 'sv' ? "default" : "pointer", fontFamily: "inherit", fontSize: "13px", padding: 0, color: lang === 'sv' ? "#0A0A0A" : "#6B6B6B", fontWeight: lang === 'sv' ? 600 : 400 }}
          >SV</button>
          <span style={{ color: "#6B6B6B" }}>/</span>
          <button
            onClick={() => setLanguage('en')}
            style={{ background: "none", border: "none", cursor: lang === 'en' ? "default" : "pointer", fontFamily: "inherit", fontSize: "13px", padding: 0, color: lang === 'en' ? "#0A0A0A" : "#6B6B6B", fontWeight: lang === 'en' ? 600 : 400 }}
          >EN</button>
        </div>
        <a
          href="#"
          style={{ color: "#6B6B6B", textDecoration: "none", fontSize: "15px" }}
        >
          {t.login}
        </a>
        <a
          href="/book-intro"
          style={{
            background: "#000",
            color: "#fff",
            textDecoration: "none",
            fontSize: "15px",
            borderRadius: "100px",
            padding: "9px 20px",
            display: "inline-block",
          }}
        >
          {t.bookIntro}
        </a>
      </div>
    </nav>
  )
}
