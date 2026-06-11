'use client'

import Link from 'next/link'
import { useState } from 'react'

const logs = [
  { date: 'Tisdag 3 jun', text: 'Har inte haft energi att skriva mycket idag. Allt känns lite tungt just nu, svårt att sätta fingret på varför.' },
  { date: 'Måndag 2 jun', text: 'Bra möte på morgonen men sedan gick det utför. Kände mig osynlig i teamdiskussionen och lämnade mötet utan att ha bidragit med något.' },
  { date: 'Fredag 30 maj', text: 'Glad att veckan är slut. Inte en dålig vecka, men en tom sådan. Inget som sticker ut — varken positivt eller negativt.' },
]

const gapAnalysis = [
  'Inga förväntningar har lagts in för den här medarbetaren ännu. Gap-analysen baseras på avvikelser mellan loggat beteende och satta förväntningar — utan förväntningar kan ingen meningsfull analys genereras.',
]

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 12px 0',
}

export default function EmptyStatePage() {
  const [expectations, setExpectations] = useState<string[]>([])
  const [saved, setSaved] = useState<string[]>([])
  const dirty = JSON.stringify(expectations) !== JSON.stringify(saved)

  function add() {
    setExpectations((prev) => [...prev, ''])
  }

  function update(i: number, val: string) {
    setExpectations((prev) => prev.map((e, idx) => (idx === i ? val : e)))
  }

  function remove(i: number) {
    setExpectations((prev) => prev.filter((_, idx) => idx !== i))
  }

  function save() {
    setSaved(expectations)
  }

  return (
    <div style={{ padding: '40px 48px', background: '#0c0c0c', minHeight: '100%', maxWidth: '720px' }}>
      <Link href="/dashboard/team" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px', fontWeight: 400 }}>
        ← Tillbaka
      </Link>

      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 40px 0' }}>
        Mia Svensson
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

      {/* Förväntningar — empty state */}
      <div style={{ marginBottom: '32px' }}>
        <p style={labelStyle}>Förväntningar</p>

        {expectations.length === 0 ? (
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '20px', marginBottom: '14px' }}>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 400, margin: '0 0 6px 0' }}>
              Inga förväntningar inlagda
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6, fontWeight: 400, margin: '0 0 16px 0' }}>
              AI:n kan inte generera relevanta frågor eller gap-analys förrän du lagt till förväntningar för den här personen.
            </p>
            <button
              onClick={add}
              style={{ border: '0.5px solid rgba(255,255,255,0.1)', background: 'transparent', color: 'rgba(255,255,255,0.35)', fontSize: '12px', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 400 }}
            >
              + Lägg till förväntan
            </button>
          </div>
        ) : (
          <>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '14px' }}>
              {expectations.map((e, i) => (
                <div key={i}>
                  <textarea
                    value={e}
                    rows={2}
                    onChange={(ev) => update(i, ev.target.value)}
                    style={{ background: 'transparent', border: '0.5px solid rgba(255,255,255,0.07)', borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, width: '100%', resize: 'none', outline: 'none', fontFamily: 'inherit', fontWeight: 400, boxSizing: 'border-box' }}
                  />
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
          </>
        )}
      </div>

      {/* Gap-analys */}
      <div>
        <p style={labelStyle}>Gap-analys</p>
        <div style={{ background: '#161616', borderRadius: '12px', padding: '20px' }}>
          {gapAnalysis.map((para, i) => (
            <p key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, fontWeight: 400, margin: 0, fontStyle: 'italic' }}>
              {para}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
