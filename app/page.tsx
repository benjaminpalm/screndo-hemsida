import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomeCTA from "@/components/HomeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <HomeCTA />
      <Footer />
    </div>
  );
}
