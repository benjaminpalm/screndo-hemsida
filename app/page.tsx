"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/components/LanguageContext";

// ─── Translations ─────────────────────────────────────────────────────────────
type Lang = "sv" | "en";

const TRANSLATIONS = {
  sv: {
    navLogin: "Logga in",
    navBookDemo: "Boka demo",
    navPlatform: "Plattform",
    navWhy: "Varför Screndo",
    navPricing: "Prissättning",
    heroLine1: "Ditt team.",
    heroLine2: "I perfekt",
    heroAccent: "harmoni.",
    heroBody:
      "Screndo ger dina managers en levande bild av vad teamet jobbar på, vad som blockerar dem, och vem som behöver stöd – på 60 sekunder om dagen.",
    heroButton: "Boka demo",
    heroSecondary: "Se plattformen →",
    heroSmall: "Byggt för svenska bolag med 20–100 anställda",
    // Platform section
    platformLabel: "Plattformen",
    platformHeadline: "Allt ditt team behöver.",
    platformSubtext:
      "Två produkter. En plattform. Byggd för bolag som tar sina människor på allvar.",
    reflectPill: "People Intelligence",
    reflectProductName: "Reflect",
    reflectDescFull:
      "Löpande feedback, OKR-tracking och people analytics – automatiskt genererat från ditt teams dagliga bidrag.",
    reflectFeatList: [
      "Daglig reflektion på 60 sekunder – skriv eller tala in din dag",
      "Anonyma pulsmätningar",
      "AI-genererade insikter inför 1-on-1",
      "Automatiskt underlag för performance reviews",
      "People analytics för chefer i realtid",
    ],
    reflectCta: "Utforska Reflect →",
    aiPill: "AI-drivet",
    aiProductNameFull: "Screndo AI",
    aiDescFull:
      "Omedelbara svar på alla HR-frågor – baserade på svensk arbetsrätt och ditt företags egna policys.",
    aiFeatList: [
      "HR-assistent baserad på svensk arbetsrätt",
      "Företags-AI tränad på era egna dokument",
      "Onboardingstöd för nya anställda",
      "Svar på interna policys och processer direkt i appen",
    ],
    aiCta: "Utforska Screndo AI →",
    // Why Screndo section
    whyLabel: "Varför Screndo",
    whyHeadline: "Byggd för er. Inte för de stora.",
    whySubtext:
      "De flesta HR-plattformar kräver en dedikerad HR-avdelning, månader av implementation och enterprise-budgetar. Vi är byggda för bolag som vill ta sina människor på allvar – utan enterprise-komplexitet.",
    whyPoints: [
      {
        title: "Ingen implementation",
        desc: "Ni är igång på 20 minuter. Ingen konsult, ingen utbildning, ingen IT-ticket.",
      },
      {
        title: "Pris som passar er",
        desc: "Betala per anställd. Inga dolda avgifter, inga årskontrakt, inga överraskningar.",
      },
      {
        title: "Byggt för Sverige",
        desc: "Svensk arbetsrätt, GDPR-kompatibelt och support på svenska – från dag ett.",
      },
    ],
    // Problem section
    problemLabel: "Problemet",
    problemHeadline: "De flesta managers flyger blint.",
    problemBody:
      "Enkäter tar för lång tid. Enskilda möten skalar inte. Och när du väl märker att någon kämpar är det redan för sent.",
    problemCards: [
      {
        title: "Enkäter känns som läxa",
        desc: "Lågt deltagande betyder att du aldrig får hela bilden.",
      },
      {
        title: "Blockeringar går oupptäckta",
        desc: "Små problem blir stora innan någon tar upp dem.",
      },
      {
        title: "Inget spår kvar",
        desc: "När lönesamtalet kommer minns ingen vad som faktiskt hände.",
      },
    ],
    // Cost of waiting section
    costLabel: "KOSTNADEN AV ATT VÄNTA",
    costH2pre: "En anställd som slutar kostar ",
    costH2em: "mer än ni tror",
    costStatDesc: "av anställda som slutar frivilligt säger att arbetsgivaren kunde ha förhindrat det.",
    costStatNote: "Källa: Gallup",
    costCards: [
      { stat: "50–200%", desc: "av årslönen kostar det att ersätta en anställd – beroende på roll och senioritet.", source: "Källa: Gallup" },
      { stat: "51%", desc: "av de som slutade säger att ingen frågade om deras trivsel de tre sista månaderna.", source: "Källa: Gallup" },
    ],
    // Pricing section
    pricingLabel: "Prissättning",
    pricingHeadline: "Enkelt. Transparent. Skalbart.",
    pricingSubtext:
      "Betala per anställd per månad. Inga startavgifter. Avsluta när du vill.",
    pricingPlans: [
      {
        pill: "Kom igång",
        recommended: false,
        name: "Reflect",
        price: "49 kr",
        period: "/anställd/mån",
        aboveLabel: "",
        features: [
          "Daglig momentum-loggning",
          "OKR-tracking",
          "Chefdashboard",
          "Anonyma pulsmätningar",
          "Performance review-export",
        ],
        minimum: "Minst 20 anställda",
        button: "Kom igång",
        buttonFilled: false,
      },
      {
        pill: "Mest populär",
        recommended: true,
        name: "Reflect + AI Agent",
        price: "89 kr",
        period: "/anställd/mån",
        aboveLabel: "Allt i Reflect, plus:",
        features: [
          "Screndo AI Agent",
          "HR-frågor baserade på svensk lag",
          "Träning på era egna dokument",
          "Manager coaching-stöd",
          "Performance summaries med AI",
        ],
        minimum: "",
        button: "Boka demo",
        buttonFilled: true,
      },
      {
        pill: "Skala upp",
        recommended: false,
        name: "Enterprise",
        price: "129 kr",
        period: "/anställd/mån",
        aboveLabel: "Allt i Reflect + AI Agent, plus:",
        features: [
          "Dedikerad onboarding",
          "Slack-integration",
          "Anpassade OKR-mallar",
          "Priority support på svenska",
          "Kvartalsvisa strategimöten",
        ],
        minimum: "",
        button: "Kontakta oss",
        buttonFilled: false,
      },
    ],
    pricingAddonsTitle: "Tillägg",
    pricingAddons: [
      "Slack-integration – +15 kr/anställd/mån",
      "API-åtkomst – +20 kr/anställd/mån",
      "Dedikerad HR-konsult – Kontakta oss",
    ],
    // CTA
    ctaHeadline: "Redo att höra ditt teams rytm?",
    ctaBody: "Boka en 20-minuters demo och vi visar hur Screndo fungerar för ditt team.",
    ctaButton: "Boka demo →",
    // Footer
    footerTagline: "People intelligence för moderna team.",
    footerGdpr: "GDPR-kompatibel",
    footerColPlatform: "Plattform",
    footerColCompany: "Företaget",
    footerColLegal: "Juridiskt",
    footerPlatformLinks: [
      { label: "Screndo Reflect", href: "/platform#produkter" },
      { label: "Screndo AI", href: "/platform#produkter" },
    ],
    footerCompanyLinks: ["Om Screndo", "Varför Screndo", "Kontakt"],
    footerLegalLinks: [
      { label: "Integritetspolicy", href: "/privacy" },
      { label: "GDPR & dataskydd", href: "/gdpr" },
      { label: "Juridisk information", href: "/legal" },
    ],
    footerCopyright: "© 2026 Screndo AB. Alla rättigheter förbehållna.",
    footerLegalLabel: "Juridiska frågor:",
    footerLegalEmail: "info@screndo.com",
    footerOrgNr: "Org.nr: 559XXX-XXXX",
    footerCity: "Stockholm, Sweden",
    pricingSinglePill: "Ett enkelt pris",
    pricingSinglePrice: "89 kr",
    pricingSinglePeriod: "/anställd/månad",
    pricingSingleMin: "Minst 20 anställda",
    pricingAllIncluded: "Allt ingår:",
    pricingSingleFeats: [
      "Screndo Reflect – momentum och OKR-tracking",
      "HR-assistent – svensk arbetsrätt",
      "Företags-AI – tränad på era dokument",
      "Chefdashboard med people analytics",
      "Anonyma pulsmätningar",
      "Performance review-export",
      "1-on-1 underlag automatiskt",
      "Karriärvägar och löneinformation",
      "Support på svenska",
    ],
    pricingSingleBtn: "Boka demo",
    pricingSingleNote: "Inga startavgifter · Avsluta när du vill",
    heroDashStats: [
      { val: "12/14", label: "Aktiva" },
      { val: "2", label: "Blockerare" },
      { val: "34d 🔥", label: "Streak" },
    ],
    heroDashTeams: [
      { team: "Säljteamet", pct: 85 },
      { team: "Produktteamet", pct: 60 },
      { team: "Supportteamet", pct: 100 },
    ],
    aiDemoLabel: "Screndo AI",
    aiDemoHeadlineWords: ["HR-svar", "på"],
    aiDemoHeadlineEm: "sekunder.",
    aiDemoCompanyHeadlineWords: ["Företagssvar", "på"],
    aiDemoCompanyHeadlineEm: "sekunder.",
    aiDemoSubtext: "En assistent för svenska arbetsrättsfrågor. En för era egna policys, er vision och er kultur. Båda ingår.",
    aiDemoStats: [
      "✓ Baserad på svensk arbetsrätt",
      "✓ Tränad på era egna policys",
      "✓ Svar på under 3 sekunder",
    ],
    aiDemoCompanyStats: [
      "✓ Baserad på er vision och kultur",
      "✓ Tränad på era egna dokument",
      "✓ Svar på under 3 sekunder",
    ],
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
      {
        q: "Vad händer om jag säger upp mig?",
        a: "Din uppsägningstid är 3 månader enligt ditt anställningsavtal. Under uppsägningstiden har du full lön och förmåner. Vill du boka ett samtal med HR för att gå igenom processen?",
        chips: ["Boka samtal", "Läs mer", "Annat"],
      },
    ],
    aiDemoCompanyItems: [
      {
        q: "Vad är företagets vision?",
        a: "Vår vision är att bygga en arbetsplats där varje medarbetare känner sig sedd, hörd och har rätt förutsättningar att växa. Vi tror att engagerade team skapar bättre resultat för alla.",
        chips: ["Läs mer", "Våra värderingar", "Annat"],
      },
      {
        q: "Hur fungerar vårt onboardingflöde?",
        a: "Ditt onboardingflöde är tre veckor. Vecka 1 fokuserar på kultur och teamintroduktion, vecka 2 på verktyg och processer, vecka 3 på ditt första egna projekt. Din onboardingansvarige är markerad i systemet.",
        chips: ["Se schema", "Kontakta HR", "Annat"],
      },
      {
        q: "Vilka är våra kärnvärden?",
        a: "Våra tre kärnvärden är: Ägarskap – vi tar ansvar för våra resultat. Öppenhet – vi delar information fritt. Utveckling – vi lär oss något nytt varje dag.",
        chips: ["Läs mer", "Annat"],
      },
      {
        q: "Vem kontaktar jag vid IT-problem?",
        a: "Vid IT-problem kontaktar du support@dittforetag.se eller använder vår interna IT-portal. Akuta ärenden kan eskaleras direkt till IT-chefen via Slack.",
        chips: ["Öppna IT-portal", "Annat"],
      },
    ],
  },
  en: {
    navLogin: "Log in",
    navBookDemo: "Book demo",
    navPlatform: "Platform",
    navWhy: "Why Screndo",
    navPricing: "Pricing",
    heroLine1: "Your team.",
    heroLine2: "In perfect",
    heroAccent: "harmony.",
    heroBody:
      "Screndo gives your managers a living picture of what the team is working on, what's blocking them, and who needs support – in 60 seconds a day.",
    heroButton: "Book demo",
    heroSecondary: "See the platform →",
    heroSmall: "Built for companies with 20–100 employees",
    // Platform section
    platformLabel: "Platform",
    platformHeadline: "Everything your team needs.",
    platformSubtext:
      "Two products. One platform. Built for companies that take their people seriously.",
    reflectPill: "People Intelligence",
    reflectProductName: "Reflect",
    reflectDescFull:
      "Ongoing feedback, OKR tracking and people analytics – automatically generated from your team's daily contributions.",
    reflectFeatList: [
      "Daily reflection in 60 seconds – write or speak your day",
      "Anonymous pulse surveys",
      "AI-generated insights before 1-on-1s",
      "Automatic materials for performance reviews",
      "People analytics for managers in real time",
    ],
    reflectCta: "Explore Reflect →",
    aiPill: "AI-powered",
    aiProductNameFull: "Screndo AI",
    aiDescFull:
      "Instant answers to all HR questions – based on Swedish labor law and your company's own policies.",
    aiFeatList: [
      "HR assistant based on Swedish labor law",
      "Company AI trained on your own documents",
      "Onboarding support for new employees",
      "Answers to internal policies and processes directly in the app",
    ],
    aiCta: "Explore Screndo AI →",
    // Why Screndo section
    whyLabel: "Why Screndo",
    whyHeadline: "Built for you. Not for enterprise.",
    whySubtext:
      "Lattice costs 150 SEK per employee and requires an HR department. We're built for companies that want to take their people seriously – without enterprise complexity.",
    whyPoints: [
      {
        title: "No implementation",
        desc: "You're up and running in 20 minutes. No consultant, no training.",
      },
      {
        title: "Pricing that fits",
        desc: "Pay per employee. No hidden fees or annual contracts.",
      },
      {
        title: "Built for Sweden",
        desc: "Swedish labor law, GDPR-compliant and support in Swedish.",
      },
    ],
    // Problem section
    problemLabel: "The problem",
    problemHeadline: "Most managers are flying blind.",
    problemBody:
      "Surveys take too long. One-on-ones don't scale. And by the time you notice someone is struggling, it's already too late.",
    problemCards: [
      {
        title: "Surveys feel like homework",
        desc: "Low participation means you never get the full picture.",
      },
      {
        title: "Blockers go undetected",
        desc: "Small problems become big ones before anyone speaks up.",
      },
      {
        title: "No trail left",
        desc: "When the performance review comes, no one remembers what actually happened.",
      },
    ],
    // Cost of waiting section
    costLabel: "THE COST OF WAITING",
    costH2pre: "Losing an employee costs ",
    costH2em: "more than you think",
    costStatDesc: "of employees who quit voluntarily say their employer could have prevented it.",
    costStatNote: "Source: Gallup",
    costCards: [
      { stat: "50–200%", desc: "of annual salary is the cost to replace an employee – depending on role and seniority.", source: "Source: Gallup" },
      { stat: "51%", desc: "of those who left say no one asked about their wellbeing in the last three months.", source: "Source: Gallup" },
    ],
    // Pricing section
    pricingLabel: "Pricing",
    pricingHeadline: "Simple. Transparent. Scalable.",
    pricingSubtext: "Pay per employee per month. No setup fees. Cancel anytime.",
    pricingPlans: [
      {
        pill: "Get started",
        recommended: false,
        name: "Reflect",
        price: "€4",
        period: "/employee/mo",
        aboveLabel: "",
        features: [
          "Daily momentum logging",
          "OKR tracking",
          "Manager dashboard",
          "Anonymous pulse surveys",
          "Performance review export",
        ],
        minimum: "Minimum 20 employees",
        button: "Get started",
        buttonFilled: false,
      },
      {
        pill: "Most popular",
        recommended: true,
        name: "Reflect + AI Agent",
        price: "€8",
        period: "/employee/mo",
        aboveLabel: "Everything in Reflect, plus:",
        features: [
          "Screndo AI Agent",
          "HR questions based on Swedish law",
          "Training on your own documents",
          "Manager coaching support",
          "Performance summaries with AI",
        ],
        minimum: "",
        button: "Book demo",
        buttonFilled: true,
      },
      {
        pill: "Scale up",
        recommended: false,
        name: "Enterprise",
        price: "€12",
        period: "/employee/mo",
        aboveLabel: "Everything in Reflect + AI Agent, plus:",
        features: [
          "Dedicated onboarding",
          "Slack integration",
          "Custom OKR templates",
          "Priority support in Swedish",
          "Quarterly strategy meetings",
        ],
        minimum: "",
        button: "Contact us",
        buttonFilled: false,
      },
    ],
    pricingAddonsTitle: "Add-ons",
    pricingAddons: [
      "Slack integration – +€1.50/employee/mo",
      "API access – +€2/employee/mo",
      "Dedicated HR consultant – Contact us",
    ],
    // CTA
    ctaHeadline: "Ready to hear your team's rhythm?",
    ctaBody: "Book a 20-minute demo and we'll show you how Screndo works for your team.",
    ctaButton: "Book demo →",
    // Footer
    footerTagline: "People intelligence for modern teams.",
    footerGdpr: "GDPR compliant",
    footerColPlatform: "Platform",
    footerColCompany: "Company",
    footerColLegal: "Legal",
    footerPlatformLinks: [
      { label: "Screndo Reflect", href: "/platform#produkter" },
      { label: "Screndo AI", href: "/platform#produkter" },
    ],
    footerCompanyLinks: ["About Screndo", "Why Screndo", "Contact"],
    footerLegalLinks: [
      { label: "Privacy policy", href: "/privacy" },
      { label: "GDPR & data protection", href: "/gdpr" },
      { label: "Legal information", href: "/legal" },
    ],
    footerCopyright: "© 2026 Screndo AB. All rights reserved.",
    footerLegalLabel: "Legal inquiries:",
    footerLegalEmail: "info@screndo.com",
    footerOrgNr: "Org.nr: 559XXX-XXXX",
    footerCity: "Stockholm, Sweden",
    pricingSinglePill: "One simple price",
    pricingSinglePrice: "€8",
    pricingSinglePeriod: "/employee/month",
    pricingSingleMin: "Minimum 20 employees",
    pricingAllIncluded: "Everything included:",
    pricingSingleFeats: [
      "Screndo Reflect – momentum and OKR tracking",
      "HR assistant – Swedish labor law",
      "Company AI – trained on your documents",
      "Manager dashboard with people analytics",
      "Anonymous pulse surveys",
      "Performance review export",
      "1-on-1 notes automatically",
      "Career paths and compensation info",
      "Support in Swedish",
    ],
    pricingSingleBtn: "Book demo",
    pricingSingleNote: "No setup fees · Cancel anytime",
    heroDashStats: [
      { val: "12/14", label: "Active" },
      { val: "2", label: "Blockers" },
      { val: "34d 🔥", label: "Streak" },
    ],
    heroDashTeams: [
      { team: "Sales team", pct: 85 },
      { team: "Product team", pct: 60 },
      { team: "Support team", pct: 100 },
    ],
    aiDemoLabel: "Screndo AI",
    aiDemoHeadlineWords: ["HR answers,", "in"],
    aiDemoHeadlineEm: "seconds.",
    aiDemoCompanyHeadlineWords: ["Company answers,", "in"],
    aiDemoCompanyHeadlineEm: "seconds.",
    aiDemoSubtext: "One assistant for Swedish labor law questions. One for your own policies, vision and culture. Both included.",
    aiDemoStats: [
      "✓ Based on Swedish labor law",
      "✓ Trained on your own policies",
      "✓ Answers in under 3 seconds",
    ],
    aiDemoCompanyStats: [
      "✓ Based on your vision and culture",
      "✓ Trained on your own documents",
      "✓ Answers in under 3 seconds",
    ],
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
      {
        q: "What happens if I resign?",
        a: "Your notice period is 3 months as per your employment contract. During the notice period you retain full salary and benefits. Would you like to book a meeting with HR to go through the process?",
        chips: ["Book meeting", "Read more", "Other"],
      },
    ],
    aiDemoCompanyItems: [
      {
        q: "What is the company's vision?",
        a: "Our vision is to build a workplace where every employee feels seen, heard and has the right conditions to grow. We believe engaged teams create better outcomes for everyone.",
        chips: ["Read more", "Our values", "Other"],
      },
      {
        q: "How does our onboarding flow work?",
        a: "Your onboarding is three weeks. Week 1 focuses on culture and team introduction, week 2 on tools and processes, week 3 on your first own project. Your onboarding manager is marked in the system.",
        chips: ["See schedule", "Contact HR", "Other"],
      },
      {
        q: "What are our core values?",
        a: "Our three core values are: Ownership – we take responsibility for our results. Transparency – we share information freely. Growth – we learn something new every day.",
        chips: ["Read more", "Other"],
      },
      {
        q: "Who do I contact for IT issues?",
        a: "For IT issues, contact support@yourcompany.se or use our internal IT portal. Urgent matters can be escalated directly to the IT manager via Slack.",
        chips: ["Open IT portal", "Other"],
      },
    ],
  },
};

