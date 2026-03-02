"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useLanguage } from "@/components/LanguageContext";
import BlobBackground from "@/components/BlobBackground";

type Lang = "sv" | "en";

// ─── Shared helpers ───────────────────────────────────────────────────────────
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

function useCountUp(target: number, duration: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    let raf: number;
    const update = (now: number) => {
      const p = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration]);
  return { ref, count };
}

// ─── Page translations ────────────────────────────────────────────────────────
const T = {
  sv: {
    heroLabel: "Varför Screndo",
    heroH1a: "HR ska handla om",
    heroH1em: "människor.",
    heroSub: "De flesta HR-verktyg är byggda för administration. Screndo är byggt för att förstå och stödja de människor som driver ert bolag framåt.",

    problemLabel: "Problemet",
    problemH2: "Repetition är inte HR.",
    statSub: "av HR-teamens tid går till manuella uppgifter.",
    problemCards: [
      { title: "Enkäter ingen orkar fylla i", desc: "Låg svarsfrekvens ger en falsk bild av hur teamet mår." },
      { title: "Mål som glöms bort", desc: "OKRs sätts i januari och öppnas igen i december." },
      { title: "Managers utan underlag", desc: "Viktiga samtal hålls utan data, känsla eller kontext." },
    ],

    solutionLabel: "Lösningen",
    solutionH2a: "Screndo gör det",
    solutionH2em: "automatiskt.",
    solutionSub: "Inte fler verktyg att lära sig. Intelligent analys som sker i bakgrunden medan ditt team fokuserar på sitt arbete.",
    solutionCards: [
      { title: "Löpande insikter", desc: "Ditt team loggar 60 sekunder om dagen. Screndo analyserar resten." },
      { title: "AI som förstår kontext", desc: "Intelligent analys av just ert team och era mål." },
      { title: "Underlag när det behövs", desc: "Inför varje samtal eller review har ni datan redo." },
    ],

    quote: "\u201cMänniskor är det svåraste att leda. Och det viktigaste att förstå.\u201d",
    quoteAttrib: "— Screndo",
  },
  en: {
    heroLabel: "Why Screndo",
    heroH1a: "HR should be about",
    heroH1em: "people.",
    heroSub: "Most HR tools are built for administration. Screndo is built to understand and support the people who drive your company forward.",

    problemLabel: "The problem",
    problemH2: "Repetition is not HR.",
    statSub: "of HR teams\u2019 time goes to manual tasks.",
    problemCards: [
      { title: "Surveys nobody bothers completing", desc: "Low response rates give a false picture of how the team is doing." },
      { title: "Goals that get forgotten", desc: "OKRs are set in January and opened again in December." },
      { title: "Managers without data", desc: "Important conversations are held without data, sentiment, or context." },
    ],

    solutionLabel: "The solution",
    solutionH2a: "Screndo does it",
    solutionH2em: "automatically.",
    solutionSub: "No more tools to learn. Intelligent analysis happening in the background while your team focuses on their work.",
    solutionCards: [
      { title: "Continuous insights", desc: "Your team logs 60 seconds a day. Screndo analyses the rest." },
      { title: "AI that understands context", desc: "Intelligent analysis tailored to your team and your goals." },
      { title: "Data when you need it", desc: "Before every conversation or review, you have the data ready." },
    ],

    quote: "\u201cPeople are the hardest to lead. And the most important to understand.\u201d",
    quoteAttrib: "— Screndo",
  },
};

// ─── Staggered cards ──────────────────────────────────────────────────────────
interface CardData { title: string; desc: string; }

