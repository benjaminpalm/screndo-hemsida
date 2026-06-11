'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const energyData = [42, 45, 43, 38, 35, 33, 36, 40, 44, 46, 43, 40, 38, 35, 32, 30, 33, 36, 38, 40, 42, 44, 46, 48, 45, 43, 40, 38, 36, 35]

function buildSparklinePath(data: number[], width: number, height: number): string {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const pad = 2
  const h = height - pad * 2
  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: pad + (1 - (v - min) / range) * h,
  }))
  return points.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x.toFixed(2)},${p.y.toFixed(2)}`
    const prev = points[i - 1]
    const cpX = ((prev.x + p.x) / 2).toFixed(2)
    return `${acc} C ${cpX},${prev.y.toFixed(2)} ${cpX},${p.y.toFixed(2)} ${p.x.toFixed(2)},${p.y.toFixed(2)}`
  }, '')
}

const initialExpectations = [
  'Ta tydligare ägarskap över klientleveranser och kommunicera status proaktivt utan att behöva påminnas.',
  'Initiera minst ett strategiskt förbättringsförslag inom sitt ansvarsområde under Q2.',
  'Prioritera och avgränsa sitt arbete för att säkra en hållbar prestation över tid.',
]

const synthesisSections = [
  {
    label: 'Fokus och riktning',
    text: 'Jonas har de senaste veckorna fokuserat på att driva klientleveranser mot en stram deadline, parallellt med löpande operativa ärenden. Planeringen inför kommande sprint är i gång men upplever viss osäkerhet kring vad som faktiskt ska prioriteras. Engagemanget för arbetet är tydligt men koncentreras just nu mer på att hålla tempot än att navigera riktningen.',
    basis: 'Baserat på 14 loggar senaste 30 dagarna',
  },
  {
    label: 'Energi och arbetsbelastning',
    text: 'Energinivån har varierat tydligt under perioden och är nära kopplad till graden av klarhet i arbetet. Dagar med ostört fokus och tydlig agenda genererar märkbart högre arbetskapacitet. Det är ett konsekvent mönster: när arbetsbelastningen är ostrukturerad eller innehåller många parallella ärenden påverkas förmågan att avsluta dagen mentalt.',
    sparkline: true,
    basis: 'Baserat på 14 loggar senaste 30 dagarna',
  },
  {
    label: 'Gap mot förväntningar',
    text: 'Jonas loggar återkommande stress kopplad till otydliga prioriteringar och parallella arbetsuppgifter — något som direkt motverkar förväntningen om proaktivt ägarskap och tydlig kommunikation. Det finns ett gap mellan den förväntade självständigheten och den upplevda bristen på struktur i den dagliga arbetsmiljön.\n\nFörväntningen om strategiska initiativ verkar svår att infria när Jonas kämpar med att hålla sig flytande i det operativa. Det finns engagemang och kapacitet — men utrymmet saknas just nu.',
    basis: 'Baserat på 14 loggar och 3 satta förväntningar',
  },
  {
    label: 'Utveckling och ambition',
    text: 'Jonas har signalerat intresse för att ta mer strategiskt ansvar och driva gemensamma initiativ framåt. Rörelsen i den riktningen är påbörjad men bromsar upp av det operativa trycket. Om utrymmet skapas finns förutsättningarna för att han ska kunna bidra på en mer senior nivå under andra halvåret.',
    basis: 'Baserat på 14 loggar senaste 30 dagarna',
  },
]

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '10px',
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  fontWeight: 400,
  margin: '0 0 10px 0',
}

const expectationsLabelStyle: React.CSSProperties = {
  fontSize: '11px',
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 12px 0',
}

function AutoTextarea({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto'
      ref.current.style.height = ref.current.scrollHeight + 'px'
    }
  }, [value])

  return (
    <textarea
      ref={ref}
      value={value}
      rows={1}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: 'transparent',
        border: '0.5px solid rgba(255,255,255,0.07)',
        borderRadius: '8px',
        padding: '10px 12px',
        fontSize: '13px',
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.6,
        width: '100%',
        resize: 'none',
        outline: 'none',
        fontFamily: 'inherit',
        fontWeight: 400,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    />
  )
}

export default function TeamMemberPage() {
  const [expectations, setExpectations] = useState<string[]>(initialExpectations)
  const [saved, setSaved] = useState<string[]>(initialExpectations)
  const dirty = JSON.stringify(expectations) !== JSON.stringify(saved)

  function update(i: number, val: string) {
    setExpectations((prev) => prev.map((e, idx) => (idx === i ? val : e)))
  }

  function remove(i: number) {
    setExpectations((prev) => prev.filter((_, idx) => idx !== i))
  }

  function add() {
    setExpectations((prev) => [...prev, ''])
  }

  function save() {
    setSaved(expectations)
  }

  return (
    <div style={{ background: '#0c0c0c', minHeight: '100%' }}>
    <div style={{ maxWidth: '720px', margin: '0 auto', padding: '48px 24px' }}>
      <Link href="/dashboard/team" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', fontWeight: 400 }}>
        ← Tillbaka
      </Link>

      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 40px 0' }}>
        Jonas Lindqvist
      </h1>

      {/* AI synthesis sections */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
        {synthesisSections.map((s) => (
          <div key={s.label} style={{ background: '#161616', borderRadius: '12px', padding: '20px' }}>
            <p style={sectionLabelStyle}>{s.label}</p>
            {'sparkline' in s && s.sparkline && (
              <>
              <svg
                viewBox="0 0 300 40"
                preserveAspectRatio="none"
                style={{ width: '100%', height: '40px', display: 'block' }}
              >
                <path
                  d={buildSparklinePath(energyData, 300, 40)}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', textAlign: 'right', margin: '2px 0 14px 0', fontWeight: 400 }}>30 dagar</p>
              </>
            )}
            {s.text.split('\n\n').map((para, i) => (
              <p key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, fontWeight: 400, margin: i > 0 ? '12px 0 0 0' : '0' }}>
                {para}
              </p>
            ))}
            {'basis' in s && (
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontWeight: 400, margin: '10px 0 0 0' }}>
                {s.basis}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Förväntningar */}
      <div>
        <p style={expectationsLabelStyle}>Förväntningar</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '14px' }}>
          {expectations.map((e, i) => (
            <div key={i}>
              <AutoTextarea value={e} onChange={(val) => update(i, val)} />
              <button
                onClick={() => remove(i)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontFamily: 'inherit', fontWeight: 400, padding: '4px 0 0 0' }}
                onMouseEnter={(ev) => (ev.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
                onMouseLeave={(ev) => (ev.currentTarget.style.color = 'rgba(255,255,255,0.2)')}
              >
                Ta bort
              </button>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={add}
            style={{ border: '0.5px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.35)', fontSize: '12px', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 400 }}
          >
            + Lägg till förväntan
          </button>
          {dirty && (
            <button
              onClick={save}
              style={{ border: '0.5px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.35)', fontSize: '12px', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 400 }}
            >
              Spara
            </button>
          )}
        </div>
      </div>
    </div>
    </div>
  )
}
