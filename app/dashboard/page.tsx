'use client'

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
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.12em',
  fontWeight: 400,
  margin: '0 0 12px 0',
}

export default function DashboardPage() {
  return (
    <div style={{ width: '100%', maxWidth: '1100px', padding: '48px 48px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 6px 0' }}>
        Hello, Benjamin
      </h1>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', margin: '0 0 48px 0' }}>
        How can I help you today?
      </p>

      {/* Needs attention */}
      <div style={{ marginBottom: '32px' }}>
        <p style={sectionLabel}>Behöver uppmärksamhet</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {attention.map((e) => (
            <div key={e.name} style={{ background: '#161616', borderRadius: '12px', padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#222', color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {e.initials}
                </div>
                <div>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 400, display: 'block' }}>{e.name}</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 400, display: 'block', marginTop: '1px' }}>{e.role}</span>
                </div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', marginLeft: 'auto' }}>{e.time}</span>
              </div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, margin: '0 0 8px 0' }}>
                {e.signal}
              </p>
              <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: 0 }}>
                Baserat på {e.logCount} loggar senaste 30 dagarna
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Rest of team */}
      <div>
        <p style={sectionLabel}>Resten av teamet</p>
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, margin: 0 }}>
          6 andra medarbetare loggar som vanligt och visar inga tydliga signaler.
        </p>
      </div>
    </div>
  )
}
