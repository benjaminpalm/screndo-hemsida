'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const IconOverview = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="3" cy="3" r="1" fill="currentColor"/>
    <circle cx="7.5" cy="3" r="1" fill="currentColor"/>
    <circle cx="12" cy="3" r="1" fill="currentColor"/>
    <circle cx="3" cy="7.5" r="1" fill="currentColor"/>
    <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
    <circle cx="12" cy="7.5" r="1" fill="currentColor"/>
    <circle cx="3" cy="12" r="1" fill="currentColor"/>
    <circle cx="7.5" cy="12" r="1" fill="currentColor"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
)

const IconTeam = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="5.5" cy="4.5" r="2"/>
    <path d="M1 13c0-2.5 2-4 4.5-4s4.5 1.5 4.5 4"/>
    <circle cx="11" cy="4.5" r="1.5"/>
    <path d="M13.5 13c0-2-1.5-3.5-3-3.5"/>
  </svg>
)

const IconBriefings = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M2 3.5h11v7H8.5L6 13v-2.5H2v-7z"/>
  </svg>
)

const IconReports = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3.5" y1="2" x2="3.5" y2="13"/>
    <path d="M3.5 3h7.5l-2 3 2 3H3.5"/>
  </svg>
)

const IconSettings = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="7.5" cy="7.5" r="2"/>
    <path d="M7.5 1.5v1M7.5 12.5v1M1.5 7.5h1M12.5 7.5h1M3.4 3.4l.7.7M10.9 10.9l.7.7M10.9 4.1l-.7.7M4.1 10.9l-.7.7"/>
  </svg>
)

const mainNavItems = [
  { href: '/dashboard', label: 'Översikt', Icon: IconOverview },
  { href: '/dashboard/team', label: 'Team', Icon: IconTeam },
  { href: '/dashboard/underlag', label: 'Underlag', Icon: IconBriefings },
  { href: '/dashboard/rapporter', label: 'Rapporter', Icon: IconReports },
]

type Message = { role: 'user' | 'ai'; text: string }

function getSuggestions(pathname: string): string[] {
  if (pathname.includes('/team/')) {
    return ['Hur kan jag stötta den här personen?', 'Sammanfatta senaste månaden', 'Förbered mitt 1-on-1']
  }
  if (pathname.includes('/rapporter')) {
    return ['Vad borde jag agera på först?', 'Sammanfatta veckans rapporter']
  }
  if (pathname.includes('/underlag')) {
    return ['Vilka möten är viktigast?', 'Förbered nästa underlag']
  }
  return ['Vem behöver min uppmärksamhet?', 'Hur mår teamet?', 'Sammanfatta veckan']
}

