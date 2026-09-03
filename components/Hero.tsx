'use client'

import { useLanguage } from '@/lib/LanguageContext'
import AutoSection from '@/components/AutoSection'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <>
      <section
        className="hero-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          paddingTop: '96px',
          paddingBottom: '64px',
          paddingLeft: '24px',
          paddingRight: '24px',
        }}
      >
        <div style={{ maxWidth: '860px', width: '100%' }}>
          <h1 className="hero-h1">
            {t.headline}
          </h1>

          <p
            className="hero-subline"
            style={{
              color: '#3D3D3D',
              fontSize: '18px',
              fontWeight: 300,
              margin: '0 0 40px 0',
              lineHeight: 1.5,
            }}
          >
            {t.subline}
          </p>

          <div className="hero-buttons">
            <a
              href="/book-intro"
              className="hero-btn-primary"
              style={{
                background: '#2563EB',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                borderRadius: '100px',
                padding: '14px 28px',
                display: 'inline-block',
              }}
            >
              {t.getStarted}
            </a>
            <a
              href="#video-demo"
              className="hero-btn-secondary"
              style={{
                background: '#fff',
                color: '#000',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                borderRadius: '100px',
                padding: '14px 28px',
                border: '1.5px solid #000',
                display: 'inline-block',
              }}
            >
              {t.seeHow}
            </a>
          </div>
        </div>
      </section>

      <div style={{ width: '100%', lineHeight: 0 }}>
        <img
          src="/screndohero1.jpg"
          alt=""
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>

      <AutoSection />

      {/* Full-bleed quote banner */}
      <section
        className="quote-banner-section"
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(260px, 32vw, 420px)',
          overflow: 'hidden',
          marginTop: '100px',
        }}
      >
        <img
          src="/grass-screndo.JPG"
          alt=""
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 25%',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 24px',
        }}>
          <blockquote style={{ margin: 0, textAlign: 'center', maxWidth: '760px' }}>
            <p style={{
              fontSize: 'clamp(17px, 2.3vw, 27px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: 1.45,
              color: '#0A0A0A',
              margin: '0 0 16px 0',
            }}>
              &ldquo;Clients do not come first. Employees come first. If you take care of your employees, they will take care of the clients.&rdquo;
            </p>
            <cite style={{
              fontStyle: 'normal',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0A0A0A',
              opacity: 0.7,
            }}>
              — Richard Branson
            </cite>
          </blockquote>
        </div>
      </section>

      {/* AI-native CTA section */}
      <section className="ai-cta-section" style={{ background: '#fff', padding: '120px 24px 40px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 700,
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
          margin: '0 auto 36px',
          maxWidth: '820px',
          color: '#0A0A0A',
        }}>
          {t.aiNativeHeadline}
        </h2>
        <a
          href="#video-demo"
          className="hero-btn-primary"
          style={{
            background: '#2563EB',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 600,
            borderRadius: '100px',
            padding: '14px 28px',
            display: 'inline-block',
          }}
        >
          {t.watchDemo}
        </a>
      </section>

      {/* Standalone product screenshot */}
      <div className="product-shot-wrap" style={{ display: 'flex', justifyContent: 'center', padding: '24px 24px 80px' }}>
        <img
          src="/screndomacv3.png"
          alt="Screndo"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '1500px',
            height: 'auto',
          }}
        />
      </div>

      {/* Founded section: text left, university image right */}
      <section className="founded-section" style={{ background: '#fff', padding: '120px 24px' }}>
        <div
          className="hero-two-col"
          style={{ display: 'flex', gap: '6%', alignItems: 'center', maxWidth: '1160px', margin: '0 auto' }}
        >
          <div style={{ flex: '0 0 42%' }}>
            <h2 style={{
              fontSize: 'clamp(22px, 3.5vw, 42px)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              margin: '0 0 20px 0',
              color: '#0A0A0A',
              textAlign: 'left',
            }}>
              {t.foundedHeadline}
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#3D3D3D',
              margin: 0,
              textAlign: 'left',
            }}>
              {t.foundedBody}
            </p>
          </div>

          <div style={{ flex: 1 }}>
            <img
              src="/hskolan.jpg"
              alt="Högskolan i Halmstad"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                borderRadius: '22px',
              }}
            />
          </div>
        </div>
      </section>

      {/* Brand photo section */}
      <div className="brand-photo-wrap" style={{ display: 'flex', justifyContent: 'center', padding: '0 24px 100px' }}>
        <img
          src="/macscrendo2.jpg"
          alt="Screndo"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '1320px',
            height: 'auto',
            borderRadius: '22px',
          }}
        />
      </div>
    </>
  )
}
