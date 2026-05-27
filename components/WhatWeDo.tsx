export default function WhatWeDo() {
  return (
    <section
      className="section-pad"
      style={{ background: "#fff", display: "flex", justifyContent: "center" }}
    >
      <div style={{ maxWidth: "860px", width: "100%" }}>
        <h2
          style={{
            fontSize: "44px",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: "0 0 36px 0",
          }}
        >
          Most organizations are full of signal. Almost none of it gets heard.
        </h2>

        <p
          style={{
            color: "#6B6B6B",
            fontSize: "18px",
            lineHeight: 1.8,
            margin: "0 0 24px 0",
          }}
        >
          Screndo is a continuous people intelligence platform. It listens to your organization through structured and unstructured data and translates that into clear insight for HR and leadership.
        </p>

        <p style={{ color: "#6B6B6B", fontSize: "18px", lineHeight: 1.8, margin: 0 }}>
          Not another annual survey. Not a dashboard nobody opens. A system that actually works.
        </p>
      </div>
    </section>
  );
}
