"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

type Lang = "sv" | "en";

const NAV_T = {
  sv: {
    navLogin: "Logga in",
    navBookDemo: "Boka demo",
    navPlatform: "Plattform",
    navWhy: "Varför Screndo",
    navAbout: "Kontakt",
    platformHeader: { title: "Plattform", subtitle: "Lär dig mer om hur Screndo fungerar." },
    platformItems: [
      { label: "Utforska vår plattform", href: "/platform" },
    ],
    whyHeader: { title: "Varför Screndo", subtitle: "Förstå varför vi byggt Screndo och vad som driver oss." },
    whyItems: [
      { label: "Varför Screndo", href: "/why-screndo" },
      { label: "Vår vision", href: "/vision" },
    ],
    aboutHeader: { title: "Kontakt", subtitle: "Kontakta oss eller läs juridisk information." },
    aboutItems: [
      { label: "Kontakt", href: "mailto:info@screndo.com" },
      { label: "Juridisk information", href: "/legal" },
    ],
  },
  en: {
    navLogin: "Log in",
    navBookDemo: "Book demo",
    navPlatform: "Platform",
    navWhy: "Why Screndo",
    navAbout: "Contact",
    platformHeader: { title: "Platform", subtitle: "Learn more about how Screndo works." },
    platformItems: [
      { label: "Explore our platform", href: "/platform" },
    ],
    whyHeader: { title: "Why Screndo", subtitle: "Understand why we built Screndo and what drives us." },
    whyItems: [
      { label: "Why Screndo", href: "/why-screndo" },
      { label: "Our vision", href: "/vision" },
    ],
    aboutHeader: { title: "Contact", subtitle: "Contact us or read legal information." },
    aboutItems: [
      { label: "Contact", href: "mailto:info@screndo.com" },
      { label: "Legal information", href: "/legal" },
    ],
  },
};

function SwedishFlag({ size }: { size: number }) {
  return (
    <span style={{ fontSize: size, lineHeight: 1, display: "block" }}>🇸🇪</span>
  );
}

function UKFlag({ size }: { size: number }) {
  return (
    <span style={{ fontSize: size, lineHeight: 1, display: "block" }}>🇬🇧</span>
  );
}

function LanguageSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Switch language"
        style={{
          border: "none",
          cursor: "pointer",
          padding: 0,
          background: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {lang === "sv" ? <SwedishFlag size={28} /> : <UKFlag size={28} />}
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            right: 0,
            background: "#fff",
            borderRadius: "12px",
            padding: "8px",
            boxShadow: "0 4px 20px rgba(44,24,16,0.18)",
            minWidth: "148px",
            zIndex: 100,
            animation: "langDropdown 0.18s ease both",
          }}
        >
          {(["sv", "en"] as Lang[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setOpen(false);
              }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
                fontSize: "14px",
                color: "#2C1810",
                transition: "background 0.15s",
                textAlign: "left",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "#E8DDD0")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background = "transparent")
              }
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {l === "sv" ? <SwedishFlag size={24} /> : <UKFlag size={24} />}
                <span>{l === "sv" ? "Svenska" : "English"}</span>
              </span>
              {lang === l && (
                <span style={{ color: "#C4622D", fontWeight: 700, marginLeft: "8px" }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @keyframes langDropdown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function NavDropdown({
  label,
  items,
  header,
}: {
  label: string;
  items: { label: string; href: string }[];
  header: { title: string; subtitle: string };
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <div style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        style={{
          color: "#FAF7F2",
          fontSize: "15px",
          fontWeight: 400,
          background: "transparent",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: 0,
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#C4622D")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#FAF7F2")}
      >
        {label}
        <svg
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          style={{
            marginLeft: "6px",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
            flexShrink: 0,
          }}
        >
          <path d="M1 1L5 5L9 1" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#FFFFFF",
            border: "1px solid rgba(44,24,16,0.08)",
            borderRadius: "12px",
            padding: "24px",
            boxShadow: "0 4px 24px rgba(44,24,16,0.10)",
            minWidth: "320px",
            zIndex: 100,
            animation: "navDropdown 200ms ease-out both",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {/* Left: header */}
            <div style={{ flexShrink: 0, width: "160px" }}>
              <div style={{ color: "#2C1810", fontWeight: 700, fontSize: "13px", marginBottom: "5px", letterSpacing: "0.01em" }}>
                {header.title}
              </div>
              <div style={{ color: "#8B7355", fontSize: "12px", lineHeight: 1.5, maxWidth: "140px" }}>
                {header.subtitle}
              </div>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", alignSelf: "stretch", background: "rgba(44,24,16,0.06)", flexShrink: 0 }} />

            {/* Right: items */}
            <div style={{ flex: 1, paddingLeft: "20px" }}>
              {items.map(({ label: itemLabel, href }) => (
                <a
                  key={itemLabel}
                  href={href}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    borderRadius: "6px",
                    padding: "8px 10px",
                    transition: "background 200ms, color 200ms",
                    background: "transparent",
                    color: "#2C1810",
                    fontSize: "13px",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,98,45,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C4622D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#2C1810";
                  }}
                >
                  {itemLabel}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes navDropdown {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = NAV_T[lang];

  const MOBILE_LINKS = [
    { label: t.navPlatform, href: "/platform" },
    { label: t.navWhy, href: "/why-screndo" },
    { label: t.navAbout, href: "/about" },
    { label: t.navLogin, href: "https://app.screndo.se" },
    { label: t.navBookDemo, href: "mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar," },
  ];

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: "rgba(44,24,16,0.95)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "4px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Screndo"
              style={{ height: "68px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Center nav links */}
          <div
            style={{ display: "flex", alignItems: "center", gap: "44px" }}
            className="nav-center-links"
          >
            {[
              { label: t.navPlatform, href: "/platform" },
              { label: t.navWhy, href: "/why-screndo" },
              { label: t.navAbout, href: "mailto:info@screndo.com" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{
                  color: "#FAF7F2",
                  fontSize: "15px",
                  fontWeight: 400,
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#FAF7F2")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <LanguageSwitcher lang={lang} setLang={setLang} />
            <a
              href="https://app.screndo.se"
              className="nav-right-btn"
              style={{
                color: "#FAF7F2",
                border: "1.5px solid rgba(250,247,242,0.6)",
                borderRadius: "8px",
                padding: "8px 20px",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(255,255,255,0.1)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")
              }
            >
              {t.navLogin}
            </a>
            <div className="liquid-glass-wrapper nav-right-btn">
              <div className="liquid-glass-ring" />
              <a
                href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
                style={{
                  background: "#C4622D",
                  color: "#FAF7F2",
                  borderRadius: "8px",
                  padding: "8px 20px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                }
              >
                {t.navBookDemo}
              </a>
            </div>

            {/* Hamburger – mobile only */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open menu"
              className="hamburger-btn"
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "6px",
                display: "none",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span style={{ display: "block", width: "22px", height: "2px", background: "#FAF7F2", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "22px", height: "2px", background: "#FAF7F2", borderRadius: "2px" }} />
              <span style={{ display: "block", width: "16px", height: "2px", background: "#FAF7F2", borderRadius: "2px" }} />
            </button>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .nav-center-links { display: none !important; }
            .nav-right-btn { display: none !important; }
            .hamburger-btn { display: flex !important; }
          }
        `}</style>
      </nav>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 49,
            background: "#2C1810",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#FAF7F2",
              fontSize: "32px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
          {MOBILE_LINKS.map(({ label, href }, i) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "#FAF7F2",
                fontSize: "28px",
                fontWeight: 600,
                textDecoration: "none",
                opacity: 0,
                animation: `mobileNavItem 0.4s ease forwards ${i * 0.08}s`,
              }}
            >
              {label}
            </a>
          ))}
          <style>{`
            @keyframes mobileNavItem {
              from { opacity: 0; transform: translateY(16px); }
              to   { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
