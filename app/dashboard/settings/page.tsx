'use client'

import { useState } from 'react'

const sectionLabel: React.CSSProperties = {
  fontSize: '11px',
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 16px 0',
}

const fieldLabel: React.CSSProperties = {
  fontSize: '12px',
  color: 'rgba(255,255,255,0.4)',
  fontWeight: 400,
  margin: '0 0 6px 0',
  display: 'block',
}

const inputStyle: React.CSSProperties = {
  background: '#111',
  border: '0.5px solid rgba(255,255,255,0.08)',
  borderRadius: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  color: '#fff',
  fontWeight: 400,
  fontFamily: 'inherit',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}

const actionBtn: React.CSSProperties = {
  border: '0.5px solid rgba(255,255,255,0.1)',
  background: 'transparent',
  color: 'rgba(255,255,255,0.35)',
  fontSize: '12px',
  fontWeight: 400,
  borderRadius: '8px',
  padding: '7px 16px',
  cursor: 'pointer',
  fontFamily: 'inherit',
}

export default function SettingsPage() {
  const [orgName, setOrgName] = useState('Acme Consulting AB')

  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 40px 0' }}>
        Settings
      </h1>

      {/* Organisation */}
      <div style={{ marginBottom: '40px' }}>
        <p style={sectionLabel}>Organisation</p>
        <div style={{ background: '#161616', borderRadius: '12px', padding: '24px' }}>
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
        <div style={{ background: '#161616', borderRadius: '12px', padding: '24px' }}>
          <p style={{ fontSize: '13px', color: '#fff', fontWeight: 400, margin: 0 }}>Benjamin Palm</p>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: 400, margin: '4px 0 0 0' }}>benjamin@acme.se</p>
          <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.06)', margin: '16px 0' }} />
          <button style={actionBtn}>Logga ut</button>
        </div>
      </div>
    </div>
  )
}