function StaggerCards({ cards, direction, variant = "beige" }: { cards: CardData[]; direction: "left" | "right"; variant?: "beige" | "white" }) {
  const { ref, visible } = useFadeIn(0.1);
  const dx = direction === "left" ? "-44px" : "44px";

  const baseGlass = variant === "beige"
    ? {
        background: "rgba(255,255,255,0.75)",
        backdropFilter: "blur(24px) saturate(200%)",
        WebkitBackdropFilter: "blur(24px) saturate(200%)",
        border: "1px solid rgba(255,255,255,0.95)",
        boxShadow: "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)",
      }
    : {
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(20px) saturate(180%)",
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 4px 24px rgba(44,24,16,0.06), inset 0 1px 0 rgba(255,255,255,0.8)",
      };

  const restoreBoxShadow = variant === "beige"
    ? "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)"
    : "0 4px 24px rgba(44,24,16,0.06), inset 0 1px 0 rgba(255,255,255,0.8)";
  const restoreBorderColor = variant === "beige" ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.9)";

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }} className="ws-cards">
      {cards.map((card, i) => (
        <div
          key={card.title}
          style={{
            ...baseGlass,
            borderRadius: "24px",
            padding: "36px 32px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : `translateX(${dx})`,
            transition: `opacity 0.6s ease ${i * 0.2}s, transform 0.6s ease ${i * 0.2}s`,
          }}
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
            el.style.boxShadow = restoreBoxShadow;
            el.style.borderColor = restoreBorderColor;
          }}
        >
          <div style={{ color: "#2C1810", fontWeight: 700, fontSize: "18px", marginBottom: "12px" }}>{card.title}</div>
          <div style={{ color: "#2C1810", fontSize: "15px", lineHeight: 1.6, opacity: 0.7 }}>{card.desc}</div>
        </div>
      ))}
      <style>{`@media (max-width: 768px) { .ws-cards { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function WhyScrendoPage() {
  const { lang, setLang } = useLanguage();
  const t = T[lang];

  // Hero fade-in
  const hero = useFadeIn(0.05);
  const f = (delay: number): React.CSSProperties => ({
    opacity: hero.visible ? 1 : 0,
    transform: hero.visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  // Problem section
  const problem = useFadeIn(0.1);
  const fp = (delay: number): React.CSSProperties => ({
    opacity: problem.visible ? 1 : 0,
    transform: problem.visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });
  const { ref: statRef, count } = useCountUp(57, 1800);

  // Solution section
  const solution = useFadeIn(0.1);
  const fs = (delay: number): React.CSSProperties => ({
    opacity: solution.visible ? 1 : 0,
    transform: solution.visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  // Quote section
  const quote = useFadeIn(0.2);

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", paddingTop: "120px", paddingBottom: "80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <BlobBackground />
        <div ref={hero.ref} style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ color: "#C4622D", fontSize: "12px", letterSpacing: "2px", fontWeight: 600, textTransform: "uppercase", marginBottom: "24px", ...f(0) }}>
            {t.heroLabel}
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 700, lineHeight: 1.1, color: "#2C1810", margin: "0 0 28px", ...f(300) }}>
            {t.heroH1a}{" "}
            <em style={{ fontStyle: "italic", fontFamily: "var(--font-playfair)", ...GRAD }}>
              {t.heroH1em}
            </em>
          </h1>
          <p style={{ maxWidth: "580px", margin: "0 auto", color: "#2C1810", fontSize: "17px", lineHeight: 1.7, opacity: 0.8, ...f(600) }}>
            {t.heroSub}
          </p>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "100px 0" }}>
        <div ref={problem.ref} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ color: "#C4622D", fontSize: "12px", letterSpacing: "2px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", ...fp(0) }}>
              {t.problemLabel}
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#2C1810", margin: "0 0 48px", lineHeight: 1.15, ...fp(150) }}>
              {t.problemH2}
            </h2>
            {/* Stat counter */}
            <div ref={statRef}>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(64px, 10vw, 96px)", fontWeight: 700, lineHeight: 1, ...GRAD }}>
                {count}%
              </div>
              <p style={{ color: "#2C1810", fontSize: "18px", marginTop: "8px", opacity: 0.8 }}>
                {t.statSub}
              </p>
              <p style={{ fontSize: "12px", color: "rgba(44,24,16,0.35)", fontStyle: "italic", marginTop: "8px", textAlign: "center" }}>
                Källa: Deloitte, Modernizing HR
              </p>
            </div>
          </div>
          {/* Cards */}
          <StaggerCards
            direction="left"
            cards={t.problemCards}
          />
        </div>
      </section>

      {/* ── SOLUTION ─────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "100px 0" }}>
        <div ref={solution.ref} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <div style={{ color: "#C4622D", fontSize: "12px", letterSpacing: "2px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", ...fs(0) }}>
              {t.solutionLabel}
            </div>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "#2C1810", margin: "0 0 20px", lineHeight: 1.15, ...fs(150) }}>
              {t.solutionH2a}{" "}
              <em style={{ fontStyle: "italic", fontFamily: "var(--font-playfair)", ...GRAD }}>{t.solutionH2em}</em>
            </h2>
            <p style={{ maxWidth: "560px", margin: "0 auto", color: "#8B7355", fontSize: "16px", lineHeight: 1.7, ...fs(300) }}>
              {t.solutionSub}
            </p>
          </div>
          <StaggerCards
            direction="right"
            variant="white"
            cards={t.solutionCards}
          />
        </div>
      </section>


      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <SiteFooter />
    </>
  );
}
