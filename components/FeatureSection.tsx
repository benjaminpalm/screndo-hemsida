export default function FeatureSection() {
  return (
    <section className="feature-section-wrap" style={{ background: "#fff", padding: "96px 48px" }}>
      <div
        className="feature-section-inner"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* Left column */}
        <div style={{ flex: 1 }}>
          <h2
            className="feature-section-h2"
            style={{
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: "#0A0A0A",
              margin: 0,
              marginBottom: "8px",
              lineHeight: 1.1,
            }}
          >
            En fråga i veckan
          </h2>
          <h2
            className="feature-section-h2"
            style={{
              fontSize: "44px",
              fontWeight: 800,
              letterSpacing: "-1.5px",
              color: "#0A0A0A",
              margin: 0,
              marginBottom: "32px",
              lineHeight: 1.1,
            }}
          >
            Svar på en minut.
          </h2>
          <p
            style={{
              color: "#6B6B6B",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Medarbetare svarar direkt via mobilen. Inga inloggningar, inga långa formulär. Öppna frågor ger utrymme för den som vill berätta mer.
          </p>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src="/screndoiphone.png"
            alt=""
            className="feature-section-img"
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "24px",
              objectFit: "contain",
              padding: "24px",
            }}
          />
        </div>
      </div>
    </section>
  )
}
