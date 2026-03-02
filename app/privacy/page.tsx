"use client";

import { useLanguage } from "@/components/LanguageContext";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BlobBackground from "@/components/BlobBackground";

const T = {
  sv: {
    title: "Integritetspolicy",
    updated: "Senast uppdaterad: Januari 2026",
    s1h: "Inledning",
    s1p: "Screndo AB värnar om din personliga integritet. Denna integritetspolicy beskriver hur vi samlar in, använder och skyddar dina personuppgifter när du använder vår plattform och tjänster.",
    s2h: "Personuppgiftsansvarig",
    s2p: "Screndo AB är personuppgiftsansvarig för behandlingen av dina personuppgifter. Kontakta oss på",
    s2p2: "för frågor om hur vi hanterar dina uppgifter.",
    s3h: "Vilka uppgifter vi samlar in",
    s3intro: "Vi samlar in följande typer av personuppgifter:",
    s3items: [
      "Namn och e-postadress vid registrering",
      "Företagsinformation och roll",
      "Aktivitetsdata du själv registrerar i plattformen",
      "Anonymiserade pulssvar",
      "Teknisk data (IP-adress, webbläsartyp, enhetsinformation)",
    ],
    s3note: "Vi samlar aldrig in mer data än vad som krävs för att leverera tjänsten.",
    s4h: "Hur vi använder dina uppgifter",
    s4items: [
      "För att tillhandahålla och förbättra våra tjänster",
      "För att kommunicera med dig om din användning",
      "För att uppfylla rättsliga förpliktelser",
      "För att säkerställa säkerheten i plattformen",
    ],
    s5h: "Dina rättigheter",
    s5intro: "Enligt GDPR har du rätt att:",
    s5items: [
      "Begära tillgång till dina personuppgifter",
      "Rätta felaktiga uppgifter",
      "Begära radering av dina uppgifter",
      "Invända mot eller begränsa behandlingen",
      "Få dina uppgifter i ett portabelt format",
    ],
    s5contact: "Kontakta oss på",
    s5reply: ". Vi svarar inom 30 dagar.",
    s6h: "Lagring och säkerhet",
    s6p: "Vi lagrar dina uppgifter på säkra servrar inom EU. Uppgifterna sparas så länge du har ett aktivt konto hos oss eller så länge det krävs enligt lag. All data krypteras under överföring och i vila.",
    s7h: "Cookies",
    s7p: "Vi använder nödvändiga cookies för att plattformen ska fungera korrekt. Vi använder inga spårningscookies från tredje part utan ditt samtycke.",
    s8h: "Kontakt",
    s8p: "Vid frågor om denna policy eller vår datahantering, kontakta oss på",
    s8p2: ". Du har också rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY).",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: January 2026",
    s1h: "Introduction",
    s1p: "Screndo AB is committed to protecting your personal privacy. This privacy policy describes how we collect, use and protect your personal data when you use our platform and services.",
    s2h: "Data controller",
    s2p: "Screndo AB is the data controller for the processing of your personal data. Contact us at",
    s2p2: "for questions about how we handle your data.",
    s3h: "What data we collect",
    s3intro: "We collect the following types of personal data:",
    s3items: [
      "Name and email address upon registration",
      "Company information and role",
      "Activity data you register in the platform",
      "Anonymised pulse survey responses",
      "Technical data (IP address, browser type, device information)",
    ],
    s3note: "We never collect more data than what is required to deliver the service.",
    s4h: "How we use your data",
    s4items: [
      "To provide and improve our services",
      "To communicate with you about your usage",
      "To fulfil legal obligations",
      "To ensure the security of the platform",
    ],
    s5h: "Your rights",
    s5intro: "Under GDPR you have the right to:",
    s5items: [
      "Request access to your personal data",
      "Correct inaccurate data",
      "Request deletion of your data",
      "Object to or restrict processing",
      "Receive your data in a portable format",
    ],
    s5contact: "Contact us at",
    s5reply: ". We respond within 30 days.",
    s6h: "Storage and security",
    s6p: "We store your data on secure servers within the EU. Data is retained for as long as you have an active account with us or as required by law. All data is encrypted in transit and at rest.",
    s7h: "Cookies",
    s7p: "We use necessary cookies to ensure the platform functions correctly. We do not use third-party tracking cookies without your consent.",
    s8h: "Contact",
    s8p: "For questions about this policy or our data handling, contact us at",
    s8p2: ". You also have the right to lodge a complaint with your national data protection authority.",
  },
};

const S = {
  h2: { fontSize: "18px", fontWeight: 600, color: "#2C1810", margin: "0 0 12px" } as React.CSSProperties,
  p: { fontSize: "16px", lineHeight: 1.7, color: "rgba(44,24,16,0.75)", margin: 0 } as React.CSSProperties,
  ul: { margin: "0", paddingLeft: "20px", color: "rgba(44,24,16,0.75)", fontSize: "16px", lineHeight: 1.8 } as React.CSSProperties,
  note: { fontSize: "14px", fontStyle: "italic" as const, color: "rgba(44,24,16,0.45)", margin: "12px 0 0" } as React.CSSProperties,
  section: { marginBottom: "40px" } as React.CSSProperties,
};

export default function PrivacyPage() {
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
              {" "}{t.s2p2}
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
            <p style={{ ...S.p, marginBottom: "12px" }}>{t.s5intro}</p>
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

          <div style={S.section}>
            <h2 style={S.h2}>{t.s7h}</h2>
            <p style={S.p}>{t.s7p}</p>
          </div>

          <div style={S.section}>
            <h2 style={S.h2}>{t.s8h}</h2>
            <p style={S.p}>
              {t.s8p}{" "}
              <a href="mailto:info@screndo.com" style={{ color: "#C4622D", textDecoration: "none" }}>info@screndo.com</a>
              {t.s8p2}
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
