import Navbar from "@/components/Navbar";
import ProductSearch from "@/components/ProductSearch";
import WhatWeDo from "@/components/WhatWeDo";
import FeatureSection from "@/components/FeatureSection";
import PulseCards from "@/components/PulseCards";
import PulseLibrary from "@/components/PulseLibrary";
import ProductGetStarted from "@/components/ProductGetStarted";
import Footer from "@/components/Footer";

export default function Produkt() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <ProductSearch />
      <WhatWeDo />
      <FeatureSection />
      <PulseCards />
      <PulseLibrary />
      <ProductGetStarted />
      <Footer />
    </div>
  );
}
