import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <Hero />

      {/* Video section */}
      <section
        id="video-demo"
        style={{
          background: '#fff',
          padding: '64px 24px 120px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '1160px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(16px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.2,
            color: '#0A0A0A',
            margin: '0 0 48px 0',
          }}>
            Se hur Screndo fungerar
          </h2>
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/kpi51gp1KC4"
              title="Se vad Screndo är"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '12px',
              }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
