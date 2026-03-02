"use client";

import { useLanguage } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BlobBackground from "@/components/BlobBackground";

const T = {
  sv: {
    title: "Tillgänglighetsredogörelse",
    s1h: "Vårt mål",
    s1p: "Vi vill att alla ska kunna använda Screndo. Vi följer WCAG-riktlinjerna och förbättrar kontinuerligt tillgängligheten i vår plattform.",
    s2h: "Pågående förbättringar",
    s2items: [
      "Förbättrad tangentbordsnavigering",
      "Bättre färgkontrast för viktiga komponenter",
      "Alt-text för bilder och media",
    ],
    s3h: "Feedback",
    s3p1: "Om du stöter på hinder, kontakta oss på",
    s3p2: "så åtgärdar vi det så snart som möjligt.",
  },
  en: {
    title: "Accessibility Statement",
    s1h: "Our goal",
    s1p: "We want everyone to be able to use Screndo. We follow the WCAG guidelines and continuously improve the accessibility of our platform.",
    s2h: "Ongoing improvements",
    s2items: [
      "Improved keyboard navigation",
      "Better colour contrast for key components",
      "Alt text for images and media",
    ],
    s3h: "Feedback",
    s3p1: "If you encounter any barriers, contact us at",
    s3p2: "and we will address it as soon as possible.",
  },
};

const S = {
  h2: { fontSize: "18px", fontWeight: 600, color: "#2C1810", margin: "0 0 12px" } as React.CSSProperties,
  p: { fontSize: "16px", lineHeight: 1.7, color: "rgba(44,24,16,0.75)", margin: 0 } as React.CSSProperties,
  ul: { margin: "0", paddingLeft: "20px", color: "rgba(44,24,16,0.75)", fontSize: "16px", lineHeight: 1.8 } as React.CSSProperties,
  section: { marginBottom: "40px" } as React.CSSProperties,
};

export default function AccessibilityPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
      <Navbar />
      <main style={{ background: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "160px 24px 80px", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "48px", fontWeight: 700, color: "#2C1810", margin: "0 0 32px", lineHeight: 1.15 }}>
            {t.title}
          </h1>
          <div style={{ borderTop: "1px solid rgba(44,24,16,0.12)", marginBottom: "48px" }} />

          <div style={S.section}>
            <h2 style={S.h2}>{t.s1h}</h2>
            <p style={S.p}>{t.s1p}</p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s2h}</h2>
            <ul style={S.ul}>{t.s2items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s3h}</h2>
            <p style={S.p}>
              {t.s3p1}{" "}
              <a href="mailto:info@screndo.com" style={{ color: "#C4622D", textDecoration: "none" }}>info@screndo.com</a>
              {" "}{t.s3p2}
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
