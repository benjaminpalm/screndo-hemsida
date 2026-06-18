'use client'

const cards = [
  {
    title: 'Otydliga prioriteringar',
    body: 'Flera medarbetare beskriver oklarhet kring vad som ska prioriteras. När direktiv upplevs som otydliga tenderar teamet att vänta in besked.',
    attProva: 'avsluta veckomötet med en tydlig topp-tre per person.',
    aiMessage: 'Hjälp mig agera på mönstret kring otydliga prioriteringar.',
  },
  {
    title: 'Sen kommunikation kring beslut',
    body: 'Återkommande beskrivningar av att beslut når teamet sent.',
    attProva: 'dela kontext tidigare, även när allt inte är spikat, för att minska osäkerhet.',
    aiMessage: 'Hur kan jag kommunicera beslut tidigare?',
  },
  {
    title: 'Ägarskap ger energi',
    body: 'Där medarbetare får äga egna initiativ syns tydligt högre energi i loggarna.',
    attProva: 'fortsätt delegera ägarskap, det fungerar.',
    aiMessage: 'Hur delegerar jag ägarskap på ett bra sätt?',
  },
]

function openAIPanel(message: string) {
  console.log(message)
}

const ChatIcon = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 1H2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2l2 3 2-3h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
  </svg>
)

export default function LedarspegelnPage() {
  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 8px 0' }}>
        Ledarspegel
      </h1>
      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '0 0 40px 0' }}>
        Mönster i teamets loggar som kan kopplas till ditt ledarskap. Inga betyg, inga namn, synlig endast för dig.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {cards.map((card) => (
          <div key={card.title} style={{ background: 'var(--card)', border: '0.5px solid var(--border)', borderRadius: '12px', padding: '20px 24px' }}>
            <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400, margin: '0 0 8px 0' }}>
              {card.title}
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, margin: '0 0 12px 0' }}>
              {card.body}
            </p>
            <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 14px 0' }}>
              <span style={{ color: 'var(--text-primary)' }}>Att prova:</span> {card.attProva}
            </p>
            <button
              onClick={() => openAIPanel(card.aiMessage)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--accent)',
                fontSize: '12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: 0,
                fontFamily: 'inherit',
                fontWeight: 400,
              }}
            >
              <ChatIcon />
              Diskutera med AI
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
