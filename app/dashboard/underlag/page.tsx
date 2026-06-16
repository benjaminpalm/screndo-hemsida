'use client'

import { useState } from 'react'

type BriefingContent = {
  fokus: string
  energi: string
  gap: string
  fragor: [string, string, string]
}

type Employee = {
  initials: string
  name: string
  meeting: string
  status: string
  lopande: BriefingContent | null
  medarbetarsamtal: BriefingContent | null
  previousNote?: string
}

const employees: Employee[] = [
  {
    initials: 'JL',
    name: 'Jonas Lindqvist',
    meeting: 'Idag 14:00',
    status: 'Tillräcklig data',
    previousNote: 'Förra mötet bestämde ni att avlasta Jonas från två akutärenden. Loggarna sedan dess visar viss förbättring i energi.',
    lopande: {
      fokus: 'Jonas har de senaste veckorna arbetat med klientleveranser under tidspress och hanterat flera parallella akutärenden. Han har levererat det som krävts, men utan det strategiska utrymme han egentligen behöver för att göra sitt bästa arbete.',
      energi: 'Energikurvan pekar tydligt nedåt sedan förra veckan. I loggen från onsdag 28 maj beskriver han en känsla av otrygghet kopplad till omorganiseringsdiskussioner — något som återkommer i flera på varandra följande loggar och indikerar att detta inte är en tillfällig dipp.',
      gap: 'Förväntningen om proaktivt ägarskap och tydlig statuskommunikation är svår att infria när Jonas upplever att han saknar struktur och klarhet i prioriteringarna. Han tar inte initiativ till strategiska förbättringar just nu — inte för att viljan saknas, utan för att kapaciteten är uppbunden operativt.',
      fragor: [
        'Vad tar mest energi just nu?',
        'Vad känns otydligt med prioriteringarna?',
        'Vad behöver du mer av från mig?',
      ],
    },
    medarbetarsamtal: {
      fokus: 'Jonas har under det senaste halvåret tagit ett tydligare ägarskap över klientleveranser och vuxit in i rollen som en av teamets mer självgående konsulter. Han har bidragit till att stärka interna rutiner och visat god förmåga att navigera komplexa kundrelationer.',
      energi: 'Energinivån har varierat under perioden, med en mer uttalad nedgång de senaste fyra veckorna. Loggdata visar ett mönster där yttre faktorer — otydliga prioriteringar och organisatorisk osäkerhet — påverkar välmåendet mer än arbetsuppgifterna i sig. Trenden bör adresseras nu innan den befästs.',
      gap: 'Mot bakgrund av hela anställningsperioden har Jonas i hög grad motsvarat förväntningarna på leveransförmåga och kundhantering. Det återstående gapet handlar om strategiska initiativ — han har potential att bidra på en högre nivå men har inte fått eller tagit de tillfällena fullt ut.',
      fragor: [
        'Hur känner du för din roll just nu?',
        'Vad vill du ta mer ansvar för framåt?',
        'Vad behöver du för att trivas det nästa halvåret?',
      ],
    },
  },
  {
    initials: 'AK',
    name: 'Alex Karlsson',
    meeting: 'Mån 09:00',
    status: 'Tillräcklig data',
    lopande: {
      fokus: 'Alex har den senaste månaden arbetat fokuserat med sin pågående analys och bidragit aktivt i teamets planeringsmöten. Han levererar konsekvent utan att behöva påminnelser och fungerar som en stabil punkt i gruppen.',
      energi: 'Energinivån är hög och stabil. Loggarna från den senaste perioden visar inga oroande signaler — tvärtom beskriver Alex flera tillfällen av flow och känsla av meningsfull prestation. Det är en medarbetare som mår bra och vet om det.',
      gap: 'Alex uppfyller förväntningarna med god marginal. Det enda potentiella gapet är att han ännu inte tagit de strategiska initiativ som förväntningarna pekar på — men det kan lika gärna bero på att han inte fått tydliga inbjudningar att göra det som på brist på ambition.',
      fragor: [
        'Känner du att du får använda din fulla kapacitet?',
        'Finns det något du vill ta tag i men inte haft tid för?',
        'Vad skulle göra nästa månad riktigt bra?',
      ],
    },
    medarbetarsamtal: {
      fokus: 'Alex har under hela sin anställning visat en konsekvent förmåga att leverera med hög kvalitet och utan onödigt stöd. Han har gradvis tagit ett bredare ansvar och blivit en person som yngre medarbetare söker sig till för vägledning och stöd.',
      energi: 'Energidata över tid visar en stabil och positiv trend med enstaka kortvariga dippar som alla återhämtat sig snabbt. Det finns inget som tyder på strukturell trötthet eller otrivsel — Alex verkar genuint trivas med sitt arbete och sin miljö.',
      gap: 'Mot helheten av förväntningarna presterar Alex starkt. Det som återstår är att han tar ett mer synligt ledarskapsinitiativ — inte för att det förväntas av honom formellt, utan för att han har förutsättningarna och signalerna från teamet är tydliga.',
      fragor: [
        'Hur vill du att din roll ser ut om ett år?',
        'Finns det något från det senaste året du önskat gick annorlunda?',
        'Vad motiverar dig mest just nu?',
      ],
    },
  },
  {
    initials: 'MS',
    name: 'Mia Svensson',
    meeting: 'Fre 10:00',
    status: 'Tillräcklig data',
    lopande: null,
    medarbetarsamtal: null,
  },
  {
    initials: 'SB',
    name: 'Sara Berg',
    meeting: 'Tor 13:00',
    status: 'För lite data ännu',
    lopande: null,
    medarbetarsamtal: null,
  },
  {
    initials: 'EH',
    name: 'Erik Hansson',
    meeting: 'Tis 11:00',
    status: 'För lite data ännu',
    lopande: null,
    medarbetarsamtal: null,
  },
]

