"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageContext";
import BlobBackground from "@/components/BlobBackground";

type Lang = "sv" | "en";

// ─── Slide-in hook ────────────────────────────────────────────────────────────
function useSlideIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─── Translations ─────────────────────────────────────────────────────────────
const T = {
  sv: {
    // Hero
    heroLabel: "Vår plattform",
    heroH1a: "Ett",
    heroH1em: "AI-native",
    heroH1b: "system för era människor.",
    heroSub: "Screndo analyserar ert teams arbete automatiskt – så att ni kan fokusera på det som faktiskt betyder något. HR ska inte handla om repetition och administration. Det ska handla om människor.",
    heroBtn1: "Boka demo",
    heroBtn2: "Se hur det fungerar ↓",
    // Products section
    productsLabel: "Två AI-komponenter. En plattform.",
    productsH2: "Välj inte mellan dem. Få båda.",
    productsSub: "Screndo Reflect och Screndo AI är inte separata produkter – de är två delar av samma intelligenta system som arbetar tillsammans.",
    reflectDesc: "Momentum-loggning, OKR-tracking och people analytics i realtid.",
    reflectFeatures: [
      "Daglig momentum-loggning",
      "OKR-progress i realtid",
      "Anonyma pulsmätningar",
      "Performance review-export",
      "1-on-1 underlag automatiskt",
      "Karriärvägar och löneinformation",
    ],
    aiDesc: "Två AI-assistenter i en. HR-assistenten svarar på arbetsrättsfrågor baserade på svensk arbetsrätt. Företags-AI:n svarar på frågor om er specifika verksamhet, kultur och onboarding – tränad på era egna dokument.",
    aiFeatures: [
      "HR-assistent baserad på svensk arbetsrätt",
      "Företags-AI tränad på era egna dokument",
      "Onboardingstöd för nya anställda",
      "Svar på under 3 sekunder",
      "Tränad på era policys och processer",
    ],
    productsFootnote: "Båda ingår i samma prenumeration. Alltid.",
    // 1-on-1 section
    oneOnOneLabel: "1-ON-1 SAMTAL",
    oneOnOneH2pre: "Bättre samtal börjar med ",
    oneOnOneH2em: "rätt underlag",
    oneOnOneSubtext: "Inför varje 1-on-1 har chefen redan en levande bild av den anställde – vad de jobbat på, vad som blockerat dem och hur deras mål rör sig. Mötet går från 'hur går det?' till ett konkret samtal med verkligt värde.",
    oneOnOneNote: "Ingen förberedelse krävs. Underlaget byggs automatiskt dag för dag.",
    oneOnOneCardTitle: "Innan mötet ser chefen:",
    oneOnOneCardRows: [
      "Momentum-loggar sedan förra samtalet",
      "Aktiva blockeringar och hur länge de funnits",
      "OKR-progress i procent",
      "Pulstrend de senaste 4 veckorna",
    ],
    // AI demo section
    aiDemoH2a: "HR-svar på",
    aiDemoH2em: "sekunder.",
    aiDemoSub: "Dina anställda skriver sin fråga. AI:n analyserar svensk arbetsrätt och era egna HR-dokument. Svaret kommer direkt.",
    aiDemoItems: [
      {
        q: "Kan jag ta föräldraledighet i mars?",
        a: "Ja, du har rätt till föräldraledighet i mars enligt föräldraledighetslagen. Du behöver anmäla detta minst 2 månader i förväg. Vill du att jag hjälper dig skicka in anmälan?",
        chips: ["Skicka förfrågan", "Läs mer", "Annat"],
      },
      {
        q: "Hur många semesterdagar har jag kvar?",
        a: "Enligt vår registrering har du 14 semesterdagar kvar för innevarande år. Du måste ta ut minst 20 dagar per år enligt semesterlagen. Vill du boka ledighet?",
        chips: ["Boka ledighet", "Se semesterplan", "Annat"],
      },
      {
        q: "Vad gäller om jag blir sjuk under semestern?",
        a: "Om du blir sjuk under semestern har du rätt att få semesterdagarna tillbaka enligt semesterlagen. Du behöver sjukintyg från dag 1. Ska jag registrera en sjukanmälan åt dig?",
        chips: ["Registrera sjukdag", "Läs mer", "Annat"],
      },
      {
        q: "Kan jag jobba deltid efter föräldraledighet?",
        a: "Ja, du har rätt att gå ner i arbetstid till 75% tills barnet fyllt 8 år enligt föräldraledighetslagen. Anmäl till HR minst 2 månader i förväg. Vill du skicka in en ansökan?",
        chips: ["Skicka ansökan", "Läs mer", "Annat"],
      },
    ],
    // Footer
    footerTagline: "People intelligence för moderna team.",
    footerGdpr: "GDPR-kompatibel",
    footerColPlatform: "Plattform",
    footerColCompany: "Företaget",
    footerColLegal: "Juridiskt",
    footerPlatformLinks: [
      { label: "Screndo Reflect", href: "/platform#produkter" },
      { label: "Screndo AI", href: "/platform#produkter" },
      { label: "Integrationer", href: "#" },
    ],
    footerCompanyLinks: ["Om Screndo", "Varför Screndo", "Kontakt", "Karriär"],
    footerLegalLinks: [
      "Integritetspolicy",
      "GDPR & dataskydd",
      "Responsible Disclosure",
      "Användarvillkor",
    ],
    footerCopyright: "© 2026 Screndo AB",
    footerLegalLabel: "Juridiska frågor:",
    footerLegalEmail: "info@screndo.com",
    footerOrgNr: "Org.nr: 559XXX-XXXX",
    footerCity: "Stockholm, Sweden",
  },
  en: {
    // Hero
    heroLabel: "Our platform",
    heroH1a: "An",
    heroH1em: "AI-native",
    heroH1b: "system for your people.",
    heroSub: "Screndo automatically analyses your team's work – so you can focus on what actually matters. HR should not be about repetition and administration. It should be about people.",
    heroBtn1: "Book demo",
    heroBtn2: "See how it works ↓",
    // Products section
    productsLabel: "Two AI components. One platform.",
    productsH2: "Don't choose between them. Get both.",
    productsSub: "Screndo Reflect and Screndo AI are not separate products – they are two parts of the same intelligent system working together.",
    reflectDesc: "Momentum logging, OKR tracking and people analytics in real-time.",
    reflectFeatures: [
      "Daily momentum logging",
      "OKR progress in real-time",
      "Anonymous pulse surveys",
      "Performance review export",
      "1-on-1 notes automatically",
      "Career paths and compensation info",
    ],
    aiDesc: "Two AI assistants in one. The HR assistant answers labor law questions based on Swedish law. The Company AI answers questions about your specific business, culture and onboarding – trained on your own documents.",
    aiFeatures: [
      "HR assistant based on Swedish labor law",
      "Company AI trained on your own documents",
      "Onboarding support for new employees",
      "Answers in under 3 seconds",
      "Trained on your policies and processes",
    ],
    productsFootnote: "Both included in the same subscription. Always.",
    // 1-on-1 section
    oneOnOneLabel: "1-ON-1 MEETINGS",
    oneOnOneH2pre: "Better meetings start with ",
    oneOnOneH2em: "the right brief",
    oneOnOneSubtext: "Before every 1-on-1, the manager already has a living picture of the employee – what they've worked on, what's blocked them, and how their goals are moving. The meeting goes from 'how's it going?' to a concrete conversation with real value.",
    oneOnOneNote: "No preparation required. The brief builds itself automatically, day by day.",
    oneOnOneCardTitle: "Before the meeting, the manager sees:",
    oneOnOneCardRows: [
      "Momentum logs since the last meeting",
      "Active blockers and how long they've been there",
      "OKR progress in percentage",
      "Pulse trend over the last 4 weeks",
    ],
    // AI demo section
    aiDemoH2a: "HR answers in",
    aiDemoH2em: "seconds.",
    aiDemoSub: "Your employees type their question. The AI analyses Swedish labor law and your own HR documents. The answer comes instantly.",
    aiDemoItems: [
      {
        q: "Can I take parental leave in March?",
        a: "Yes, you are entitled to parental leave in March under the Parental Leave Act. You need to give at least 2 months' notice. Would you like me to help you submit the request?",
        chips: ["Submit request", "Read more", "Other"],
      },
      {
        q: "How many vacation days do I have left?",
        a: "According to our records, you have 14 vacation days remaining for this year. You must take at least 20 days per year under the Annual Leave Act. Would you like to book time off?",
        chips: ["Book leave", "See vacation plan", "Other"],
      },
      {
        q: "What applies if I get sick during vacation?",
        a: "If you get sick during your vacation, you are entitled to get the vacation days back under the Annual Leave Act. You need a sick note from day 1. Shall I register a sick day for you?",
        chips: ["Register sick day", "Read more", "Other"],
      },
      {
        q: "Can I work part-time after parental leave?",
        a: "Yes, you have the right to reduce your working hours to 75% until the child turns 8 under the Parental Leave Act. Notify HR at least 2 months in advance. Would you like to submit an application?",
        chips: ["Submit application", "Read more", "Other"],
      },
    ],
    // Footer
    footerTagline: "People intelligence for modern teams.",
    footerGdpr: "GDPR compliant",
    footerColPlatform: "Platform",
    footerColCompany: "Company",
    footerColLegal: "Legal",
    footerPlatformLinks: [
      { label: "Screndo Reflect", href: "/platform#produkter" },
      { label: "Screndo AI", href: "/platform#produkter" },
      { label: "Integrations", href: "#" },
    ],
    footerCompanyLinks: ["About Screndo", "Why Screndo", "Contact", "Careers"],
    footerLegalLinks: [
      "Privacy policy",
      "GDPR & data protection",
      "Responsible Disclosure",
      "Terms of service",
    ],
    footerCopyright: "© 2026 Screndo AB",
    footerLegalLabel: "Legal inquiries:",
    footerLegalEmail: "info@screndo.com",
    footerOrgNr: "Org.nr: 559XXX-XXXX",
    footerCity: "Stockholm, Sweden",
  },
};

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({
  title,
  description,
  features,
  slideFrom,
}: {
  title: string;
  description: string;
  features: string[];
  slideFrom: "left" | "right";
}) {
  const { ref, visible } = useSlideIn();

  const slideStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translateX(0)"
      : slideFrom === "left"
      ? "translateX(-48px)"
      : "translateX(48px)",
    transition: "opacity 1.1s ease-out, transform 1.1s ease-out",
    flex: 1,
    background: "rgba(255,255,255,0.75)",
    backdropFilter: "blur(24px) saturate(200%)",
    WebkitBackdropFilter: "blur(24px) saturate(200%)",
    border: "1px solid rgba(255,255,255,0.95)",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div
      ref={ref}
      style={slideStyle}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transition = "box-shadow 300ms cubic-bezier(0.34,1.56,0.64,1), transform 300ms cubic-bezier(0.34,1.56,0.64,1), border-color 300ms cubic-bezier(0.34,1.56,0.64,1)";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 16px 48px rgba(44,24,16,0.12)";
        el.style.borderColor = "rgba(196,98,45,0.25)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.transition = "box-shadow 300ms cubic-bezier(0.34,1.56,0.64,1), transform 300ms cubic-bezier(0.34,1.56,0.64,1), border-color 300ms cubic-bezier(0.34,1.56,0.64,1)";
        el.style.transform = "translateX(0)";
        el.style.boxShadow = "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)";
        el.style.borderColor = "rgba(255,255,255,0.95)";
      }}
    >
      {/* Gradient top bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(90deg, transparent, rgba(196,98,45,0.4), transparent)",
        }}
      />

      {/* Title */}
      <div
        style={{
          color: "#2C1810",
          fontWeight: 700,
          fontSize: "24px",
          marginBottom: "12px",
        }}
      >
        {title}
      </div>

      {/* Terracotta underline accent */}
      <div
        style={{
          width: "40px",
          height: "2px",
          background: "#C4622D",
          borderRadius: "1px",
          marginBottom: "20px",
        }}
      />

      {/* Description */}
      <p
        style={{
          color: "#2C1810",
          fontSize: "15px",
          lineHeight: 1.6,
          margin: "0 0 28px",
          opacity: 0.75,
        }}
      >
        {description}
      </p>

      {/* Feature list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
        {features.map((feat) => (
          <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              style={{ flexShrink: 0, marginTop: "1px" }}
            >
              <circle cx="9" cy="9" r="9" fill="rgba(196,98,45,0.12)" />
              <path
                d="M5 9l3 3 5-5"
                stroke="#C4622D"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ color: "#2C1810", fontSize: "14px", lineHeight: 1.5 }}>{feat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── AI Demo card ────────────────────────────────────────────────────────────
type DemoPhase = "typing" | "loading" | "answer" | "deleting";

function AIDemoCard({ lang }: { lang: Lang }) {
  const items = T[lang].aiDemoItems;
  const { ref, visible } = useSlideIn();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [qIdx, setQIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<DemoPhase>("typing");
  const [dots, setDots] = useState(0);
  const [blink, setBlink] = useState(true);

  // Track viewport visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Cursor blink
  useEffect(() => {
    const id = setInterval(() => setBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!isInView) return;
    const q = items[qIdx].q;

    if (phase === "typing") {
      if (text.length < q.length) {
        const id = setTimeout(() => setText(q.slice(0, text.length + 1)), 40);
        return () => clearTimeout(id);
      } else {
        const id = setTimeout(() => {
          setPhase("loading");
          setDots(0);
        }, 2000);
        return () => clearTimeout(id);
      }
    }

    if (phase === "loading") {
      if (dots < 3) {
        const id = setTimeout(() => setDots((d) => d + 1), 300);
        return () => clearTimeout(id);
      } else {
        const id = setTimeout(() => setPhase("answer"), 300);
        return () => clearTimeout(id);
      }
    }

    if (phase === "answer") {
      const id = setTimeout(() => setPhase("deleting"), 2500);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const id = setTimeout(() => setText((t) => t.slice(0, -1)), 20);
        return () => clearTimeout(id);
      } else {
        setQIdx((i) => (i + 1) % items.length);
        setDots(0);
        setPhase("typing");
      }
    }
  }, [phase, text, dots, qIdx, isInView]);

  const slideStyle: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(0)" : "translateX(48px)",
    transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
    maxWidth: "640px",
    margin: "0 auto",
    background: "rgba(255,255,255,0.6)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
    border: "1px solid rgba(255,255,255,0.9)",
    borderRadius: "24px",
    padding: "32px",
    boxShadow: "0 4px 24px rgba(44,24,16,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
  };

  const showLoading = phase === "loading" || phase === "answer" || phase === "deleting";
  const showAnswer = phase === "answer" || phase === "deleting";

  return (
    <div ref={containerRef}>
    <div ref={ref} style={slideStyle}>
      {/* Input bar */}
      <div
        style={{
          background: "#F5F5F5",
          borderRadius: "50px",
          padding: "14px 20px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Pulsing circle */}
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            background: "#C4622D",
            flexShrink: 0,
            animation: "aiPulse 1.5s ease-in-out infinite",
          }}
        />
        {/* Typewriter text + cursor */}
        <span style={{ color: "#2C1810", fontSize: "15px", flex: 1 }}>
          {text}
          <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
        </span>
      </div>

      {/* Loading dots */}
      {showLoading && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "14px 20px 0",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#2C1810",
                opacity: dots > i ? 0.7 : 0.15,
                transition: "opacity 0.3s ease",
              }}
            />
          ))}
        </div>
      )}

      {/* Answer card */}
      {showAnswer && (
        <div
          style={{
            background: "#FAF3E0",
            borderRadius: "14px",
            padding: "20px",
            marginTop: "12px",
            opacity: phase === "deleting" ? 0 : 1,
            transition: "opacity 0.35s ease",
            animation: "platformAnswerFadeIn 0.4s ease both",
          }}
        >
          <div
            style={{
              color: "#C4622D",
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginBottom: "8px",
            }}
          >
            SCRENDO AI
          </div>
          <p style={{ color: "#2C1810", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>
            {items[qIdx].a}
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginTop: "12px",
            }}
          >
            {items[qIdx].chips.map((chip) => (
              <button
                key={chip}
                style={{
                  background: "#E8DDD0",
                  border: "none",
                  borderRadius: "20px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  color: "#2C1810",
                  cursor: "pointer",
                  transition: "background 0.2s",
                  display: "inline-flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background =
                    "rgba(196,98,45,0.12)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.background = "#E8DDD0")
                }
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes aiPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.4); }
        }
        @keyframes platformAnswerFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function PlatformPage() {
  const { lang, setLang } = useLanguage();
  const t = T[lang];

  const oneOnOneLeft = useSlideIn(0.1);
  const oneOnOneRight = useSlideIn(0.1);

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        style={{
          background: "#ffffff",
          paddingTop: "120px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BlobBackground />
        <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div
            style={{
              color: "#C4622D",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "24px",
            }}
          >
            {t.heroLabel}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#2C1810",
              margin: "0 0 28px",
            }}
          >
            {t.heroH1a}{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "#C4622D",
                fontFamily: "var(--font-playfair)",
              }}
            >
              {t.heroH1em}
            </em>{" "}
            {t.heroH1b}
          </h1>

          {/* Subtext */}
          <p
            style={{
              maxWidth: "560px",
              margin: "0 auto 40px",
              color: "#2C1810",
              fontSize: "17px",
              lineHeight: 1.7,
              opacity: 0.8,
            }}
          >
            {t.heroSub}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            <div className="liquid-glass-wrapper">
              <div className="liquid-glass-ring" />
              <a
                href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
                style={{
                  background: "#C4622D",
                  color: "#FAF7F2",
                  borderRadius: "8px",
                  padding: "14px 32px",
                  fontSize: "15px",
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
                {t.heroBtn1}
              </a>
            </div>
            <a
              href="mailto:info@screndo.com?subject=Intresseanmälan – Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att se hur Screndo fungerar.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
              style={{
                color: "#2C1810",
                border: "1.5px solid rgba(44,24,16,0.3)",
                borderRadius: "8px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(44,24,16,0.7)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(44,24,16,0.3)")
              }
            >
              {t.heroBtn2}
            </a>
          </div>
        </div>
      </section>

      {/* ── TWO PRODUCTS ─────────────────────────────────────────────────── */}
      <section
        id="produkter"
        style={{ background: "#FAF7F2", padding: "80px 0" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          {/* Section header */}
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <div
              style={{
                color: "#C4622D",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {t.productsLabel}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#2C1810",
                margin: "0 0 20px",
                lineHeight: 1.15,
              }}
            >
              {t.productsH2}
            </h2>
            <p
              style={{
                maxWidth: "580px",
                margin: "0 auto",
                color: "#2C1810",
                fontSize: "16px",
                lineHeight: 1.7,
                opacity: 0.75,
              }}
            >
              {t.productsSub}
            </p>
          </div>

          {/* Cards */}
          <div
            style={{ display: "flex", gap: "28px", alignItems: "stretch" }}
            className="platform-cards"
          >
            <ProductCard
              title="Screndo Reflect"
              description={t.reflectDesc}
              features={t.reflectFeatures}
              slideFrom="left"
            />
            <ProductCard
              title="Screndo AI"
              description={t.aiDesc}
              features={t.aiFeatures}
              slideFrom="right"
            />
          </div>

          {/* Footnote */}
          <p
            style={{
              textAlign: "center",
              marginTop: "32px",
              color: "#8B7355",
              fontSize: "13px",
              fontStyle: "italic",
            }}
          >
            {t.productsFootnote}
          </p>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .platform-cards { flex-direction: column !important; }
          }
        `}</style>
      </section>

      {/* ── 1-ON-1 SECTION ───────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px" }}>
          {/* Label */}
          <p style={{
            color: "#C4622D",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            textAlign: "center",
            margin: "0 0 20px",
          }}>
            {t.oneOnOneLabel}
          </p>

          {/* Headline */}
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#2C1810",
            textAlign: "center",
            margin: "0 0 56px",
          }}>
            {t.oneOnOneH2pre}
            <em style={{
              fontStyle: "italic",
              fontFamily: "var(--font-playfair)",
              background: "linear-gradient(135deg, #C4622D, #8B4513)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline",
            }}>
              {t.oneOnOneH2em}
            </em>
            .
          </h2>

          {/* Two-column layout */}
          <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
            {/* Left column – slides in from left */}
            <div
              ref={oneOnOneLeft.ref}
              style={{
                flex: 1,
                opacity: oneOnOneLeft.visible ? 1 : 0,
                transform: oneOnOneLeft.visible ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
              }}
            >
              <p style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: "#2C1810",
                margin: "0 0 16px",
              }}>
                {t.oneOnOneSubtext}
              </p>
              <p style={{
                fontSize: "15px",
                fontStyle: "italic",
                color: "#8B7355",
                margin: 0,
              }}>
                {t.oneOnOneNote}
              </p>
            </div>

            {/* Right column – slides in from right */}
            <div
              ref={oneOnOneRight.ref}
              style={{
                flex: 1,
                opacity: oneOnOneRight.visible ? 1 : 0,
                transform: oneOnOneRight.visible ? "translateX(0)" : "translateX(40px)",
                transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
              }}
            >
              <div style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.9)",
                borderRadius: "20px",
                padding: "28px",
              }}>
                <p style={{
                  color: "#2C1810",
                  fontWeight: 600,
                  fontSize: "15px",
                  margin: "0 0 16px",
                }}>
                  {t.oneOnOneCardTitle}
                </p>
                {t.oneOnOneCardRows.map((row) => (
                  <div key={row} style={{ display: "flex", alignItems: "flex-start", gap: "10px", lineHeight: 2 }}>
                    <span style={{ color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: "2px", fontSize: "8px" }}>●</span>
                    <span style={{ color: "#2C1810", fontSize: "14px" }}>{row}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI AGENT DEMO ────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div
              style={{
                color: "#C4622D",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              Screndo AI
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 700,
                color: "#2C1810",
                margin: "0 0 20px",
                lineHeight: 1.15,
              }}
            >
              {t.aiDemoH2a}{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(135deg, #C4622D, #8B4513)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "var(--font-playfair)",
                }}
              >
                {t.aiDemoH2em}
              </em>
            </h2>
            <p
              style={{
                maxWidth: "560px",
                margin: "0 auto",
                color: "#2C1810",
                fontSize: "16px",
                lineHeight: 1.7,
                opacity: 0.75,
              }}
            >
              {t.aiDemoSub}
            </p>
          </div>

          {/* Demo card */}
          <AIDemoCard key={lang} lang={lang} />
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <SiteFooter />
    </>
  );
}
