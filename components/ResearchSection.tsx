'use client'

import { useRef, useState, useEffect } from 'react'
import { useLanguage } from '@/lib/LanguageContext'

export default function ResearchSection() {
  const { t } = useLanguage()
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const slideBase: React.CSSProperties = {
    transition: 'opacity 0.55s ease-out, transform 0.55s ease-out',
  }

  return (
    <section ref={ref} className="research-section" style={{ background: '#fff' }}>
      {/* Heading — centered */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
        <div style={{ maxWidth: '760px', width: '100%', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(22px, 3.5vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            margin: '0 0 20px 0',
            color: '#0A0A0A',
          }}>
            {t.researchHeadline}
          </h2>
          <p style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.75,
            color: '#3D3D3D',
            margin: 0,
          }}>
            {t.researchParagraph}
          </p>
        </div>
      </div>

      {/* Card grid */}
      <div className="research-grid">

        {/* Left card — spans both rows, animated glow background */}
        <div
          className="research-card-left"
          style={{
            ...slideBase,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '22px',
            background: '#05080f',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-40px)',
          }}
        >
          <div className="research-glow" />
          <div style={{
            position: 'relative',
            zIndex: 1,
            padding: '44px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxSizing: 'border-box',
          }}>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
              margin: '0 0 16px 0',
            }}>
              {t.researchCard1Title}
            </h3>
            <p style={{
              fontSize: '15px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              margin: '0 0 44px 0',
            }}>
              {t.researchCard1Body}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: 'auto' }}>
              {t.researchDimensions.map((dim) => (
                <span
                  key={dim}
                  style={{
                    background: 'rgba(255,255,255,0.9)',
                    color: '#0A0A0A',
                    fontSize: '13px',
                    fontWeight: 500,
                    borderRadius: '100px',
                    padding: '7px 16px',
                  }}
                >
                  {dim}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Top right card */}
        <div
          style={{
            ...slideBase,
            borderRadius: '22px',
            background: '#F4F5F3',
            padding: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
          }}
        >
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#0A0A0A',
            letterSpacing: '-0.01em',
            margin: '0 0 14px 0',
          }}>
            {t.researchCard2Title}
          </h3>
          <p style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#3D3D3D',
            margin: 0,
          }}>
            {t.researchCard2Body}
          </p>
        </div>

        {/* Bottom right card */}
        <div
          style={{
            ...slideBase,
            borderRadius: '22px',
            background: '#F4F5F3',
            padding: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(40px)',
            transitionDelay: visible ? '175ms' : '0ms',
          }}
        >
          <h3 style={{
            fontSize: '18px',
            fontWeight: 700,
            color: '#0A0A0A',
            letterSpacing: '-0.01em',
            margin: '0 0 14px 0',
          }}>
            {t.researchCard3Title}
          </h3>
          <p style={{
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.7,
            color: '#3D3D3D',
            margin: 0,
          }}>
            {t.researchCard3Body}
          </p>
        </div>

      </div>
    </section>
  )
}
