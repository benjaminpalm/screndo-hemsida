const categories = [
  {
    name: 'Arbetsmiljö',
    rawCount: 4,
    summary: 'Två oberoende rapporter lyfter upp upplevelser av hög arbetsbelastning och otydliga ansvarsområden. Signalerna är inte akuta, men mönstret är tillräckligt konsekvent för att tas på allvar. Det handlar inte om enskilda händelser utan om en strukturell upplevelse av att gränser inte respekteras och att arbetsuppgifter läggs på utan att något tas bort.',
    time: 'Senast mottagen: 3 jun',
  },
  {
    name: 'Kommunikation',
    rawCount: 2,
    summary: 'En rapport beskriver en upplevd brist på transparens kring beslut som påverkar teamets arbete. Medarbetaren upplever att viktiga förändringar kommuniceras sent eller inte alls, vilket skapar osäkerhet kring riktning och prioriteringar. Inga namn eller identifierande uppgifter ingår.',
    time: 'Senast mottagen: 2 jun',
  },
]

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
  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
        Rapporter
      </h1>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 8px 0' }}>
        AI sammanfattar inkomna rapporter per kategori. Inga användar-ID lagras.
      </p>
      <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 40px 0' }}>
        Kategorier visas endast när tillräckligt många rapporter inkommit för att skydda anonymiteten.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {categories.map((c) => (
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
    </div>
  )
}
