"use client";

import Link from "next/link";

const PLATFORM_LINKS = [
  { label: "Screndo Reflect", href: "/platform#produkter" },
  { label: "Screndo AI", href: "/platform#produkter" },
];

const COMPANY_LINKS = [
  { label: "Om Screndo", href: "/vision" },
  { label: "Varför Screndo", href: "/why-screndo" },
  { label: "Kontakt", href: "mailto:info@screndo.com?subject=Fråga om Screndo&body=Hej Benjamin,%0D%0A%0D%0AJag har en fråga angående Screndo.%0D%0A%0D%0AMitt namn: %0D%0AMitt företag: %0D%0ATelefonnummer: %0D%0A%0D%0AMed vänliga hälsningar," },
];

const LEGAL_LINKS = [
  { label: "Integritetspolicy", href: "/privacy" },
  { label: "GDPR & dataskydd", href: "/gdpr" },
  { label: "Juridisk information", href: "/legal" },
];

const linkStyle: React.CSSProperties = {
  color: "#E8DDD0",
  fontSize: "14px",
  textDecoration: "none",
  transition: "color 0.2s",
};

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {links.map(({ label, href }) => (
        <Link
          key={label}
          href={href}
          style={linkStyle}
          onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#C4622D")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#E8DDD0")}
        >
          {label}
        </Link>
      ))}
    </div>
  );
}

function ColHeader({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: "#FAF7F2", fontWeight: 600, fontSize: "14px", marginBottom: "16px" }}>
      {children}
    </div>
  );
}

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  border: "1px solid rgba(250,247,242,0.15)",
  borderRadius: "20px",
  padding: "6px 12px",
  alignSelf: "flex-start",
};

const badgeTextStyle: React.CSSProperties = {
  color: "rgba(250,247,242,0.6)",
  fontSize: "11px",
  fontWeight: 500,
};

export default function SiteFooter() {
  return (
    <footer style={{ background: "#2C1810", padding: "60px 0 0" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px 40px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", marginBottom: "48px" }}
          className="footer-grid"
        >
          {/* Col 1: Logo + tagline + badges */}
          <div>
            <img
              src="/logo.png"
              alt="Screndo"
              style={{ height: "56px", width: "auto", objectFit: "contain", marginBottom: "16px", display: "block" }}
            />
            <p style={{ color: "#E8DDD0", fontSize: "14px", lineHeight: 1.6, margin: "0 0 16px" }}>
              People intelligence för moderna team.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "12px" }}>
              {/* GDPR badge */}
              <div style={badgeStyle}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1L1.5 3.5v4c0 3 2.5 4.5 5.5 4.5s5.5-1.5 5.5-4.5v-4L7 1z"
                    fill="rgba(250,247,242,0.6)"
                  />
                </svg>
                <span style={badgeTextStyle}>GDPR-kompatibel</span>
              </div>
              {/* EU storage badge */}
              <div style={badgeStyle}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="3" y="6" width="8" height="7" rx="1.5" fill="rgba(250,247,242,0.6)" />
                  <path
                    d="M5 6V4.5a2 2 0 1 1 4 0V6"
                    stroke="rgba(250,247,242,0.6)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span style={badgeTextStyle}>Data lagras inom EU</span>
              </div>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <ColHeader>Plattform</ColHeader>
            <FooterLinks links={PLATFORM_LINKS} />
          </div>

          {/* Col 3: Company */}
          <div>
            <ColHeader>Företaget</ColHeader>
            <FooterLinks links={COMPANY_LINKS} />
          </div>

          {/* Col 4: Legal */}
          <div>
            <ColHeader>Juridiskt</ColHeader>
            <FooterLinks links={LEGAL_LINKS} />
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", marginBottom: "24px" }} />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <span style={{ color: "#E8DDD0", fontSize: "13px" }}>
            © 2026 Screndo AB. Alla rättigheter förbehållna.
          </span>

          <a
            href="https://www.linkedin.com/company/screndo"
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
  );
}
