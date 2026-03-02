"use client";

import { useLanguage } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BlobBackground from "@/components/BlobBackground";

const T = {
  sv: {
    title: "Juridisk information",
    companySection: "Företagsuppgifter",
    city: "Stockholm, Sverige",
    policiesSection: "Policyer och villkor",
    policyLinks: [
      { label: "Integritetspolicy", href: "/privacy" },
      { label: "GDPR & dataskydd", href: "/gdpr" },
      { label: "Tillgänglighetsredogörelse", href: "/accessibility" },
    ],
    contactSection: "Kontakt för juridiska frågor",
    contactText: "E-post:",
  },
  en: {
    title: "Legal information",
    companySection: "Company details",
    city: "Stockholm, Sweden",
    policiesSection: "Policies and terms",
    policyLinks: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "GDPR & Data Protection", href: "/gdpr" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
    contactSection: "Legal enquiries",
    contactText: "Email:",
  },
};

const S = {
  h2: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#2C1810",
    margin: "0 0 12px",
  } as React.CSSProperties,
  p: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "rgba(44,24,16,0.75)",
    margin: 0,
  } as React.CSSProperties,
  section: {
    marginBottom: "40px",
  } as React.CSSProperties,
};

export default function LegalPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
      <Navbar />

      <main style={{ background: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "160px 24px 80px", position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "48px",
              fontWeight: 700,
              color: "#2C1810",
              margin: "0 0 32px",
              lineHeight: 1.15,
            }}
          >
            {t.title}
          </h1>

          <div style={{ borderTop: "1px solid rgba(44,24,16,0.12)", marginBottom: "48px" }} />

          <div style={S.section}>
            <h2 style={S.h2}>{t.companySection}</h2>
            <div
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(44,24,16,0.10)",
                borderRadius: "16px",
                padding: "24px",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
              }}
            >
              <div style={{ color: "#2C1810", fontWeight: 700, fontSize: "18px", marginBottom: "8px" }}>
                Screndo AB
              </div>
              <div style={{ color: "rgba(44,24,16,0.55)", fontSize: "15px", marginBottom: "4px" }}>
                Org.nr: 559XXX-XXXX
              </div>
              <div style={{ color: "rgba(44,24,16,0.55)", fontSize: "15px" }}>{t.city}</div>
            </div>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.policiesSection}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {t.policyLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    textDecoration: "none",
                    borderRadius: "10px",
                    padding: "12px",
                    transition: "background 0.2s",
                    color: "#2C1810",
                    fontSize: "16px",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(196,98,45,0.06)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.background = "transparent")
                  }
                >
                  <span style={{ color: "#C4622D", fontWeight: 700, fontSize: "18px", lineHeight: 1 }}>→</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.contactSection}</h2>
            <p style={S.p}>
              {t.contactText}{" "}
              <a href="mailto:info@screndo.com" style={{ color: "#C4622D", textDecoration: "none" }}>
                info@screndo.com
              </a>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
