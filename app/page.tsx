import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      {/* CTA → produktsidan */}
      <div className="home-cta-section" style={{ textAlign: "center", padding: "80px 48px 100px" }}>
        <a
          href="/product"
          className="home-cta-btn"
          style={{
            display: "inline-block",
            background: "#fff",
            color: "#0A0A0A",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 500,
            borderRadius: "999px",
            padding: "14px 32px",
            border: "1px solid #1A1A1A",
          }}
        >
          Se mer om produkten
        </a>
      </div>

      <Footer />
    </div>
  );
}
