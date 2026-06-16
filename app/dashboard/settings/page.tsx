'use client'

import { useState } from 'react'
import { useTheme } from '@/components/dashboard/ThemeProvider'

const IconMoon = () => (
  <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M12 9A6 6 0 016 3a6 6 0 00.05 9.95A6 6 0 0012 9z"/>
  </svg>
)

const IconSun = () => (
  <svg width="13" height="13" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="7.5" cy="7.5" r="2.5"/>
    <path d="M7.5 1.5v1M7.5 12v1M1.5 7.5h1M12 7.5h1M3.4 3.4l.7.7M10.9 10.9l.7.7M10.9 4.1l-.7.7M4.1 10.9l-.7.7"/>
  </svg>
)

const sectionLabel: React.CSSProperties = {
  fontSize: '11px',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 16px 0',
}

const fieldLabel: React.CSSProperties = {
  fontSize: '12px',
  color: 'var(--text-secondary)',
  fontWeight: 400,
  margin: '0 0 6px 0',
  display: 'block',
}

const inputStyle: React.CSSProperties = {
  background: 'var(--bg)',
  border: '0.5px solid var(--border)',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  color: 'var(--text-primary)',
  fontWeight: 400,
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

const actionBtn: React.CSSProperties = {
  border: '0.5px solid var(--border)',
  background: 'transparent',
  color: 'var(--text-secondary)',
  fontSize: '12px',
  fontWeight: 400,
  borderRadius: '8px',
  padding: '7px 16px',
  cursor: 'pointer',
  fontFamily: 'inherit',
}

export default function SettingsPage() {
  const { theme, toggle } = useTheme()
  const [orgName, setOrgName] = useState('Acme Consulting AB')

  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 40px 0' }}>
        Inställningar
      </h1>

      {/* Utseende */}
      <div style={{ marginBottom: '40px' }}>
        <p style={sectionLabel}>Utseende</p>
        <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ ...fieldLabel, margin: 0 }}>Tema</label>
            <button
              onClick={toggle}
              style={{
                background: 'transparent',
                border: '0.5px solid var(--border)',
                borderRadius: '100px',
                padding: '5px 14px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                fontWeight: 400,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
              {theme === 'dark' ? 'Ljust läge' : 'Mörkt läge'}
            </button>
          </div>
        </div>
      </div>

      {/* Organisation */}
      <div style={{ marginBottom: '40px' }}>
        <p style={sectionLabel}>Organisation</p>
        <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '24px' }}>
          <div style={{ marginBottom: '20px' }}>
            <label style={fieldLabel}>Organisationsnamn</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label style={fieldLabel}>Antal anställda</label>
            <input
              type="text"
              defaultValue="9"
              style={inputStyle}
            />
          </div>
          <button style={actionBtn}>Spara ändringar</button>
        </div>
      </div>

      {/* Konto */}
      <div>
        <p style={sectionLabel}>Konto</p>
        <div style={{ background: 'var(--card)', borderRadius: '12px', padding: '24px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400, margin: 0 }}>Sara Lindgren</p>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, margin: '4px 0 0 0' }}>sara@acmeconsulting.se</p>
          <div style={{ borderTop: '0.5px solid var(--border)', margin: '16px 0' }} />
          <button style={actionBtn}>Logga ut</button>
        </div>
      </div>
    </div>
  )
}
