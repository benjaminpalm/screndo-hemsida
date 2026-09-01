'use client'

import { useLanguage } from '@/lib/LanguageContext'

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
          src="/hemsidawis.png"
          alt=""
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
      </div>

      {/* Two-column section: text left, Mac mockup right */}
      <section style={{ background: '#fff', padding: '100px 64px' }}>
        <div className="hero-two-col" style={{ display: 'flex', gap: '6%', alignItems: 'stretch' }}>

          {/* Left column: heading + body, with internal padding to breathe away from outer edge */}
          <div style={{ flex: '0 0 42%', display: 'flex', flexDirection: 'column', paddingLeft: '6%', paddingTop: '10%' }}>
            <h2 style={{
              fontSize: 'clamp(16px, 3.5vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              margin: '0 0 24px 0',
              color: '#0A0A0A',
              textAlign: 'left',
            }}>
              {t.heroFeatureHeadline}
            </h2>
            <p style={{
              fontSize: '15px',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#3D3D3D',
              margin: 0,
              textAlign: 'left',
              maxWidth: '460px',
            }}>
              {t.heroFeatureParagraph}
            </p>
          </div>

          {/* Right column: Mac mockup, fills same height as text column */}
          <div style={{ flex: 1, alignSelf: 'stretch', paddingTop: '8%' }}>
            <img
              src="/screndomacv3.png"
              alt="Hero"
              style={{
                display: 'block',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'top center',
              }}
            />
          </div>

        </div>
      </section>
    </>
  )
}
