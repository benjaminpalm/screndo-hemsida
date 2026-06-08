'use client'

import { useState } from 'react'

const employees = [
  { initials: 'JL', name: 'Jonas Lindqvist', role: 'Senior konsult', signal: 'Nämner ökad stress kring deadline och otydliga prioriteringar. Energin har fallit tre dagar i rad.', time: '3 min sedan', profileImage: null },
  { initials: 'MS', name: 'Mia Svensson', role: 'Projektledare', signal: 'Har inte loggat på 4 dagar. Senaste signal visade låg energi kopplad till en intern konflikt.', time: '4 dagar sedan', profileImage: null },
  { initials: 'AK', name: 'Alex Karlsson', role: 'Ingenjör', signal: 'Positiv ton i senaste loggen. Rapporterar fokus och känsla av framsteg i sitt projekt.', time: '1 tim sedan', profileImage: null },
  { initials: 'SB', name: 'Sara Berg', role: 'Produktdesigner', signal: 'Lyfter fram gott samarbete med kollegor. Stabil energinivå utan större variationer den här veckan.', time: '2 tim sedan', profileImage: null },
  { initials: 'EH', name: 'Erik Hansson', role: 'Säljare', signal: 'Nämner viss oro kring pågående rollförändringar men känner sig stöttad av närmaste chef.', time: 'Igår', profileImage: null },
  { initials: 'LN', name: 'Lena Nilsson', role: 'Marknadschef', signal: 'Hög energi och engagemang. Initierar ett nytt internt projekt och verkar motiverad av utmaningen.', time: '45 min sedan', profileImage: null },
  { initials: 'PO', name: 'Per Olsson', role: 'Redovisningsekonom', signal: 'Uttrycker frustration över mötesbördan. Upplever att han inte hinner med sina faktiska arbetsuppgifter.', time: 'Igår', profileImage: null },
  { initials: 'KA', name: 'Klara Åberg', role: 'HR-specialist', signal: 'Återvände från föräldraledighet för tre veckor sedan. Loggarna visar en positiv återanpassning.', time: '3 tim sedan', profileImage: null },
  { initials: 'TO', name: 'Thomas Öberg', role: 'Affärsutvecklare', signal: 'Lyfter upp brist på feedback från ledningen som återkommande tema. Energin varierar kraftigt dag till dag.', time: 'Igår', profileImage: null },
]


export default function DashboardPage() {
  const [showAll, setShowAll] = useState(false)

  const visible = showAll ? employees : employees.slice(0, 6)

  return (
    <div style={{ width: '100%', maxWidth: '1100px', padding: '48px 48px', display: 'flex', flexDirection: 'column', flex: 1 }}>
    <div style={{ flex: 1 }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 6px 0' }}>
        Hello, Benjamin
      </h1>
      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.3)', margin: '0 0 36px 0' }}>
        How can I help you today?
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {visible.map((e, i) => (
          <div
            key={e.name}
            style={{
              background: '#161616',
              borderRadius: '12px',
              padding: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#222', color: 'rgba(255,255,255,0.5)', fontSize: '11px', fontWeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, overflow: 'hidden' }}>
                {e.profileImage
                  ? <img src={e.profileImage} alt={e.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
                  : e.initials
                }
              </div>
              <div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 400, display: 'block' }}>{e.name}</span>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', fontWeight: 400, display: 'block', marginTop: '1px' }}>{e.role}</span>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.55, margin: '0 0 12px 0' }}>
              {e.signal}
            </p>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.18)', margin: 0 }}>
              {e.time}
            </p>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          onClick={() => setShowAll((v) => !v)}
          style={{
            border: '0.5px solid rgba(255,255,255,0.1)',
            background: 'transparent',
            color: 'rgba(255,255,255,0.35)',
            fontSize: '12px',
            borderRadius: '8px',
            padding: '8px 20px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            fontWeight: 400,
          }}
        >
          {showAll ? 'Visa mindre' : 'Visa 3 till'}
        </button>
      </div>
    </div>

    {/* Chat bar */}
    <div style={{
      borderTop: '0.5px solid rgba(255,255,255,0.05)',
      padding: '20px 0 36px',
    }}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Fråga om ditt team, be om en briefing..."
          style={{
            width: '100%',
            boxSizing: 'border-box',
            background: '#111',
            border: '0.5px solid rgba(4,216,181,0.2)',
            borderRadius: '20px',
            padding: '14px 52px 14px 18px',
            fontSize: '13px',
            color: '#fff',
            outline: 'none',
            fontFamily: 'inherit',
            minHeight: '48px',
          }}
          onFocus={(e) => e.currentTarget.style.outline = 'none'}
        />
        <button
          style={{
            position: 'absolute',
            right: '9px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '26px',
            height: '26px',
            background: '#04D8B5',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 10V2M6 2L2.5 5.5M6 2L9.5 5.5" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
    </div>
  )
}
