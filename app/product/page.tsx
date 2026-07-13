import { LanguageProvider } from "@/lib/LanguageContext";
import Navbar from "@/components/Navbar";
import WhatWeDo from "@/components/WhatWeDo";
import GardenImage from "@/components/GardenImage";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Produkt() {
  return (
    <LanguageProvider>
      <div style={{ background: "#fff", minHeight: "100vh" }}>
        <Navbar />
        <WhatWeDo />
        <GardenImage />
        <CTA />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