function getPlaceholderResponse(message: string, pathname: string): string {
  if (pathname.includes('/team/')) {
    return 'Baserat på Jonas synteser ser jag att energinivån har sjunkit de senaste veckorna kopplat till otydliga prioriteringar. Ett bra första steg kan vara att tydliggöra förväntningarna för nästa period.'
  }
  if (pathname.includes('/underlag')) {
    return 'Underlaget för Jonas är klart. Det lyfter ett gap kring kundkontakt som kan vara värt att adressera direkt i mötet.'
  }
  return 'Jag kan hjälpa dig analysera ditt team, förbereda ett 1-on-1 eller sammanfatta signaler från senaste veckan. Vad vill du veta?'
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [isPanelOpen, setIsPanelOpen] = useState(true)
  const [hovered, setHovered] = useState<string | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: 'Hej! Fråga mig om vad som helst på plattformen. Jag ser sidan du är på och kan hjälpa dig förstå hur ditt team mår, förbereda inför ett samtal eller ge förslag på hur du stöttar en specifik person.' },
  ])
  const [inputValue, setInputValue] = useState('')
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function sendMessage(override?: string) {
    const text = (override ?? inputValue).trim()
    if (!text) return
    setInputValue('')
    setMessages((prev) => [...prev, { role: 'user', text }])
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'ai', text: getPlaceholderResponse(text, pathname) }])
    }, 600)
  }

  function navStyle(href: string): React.CSSProperties {
    const active = pathname === href
    const isHov = hovered === href
    return {
      fontSize: '13px',
      fontWeight: 400,
      color: active ? '#04D8B5' : isHov ? '#04D8B5' : 'rgba(255,255,255,0.35)',
      background: active ? 'rgba(255,255,255,0.09)' : isHov ? 'rgba(255,255,255,0.07)' : 'transparent',
      borderRadius: '8px',
      margin: '1px 8px',
      padding: '7px 10px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.12s ease',
    }
  }

  function iconColor(href: string): string {
    return pathname === href || hovered === href ? '#04D8B5' : 'rgba(255,255,255,0.35)'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh', background: '#0c0c0c' }}>

      {/* Sidebar wrapper — always in flex layout, animates width */}
      <div style={{
        width: isOpen ? '228px' : '0px',
        flexShrink: 0,
        overflow: 'hidden',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <aside style={{
          width: '220px',
          background: '#0f0f0f',
          borderRadius: '14px',
          margin: '8px 0 8px 8px',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100vh - 16px)',
          overflow: 'hidden',
        }}>
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '14px 14px 10px', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
              <img src="/tomlogga.png" alt="" style={{ width: 20, height: 20, borderRadius: 4 }} />
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#fff' }}>Screndo</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
              style={{ width: '28px', height: '28px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.3)', fontSize: '18px', lineHeight: 1, borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.12s ease', fontFamily: 'inherit', flexShrink: 0 }}
            >
              ×
            </button>
          </div>

          {/* Separator */}
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', margin: '0 10px 8px' }} />

          {/* Nav */}
          <nav style={{ display: 'flex', flexDirection: 'column' }}>
            {mainNavItems.map(({ href, label, Icon }) => (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setHovered(href)}
                onMouseLeave={() => setHovered(null)}
                style={navStyle(href)}
              >
                <span style={{ flex: 1 }}>{label}</span>
                <span style={{ color: iconColor(href), display: 'flex', alignItems: 'center' }}>
                  <Icon />
                </span>
              </Link>
            ))}
          </nav>

          {/* Settings pinned to bottom */}
          <div style={{ marginTop: 'auto' }}>
            <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', margin: '0 10px 8px' }} />
            <Link
              href="/dashboard/settings"
              onMouseEnter={() => setHovered('/dashboard/settings')}
              onMouseLeave={() => setHovered(null)}
              style={navStyle('/dashboard/settings')}
            >
              <span style={{ flex: 1 }}>Inställningar</span>
              <span style={{ color: iconColor('/dashboard/settings'), display: 'flex', alignItems: 'center' }}>
                <IconSettings />
              </span>
            </Link>
          </div>
        </aside>
      </div>

      {/* Collapsed toggle — always rendered, CSS-driven fade/slide */}
      <div className="group" style={{
        position: 'fixed', top: '12px', left: '12px', zIndex: 50,
        opacity: isOpen ? 0 : 1,
        transform: isOpen ? 'translateX(-8px)' : 'translateX(0)',
        transition: isOpen
          ? 'opacity 0.1s ease 0s, transform 0.1s ease 0s'
          : 'opacity 0.2s ease 0.25s, transform 0.2s ease 0.25s',
        pointerEvents: isOpen ? 'none' : 'auto',
      }}>
        <div
          onClick={() => setIsOpen(true)}
          style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#0f0f0f', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none' }}
        >
          <img src="/tomlogga.png" alt="Screndo" style={{ width: 40, height: 40, borderRadius: 4 }} />
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ position: 'absolute', left: '44px', top: '50%', transform: 'translateY(-50%)', background: '#1a1a1a', color: 'rgba(255,255,255,0.7)', fontSize: '12px', padding: '4px 10px', borderRadius: '6px', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          Öppna sidopanel
        </div>
      </div>

      {/* Main content */}
      <main style={{
        flex: 1,
        overflowY: 'auto',
        background: '#0c0c0c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingRight: isPanelOpen ? '336px' : '0px',
        transition: 'padding-right 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {children}
      </main>

      {/* AI panel */}
      <div style={{
        position: 'fixed',
        top: '16px',
        right: '16px',
        bottom: '16px',
        width: '320px',
        background: '#1e1e1e',
        borderRadius: '16px',
        zIndex: 40,
        display: 'flex',
        flexDirection: 'column',
        transform: isPanelOpen ? 'translateX(0)' : 'translateX(calc(100% + 16px))',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        {/* Chevron toggle on left edge */}
        <div
          onClick={() => setIsPanelOpen(false)}
          style={{
            position: 'absolute',
            left: '-16px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '28px',
            height: '48px',
            background: '#1e1e1e',
            borderRadius: '12px 0 0 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 41,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="5,3 10,8 5,13"/>
            <polyline points="9,3 14,8 9,13"/>
          </svg>
        </div>

        {/* Panel header */}
        <div style={{ padding: '16px 16px 12px' }}>
          <span style={{ fontSize: '12px', fontWeight: 400, color: 'rgba(255,255,255,0.3)' }}>AI-assistent</span>
        </div>

        <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />

        {/* Chat area */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={m.role === 'user' ? {
                background: 'rgba(255,255,255,0.06)',
                borderRadius: '10px 10px 2px 10px',
                padding: '10px 12px',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.8)',
                alignSelf: 'flex-end',
                maxWidth: '85%',
              } : {
                background: 'transparent',
                padding: '4px 0',
                fontSize: '13px',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.7,
                alignSelf: 'flex-start',
                maxWidth: '100%',
              }}
            >
              {m.text}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {/* Contextual suggestions — only before user sends anything */}
        {messages.length === 1 && (
          <div style={{ padding: '0 12px 10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {getSuggestions(pathname).map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '0.5px solid rgba(255,255,255,0.08)',
                  borderRadius: '100px',
                  padding: '6px 12px',
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.6)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontWeight: 400,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Chat input */}
        <div style={{ padding: '12px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Fråga om ditt team..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage() }}
              style={{
                width: '100%',
                boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.05)',
                border: '0.5px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                padding: '9px 40px 9px 12px',
                fontSize: '13px',
                color: '#fff',
                outline: 'none',
                fontFamily: 'inherit',
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                position: 'absolute',
                right: '8px',
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
                flexShrink: 0,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M6 10V2M6 2L2.5 5.5M6 2L9.5 5.5" stroke="#0c0c0c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Panel trigger tab — shown when panel is closed */}
      <div
        onClick={() => setIsPanelOpen(true)}
        style={{
          position: 'fixed',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#1e1e1e',
          borderRadius: '12px 0 0 12px',
          width: '28px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 40,
          opacity: isPanelOpen ? 0 : 1,
          transition: isPanelOpen
            ? 'opacity 0.1s ease 0s'
            : 'opacity 0.2s ease 0.25s',
          pointerEvents: isPanelOpen ? 'none' : 'auto',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="11,3 6,8 11,13"/>
          <polyline points="7,3 2,8 7,13"/>
        </svg>
      </div>
    </div>
  )
}
