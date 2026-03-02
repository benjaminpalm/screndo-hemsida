"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageContext";

type Lang = "sv" | "en";

const GRAD: React.CSSProperties = {
  background: "linear-gradient(135deg, #C4622D, #8B4513)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function fadeStyle(v: boolean, delay = 0, duration = 0.6): React.CSSProperties {
  return {
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };
}

const T = {
  sv: {
    label: "Prissättning",
    headline: "Enkelt. Transparent. Skalbart.",
    subtext: "Betala per anställd per månad. Inga startavgifter. Avsluta när du vill.",
    pill: "Ett enkelt pris",
    price: "89 kr",
    period: "/anställd/månad",
    min: "Minst 20 anställda",
    allIncluded: "Allt ingår:",
    feats: [
      "Screndo Reflect – momentum och OKR-tracking",
      "HR-assistent – svensk arbetsrätt",
      "Företags-AI – tränad på era dokument",
      "Chefdashboard med people analytics",
      "Anonyma pulsmätningar",
      "Performance review-export",
      "Karriärvägar och löneinformation",
      "Support på svenska",
    ],
    btn: "Boka demo",
    note: "Inga startavgifter · Avsluta när du vill",
  },
  en: {
    label: "Pricing",
    headline: "Simple. Transparent. Scalable.",
    subtext: "Pay per employee per month. No setup fees. Cancel anytime.",
    pill: "One simple price",
    price: "$8",
    period: "/employee/month",
    min: "Minimum 20 employees",
    allIncluded: "Everything included:",
    feats: [
      "Screndo Reflect – momentum and OKR tracking",
      "HR assistant – Swedish labor law",
      "Company AI – trained on your documents",
      "Manager dashboard with people analytics",
      "Anonymous pulse surveys",
      "Performance review export",
      "Career paths and compensation info",
      "Support in Swedish",
    ],
    btn: "Book demo",
    note: "No setup fees · Cancel anytime",
  },
};

function GradHeadline({ text }: { text: string }) {
  const dotIdx = text.indexOf(". ");
  if (dotIdx !== -1) {
    return (
      <>
        <span style={GRAD}>{text.slice(0, dotIdx + 1)}</span>
        {text.slice(dotIdx + 1)}
      </>
    );
  }
  const words = text.split(" ");
  const n = Math.min(3, words.length);
  return (
    <>
      <span style={GRAD}>{words.slice(0, n).join(" ")}</span>
      {words.length > n && " " + words.slice(n).join(" ")}
    </>
  );
}

export default function PricingPage() {
  const { lang, setLang } = useLanguage();
  const t = T[lang];
  const section = useFadeIn(0);

  return (
    <>
      <Navbar />

      <section style={{ background: "#FAF7F2", padding: "180px 24px 100px" }}>
        <div ref={section.ref} style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div
              style={{
                color: "#C4622D",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
                ...fadeStyle(section.visible, 0, 0.5),
              }}
            >
              {t.label}
            </div>
            <h2
              style={{
                color: "#2C1810",
                fontSize: "clamp(32px, 5vw, 52px)",
                fontWeight: 700,
                margin: "0 0 16px",
                lineHeight: 1.15,
                fontFamily: "var(--font-playfair)",
                ...fadeStyle(section.visible, 0.1, 0.6),
              }}
            >
              <GradHeadline text={t.headline} />
            </h2>
            <p
              style={{
                color: "rgba(44,24,16,0.62)",
                fontSize: "18px",
                lineHeight: 1.65,
                maxWidth: "480px",
                margin: "0 auto",
                ...fadeStyle(section.visible, 0.3, 0.5),
              }}
            >
              {t.subtext}
            </p>
          </div>

          {/* Single pricing card */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              ...fadeStyle(section.visible, 0.5, 0.6),
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(24px) saturate(200%)",
                WebkitBackdropFilter: "blur(24px) saturate(200%)",
                border: "1px solid rgba(255,255,255,0.95)",
                borderRadius: "24px",
                padding: "40px",
                boxShadow: "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)",
                maxWidth: "480px",
                width: "100%",
                transition: "box-shadow 300ms cubic-bezier(0.34,1.56,0.64,1), transform 300ms cubic-bezier(0.34,1.56,0.64,1), border-color 300ms cubic-bezier(0.34,1.56,0.64,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = "0 16px 48px rgba(44,24,16,0.12)";
                el.style.borderColor = "rgba(196,98,45,0.25)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)";
                el.style.borderColor = "rgba(255,255,255,0.95)";
              }}
            >
              {/* Pill */}
              <div style={{ marginBottom: "24px" }}>
                <span
                  style={{
                    display: "inline-block",
                    background: "#C4622D",
                    color: "#fff",
                    borderRadius: "20px",
                    padding: "4px 16px",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {t.pill}
                </span>
              </div>

              {/* Price */}
              <div style={{ marginBottom: "4px" }}>
                <span
                  style={{
                    color: "#2C1810",
                    fontSize: "64px",
                    fontWeight: 700,
                    lineHeight: 1,
                    fontFamily: "var(--font-playfair)",
                  }}
                >
                  {t.price}
                </span>
              </div>
              <div style={{ color: "#8B6347", fontSize: "16px", marginBottom: "4px" }}>
                {t.period}
              </div>
              <div
                style={{
                  color: "#8B6347",
                  fontSize: "12px",
                  fontStyle: "italic",
                  marginBottom: "28px",
                }}
              >
                {t.min}
              </div>

              {/* Divider */}
              <div style={{ borderTop: "1px solid rgba(44,24,16,0.08)", marginBottom: "24px" }} />

              {/* Features */}
              <div
                style={{ color: "#2C1810", fontWeight: 600, fontSize: "15px", marginBottom: "16px" }}
              >
                {t.allIncluded}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {t.feats.map((feat) => (
                  <li
                    key={feat}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      color: "#2C1810",
                      fontSize: "15px",
                    }}
                  >
                    <span style={{ color: "#C4622D", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <div className="liquid-glass-wrapper" style={{ display: "block", marginBottom: "16px" }}>
                <div className="liquid-glass-ring" />
                <a
                  href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "#C4622D",
                    color: "#FAF7F2",
                    borderRadius: "8px",
                    padding: "16px",
                    fontSize: "16px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                  }
                >
                  {t.btn}
                </a>
              </div>

              <div style={{ textAlign: "center", color: "#8B6347", fontSize: "12px" }}>
                {t.note}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
