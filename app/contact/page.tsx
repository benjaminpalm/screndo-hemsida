"use client";

import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageContext";
import BlobBackground from "@/components/BlobBackground";

const T = {
  sv: {
    label: "Kontakt",
    headline: "Hör av dig till oss.",
    body: "Har du frågor om Screndo, vill boka en demo eller bara vill prata? Skriv till oss så återkommer vi inom en arbetsdag.",
    mailto: "mailto:info@screndo.com?subject=Fråga om Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag har en fråga angående Screndo.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,",
  },
  en: {
    label: "Contact",
    headline: "Get in touch.",
    body: "Have questions about Screndo, want to book a demo, or just want to talk? Write to us and we'll get back to you within one business day.",
    mailto: "mailto:info@screndo.com?subject=Question about Screndo&body=Hi Benjamin,%0D%0A%0D%0AI have a question about Screndo.%0D%0A%0D%0AMy name: %0D%0AMy company: %0D%0APhone number: %0D%0A%0D%0ABest regards,",
  },
};

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
      <Navbar />

      <section style={{ background: "#ffffff", padding: "120px 0 100px", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>

          <p style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#C4622D",
            margin: "0 0 24px",
          }}>
            {t.label}
          </p>

          <h1 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#2C1810",
            margin: "0 0 24px",
          }}>
            {t.headline}
          </h1>

          <p style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#2C1810",
            margin: "0 0 48px",
            opacity: 0.8,
          }}>
            {t.body}
          </p>

          {/* Email card */}
          <a
            href={t.mailto}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              background: "#FAF7F2",
              border: "1px solid rgba(44,24,16,0.10)",
              borderRadius: "12px",
              padding: "20px 32px",
              textDecoration: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "#C4622D";
              el.style.boxShadow = "0 4px 16px rgba(196,98,45,0.10)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "rgba(44,24,16,0.10)";
              el.style.boxShadow = "none";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 6l-10 7L2 6" stroke="#C4622D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: "17px", fontWeight: 600, color: "#2C1810" }}>
              info@screndo.com
            </span>
          </a>

        </div>
      </section>

      <SiteFooter />
    </>
  );
}
