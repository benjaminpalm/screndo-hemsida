"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import BlobBackground from "@/components/BlobBackground";

const EMAIL = "info@screndo.com";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <>
      <Navbar />

      <section
        style={{
          background: "#FAF7F2",
          minHeight: "100svh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <BlobBackground />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#C4622D",
              margin: "0 0 32px",
            }}
          >
            Kontakt
          </p>

          <div
            style={{
              fontSize: "clamp(28px, 5vw, 48px)",
              fontWeight: 700,
              color: "#2C1810",
              fontFamily: "var(--font-geist-sans)",
              marginBottom: "32px",
              letterSpacing: "-0.01em",
            }}
          >
            {EMAIL}
          </div>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`mailto:${EMAIL}`}
              style={{
                display: "inline-block",
                background: "#C4622D",
                color: "#FAF7F2",
                borderRadius: "8px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
            >
              Skicka mail
            </a>

            <button
              onClick={copyEmail}
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#2C1810",
                border: "1.5px solid rgba(44,24,16,0.25)",
                borderRadius: "8px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "#C4622D";
                el.style.color = "#C4622D";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(44,24,16,0.25)";
                el.style.color = "#2C1810";
              }}
            >
              {copied ? "Kopierat ✓" : "Kopiera"}
            </button>
          </div>
        </div>

        <style>{`
          @keyframes bgBlob1 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(55px, 45px) scale(1.07); }
          }
          @keyframes bgBlob2 {
            0%   { transform: translate(0px, 0px) scale(1); }
            100% { transform: translate(-50px, -55px) scale(1.06); }
          }
          @keyframes bgBlob3 {
            0%   { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-38%, -62%) scale(1.09); }
          }
        `}</style>
      </section>

      <SiteFooter />
    </>
  );
}
