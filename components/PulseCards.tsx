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

// Pre-animation: scattered offsets and rotations per card
const OFFSETS = [
  { x: -32, y: -18, r: -5 },
  { x:  22, y: -24, r:  4 },
  { x: -16, y:  14, r: -3 },
  { x:  28, y: -12, r:  6 },
  { x: -26, y:  22, r: -4 },
  { x:  30, y:  18, r:  5 },
]

const STAGGER_MS = 70
const LAST_CARD_SETTLE_MS = 600 // duration after last card starts

export default function PulseCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible]           = useState(false)
  const [settled, setSettled]           = useState(false) // true after all cards have landed
  const [reducedMotion, setReducedMotion] = useState(false)
  const [hovered, setHovered]           = useState<number | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const reduced = mq.matches
    setReducedMotion(reduced)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()

          // After last card has settled, switch to hover-only transitions
          const totalMs = (PULSES.length - 1) * STAGGER_MS + LAST_CARD_SETTLE_MS
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
        background: '#F8F7F4',
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
              fontWeight: 800,
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
            const off   = OFFSETS[i]
            const delay = i * STAGGER_MS / 1000
            const isHovered = hovered === i

            // Determine transform
            let transform: string
            if (!isReady) {
              transform = `translate(${off.x}px, ${off.y}px) rotate(${off.r}deg)`
            } else if (isHovered) {
              transform = 'translateY(-2px) rotate(0deg)'
            } else {
              transform = 'translateY(0px) rotate(0deg)'
            }

            // After cards have settled, use a fast hover transition only
            const transition = reducedMotion
              ? 'none'
              : settled
              ? 'transform 0.18s ease, border-color 0.15s ease'
              : `transform 0.42s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s, opacity 0.36s ease ${delay}s`

            return (
              <div
                key={pulse.name}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '22px 24px',
                  boxShadow: '0 2px 14px rgba(0,0,0,0.06)',
                  border: isHovered ? '1.5px solid #04D8B5' : '1.5px solid transparent',
                  transform,
                  opacity: isReady ? 1 : 0.2,
                  transition,
                  cursor: 'default',
                  willChange: 'transform, opacity',
                }}
              >
                <div style={{ fontSize: '15px', color: '#0A0A0A', marginBottom: '7px' }}>
                  {pulse.name}
                </div>
                <p style={{ margin: 0, fontSize: '13px', color: '#6B6B6B', lineHeight: 1.65 }}>
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
