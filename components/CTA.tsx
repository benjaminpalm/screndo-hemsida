export default function CTA() {
  return (
    <section
      className="section-pad"
      style={{
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h2 className="cta-h2">
        Ready to{" "}
        <span style={{ fontWeight: 300, fontStyle: "italic" }}>listen</span>{" "}
        differently?
      </h2>

      <p
        style={{
          color: "#6B6B6B",
          fontSize: "18px",
          lineHeight: 1.5,
          margin: "0 0 40px 0",
        }}
      >
        See what your organization is telling you — starting today.
      </p>

      <a
        href="#"
        style={{
          background: "#04D8B5",
          color: "#000",
          textDecoration: "none",
          fontSize: "16px",
          fontWeight: 600,
          borderRadius: "100px",
          padding: "14px 28px",
          display: "inline-block",
        }}
      >
        Book a demo →
      </a>
    </section>
  );
}
