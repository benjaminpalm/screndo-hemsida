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

// Per-card start offsets (x, y in px). Factor 1 = start, 0 = end.
const STARTS = [
  { x: -120, y:  -60 }, // row 1 left
  { x:    0, y: -100 }, // row 1 middle
  { x:  120, y:  -60 }, // row 1 right
  { x: -120, y:   60 }, // row 2 left
  { x:    0, y:  100 }, // row 2 middle
  { x:  120, y:   60 }, // row 2 right
]

function cardTransform(i: number, factor: number): string {
  if (factor === 0) return 'none'
  const { x, y } = STARTS[i]
  const parts: string[] = []
  if (x !== 0) parts.push(`translateX(${x * factor}px)`)
  if (y !== 0) parts.push(`translateY(${y * factor}px)`)
  return parts.join(' ')
}

// progress 0: section center at viewport bottom
// progress 1: section center at viewport center
function getProgress(section: HTMLElement): number {
  const rect  = section.getBoundingClientRect()
  const viewH = window.innerHeight
  const sectH = section.offsetHeight
  const sectionCenter = rect.top + sectH / 2
  return Math.min(Math.max((viewH - sectionCenter) / (viewH / 2), 0), 1)
}

export default function PulseCards() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs   = useRef<(HTMLDivElement | null)[]>([])
  const rafRef     = useRef<number | null>(null)
  const hovRef     = useRef<number | null>(null)
  const [hovered,  setHovered] = useState<number | null>(null)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced) {
      cardRefs.current.forEach(el => {
        if (el) { el.style.opacity = '1'; el.style.transform = 'none' }
      })
      return
    }

    // Apply initial offset before first paint
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      el.style.opacity   = '0'
      el.style.transform = cardTransform(i, 1)
    })

    function update() {
      rafRef.current = null
      if (!sectionRef.current) return
      const p = getProgress(sectionRef.current)

      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const isHov = hovRef.current === i && p >= 1
        el.style.transform = isHov ? 'translateY(-2px)' : cardTransform(i, 1 - p)
        el.style.opacity   = String(p)
      })
    }

    function onScroll() {
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update() // seed on mount

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  function handleEnter(i: number) {
    hovRef.current = i
    setHovered(i)
    const el = sectionRef.current
    if (el && getProgress(el) >= 1 && cardRefs.current[i]) {
      cardRefs.current[i]!.style.transform = 'translateY(-2px)'
    }
  }

  function handleLeave(i: number) {
    hovRef.current = null
    setHovered(null)
    const sec = sectionRef.current
    const el  = cardRefs.current[i]
    if (sec && el && getProgress(sec) >= 1) {
      el.style.transform = 'none'
    }
  }

  return (
    <section
      ref={sectionRef}
      style={{ background: '#fff', padding: '56px 64px 112px', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
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

        {/* Cards grid */}
        <div
          className="pulse-cards-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}
        >
          {PULSES.map((pulse, i) => (
            <div
              key={pulse.name}
              ref={el => { cardRefs.current[i] = el }}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              style={{
                background: '#fff',
                borderRadius: '999px',
                padding: '24px 32px',
                border: hovered === i ? '1px solid #04D8B5' : '1px solid #1A1A1A',
                transition: 'border-color 0.15s ease',
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
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <a
            href="/book-intro"
            style={{
              background: '#04D8B5',
              color: '#000',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: 600,
              borderRadius: '100px',
              padding: '12px 24px',
              display: 'inline-block',
            }}
          >
            Kom igång gratis
          </a>
        </div>

      </div>
    </section>
  )
}
