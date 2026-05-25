export default function Vision() {
  return (
    <section
      className="vision-pad"
      style={{ background: "#fff", display: "flex", justifyContent: "center" }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        <p
          style={{
            color: "#04D8B5",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "32px",
          }}
        >
          Our vision
        </p>

        <p
          style={{
            fontSize: "36px",
            fontWeight: 300,
            fontStyle: "italic",
            letterSpacing: "-1px",
            lineHeight: 1.5,
            margin: "0 0 28px 0",
            color: "#000",
          }}
        >
          We believe every organization deserves to understand itself.
        </p>

        <p style={{ color: "#6B6B6B", fontSize: "16px", lineHeight: 1.7, margin: 0 }}>
          Screndo exists to close the gap between what leadership thinks is happening and what people are actually experiencing.
        </p>
      </div>
    </section>
  );
}
