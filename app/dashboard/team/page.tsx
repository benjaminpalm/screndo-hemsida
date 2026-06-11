import Link from 'next/link'

const employees = [
  { id: '1', initials: 'JL', name: 'Jonas Lindqvist', signal: 'Nämner ökad stress kring deadline och otydliga prioriteringar. Energin har fallit tre dagar i rad.', time: '3 min sedan', logCount: 14 },
  { id: '2', initials: 'MS', name: 'Mia Svensson', signal: 'Har inte loggat på 4 dagar. Senaste signal visade låg energi kopplad till en intern konflikt.', time: '4 dagar sedan', logCount: 8 },
  { id: '3', initials: 'AK', name: 'Alex Karlsson', signal: 'Positiv ton i senaste loggen. Rapporterar fokus och känsla av framsteg i sitt projekt.', time: '1 tim sedan', logCount: 18 },
  { id: '4', initials: 'SB', name: 'Sara Berg', signal: 'Lyfter fram gott samarbete med kollegor. Stabil energinivå utan större variationer den här veckan.', time: '2 tim sedan', logCount: 15 },
  { id: '5', initials: 'EH', name: 'Erik Hansson', signal: 'Nämner viss oro kring pågående rollförändringar men känner sig stöttad av närmaste chef.', time: 'Igår', logCount: 6 },
  { id: '6', initials: 'LN', name: 'Lena Nilsson', signal: 'Hög energi och engagemang. Initierar ett nytt internt projekt och verkar motiverad av utmaningen.', time: '45 min sedan', logCount: 21 },
  { id: '7', initials: 'PO', name: 'Per Olsson', signal: 'Uttrycker frustration över mötesbördan. Upplever att han inte hinner med sina faktiska arbetsuppgifter.', time: 'Igår', logCount: 12 },
  { id: '8', initials: 'KA', name: 'Klara Åberg', signal: 'Återvände från föräldraledighet för tre veckor sedan. Loggarna visar en positiv återanpassning.', time: '3 tim sedan', logCount: 9 },
  { id: '9', initials: 'TO', name: 'Thomas Öberg', signal: 'Lyfter upp brist på feedback från ledningen som återkommande tema. Energin varierar kraftigt dag till dag.', time: 'Igår', logCount: 11 },
]

export default function TeamPage() {
  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 32px 0' }}>
        Team
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {employees.map((e) => (
          <Link
            key={e.id}
            href={`/dashboard/team/${e.id}`}
            style={{ textDecoration: 'none', display: 'block', background: '#161616', borderRadius: '12px', padding: '16px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 400, color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>
                {e.initials}
              </div>
              <span style={{ fontSize: '13px', color: '#fff', fontWeight: 400 }}>{e.name}</span>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: '0 0 8px 0', fontWeight: 400 }}>
              {e.signal}
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', margin: '0 0 6px 0', fontWeight: 400 }}>
              Baserat på {e.logCount} loggar senaste 30 dagarna
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', margin: 0, fontWeight: 400 }}>
              {e.time}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
