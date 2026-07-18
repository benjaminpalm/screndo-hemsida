'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function PulseLibrary() {
  const { t } = useLanguage()

  return (
    <section
      id="bibliotek"
      style={{ background: '#F7F6F3', padding: '80px 64px' }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <p style={{
          margin: '0 0 48px',
          fontSize: '11px',
          letterSpacing: '0.12em',
          textTransform: 'uppercase' as const,
          color: '#6B6B6B',
        }}>
          {t.libraryLabel}
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px 48px',
        }}>
          {t.libraryGroups.map((group) => (
            <div key={group.group}>
              <p style={{
                margin: '0 0 16px',
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                color: '#ADADAD',
              }}>
                {group.group}
              </p>
              {group.pulses.map((pulse) => (
                <div key={pulse.name} style={{ marginBottom: '14px' }}>
                  <div style={{ fontSize: '13px', color: '#0A0A0A', marginBottom: '2px' }}>
                    {pulse.name}
                  </div>
                  <p style={{ margin: 0, fontSize: '12px', color: '#6B6B6B', lineHeight: 1.55 }}>
                    {pulse.question}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