// ─── Fade-in hook ────────────────────────────────────────────────────────────
function useFadeIn(threshold = 0.12) {
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

// ─── Gradient headline helper ─────────────────────────────────────────────────
const GRAD: React.CSSProperties = {
  background: "linear-gradient(135deg, #C4622D, #8B4513)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
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


// ─── Typed label ─────────────────────────────────────────────────────────────
function TypedLabel({ text }: { text: string }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplay(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, 38);
    return () => clearInterval(id);
  }, [text]);

  useEffect(() => {
    if (!done) return;
    const id = setInterval(() => setBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, [done]);

  return (
    <span>
      {display}
      <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
    </span>
  );
}

// ─── Footer bottom row ────────────────────────────────────────────────────────
function FooterBottom({ copyright }: { copyright: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <span style={{ color: "#E8DDD0", fontSize: "13px" }}>{copyright}</span>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        style={{ color: "#8B6347", transition: "color 0.2s", display: "flex", alignItems: "center" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#8B6347")}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      </a>
    </div>
  );
}

// ─── AI Agent demo section ───────────────────────────────────────────────────
type DemoPhase = "typing" | "loading" | "answer" | "deleting";

function AIDemoSection({ lang }: { lang: Lang }) {
  const td = TRANSLATIONS[lang];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [activeAgent, setActiveAgent] = useState<"hr" | "company">("hr");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          setIsInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [qIdx, setQIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<DemoPhase>("typing");
  const [dots, setDots] = useState(0);
  const [answerOpacity, setAnswerOpacity] = useState(0);
  const [blink, setBlink] = useState(true);
  const [liveBlink, setLiveBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setLiveBlink((v) => !v), 1000);
    return () => clearInterval(id);
  }, []);

  const currentItems = activeAgent === "hr" ? td.aiDemoItems : td.aiDemoCompanyItems;

  function switchAgent(agent: "hr" | "company") {
    setActiveAgent(agent);
    setQIdx(0);
    setText("");
    setPhase("typing");
    setDots(0);
    setAnswerOpacity(0);
  }

  // Main state machine: typing → loading → answer → deleting
  useEffect(() => {
    if (!sectionVisible) return;
    const q = currentItems[qIdx].q;

    if (phase === "typing") {
      if (text.length < q.length) {
        const id = setTimeout(() => setText(q.slice(0, text.length + 1)), 35);
        return () => clearTimeout(id);
      } else {
        // Question finished — start loading dots
        setDots(0);
        setPhase("loading");
      }
    }

    if (phase === "loading") {
      if (dots < 3) {
        const id = setTimeout(() => setDots((d) => d + 1), 133);
        return () => clearTimeout(id);
      } else {
        // All dots shown — answer appears after short pause
        const id = setTimeout(() => setPhase("answer"), 150);
        return () => clearTimeout(id);
      }
    }

    if (phase === "answer") {
      setAnswerOpacity(1);
      const id = setTimeout(() => setPhase("deleting"), 3000);
      return () => clearTimeout(id);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const id = setTimeout(() => setText((t) => t.slice(0, -1)), 15);
        return () => clearTimeout(id);
      } else {
        setAnswerOpacity(0);
        setQIdx((i) => (i + 1) % currentItems.length);
        setDots(0);
        setPhase("typing");
      }
    }
  }, [phase, text, dots, qIdx, sectionVisible, activeAgent]);

  const showDots = phase === "loading";

  const fade = (delay: number): React.CSSProperties => ({
    opacity: sectionVisible ? 1 : 0,
    transform: sectionVisible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.5s ease ${delay}s, transform 0.5s ease ${delay}s`,
  });

  const HEADLINE_WORDS = activeAgent === "hr" ? td.aiDemoHeadlineWords : td.aiDemoCompanyHeadlineWords;
  const HEADLINE_EM = activeAgent === "hr" ? td.aiDemoHeadlineEm : td.aiDemoCompanyHeadlineEm;

  return (
    <section style={{ background: "transparent", padding: "100px 0", position: "relative" }}>
      <div
        ref={sectionRef}
        style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}
      >
        {/* Label pill */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "28px", ...fade(0) }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(196,98,45,0.08)",
              border: "1px solid rgba(196,98,45,0.15)",
              borderRadius: "20px",
              padding: "6px 16px",
            }}
          >
            <div
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#C4622D",
                animation: "demoPillPulse 1.5s ease-in-out infinite",
              }}
            />
            <span
              style={{
                color: "#C4622D",
                fontSize: "12px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {td.aiDemoLabel}
            </span>
          </div>
        </div>

        {/* Headline word-by-word */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "#2C1810",
            margin: 0,
          }}
        >
          {HEADLINE_WORDS.map((word, i) => (
            <span
              key={word}
              style={{
                display: "inline-block",
                marginRight: "0.25em",
                opacity: sectionVisible ? 1 : 0,
                transform: sectionVisible ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s ease ${0.1 + i * 0.08}s`,
              }}
            >
              {word}
            </span>
          ))}
          <em
            style={{
              fontStyle: "italic",
              fontFamily: "var(--font-playfair)",
              background: "linear-gradient(135deg, #C4622D, #8B4513)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
              opacity: sectionVisible ? 1 : 0,
              transform: sectionVisible ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.5s ease ${0.1 + HEADLINE_WORDS.length * 0.08}s, transform 0.5s ease ${0.1 + HEADLINE_WORDS.length * 0.08}s`,
            }}
          >
            {HEADLINE_EM}
          </em>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "18px",
            color: "#8B7355",
            maxWidth: "520px",
            margin: "16px auto 0",
            lineHeight: 1.6,
            ...fade(0.42),
          }}
        >
          {td.aiDemoSubtext}
        </p>

        {/* Agent toggle pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            margin: "28px auto 0",
            ...fade(0.5),
          }}
        >
          {(["hr", "company"] as const).map((agent) => {
            const label = agent === "hr" ? "HR-assistenten" : "Företags-AI:n";
            const isActive = activeAgent === agent;
            return (
              <button
                key={agent}
                onClick={() => switchAgent(agent)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  border: isActive ? "none" : "1px solid rgba(44,24,16,0.12)",
                  background: isActive ? "#C4622D" : "#ffffff",
                  color: isActive ? "#ffffff" : "#8B7355",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Demo card */}
        <div
          style={{
            maxWidth: "680px",
            margin: "24px auto 0",
            background: "rgba(255,255,255,0.65)",
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            border: "1px solid rgba(139,89,60,0.18)",
            borderRadius: "24px",
            padding: "32px",
            boxShadow:
              "0 8px 40px rgba(44,24,16,0.08), 0 1px 2px rgba(44,24,16,0.04), inset 0 1px 0 rgba(255,255,255,0.9)",
            textAlign: "left",
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >
          {/* Input bar */}
          <div
            style={{
              background: "rgba(245,242,238,0.8)",
              border: "1px solid rgba(139,89,60,0.10)",
              borderRadius: "50px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            {/* Animated overlapping circles */}
            <div style={{ position: "relative", width: "20px", height: "20px", flexShrink: 0 }}>
              <div
                style={{
                  position: "absolute",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "rgba(196,98,45,0.8)",
                  top: 0,
                  left: 0,
                  animation: "demoOrbit1 8s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  background: "rgba(44,24,16,0.3)",
                  bottom: 0,
                  right: 0,
                  animation: "demoOrbit2 8s linear infinite",
                }}
              />
            </div>

            {/* Typewriter text */}
            <span style={{ flex: 1, color: "#2C1810", fontSize: "15px" }}>
              {text}
              <span style={{ opacity: blink ? 1 : 0, transition: "opacity 0.1s" }}>|</span>
            </span>

            {/* Send button */}
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#C4622D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 12V4M4 8l4-4 4 4"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Fixed-height area: loading dots + answer card — prevents layout shift */}
          <div style={{ minHeight: "220px" }}>

          {/* Loading dots */}
          {showDots && (
            <div
              style={{
                display: "flex",
                gap: "6px",
                padding: "16px 0 0 4px",
                alignItems: "center",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#2C1810",
                    opacity: dots > i ? 0.4 : 0.1,
                    transition: "opacity 0.25s ease",
                  }}
                />
              ))}
            </div>
          )}

          {/* Answer card — always in DOM, opacity controlled for instant feel */}
          <div
            style={{
              marginTop: "16px",
              background: "rgba(250,243,224,0.7)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(139,89,60,0.12)",
              borderRadius: "16px",
              padding: "20px 24px",
              opacity: answerOpacity,
              transition: answerOpacity === 0 ? "opacity 0.2s ease" : "opacity 0.3s ease",
              pointerEvents: answerOpacity === 0 ? "none" : "auto",
            }}
          >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#C4622D",
                    fontSize: "11px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                  }}
                >
                  SCRENDO AI
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#22C55E",
                      opacity: liveBlink ? 1 : 0.4,
                      transition: "opacity 0.3s ease",
                    }}
                  />
                  <span style={{ color: "#8B7355", fontSize: "11px" }}>Live</span>
                </div>
              </div>
              <p
                style={{
                  color: "#2C1810",
                  fontSize: "15px",
                  lineHeight: 1.7,
                  margin: "8px 0 0",
                }}
              >
                {currentItems[qIdx].a}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "14px" }}>
                {currentItems[qIdx].chips.map((chip) => (
                  <button
                    key={chip}
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(139,89,60,0.10)",
                      borderRadius: "20px",
                      padding: "6px 14px",
                      fontSize: "13px",
                      color: "#2C1810",
                      cursor: "pointer",
                      transition: "background 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(196,98,45,0.08)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "rgba(196,98,45,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.background =
                        "rgba(255,255,255,0.7)";
                      (e.currentTarget as HTMLButtonElement).style.borderColor =
                        "rgba(139,89,60,0.10)";
                    }}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

          </div>{/* end fixed-height area */}
        </div>

        {/* Stat pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginTop: "24px",
            ...fade(0.7),
          }}
        >
          {(activeAgent === "company" ? td.aiDemoCompanyStats : td.aiDemoStats).map((stat) => (
            <div
              key={stat}
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(44,24,16,0.06)",
                borderRadius: "20px",
                padding: "8px 16px",
                fontSize: "13px",
                color: "#8B7355",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes answerFadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes demoPillPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.35); opacity: 0.7; }
        }
        @keyframes demoOrbit1 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(6px, 0); }
          50%  { transform: translate(6px, 6px); }
          75%  { transform: translate(0, 6px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes demoOrbit2 {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-6px, 0); }
          50%  { transform: translate(-6px, -6px); }
          75%  { transform: translate(0, -6px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_T = {
  sv: {
    label: "FAQ",
    headline: "Nyfiken? Vi har",
    headlineEm: "svaren.",
    items: [
      { q: "Hur snabbt kan vi komma igång?", a: "Ni är igång på under 20 minuter. Ni skickar oss en lista med era anställdas mejladresser, vi sätter upp er arbetsyta och skickar ut välkomstmejl till alla. Ingen installation, ingen konsult och ingen IT-ticket behövs." },
      { q: "Behöver vi ha en HR-avdelning för att använda Screndo?", a: "Nej. Screndo är byggt för team som vill växa utan att fastna i administration – oavsett om ni har en dedikerad HR-chef eller inte. Plattformen är enkel nog att använda utan HR-kompetens men kraftfull nog att ge er professionella insikter." },
      { q: "Är Screndo GDPR-kompatibelt?", a: "Ja. All data lagras inom EU, vi använder krypterad kommunikation och varje anställd äger sin egen data. Anonyma pulssvar är alltid anonyma – inte ens ni som arbetsgivare kan se vem som svarat vad." },
      { q: "Vad skiljer Screndo från en vanlig enkätlösning?", a: "Enkätverktyg ger er data en gång i kvartalet med låg svarsfrekvens. Screndo ger er löpande insikter varje dag, kopplade till era OKRs och mål. AI:n analyserar mönster automatiskt och flaggar blockeringar och risker innan de eskalerar." },
      { q: "Kan anställda se varandras svar?", a: "Nej. Anställda ser bara sin egen data. Managers ser aggregerade insikter om teamet men aldrig individuella momentum-loggar ordagrant. Pulsmätningar är alltid helt anonyma." },
      { q: "Kan Screndo hjälpa oss minska personalomsättningen?", a: "Ja, det är ett av plattformens kärnvärden. Screndo fångar tidiga signaler – lågt pulssnitt, minskad aktivitet, blockeringar som inte löses – och presenterar dem i manager-dashboarden innan de eskalerar till en uppsägning. De flesta anställda som slutar har visat tydliga tecken i 3 månader eller mer. Screndo hjälper chefer att agera i rätt tid." },
      { q: "Fungerar Screndo AI på svenska?", a: "Ja, fullt ut. Screndo innehåller två AI-assistenter. HR-assistenten svarar på frågor om svensk arbetsrätt och era HR-policys. Företags-AI:n är tränad på era egna dokument – vision, värderingar, onboardingmaterial och interna processer – så att nya och befintliga anställda alltid kan få svar direkt utan att behöva fråga en kollega." },
    ],
  },
  en: {
    label: "FAQ",
    headline: "Curious? We've got",
    headlineEm: "the answers.",
    items: [
      { q: "How quickly can we get started?", a: "You're up and running in under 20 minutes. Send us a list of your employees' email addresses, we set up your workspace and send out welcome emails to everyone. No installation, no consultant and no IT ticket needed." },
      { q: "Do we need an HR department to use Screndo?", a: "No. Screndo is built for teams that want to grow without getting stuck in administration – whether you have a dedicated HR manager or not. The platform is simple enough to use without HR expertise but powerful enough to give you professional insights." },
      { q: "Is Screndo GDPR compliant?", a: "Yes. All data is stored within the EU, we use encrypted communication and every employee owns their own data. Anonymous pulse responses are always anonymous – not even you as an employer can see who responded what." },
      { q: "What sets Screndo apart from a regular survey tool?", a: "Survey tools give you data once a quarter with low response rates. Screndo gives you continuous insights every day, linked to your OKRs and goals. The AI automatically analyses patterns and flags blockers and risks before they escalate." },
      { q: "Can employees see each other's responses?", a: "No. Employees only see their own data. Managers see aggregated insights about the team but never individual momentum logs verbatim. Pulse surveys are always completely anonymous." },
      { q: "Can Screndo help us reduce employee turnover?", a: "Yes, that's one of the platform's core purposes. Screndo captures early signals – low pulse averages, reduced activity, unresolved blockers – and surfaces them in the manager dashboard before they escalate to a resignation. Most employees who leave have shown clear signs for 3 months or more. Screndo helps managers act at the right time." },
      { q: "Does Screndo AI work in Swedish?", a: "Yes, fully. Screndo includes two AI assistants. The HR assistant answers questions about Swedish labour law and your HR policies. The Company AI is trained on your own documents – vision, values, onboarding materials and internal processes – so that new and existing employees can always get answers directly without having to ask a colleague." },
    ],
  },
};

function FAQSection({
  lang,
  fadeRef,
  visible,
  fadeStyle,
}: {
  lang: Lang;
  fadeRef: React.RefObject<HTMLDivElement>;
  visible: boolean;
  fadeStyle: (v: boolean, delay?: number, duration?: number) => React.CSSProperties;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ft = FAQ_T[lang];

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section style={{ background: "#2C1810", padding: "100px 0" }}>
      <div ref={fadeRef} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ color: "#C4622D", fontSize: "12px", letterSpacing: "2px", fontWeight: 600, textTransform: "uppercase", marginBottom: "16px", ...fadeStyle(visible, 0, 0.5) }}>
            {ft.label}
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 700, color: "#FAF7F2", lineHeight: 1.15, margin: "0 0 16px", ...fadeStyle(visible, 0.1, 0.6) }}>
            {ft.headline}{" "}<em style={{ fontStyle: "italic", fontFamily: "var(--font-playfair)", background: "linear-gradient(135deg, #C4622D, #E8804A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{ft.headlineEm}</em>
          </h2>
        </div>

        {/* Items */}
        <div style={{ maxWidth: "680px", margin: "0 auto", ...fadeStyle(visible, 0.3, 0.6) }}>
          {ft.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                style={{ borderBottom: "1px solid rgba(250,247,242,0.10)", padding: "24px 0" }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      flex: 1,
                      fontWeight: 600,
                      fontSize: "17px",
                      color: "#FAF7F2",
                      transition: "color 200ms ease",
                      lineHeight: 1.4,
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      color: "#C4622D",
                      fontSize: "20px",
                      lineHeight: 1,
                      flexShrink: 0,
                      display: "inline-block",
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 200ms ease",
                    }}
                  >
                    +
                  </span>
                </button>

                <div
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "400px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    transition: "max-height 300ms ease-out, opacity 300ms ease-out",
                  }}
                >
                  <p style={{ color: "#FAF7F2", fontSize: "15px", lineHeight: 1.8, margin: 0, paddingTop: "12px", paddingBottom: "8px" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hero = useFadeIn(0.05);
  const whyScrendo = useFadeIn();
  const problem = useFadeIn();
  const ctaSection = useFadeIn();
  const faq = useFadeIn();

  const fadeStyle = (v: boolean, delay = 0, duration = 0.6): React.CSSProperties => ({
    opacity: v ? 1 : 0,
    transform: v ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  });

  return (
    <>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      {/* ── HERO + AI DEMO shared background ─────────────────────────────── */}
      <div style={{ position: "relative", overflow: "hidden", background: "#FAF7F2" }}>
        {/* Shared blobs spanning hero + AI demo */}
        <div style={{ position: "absolute", top: "-200px", left: "-150px", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(196,98,45,0.45) 0%, rgba(196,98,45,0.20) 35%, rgba(196,98,45,0.05) 60%, transparent 75%)", filter: "blur(80px)", animation: "heroBlob1 24s ease-in-out infinite alternate", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        <div style={{ position: "absolute", bottom: "-120px", right: "-100px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(139,67,19,0.40) 0%, rgba(139,67,19,0.15) 40%, transparent 70%)", filter: "blur(90px)", animation: "heroBlob2 30s ease-in-out infinite alternate-reverse", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        <div style={{ position: "absolute", top: "30%", left: "40%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(196,98,45,0.30) 0%, rgba(44,24,16,0.10) 50%, transparent 72%)", filter: "blur(70px)", animation: "heroBlob3 20s ease-in-out infinite alternate", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        <style>{`
          @keyframes heroBlob1 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(55px, 45px) scale(1.07); }
          }
          @keyframes heroBlob2 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(-50px, -55px) scale(1.06); }
          }
          @keyframes heroBlob3 {
            0%   { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-38%, -62%) scale(1.09); }
          }
        `}</style>

      <section
        className="hero-section"
        style={{
          background: "transparent",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          ref={hero.ref}
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1100px",
            width: "100%",
            padding: "80px 24px 60px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* ── Left column: text + CTA ── */}
          <div>
            <div
              style={{
                color: "#C4622D",
                fontSize: "12px",
                letterSpacing: "2px",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "24px",
                ...fadeStyle(hero.visible, 0, 0.5),
              }}
            >
              <TypedLabel text="Screndo – People Intelligence Platform" />
            </div>

            <h1
              style={{
                color: "#2C1810",
                fontSize: "clamp(38px, 4.6vw, 50px)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: "0 0 24px",
                fontFamily: "var(--font-playfair)",
                ...fadeStyle(hero.visible, 0.1, 0.6),
              }}
            >
              <span style={{ display: "block" }}>
                <em style={{ ...GRAD, fontStyle: "italic", fontFamily: "var(--font-playfair)", display: "inline-block", paddingRight: "0.06em", paddingBottom: "0.15em" }}>People intelligence,</em>
              </span>
              <span style={{ display: "block" }}>
                built for{" "}
                <em style={{ color: "#C4622D", fontStyle: "italic", fontFamily: "var(--font-playfair)" }}>humans.</em>
              </span>
            </h1>

            <p
              style={{
                color: "rgba(44,24,16,0.68)",
                fontSize: "18px",
                lineHeight: 1.7,
                maxWidth: "460px",
                margin: "0 0 40px",
                ...fadeStyle(hero.visible, 0.4, 0.5),
              }}
            >
              {t.heroBody}
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
                ...fadeStyle(hero.visible, 0.55, 0.5),
              }}
            >
              <div
                className="liquid-glass-wrapper"
                style={{
                  boxShadow: "0 4px 24px rgba(196,98,45,0.35)",
                  borderRadius: "10px",
                  transition: "box-shadow 0.25s ease",
                }}
              >
                <div className="liquid-glass-ring" />
                <a
                  href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
                  style={{
                    display: "inline-block",
                    background: "#C4622D",
                    color: "#FAF7F2",
                    borderRadius: "8px",
                    padding: "14px 36px",
                    fontSize: "16px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "transform 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
                    (e.currentTarget.parentElement as HTMLDivElement).style.boxShadow =
                      "0 8px 36px rgba(196,98,45,0.55)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
                    (e.currentTarget.parentElement as HTMLDivElement).style.boxShadow =
                      "0 4px 24px rgba(196,98,45,0.35)";
                  }}
                >
                  {t.heroButton}
                </a>
              </div>

              <a
                href="/platform"
                style={{
                  display: "inline-block",
                  color: "#2C1810",
                  border: "1.5px solid rgba(44,24,16,0.25)",
                  borderRadius: "8px",
                  padding: "14px 32px",
                  fontSize: "16px",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#C4622D";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#C4622D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(44,24,16,0.25)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#2C1810";
                }}
              >
                {t.heroSecondary}
              </a>
            </div>

          </div>

          {/* ── Right column: floating dashboard card ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "48px",
              ...fadeStyle(hero.visible, 0.5, 0.6),
            }}
          >
            <img
              src="/plattformpreview.png"
              alt="Screndo app"
              style={{
                width: "300px",
                borderRadius: "36px",
                outline: "4px solid #000",
                outlineOffset: "0px",
                boxShadow: "0 32px 80px rgba(44,24,16,0.22), 0 4px 16px rgba(44,24,16,0.10)",
                display: "block",
                animation: hero.visible ? "float 4s ease-in-out infinite" : "none",
              }}
            />
          </div>
        </div>

        {/* Scroll chevron */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: scrolled ? 0 : 1,
            transition: "opacity 0.3s",
            pointerEvents: "none",
            animation: "chevronBounce 1.8s ease-in-out infinite",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 9l6 6 6-6"
              stroke="#2C1810"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.45"
            />
          </svg>
        </div>

        <style>{`
          @media (max-width: 768px) {
            /* Hero section: disable 100vh centering so stacked content starts at top */
            .hero-section {
              height: auto !important;
              min-height: 0 !important;
              display: block !important;
              padding-top: 72px !important;
              padding-bottom: 48px !important;
            }
            /* Hero grid: single column, headline first, image last */
            .hero-grid {
              grid-template-columns: 1fr !important;
              padding: 20px 20px 0 !important;
              gap: 36px !important;
              max-width: 100% !important;
            }
            .hero-grid h1 {
              font-size: 30px !important;
              line-height: 1.2 !important;
            }
            .hero-grid p {
              font-size: 15px !important;
              max-width: 100% !important;
            }
            /* Phone image: full width, centered, below text */
            .hero-grid img {
              width: 100% !important;
              max-width: 280px !important;
              margin: 0 auto !important;
            }
            .hero-grid > div:last-child {
              justify-content: center !important;
              padding-top: 0 !important;
            }
            /* Hero CTA buttons: full width */
            .hero-grid .liquid-glass-wrapper {
              width: 100% !important;
              display: block !important;
            }
            .hero-grid .liquid-glass-wrapper a {
              display: block !important;
              min-height: 48px !important;
              box-sizing: border-box !important;
              text-align: center !important;
            }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-14px); }
          }
          @keyframes chevronBounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50%       { transform: translateX(-50%) translateY(8px); }
          }
        `}</style>
      </section>

      <AIDemoSection key={lang} lang={lang} />
      </div>{/* end shared hero+AI demo background */}

      {/* ── PLATFORM (removed – kept as anchor target only) ───────────────── */}
      <div id="plattform" />

      {/* ── WHY SCRENDO ──────────────────────────────────────────────────── */}
      <section
        id="varfor-screndo"
        style={{ background: "#2C1810", padding: "100px 24px" }}
      >
        <div
          ref={whyScrendo.ref}
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              color: "#C4622D",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "16px",
              ...fadeStyle(whyScrendo.visible, 0, 0.5),
            }}
          >
            {t.whyLabel}
          </div>
          <h2
            style={{
              color: "#FAF7F2",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              margin: "0 0 20px",
              lineHeight: 1.15,
              fontFamily: "var(--font-playfair)",
              ...fadeStyle(whyScrendo.visible, 0.1, 0.6),
            }}
          >
            <GradHeadline text={t.whyHeadline} />
          </h2>
          <p
            style={{
              color: "#E8DDD0",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "620px",
              margin: "0 auto 56px",
              ...fadeStyle(whyScrendo.visible, 0.3, 0.5),
            }}
          >
            {t.whySubtext}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "20px",
            }}
          >
            {t.whyPoints.map((point, i) => (
              <div
                key={point.title}
                style={{
                  background: "rgba(255,255,255,0.10)",
                  backdropFilter: "blur(24px) saturate(180%)",
                  WebkitBackdropFilter: "blur(24px) saturate(180%)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "24px",
                  padding: "32px",
                  textAlign: "left",
                  opacity: whyScrendo.visible ? 1 : 0,
                  transform: whyScrendo.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${0.5 + i * 0.15}s, transform 0.5s ease-out ${0.5 + i * 0.15}s`,
                }}
              >
                <div
                  style={{
                    color: "#FAF7F2",
                    fontWeight: 700,
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  {point.title}
                </div>
                <p
                  style={{
                    color: "rgba(232,221,208,0.8)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <section style={{ background: "#FAF7F2", padding: "100px 24px" }}>
        <div
          ref={problem.ref}
          style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}
        >
          <div
            style={{
              color: "#C4622D",
              fontSize: "12px",
              letterSpacing: "2px",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "16px",
              ...fadeStyle(problem.visible, 0, 0.5),
            }}
          >
            {t.problemLabel}
          </div>

          <h2
            style={{
              color: "#2C1810",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              margin: "0 0 20px",
              lineHeight: 1.15,
              fontFamily: "var(--font-playfair)",
              ...fadeStyle(problem.visible, 0.1, 0.6),
            }}
          >
            <GradHeadline text={t.problemHeadline} />
          </h2>

          <p
            style={{
              color: "rgba(44,24,16,0.65)",
              fontSize: "18px",
              lineHeight: 1.7,
              maxWidth: "580px",
              margin: "0 auto 64px",
              ...fadeStyle(problem.visible, 0.4, 0.5),
            }}
          >
            {t.problemBody}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            {t.problemCards.map((card, i) => (
              <div
                key={card.title}
                style={{
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(24px) saturate(200%)",
                  WebkitBackdropFilter: "blur(24px) saturate(200%)",
                  border: "1px solid rgba(255,255,255,0.95)",
                  borderRadius: "24px",
                  padding: "32px",
                  textAlign: "left",
                  boxShadow: "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)",
                  opacity: problem.visible ? 1 : 0,
                  transform: problem.visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${0.6 + i * 0.15}s, transform 0.5s ease-out ${0.6 + i * 0.15}s`,
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
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 8px 32px rgba(44,24,16,0.08), inset 0 1px 0 rgba(255,255,255,1)";
                  el.style.borderColor = "rgba(255,255,255,0.95)";
                }}
              >
                <h3
                  style={{
                    color: "#2C1810",
                    fontSize: "19px",
                    fontWeight: 700,
                    margin: "0 0 12px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    color: "rgba(44,24,16,0.62)",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section style={{ background: "#ffffff", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        {/* Blob 1 – CTA (same as hero blob 1) */}
        <div style={{ position: "absolute", top: "-200px", left: "-150px", width: "800px", height: "800px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(196,98,45,0.45) 0%, rgba(196,98,45,0.20) 35%, rgba(196,98,45,0.05) 60%, transparent 75%)", filter: "blur(80px)", animation: "ctaBlob1 24s ease-in-out infinite alternate", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        {/* Blob 2 – CTA (same as hero blob 2) */}
        <div style={{ position: "absolute", bottom: "-120px", right: "-100px", width: "650px", height: "650px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(139,67,19,0.40) 0%, rgba(139,67,19,0.15) 40%, transparent 70%)", filter: "blur(90px)", animation: "ctaBlob2 30s ease-in-out infinite alternate-reverse", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        {/* Blob 3 – CTA (same as hero blob 3) */}
        <div style={{ position: "absolute", top: "30%", left: "40%", width: "450px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle at center, rgba(196,98,45,0.30) 0%, rgba(44,24,16,0.10) 50%, transparent 72%)", filter: "blur(70px)", animation: "ctaBlob3 20s ease-in-out infinite alternate", zIndex: 0, pointerEvents: "none", userSelect: "none" }} />
        <style>{`
          @keyframes ctaBlob1 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(55px, 45px) scale(1.07); }
          }
          @keyframes ctaBlob2 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(-50px, -55px) scale(1.06); }
          }
          @keyframes ctaBlob3 {
            0%   { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-38%, -62%) scale(1.09); }
          }
        `}</style>
        <div
          ref={ctaSection.ref}
          style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <h2
            style={{
              color: "#2C1810",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              margin: "0 0 20px",
              lineHeight: 1.15,
              fontFamily: "var(--font-playfair)",
              ...fadeStyle(ctaSection.visible, 0, 0.6),
            }}
          >
            {t.ctaHeadline}
          </h2>

          <p
            style={{
              color: "#8B7355",
              fontSize: "19px",
              lineHeight: 1.65,
              margin: "0 0 44px",
              ...fadeStyle(ctaSection.visible, 0.4, 0.5),
            }}
          >
            {t.ctaBody}
          </p>

          <div
            className="liquid-glass-wrapper"
            style={{ transition: "opacity 0.5s ease-out 0.6s", opacity: ctaSection.visible ? 1 : 0 }}
          >
            <div className="liquid-glass-ring" />
            <a
              href="mailto:info@screndo.com?subject=Intresseanmälan – Demo av Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag är intresserad av att lära mig mer om Screndo och skulle gärna boka in ett kort samtal.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0AAntal anställda: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar,"
              style={{
                display: "inline-block",
                background: "#C4622D",
                color: "#FAF7F2",
                borderRadius: "8px",
                padding: "18px 52px",
                fontSize: "18px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
              }}
            >
              {t.ctaButton}
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQSection lang={lang} fadeRef={faq.ref as React.RefObject<HTMLDivElement>} visible={faq.visible} fadeStyle={fadeStyle} />

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer style={{ background: "#2C1810", padding: "60px 0 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 40px" }}>
          {/* Four-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "48px",
              marginBottom: "48px",
            }}
            className="footer-grid"
          >
            {/* Col 1: Logo + tagline + GDPR */}
            <div>
              <img
                src="/logo.png"
                alt="Screndo"
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  marginBottom: "16px",
                  display: "block",
                }}
              />
              <p
                style={{
                  color: "#E8DDD0",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  margin: "0 0 16px",
                }}
              >
                {t.footerTagline}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
                {/* GDPR badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(250,247,242,0.15)",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    alignSelf: "flex-start",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1L1.5 3.5v4c0 3 2.5 4.5 5.5 4.5s5.5-1.5 5.5-4.5v-4L7 1z"
                      fill="rgba(250,247,242,0.6)"
                    />
                  </svg>
                  <span style={{ color: "rgba(250,247,242,0.6)", fontSize: "11px", fontWeight: 500 }}>
                    GDPR-kompatibel
                  </span>
                </div>

                {/* EU storage badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    border: "1px solid rgba(250,247,242,0.15)",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    alignSelf: "flex-start",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="3" y="6" width="8" height="7" rx="1.5" fill="rgba(250,247,242,0.6)" />
                    <path
                      d="M5 6V4.5a2 2 0 1 1 4 0V6"
                      stroke="rgba(250,247,242,0.6)"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span style={{ color: "rgba(250,247,242,0.6)", fontSize: "11px", fontWeight: 500 }}>
                    Data lagras inom EU
                  </span>
                </div>
              </div>
            </div>

            {/* Col 2: Platform links */}
            <div>
              <div
                style={{
                  color: "#FAF7F2",
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                {t.footerColPlatform}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {t.footerPlatformLinks.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    style={{
                      color: "#E8DDD0",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#E8DDD0")
                    }
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 3: Company links */}
            <div>
              <div
                style={{
                  color: "#FAF7F2",
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                {t.footerColCompany}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {t.footerCompanyLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      color: "#E8DDD0",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#E8DDD0")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: Legal links */}
            <div>
              <div
                style={{
                  color: "#FAF7F2",
                  fontWeight: 600,
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                {t.footerColLegal}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {t.footerLegalLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    style={{
                      color: "#E8DDD0",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "#E8DDD0")
                    }
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }}
          />

          {/* Bottom row */}
          <FooterBottom copyright={t.footerCopyright} />
        </div>

        <style>{`
          @media (max-width: 768px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 480px) {
            .footer-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </footer>
    </>
  );
}
