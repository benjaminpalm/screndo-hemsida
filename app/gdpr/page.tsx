"use client";

import { useLanguage } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BlobBackground from "@/components/BlobBackground";

const T = {
  sv: {
    title: "GDPR & dataskydd",
    updated: "Senast uppdaterad: Januari 2025",
    s1h: "Vårt åtagande",
    s1p: "Screndo följer EU:s dataskyddsförordning (GDPR) och svensk dataskyddslagstiftning. Vi hanterar all persondata med omsorg och respekt för din integritet. Dataskydd är en grundprincip i hur vi bygger vår plattform.",
    s2h: "Personuppgiftsansvarig",
    s2p: "Screndo AB är personuppgiftsansvarig för behandlingen av dina personuppgifter. Vi ansvarar för att dina uppgifter hanteras enligt gällande lagar och regler. För frågor kontakta",
    s3h: "Vilka uppgifter vi behandlar",
    s3intro: "Screndo behandlar följande personuppgifter:",
    s3items: [
      "Namn och e-postadress",
      "Företagsinformation och roll",
      "Momentum-loggar och OKR-data som du själv registrerar",
      "Anonymiserade pulssvar",
      "Teknisk data (IP-adress, webbläsartyp)",
    ],
    s3note: "Vi behandlar aldrig mer data än vad som krävs för tjänsten.",
    s4h: "Rättslig grund",
    s4items: [
      "Avtal: För att leverera våra tjänster",
      "Samtycke: För funktioner som kräver godkännande",
      "Berättigat intresse: För att förbättra säkerheten",
      "Rättslig förpliktelse: När lagen kräver det",
    ],
    s5h: "Dina rättigheter",
    s5items: [
      "Tillgång till dina personuppgifter",
      "Korrigera felaktiga uppgifter",
      "Begära radering",
      "Begränsa eller invända mot behandling",
      "Dataportabilitet",
    ],
    s5contact: "Kontakta",
    s5reply: ". Vi svarar inom 30 dagar.",
    s6h: "Datalagring",
    s6p: "Vi lagrar personuppgifter endast så länge det är nödvändigt. Data raderas eller anonymiseras när den inte längre behövs. Du kan exportera eller radera din data direkt i plattformen när som helst.",
  },
  en: {
    title: "GDPR & Data Protection",
    updated: "Last updated: January 2025",
    s1h: "Our commitment",
    s1p: "Screndo complies with the EU General Data Protection Regulation (GDPR) and Swedish data protection legislation. We handle all personal data with care and respect for your privacy. Data protection is a core principle in how we build our platform.",
    s2h: "Data controller",
    s2p: "Screndo AB is the data controller for the processing of your personal data. We are responsible for ensuring your data is handled in accordance with applicable laws and regulations. For questions contact",
    s3h: "What data we process",
    s3intro: "Screndo processes the following personal data:",
    s3items: [
      "Name and email address",
      "Company information and role",
      "Momentum logs and OKR data you register yourself",
      "Anonymised pulse survey responses",
      "Technical data (IP address, browser type)",
    ],
    s3note: "We never process more data than what is required for the service.",
    s4h: "Legal basis",
    s4items: [
      "Contract: To deliver our services",
      "Consent: For features that require approval",
      "Legitimate interest: To improve security",
      "Legal obligation: When required by law",
    ],
    s5h: "Your rights",
    s5items: [
      "Access to your personal data",
      "Correct inaccurate data",
      "Request deletion",
      "Restrict or object to processing",
      "Data portability",
    ],
    s5contact: "Contact",
    s5reply: ". We respond within 30 days.",
    s6h: "Data retention",
    s6p: "We store personal data only for as long as necessary. Data is deleted or anonymised when no longer needed. You can export or delete your data directly in the platform at any time.",
  },
};

const S = {
  h2: { fontSize: "18px", fontWeight: 600, color: "#2C1810", margin: "0 0 12px" } as React.CSSProperties,
  p: { fontSize: "16px", lineHeight: 1.7, color: "rgba(44,24,16,0.75)", margin: 0 } as React.CSSProperties,
  ul: { margin: "0", paddingLeft: "20px", color: "rgba(44,24,16,0.75)", fontSize: "16px", lineHeight: 1.8 } as React.CSSProperties,
  note: { fontSize: "14px", fontStyle: "italic" as const, color: "rgba(44,24,16,0.45)", margin: "12px 0 0" } as React.CSSProperties,
  section: { marginBottom: "40px" } as React.CSSProperties,
};

export default function GdprPage() {
  const { lang } = useLanguage();
  const t = T[lang];

  return (
    <>
      <Navbar />
      <main style={{ background: "#ffffff", minHeight: "100vh", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "160px 24px 80px", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "48px", fontWeight: 700, color: "#2C1810", margin: "0 0 12px", lineHeight: 1.15 }}>
            {t.title}
          </h1>
          <p style={{ fontSize: "14px", color: "rgba(44,24,16,0.45)", fontStyle: "italic", margin: "0 0 32px" }}>
            {t.updated}
          </p>
          <div style={{ borderTop: "1px solid rgba(44,24,16,0.12)", marginBottom: "48px" }} />

          <div style={S.section}>
            <h2 style={S.h2}>{t.s1h}</h2>
            <p style={S.p}>{t.s1p}</p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s2h}</h2>
            <p style={S.p}>
              {t.s2p}{" "}
              <a href="mailto:info@screndo.com" style={{ color: "#C4622D", textDecoration: "none" }}>info@screndo.com</a>
            </p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s3h}</h2>
            <p style={{ ...S.p, marginBottom: "12px" }}>{t.s3intro}</p>
            <ul style={S.ul}>{t.s3items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p style={S.note}>{t.s3note}</p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s4h}</h2>
            <ul style={S.ul}>{t.s4items.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s5h}</h2>
            <ul style={{ ...S.ul, marginBottom: "16px" }}>{t.s5items.map((item) => <li key={item}>{item}</li>)}</ul>
            <p style={S.p}>
              {t.s5contact}{" "}
              <a href="mailto:info@screndo.com" style={{ color: "#C4622D", textDecoration: "none" }}>info@screndo.com</a>
              {t.s5reply}
            </p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s6h}</h2>
            <p style={S.p}>{t.s6p}</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