const pillStyle = (active: boolean): React.CSSProperties => ({
  background: active ? 'var(--nav-active-bg)' : 'transparent',
  color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
  border: '0.5px solid var(--border)',
  borderRadius: '100px',
  fontSize: '12px',
  fontWeight: 400,
  padding: '5px 14px',
  cursor: 'pointer',
  fontFamily: 'inherit',
})

const statusPill: Record<string, React.CSSProperties> = {
  'Tillräcklig data': { background: '#04D8B5', color: '#0A0A0A', border: 'none' },
  'För lite data ännu': { background: 'var(--nav-hover-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--border)' },
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '10px',
  color: 'var(--text-secondary)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 8px 0',
}

export default function BriefingsPage() {
  const [open, setOpen] = useState<string | null>(null)
  const [meetingType, setMeetingType] = useState<Record<string, 'lopande' | 'medarbetarsamtal'>>({})
  const [notes, setNotes] = useState<Record<string, string>>({})
  const [saved, setSaved] = useState<Record<string, string>>({})
  const [toast, setToast] = useState('')

  function triggerToast(message: string) {
    setToast(message)
    setTimeout(() => setToast(''), 2000)
  }

  function toggle(name: string, status: string) {
    if (status !== 'Tillräcklig data') return
    setOpen((prev) => (prev === name ? null : name))
  }

  function getType(name: string): 'lopande' | 'medarbetarsamtal' {
    return meetingType[name] ?? 'lopande'
  }

  function setType(name: string, type: 'lopande' | 'medarbetarsamtal') {
    setMeetingType((prev) => ({ ...prev, [name]: type }))
  }

  function saveNote(name: string) {
    setSaved((prev) => ({ ...prev, [name]: notes[name] ?? '' }))
  }

  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: 'var(--text-primary)', margin: '0 0 32px 0' }}>
        Underlag
      </h1>

      <div>
        {employees.map((e) => {
          const isOpen = open === e.name
          const isClickable = e.status === 'Tillräcklig data'
          const type = getType(e.name)
          const content = type === 'lopande' ? e.lopande : e.medarbetarsamtal
          const note = notes[e.name] ?? ''

          return (
            <div key={e.name} style={{ marginBottom: '8px' }}>
              {/* Row */}
              <div
                onClick={() => toggle(e.name, e.status)}
                style={{
                  background: 'var(--card)',
                  borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: isClickable ? 'pointer' : 'default',
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 400, color: 'var(--text-secondary)', flexShrink: 0 }}>
                  {e.initials}
                </div>
                <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 400 }}>{e.name}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)', fontWeight: 400, marginLeft: 'auto' }}>{e.meeting}</span>
                <span style={{ fontSize: '11px', fontWeight: 400, padding: '3px 10px', borderRadius: '100px', marginLeft: '12px', ...statusPill[e.status] }}>
                  {e.status}
                </span>
              </div>

              {/* Accordion */}
              {isOpen && content && (
                <div style={{ background: 'var(--card)', borderRadius: '0 0 12px 12px', padding: '20px', borderTop: '0.5px solid var(--border)' }}>

                  {/* Previous note callout */}
                  {e.previousNote && (
                    <div style={{ background: 'var(--nav-hover-bg)', borderRadius: '10px', padding: '12px 14px', marginBottom: '16px' }}>
                      <p style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 400, margin: '0 0 6px 0' }}>Sedan förra mötet</p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 400, margin: 0 }}>{e.previousNote}</p>
                    </div>
                  )}

                  {/* Type selector */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                    <button onClick={() => setType(e.name, 'lopande')} style={pillStyle(type === 'lopande')}>
                      Löpande 1-on-1
                    </button>
                    <button onClick={() => setType(e.name, 'medarbetarsamtal')} style={pillStyle(type === 'medarbetarsamtal')}>
                      Medarbetarsamtal
                    </button>
                  </div>
                  <p style={{ fontSize: '11px', color: 'var(--text-secondary)', fontWeight: 400, margin: '0 0 16px 0' }}>
                    {type === 'lopande' ? 'Baserat på 30 dagars data' : 'Baserat på all tillgänglig data sedan anställningens start'}
                  </p>

                  {/* Action row */}
                  <div style={{ display: 'flex', gap: '8px', alignSelf: 'flex-end', marginBottom: '24px' }}>
                    {[
                      {
                        label: 'Ladda ner PDF',
                        icon: (
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6.5 1v8M3.5 6l3 3 3-3M1 10.5h11"/>
                          </svg>
                        ),
                      },
                      {
                        label: 'Dela med medarbetaren',
                        icon: (
                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="10.5" cy="2.5" r="1.5"/>
                            <circle cx="10.5" cy="10.5" r="1.5"/>
                            <circle cx="2.5" cy="6.5" r="1.5"/>
                            <line x1="4" y1="7.3" x2="9" y2="9.7"/>
                            <line x1="9" y1="3.3" x2="4" y2="5.7"/>
                          </svg>
                        ),
                      },
                    ].map(({ label, icon }) => (
                      <button
                        key={label}
                        onClick={() => triggerToast('Kommer snart')}
                        onMouseEnter={(ev) => { ev.currentTarget.style.color = 'var(--text-primary)'; ev.currentTarget.style.borderColor = 'var(--text-secondary)' }}
                        onMouseLeave={(ev) => { ev.currentTarget.style.color = 'var(--text-secondary)'; ev.currentTarget.style.borderColor = 'var(--border)' }}
                        style={{
                          background: 'transparent',
                          border: '0.5px solid var(--border)',
                          color: 'var(--text-secondary)',
                          fontSize: '12px',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          fontWeight: 400,
                          transition: 'color 0.12s ease, border-color 0.12s ease',
                        }}
                      >
                        {icon}
                        {label}
                      </button>
                    ))}
                  </div>

                  {/* Sections */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <p style={sectionLabelStyle}>Fokus</p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.fokus}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Energi och trend</p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.energi}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Gap mot förväntningar</p>
                      <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.gap}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Rekommenderade frågor</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {content.fragor.map((q, i) => (
                          <p key={i} style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                            {i + 1}. {q}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* Efter mötet */}
                    <div>
                      <p style={sectionLabelStyle}>Efter mötet</p>
                      <textarea
                        value={note}
                        onChange={(ev) => setNotes((prev) => ({ ...prev, [e.name]: ev.target.value }))}
                        placeholder="Vad bestämde ni? T.ex. avlasta från två akutärenden."
                        rows={3}
                        style={{
                          width: '100%',
                          boxSizing: 'border-box',
                          background: 'var(--bg)',
                          border: '0.5px solid var(--border)',
                          borderRadius: '10px',
                          padding: '10px 12px',
                          fontSize: '13px',
                          color: 'var(--text-secondary)',
                          resize: 'none',
                          outline: 'none',
                          fontFamily: 'inherit',
                          fontWeight: 400,
                          lineHeight: 1.6,
                        }}
                      />
                      <button
                        onClick={() => saveNote(e.name)}
                        style={{
                          marginTop: '8px',
                          border: '0.5px solid var(--border)',
                          background: 'transparent',
                          color: 'var(--text-secondary)',
                          fontSize: '12px',
                          borderRadius: '8px',
                          padding: '6px 14px',
                          cursor: 'pointer',
                          fontFamily: 'inherit',
                          fontWeight: 400,
                        }}
                      >
                        Spara anteckning
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {toast && (
        <div style={{
          position: 'fixed',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--card)',
          border: '0.5px solid var(--border)',
          color: 'var(--text-primary)',
          fontSize: '12px',
          padding: '8px 18px',
          borderRadius: '100px',
          zIndex: 100,
          pointerEvents: 'none',
        }}>
          {toast}
        </div>
      )}
    </div>
  )
}
