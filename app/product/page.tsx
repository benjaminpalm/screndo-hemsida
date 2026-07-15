import Navbar from "@/components/Navbar";
import ProductSearch from "@/components/ProductSearch";
import WhatWeDo from "@/components/WhatWeDo";
import PulseSection from "@/components/PulseSection";
import InsightsSection from "@/components/InsightsSection";
import AppSection from "@/components/AppSection";
import ProductCTA from "@/components/ProductCTA";
import Footer from "@/components/Footer";

export default function Produkt() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <ProductSearch />
      <WhatWeDo />
      <PulseSection />
      <InsightsSection />
      <AppSection />
      <ProductCTA />
      <Footer />
    </div>
  );
}
