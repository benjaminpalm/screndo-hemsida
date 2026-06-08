'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

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
  { href: '/dashboard', label: 'Overview', Icon: IconOverview },
  { href: '/dashboard/team', label: 'Team', Icon: IconTeam },
  { href: '/dashboard/briefings', label: 'Briefings', Icon: IconBriefings },
  { href: '/dashboard/reports', label: 'Reports', Icon: IconReports },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(true)
  const [hovered, setHovered] = useState<string | null>(null)

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
              <span style={{ flex: 1 }}>Settings</span>
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
      <main style={{ flex: 1, overflowY: 'auto', background: '#0c0c0c', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {children}
      </main>
    </div>
  )
}
