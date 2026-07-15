'use client'

import { useRef, useEffect, useState } from 'react'

const PULSES = [
  { name: "Trivsel",          question: "Hur bra trivs du, 1 till 10?" },
  { name: "Arbetsbelastning", question: "Hur hanterbar känns din arbetsbörda?" },
  { name: "Ledarskap",        question: "Hur väl stöttar din närmaste chef dig?" },
  { name: "Teamkänsla",       question: "Hur väl fungerar samarbetet i teamet?" },
  { name: "eNPS",             question: "Skulle du rekommendera oss som arbetsplats?" },
  { name: "Arbetsmiljö",      question: "Hur fungerar din arbetsmiljö för det du ska göra?" },
]

// Column-based pre-animation offsets (3-column grid)
function getInitialTransform(col: number) {
  if (col === 0) return 'translateX(-40px)'
  if (col === 1) return 'translateY(30px)'
  return 'translateX(40px)'
}

const STAGGER_MS       = 50
const LAST_SETTLE_MS   = 600

export default function PulseCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible,       setVisible]       = useState(false)
  const [settled,       setSettled]       = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hovered,       setHovered]       = useState<number | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReducedMotion(reduced)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
          const totalMs = (PULSES.length - 1) * STAGGER_MS + LAST_SETTLE_MS
          setTimeout(() => setSettled(true), reduced ? 0 : totalMs)
        }
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const isReady = visible || reducedMotion

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#fff',
        padding: '96px 48px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <h2
            className="pulse-cards-h2"
            style={{
              fontSize: '44px',
              fontWeight: 500,
              letterSpacing: '-1.5px',
              color: '#0A0A0A',
              margin: '0 0 14px',
              lineHeight: 1.1,
            }}
          >
            Mät det som spelar roll
          </h2>
          <p style={{ color: '#6B6B6B', fontSize: '17px', lineHeight: 1.7, margin: 0 }}>
            Rotera mellan färdiga pulsar eller låt Screndo föreslå nästa utifrån vad som händer.
          </p>
        </div>

        {/* Cards */}
        <div
          className="pulse-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {PULSES.map((pulse, i) => {
            const col       = i % 3
            const delay     = i * STAGGER_MS / 1000
            const isHovered = hovered === i

            let transform: string
            if (!isReady) {
              transform = getInitialTransform(col)
            } else if (isHovered) {
              transform = 'translateY(-2px)'
            } else {
              transform = 'none'
            }

            const transition = reducedMotion
              ? 'none'
              : settled
              ? 'transform 0.18s ease, border-color 0.15s ease'
              : `transform 0.5s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s, opacity 0.4s ease ${delay}s`

            return (
              <div
                key={pulse.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  borderRadius: '999px',
                  padding: '24px 32px',
                  border: isHovered ? '1px solid #04D8B5' : '1px solid #1A1A1A',
                  transform,
                  opacity: isReady ? 1 : 0,
                  transition,
                  cursor: 'default',
                  willChange: 'transform, opacity',
                }}
              >
                <div style={{ fontSize: '14px', color: '#0A0A0A', marginBottom: '5px' }}>
                  {pulse.name}
                </div>
                <p style={{ margin: 0, fontSize: '12px', color: '#6B6B6B', lineHeight: 1.6 }}>
                  {pulse.question}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
