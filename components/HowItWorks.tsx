const cards = [
  {
    number: "01",
    title: "Listen",
    description:
      "Screndo continuously collects signals from your organization — feedback, sentiment, patterns — without survey fatigue.",
  },
  {
    number: "02",
    title: "Translate",
    description:
      "Raw organizational data becomes structured insight. We separate noise from signal automatically.",
  },
  {
    number: "03",
    title: "Act",
    description:
      "HR and leadership get clear, prioritized intelligence — not data dumps. Know what matters, when it matters.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-pad" style={{ background: "#F8F7F4" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <p
          style={{
            color: "#04D8B5",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          How it works
        </p>

        <h2
          style={{
            fontSize: "44px",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            margin: "0 0 56px 0",
          }}
        >
          Three steps to{" "}
          <span style={{ fontStyle: "italic" }}>clarity.</span>
        </h2>

        <div className="cards-grid">
          {cards.map((card) => (
            <div
              key={card.number}
              style={{
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid #ECECEC",
                padding: "36px 32px",
              }}
            >
              <p
                style={{
                  color: "#04D8B5",
                  fontWeight: 800,
                  fontSize: "15px",
                  margin: "0 0 20px 0",
                  letterSpacing: "0.5px",
                }}
              >
                {card.number}
              </p>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.5px",
                  margin: "0 0 16px 0",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  color: "#6B6B6B",
                  fontSize: "16px",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
