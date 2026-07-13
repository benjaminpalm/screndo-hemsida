'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const { t, lang, setLanguage } = useLanguage()
  const [dropOpen, setDropOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    function handleOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handleOutside)
    return () => document.removeEventListener('click', handleOutside)
  }, [menuOpen])

  return (
    <nav
      ref={navRef}
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

        {/* Produkter dropdown — desktop only */}
        <div
          className="nav-desktop-item"
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
            <div style={{ position: "absolute", top: "100%", left: 0, right: 0, height: "8px" }} />
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
                style={{ display: "block", padding: "8px 16px", fontSize: "15px", color: "#000", textDecoration: "none" }}
              >
                Screndo
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Right: lang + desktop links + hamburger */}
      <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>

        {/* SV/EN — always visible */}
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

        {/* Logga in — desktop only */}
        <a
          className="nav-desktop-item"
          href="/login"
          style={{ color: "#6B6B6B", textDecoration: "none", fontSize: "15px" }}
        >
          {t.login}
        </a>

        {/* Boka intro — desktop only */}
        <a
          className="nav-desktop-item"
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

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Meny"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "#fff",
            borderBottom: "1px solid #ECECEC",
            padding: "16px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            zIndex: 99,
          }}
        >
          <a href="/product" style={{ color: "#0A0A0A", fontSize: "15px", textDecoration: "none" }}>Produkt</a>
          <a href="/login" style={{ color: "#0A0A0A", fontSize: "15px", textDecoration: "none" }}>Logga in</a>
          <a
            href="/book-intro"
            style={{
              background: "#04D8B5",
              color: "#0A0A0A",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              borderRadius: "100px",
              padding: "12px 20px",
              textAlign: "center",
              display: "block",
            }}
          >
            Boka intro
          </a>
        </div>
      )}
    </nav>
  )
}
