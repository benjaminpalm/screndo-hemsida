'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

function loadAnalytics() {
  if (typeof window === 'undefined') return
  const script = document.createElement('script')
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DKZ8FQJKZ6'
  script.async = true
  document.head.appendChild(script)
  script.onload = () => {
    ;(window as any).dataLayer = (window as any).dataLayer || []
    function gtag(...args: any[]) { (window as any).dataLayer.push(args) }
    gtag('js', new Date())
    gtag('config', 'G-DKZ8FQJKZ6')
  }
}

export default function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      loadAnalytics()
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
    loadAnalytics()
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="cookie-banner"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#fff",
        borderTop: "1px solid #ECECEC",
        padding: "20px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p style={{ color: "#6B6B6B", fontSize: "14px", margin: 0 }}>
        {t.cookieText}
      </p>
      <div className="cookie-buttons" style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            background: "#04D8B5",
            color: "#0A0A0A",
            fontWeight: 600,
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {t.cookieAccept}
        </button>
        <button
          onClick={decline}
          style={{
            background: "transparent",
            border: "1.5px solid #ECECEC",
            color: "#0A0A0A",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "14px",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {t.cookieDecline}
        </button>
      </div>
    </div>
  )
}
