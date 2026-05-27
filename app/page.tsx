import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import PhoneMockups from "@/components/PhoneMockups";
import HowItWorks from "@/components/HowItWorks";
import Vision from "@/components/Vision";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <PhoneMockups />
      <HowItWorks />
      <Vision />
      <CTA />
      <Footer />
    </div>
  );
}
