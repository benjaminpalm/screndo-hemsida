'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, setLanguage } = useLanguage()
  const [dropOpen, setDropOpen] = useState(false)

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
      {/* Left: logo + nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
        <a href="/"><img src="/logo2.png" alt="Screndo" className="navbar-logo" style={{ height: "46px", width: "auto" }} /></a>

        {/* Produkter dropdown */}
        <div
          style={{ position: "relative", display: "flex", alignItems: "center" }}
          onMouseEnter={() => setDropOpen(true)}
          onMouseLeave={() => setDropOpen(false)}
        >
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: "15px",
              color: "#000",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: 0,
            }}
          >
            Produkter
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transition: "transform 150ms",
                transform: dropOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {dropOpen && (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                height: "8px",
              }}
            />
          )}
          {dropOpen && (
            <div
              style={{
                position: "absolute",
                top: "calc(100% + 8px)",
                left: 0,
                background: "#fff",
                border: "1px solid #ECECEC",
                borderRadius: "8px",
                padding: "8px 0",
                minWidth: "140px",
                zIndex: 100,
              }}
            >
              <a
                href="/product"
                style={{
                  display: "block",
                  padding: "8px 16px",
                  fontSize: "15px",
                  color: "#000",
                  textDecoration: "none",
                }}
              >
                Screndo
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right: lang + login + CTA */}
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
