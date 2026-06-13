'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const { t, lang, toggle } = useLanguage()

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
        <button
          onClick={toggle}
          style={{ background: "none", border: "none", cursor: "pointer", color: "#6B6B6B", fontSize: "13px", fontFamily: "inherit", padding: 0 }}
        >
          {lang === 'sv' ? 'EN' : 'SV'}
        </button>
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
