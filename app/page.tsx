import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import PulseCards from "@/components/PulseCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <FeatureSection />
      <PulseCards />
      <Footer />
    </div>
  );
}
