'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const logs = [
  { date: 'Måndag 2 jun', text: 'Kände mig ganska pressad idag. Vi har en deadline på fredag och jag är osäker på om vi hinner. Saknar tydlighet kring vad som faktiskt är prioriterat just nu.' },
  { date: 'Fredag 30 maj', text: 'Bra möte med teamet på förmiddagen men eftermiddagen spårade ur med tre parallella akutärenden. Svårt att fokusera och lämna jobbet mentalt när jag stänger datorn.' },
  { date: 'Torsdag 29 maj', text: 'En av de bättre dagarna den här veckan. Fick äntligen tid att jobba ostört med analysen. Känner mig nöjd med det jag levererade.' },
  { date: 'Onsdag 28 maj', text: 'Mycket svårt att hitta energi idag. Ytterligare omorganisering diskuterades i ett möte — det skapar en otrygghet som påverkar hela teamet, inte bara mig.' },
  { date: 'Tisdag 27 maj', text: 'Mittenmöte med kunden gick bra men tog mer energi än väntat. Kvällen spenderades med att komma ikapp mejl som hann hopas under dagen.' },
  { date: 'Måndag 26 maj', text: 'Bra start på veckan. Tydlig agenda och kände att jag bidrog på rätt sätt i planeringsmötet. Positiv till den kommande sprinten.' },
  { date: 'Fredag 23 maj', text: 'Avslutade veckan starkt. Levererade det vi hade planerat och hade ett genuint bra samtal med Sara om ett gemensamt initiativ vi vill driva framåt.' },
]

const initialExpectations = [
  'Ta tydligare ägarskap över klientleveranser och kommunicera status proaktivt utan att behöva påminnas.',
  'Initiera minst ett strategiskt förbättringsförslag inom sitt ansvarsområde under Q2.',
  'Prioritera och avgränsa sitt arbete för att säkra en hållbar prestation över tid.',
]

const gapAnalysis = [
  'Jonas loggar återkommande stress kopplad till otydliga prioriteringar och parallella arbetsuppgifter — något som direkt motverkar förväntningen om proaktivt ägarskap och tydlig kommunikation. Det finns ett gap mellan den förväntade självständigheten och den upplevda bristen på struktur i den dagliga arbetsmiljön.',
  'Förväntningen om strategiska initiativ verkar svår att infria när Jonas kämpar med att hålla sig flytande i det operativa. Rekommendation: Prioritera nästa 1-on-1 till att klargöra rollens gränser och gemensamt identifiera vad Jonas kan lägga åt sidan. Det finns engagemang och kapacitet — men utrymmet saknas just nu.',
]

const labelStyle: React.CSSProperties = {
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

      {/* Logghistorik */}
      <div style={{ marginBottom: '32px' }}>
        <p style={labelStyle}>Logghistorik</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {logs.map((log, i) => (
            <div key={i} style={{ background: '#161616', borderRadius: '12px', padding: '16px' }}>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontWeight: 400, margin: '0 0 6px 0' }}>{log.date}</p>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, fontWeight: 400, margin: 0 }}>{log.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Förväntningar */}
      <div style={{ marginBottom: '32px' }}>
        <p style={labelStyle}>Förväntningar</p>

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
              style={{ border: '0.5px solid rgba(4,216,181,0.2)', background: 'transparent', color: 'rgba(4,216,181,0.7)', fontSize: '12px', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 400 }}
            >
              Spara
            </button>
          )}
        </div>
      </div>

      {/* Gap-analys */}
      <div>
        <p style={labelStyle}>Gap-analys</p>
        <div style={{ background: '#161616', borderRadius: '12px', padding: '20px' }}>
          {gapAnalysis.map((para, i) => (
            <p key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontWeight: 400, margin: i > 0 ? '12px 0 0 0' : '0' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}
