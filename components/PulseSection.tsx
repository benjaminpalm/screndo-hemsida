export default function PulseSection() {
  return (
    <section style={{ background: "#fff", padding: "120px 48px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "80px",
        }}
      >
        {/* Left column */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              color: "#04D8B5",
              textTransform: "uppercase",
              marginBottom: "16px",
              margin: "0 0 16px 0",
            }}
          >
            PULSEN
          </p>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-1.5px",
              color: "#0A0A0A",
              lineHeight: 1.15,
              margin: "0 0 20px 0",
            }}
          >
            En fråga i veckan. Svar på en minut.
          </h2>
          <p
            style={{
              color: "#6B6B6B",
              fontSize: "17px",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Medarbetare svarar direkt i mobilen. Du ser svarsfrekvensen i realtid och vet exakt hur många som hunnit svara.
          </p>
        </div>

        {/* Right column */}
        <div style={{ flex: 1 }}>
          <img
            src="/svarfrekvensscrendo.jpg"
            alt=""
            style={{
              width: "100%",
              borderRadius: "16px",
              border: "1px solid #ECECEC",
              display: "block",
            }}
          />
        </div>
      </div>
    </section>
  )
}
