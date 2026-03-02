"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageContext";
import BlobBackground from "@/components/BlobBackground";

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

function fadeStyle(visible: boolean, delay = 0, duration = 0.6): React.CSSProperties {
  return {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${duration}s ease ${delay}s, transform ${duration}s ease ${delay}s`,
  };
}

const PARAGRAPHS = [
  "De flesta bolag med 20 till 100 anställda hanterar sina människor med en mix av Excel-ark, mejltrådar och magkänsla. Inte för att de inte bryr sig – utan för att verktygen som finns antingen är byggda för enterprise-bolag med dedikerade HR-avdelningar, eller så enkla att de inte ger något verkligt värde.",
  "Resultatet är att managers flyger blint. De vet inte vad som blockerar teamet, vem som är på väg att tappa motivation, eller om målen faktiskt rör sig framåt. Anställda känner sig osedda. Viktig information fastnar i informella samtal som aldrig dokumenteras och aldrig följs upp.",
  "Screndo är byggt för att lösa det. Vår plattform kombinerar löpande momentum-loggning, OKR-tracking och anonyma pulsmätningar med en AI-assistent som förstår svensk arbetsrätt och era egna policys. Resultatet är att managers får en levande bild av sitt team varje dag – och anställda bygger automatiskt sitt underlag inför varje utvecklingssamtal och löneförhandling.",
  "Vår ambition är att bli den självklara people intelligence-plattformen för växande europeiska bolag. Vi börjar i Sverige – för att vi förstår den svenska arbetsmarknaden, kollektivavtalen och den kultur av öppenhet och förtroende som svenska bolag är byggda på. Det är inte en tillfällighet. Det är en styrka.",
];

export default function VisionPage() {
  const { lang, setLang } = useLanguage();

  const hero = useFadeIn(0);
  const body = useFadeIn(0.08);
  const closing = useFadeIn(0.1);

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "120px 0 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div ref={hero.ref} style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <p style={{
            ...fadeStyle(hero.visible, 0, 0.5),
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#C4622D",
            margin: "0 0 24px",
          }}>
            Vår vision
          </p>
          <h1 style={{
            ...fadeStyle(hero.visible, 0.1, 0.6),
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(40px, 5.5vw, 64px)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#2C1810",
            margin: 0,
          }}>
            HR har fastnat i det{" "}
            <em style={{
              ...GRAD,
              fontStyle: "italic",
              fontFamily: "var(--font-playfair)",
              display: "inline-block",
              paddingBottom: "0.12em",
            }}>
              förflutna.
            </em>
          </h1>
        </div>
      </section>

      {/* ── BODY ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "40px 0 100px", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div
          ref={body.ref}
          style={{ maxWidth: "680px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "32px", position: "relative", zIndex: 1 }}
        >
          {PARAGRAPHS.map((text, i) => (
            <p
              key={i}
              style={{
                ...fadeStyle(body.visible, i * 0.15, 0.65),
                fontSize: "18px",
                lineHeight: 1.9,
                color: "#2C1810",
                margin: 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* ── CLOSING ──────────────────────────────────────────────────────── */}
        <div
          ref={closing.ref}
          style={{ maxWidth: "680px", margin: "48px auto 0", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <div style={{
            ...fadeStyle(closing.visible, 0, 0.5),
            borderTop: "1px solid rgba(44,24,16,0.08)",
            maxWidth: "200px",
            margin: "0 auto 32px",
          }} />

          <p style={{
            ...fadeStyle(closing.visible, 0.1, 0.6),
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "22px",
            color: "#2C1810",
            margin: "0 0 12px",
          }}>
            People intelligence, built for humans.
          </p>
          <div style={{
            ...fadeStyle(closing.visible, 0.26, 0.6),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}>
            <div className="liquid-glass-wrapper">
              <div className="liquid-glass-ring" />
              <a
                href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
                style={{
                  background: "#C4622D",
                  color: "#FAF7F2",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.88")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                Boka demo
              </a>
            </div>
            <a
              href="/platform"
              style={{
                color: "#2C1810",
                border: "1.5px solid rgba(44,24,16,0.25)",
                borderRadius: "8px",
                padding: "12px 24px",
                fontSize: "15px",
                fontWeight: 500,
                textDecoration: "none",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4622D";
                (e.currentTarget as HTMLAnchorElement).style.color = "#C4622D";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(44,24,16,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#2C1810";
              }}
            >
              Se plattformen →
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
