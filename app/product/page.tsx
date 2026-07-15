import Navbar from "@/components/Navbar";
import ProductSearch from "@/components/ProductSearch";
import WhatWeDo from "@/components/WhatWeDo";
import FeatureSection from "@/components/FeatureSection";
import PulseCards from "@/components/PulseCards";
import Footer from "@/components/Footer";

export default function Produkt() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <ProductSearch />
      <WhatWeDo />
      <FeatureSection />
      <PulseCards />

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "0 48px 100px" }}>
        <a
          href="/book-intro"
          style={{
            display: "inline-block",
            background: "#04D8B5",
            color: "#000",
            textDecoration: "none",
            fontSize: "15px",
            fontWeight: 600,
            borderRadius: "100px",
            padding: "12px 24px",
          }}
        >
          Kom igång gratis
        </a>
      </div>

      <Footer />
    </div>
  );
}
