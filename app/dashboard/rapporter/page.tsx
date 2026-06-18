'use client'

import { useState } from 'react'

const today = new Date()

function daysAgo(n: number): string {
  const d = new Date(today)
  d.setDate(d.getDate() - n)
  return d.toISOString()
}

const categories = [
  {
    name: 'Arbetsmiljö',
    rawCount: 4,
    summary: 'Två oberoende rapporter lyfter upp upplevelser av hög arbetsbelastning och otydliga ansvarsområden. Signalerna är inte akuta, men mönstret är tillräckligt konsekvent för att tas på allvar. Det handlar inte om enskilda händelser utan om en strukturell upplevelse av att gränser inte respekteras och att arbetsuppgifter läggs på utan att något tas bort.',
    time: 'Senast mottagen: 3 jun',
    receivedDate: daysAgo(5),
  },
  {
    name: 'Kommunikation',
    rawCount: 2,
    summary: 'En rapport beskriver en upplevd brist på transparens kring beslut som påverkar teamets arbete. Medarbetaren upplever att viktiga förändringar kommuniceras sent eller inte alls, vilket skapar osäkerhet kring riktning och prioriteringar. Inga namn eller identifierande uppgifter ingår.',
    time: 'Senast mottagen: 2 jun',
    receivedDate: daysAgo(45),
  },
]

const ranges = ['7 dagar', '30 dagar', '3 mån', 'Allt'] as const
type Range = typeof ranges[number]

function getDays(range: Range): number | null {
  if (range === '7 dagar') return 7
  if (range === '30 dagar') return 30
  if (range === '3 mån') return 90
  return null
}

function formatCount(n: number): string {
  if (n < 3) return 'flera medarbetare'
  return `${n} rapporter`
}

const labelStyle: React.CSSProperties = {
  fontSize: '11px',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 12px 0',
}

export default function ReportsPage() {
  const [range, setRange] = useState<Range>('30 dagar')

  const days = getDays(range)
  const visible = categories.filter((c) => {
    if (days === null) return true
    const diff = (today.getTime() - new Date(c.receivedDate).getTime()) / 86400000
    return diff <= days
  })

  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 8px 0' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>
          Rapporter
        </h1>
        <div style={{ display: 'flex', background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: '100px', padding: '3px', gap: '2px' }}>
          {ranges.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              style={{
                fontSize: '12px',
                padding: '5px 12px',
                borderRadius: '100px',
                cursor: 'pointer',
                border: 'none',
                fontWeight: 400,
                fontFamily: 'inherit',
                transition: 'background 0.15s ease',
                background: range === r ? 'var(--bg)' : 'transparent',
                color: range === r ? 'var(--text-primary)' : 'var(--text-secondary)',
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 8px 0' }}>
        AI sammanfattar inkomna rapporter per kategori. Inga användar-ID lagras.
      </p>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 40px 0' }}>
        Kategorier visas endast när tillräckligt många rapporter inkommit för att skydda anonymiteten.
      </p>

      {visible.length === 0 ? (
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '24px' }}>
          Inga rapporter för den valda perioden.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {visible.map((c) => (
            <div key={c.name}>
              <p style={labelStyle}>{c.name}</p>
              <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '24px' }}>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 12px 0' }}>
                  {formatCount(c.rawCount)}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                  {c.summary}
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 400, margin: '16px 0 0 0' }}>
                  {c.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
