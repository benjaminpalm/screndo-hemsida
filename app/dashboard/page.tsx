'use client'

import Link from 'next/link'

const attention = [
  {
    initials: 'MS',
    name: 'Mia Svensson',
    role: 'Projektledare',
    signal: 'Har inte loggat på 4 dagar. Senaste signal visade låg energi kopplad till en intern konflikt.',
    time: '4 dagar sedan',
    logCount: 8,
  },
  {
    initials: 'JL',
    name: 'Jonas Lindqvist',
    role: 'Senior konsult',
    signal: 'Energin har fallit tre dagar i rad. Nämner ökad stress kring deadline och otydliga prioriteringar.',
    time: '3 min sedan',
    logCount: 14,
  },
]

const sectionLabel: React.CSSProperties = {
  fontSize: '10px',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  fontWeight: 400,
  margin: '0 0 12px 0',
}

export default function DashboardPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1100px', padding: '48px 48px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 6px 0' }}>
        Hej, Sara
      </h1>
      <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 48px 0' }}>
        Vad kan jag hjälpa dig med idag?
      </p>

      {/* Needs attention */}
      <div style={{ marginBottom: '32px' }}>
        <p style={sectionLabel}>Behöver uppmärksamhet</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {attention.map((e) => (
            <div key={e.name} style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--border)', color: 'var(--text-secondary)', fontSize: '11px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {e.initials}
                </div>
                <div>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400, display: 'block' }}>{e.name}</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 400, display: 'block', marginTop: '1px' }}>{e.role}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'var(--text-secondary)', marginLeft: 'auto' }}>{e.time}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 8px 0' }}>
                {e.signal}
              </p>
              <p style={{ fontSize: '11px', color: 'var(--text-secondary)', margin: 0 }}>
                Baserat på {e.logCount} loggar senaste 30 dagarna
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of team */}
      <div style={{ marginBottom: '40px' }}>
        <p style={sectionLabel}>Resten av teamet</p>
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          6 andra medarbetare loggar som vanligt och visar inga tydliga signaler.
        </p>
      </div>

      {/* Org themes */}
      <div style={{ marginBottom: '40px' }}>
        <p style={sectionLabel}>Teman i organisationen</p>
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
          Återkommande teman den här månaden, sammanställt från teamets loggar. Inga namn, inga betyg.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {[
            {
              title: 'Arbetsbelastning och prioriteringar',
              body: 'Flera medarbetare beskriver en känsla av att uppgifter staplas på utan att något tas bort. Mönstret är inte akut men återkommer över veckorna.',
            },
            {
              title: 'Otydlighet kring riktning',
              body: 'Återkommande beskrivningar av att beslut och förändringar kommuniceras sent, vilket skapar osäkerhet kring vad som ska prioriteras.',
            },
            {
              title: 'Energi kring nya initiativ',
              body: 'Där medarbetare får äga ett eget initiativ syns tydligt högre energi och driv i loggarna.',
            },
          ].map((card) => (
            <div key={card.title} style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '18px 20px' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400, margin: '0 0 6px 0' }}>{card.title}</p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{card.body}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Ledarspegel entry */}
      <Link href="/dashboard/ledarspegel" style={{ textDecoration: 'none', display: 'block' }}>
        <div style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '16px 20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400, margin: '0 0 3px 0' }}>Ledarspegel</p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>En ny reflektion om teamets prioriteringar väntar.</p>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>→</span>
        </div>
      </Link>
    </div>
  )
}
