'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const links = [
    { label: t.product, href: "#" },
    { label: t.about, href: "#" },
    { label: t.careers, href: "#" },
    { label: t.privacy, href: "/privacy" },
  ]

  return (
    <footer className="footer-bar">
      <img src="/logo.png" alt="Screndo" style={{ height: "28px", width: "auto" }} />

      <nav style={{ display: "flex", gap: "32px", flexWrap: "wrap", justifyContent: "center" }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{ color: "#6B6B6B", fontSize: "13px", textDecoration: "none" }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <span style={{ color: "#6B6B6B", fontSize: "13px" }}>© 2026 Screndo</span>
    </footer>
  )
}
