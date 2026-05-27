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
        See the whole picture. Not just the survey results.
      </h2>

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
        Book an intro
      </a>
    </section>
  );
}
