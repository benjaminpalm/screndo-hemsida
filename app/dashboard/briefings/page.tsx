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
}

const employees: Employee[] = [
  {
    initials: 'JL',
    name: 'Jonas Lindqvist',
    meeting: 'Idag 14:00',
    status: 'Klar',
    lopande: {
      fokus: 'Jonas har de senaste veckorna arbetat med klientleveranser under tidspress och hanterat flera parallella akutärenden. Han har levererat det som krävts, men utan det strategiska utrymme han egentligen behöver för att göra sitt bästa arbete.',
      energi: 'Energikurvan pekar tydligt nedåt sedan förra veckan. I loggen från onsdag 28 maj beskriver han en känsla av otrygghet kopplad till omorganiseringsdiskussioner — något som återkommer i flera på varandra följande loggar och indikerar att detta inte är en tillfällig dipp.',
      gap: 'Förväntningen om proaktivt ägarskap och tydlig statuskommunikation är svår att infria när Jonas upplever att han saknar struktur och klarhet i prioriteringarna. Han tar inte initiativ till strategiska förbättringar just nu — inte för att viljan saknas, utan för att kapaciteten är uppbunden operativt.',
      fragor: [
        'Vad tar mest energi just nu, och finns det något vi kan ta bort eller delegera?',
        'Hur tydlig känns din roll i den pågående omorganiseringen?',
        'Vad behöver du från mig för att känna dig trygg i prioriteringarna de närmaste två veckorna?',
      ],
    },
    medarbetarsamtal: {
      fokus: 'Jonas har under det senaste halvåret tagit ett tydligare ägarskap över klientleveranser och vuxit in i rollen som en av teamets mer självgående konsulter. Han har bidragit till att stärka interna rutiner och visat god förmåga att navigera komplexa kundrelationer.',
      energi: 'Energinivån har varierat under perioden, med en mer uttalad nedgång de senaste fyra veckorna. Loggdata visar ett mönster där yttre faktorer — otydliga prioriteringar och organisatorisk osäkerhet — påverkar välmåendet mer än arbetsuppgifterna i sig. Trenden bör adresseras nu innan den befästs.',
      gap: 'Mot bakgrund av hela anställningsperioden har Jonas i hög grad motsvarat förväntningarna på leveransförmåga och kundhantering. Det återstående gapet handlar om strategiska initiativ — han har potential att bidra på en högre nivå men har inte fått eller tagit de tillfällena fullt ut.',
      fragor: [
        'Hur ser du på din egen utveckling det senaste halvåret jämfört med vad du hoppades på?',
        'Finns det ansvar eller projekt du vill ta mer ägarskap över framåt?',
        'Vad är det viktigaste du behöver från organisationen för att trivas och prestera de kommande sex månaderna?',
      ],
    },
  },
  {
    initials: 'AK',
    name: 'Alex Karlsson',
    meeting: 'Mån 09:00',
    status: 'Klar',
    lopande: {
      fokus: 'Alex har den senaste månaden arbetat fokuserat med sin pågående analys och bidragit aktivt i teamets planeringsmöten. Han levererar konsekvent utan att behöva påminnelser och fungerar som en stabil punkt i gruppen.',
      energi: 'Energinivån är hög och stabil. Loggarna från den senaste perioden visar inga oroande signaler — tvärtom beskriver Alex flera tillfällen av flow och känsla av meningsfull prestation. Det är en medarbetare som mår bra och vet om det.',
      gap: 'Alex uppfyller förväntningarna med god marginal. Det enda potentiella gapet är att han ännu inte tagit de strategiska initiativ som förväntningarna pekar på — men det kan lika gärna bero på att han inte fått tydliga inbjudningar att göra det som på brist på ambition.',
      fragor: [
        'Känner du att du får använda din fulla kapacitet i din nuvarande roll?',
        'Finns det något ansvar eller initiativ du vill ta men inte haft utrymme för?',
        'Vad skulle göra nästa månad riktigt bra för dig?',
      ],
    },
    medarbetarsamtal: {
      fokus: 'Alex har under hela sin anställning visat en konsekvent förmåga att leverera med hög kvalitet och utan onödigt stöd. Han har gradvis tagit ett bredare ansvar och blivit en person som yngre medarbetare söker sig till för vägledning och stöd.',
      energi: 'Energidata över tid visar en stabil och positiv trend med enstaka kortvariga dippar som alla återhämtat sig snabbt. Det finns inget som tyder på strukturell trötthet eller otrivsel — Alex verkar genuint trivas med sitt arbete och sin miljö.',
      gap: 'Mot helheten av förväntningarna presterar Alex starkt. Det som återstår är att han tar ett mer synligt ledarskapsinitiativ — inte för att det förväntas av honom formellt, utan för att han har förutsättningarna och signalerna från teamet är tydliga.',
      fragor: [
        'Hur ser du på din roll i teamet om ett år — vad vill du att den ska innehålla?',
        'Är det något från det senaste året som du önskar hade gått annorlunda?',
        'Vad motiverar dig mest just nu, och hur kan vi se till att det fortsätter?',
      ],
    },
  },
  {
    initials: 'MS',
    name: 'Mia Svensson',
    meeting: 'Fre 10:00',
    status: 'Väntar',
    lopande: null,
    medarbetarsamtal: null,
  },
  {
    initials: 'SB',
    name: 'Sara Berg',
    meeting: 'Tor 13:00',
    status: 'Väntar',
    lopande: null,
    medarbetarsamtal: null,
  },
  {
    initials: 'EH',
    name: 'Erik Hansson',
    meeting: 'Tis 11:00',
    status: 'För lite data',
    lopande: null,
    medarbetarsamtal: null,
  },
]

const pillStyle = (active: boolean): React.CSSProperties => ({
  background: active ? 'rgba(255,255,255,0.08)' : 'transparent',
  color: active ? '#fff' : 'rgba(255,255,255,0.3)',
  border: active ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(255,255,255,0.06)',
  borderRadius: '100px',
  fontSize: '12px',
  fontWeight: 400,
  padding: '5px 14px',
  cursor: 'pointer',
  fontFamily: 'inherit',
})

const statusPill: Record<string, React.CSSProperties> = {
  'Klar': { background: 'rgba(4,216,181,0.08)', color: '#04D8B5', border: '0.5px solid rgba(4,216,181,0.2)' },
  'Väntar': { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '0.5px solid rgba(255,255,255,0.08)' },
  'För lite data': { background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', border: '0.5px solid rgba(255,255,255,0.08)' },
}

const sectionLabelStyle: React.CSSProperties = {
  fontSize: '10px',
  color: 'rgba(255,255,255,0.25)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  fontWeight: 400,
  margin: '0 0 8px 0',
}

export default function BriefingsPage() {
  const [open, setOpen] = useState<string | null>(null)
  const [meetingType, setMeetingType] = useState<Record<string, 'lopande' | 'medarbetarsamtal'>>({})

  function toggle(name: string, status: string) {
    if (status !== 'Klar') return
    setOpen((prev) => (prev === name ? null : name))
  }

  function getType(name: string): 'lopande' | 'medarbetarsamtal' {
    return meetingType[name] ?? 'lopande'
  }

  function setType(name: string, type: 'lopande' | 'medarbetarsamtal') {
    setMeetingType((prev) => ({ ...prev, [name]: type }))
  }

  return (
    <div style={{ width: '100%', maxWidth: '720px', padding: '48px 24px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 400, color: '#fff', margin: '0 0 32px 0' }}>
        Briefings
      </h1>

      <div>
        {employees.map((e) => {
          const isOpen = open === e.name
          const isClickable = e.status === 'Klar'
          const type = getType(e.name)
          const content = type === 'lopande' ? e.lopande : e.medarbetarsamtal

          return (
            <div key={e.name} style={{ marginBottom: '8px' }}>
              {/* Row */}
              <div
                onClick={() => toggle(e.name, e.status)}
                style={{
                  background: '#161616',
                  borderRadius: isOpen ? '12px 12px 0 0' : '12px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: isClickable ? 'pointer' : 'default',
                }}
              >
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 400, color: 'rgba(255,255,255,0.4)', flexShrink: 0 }}>
                  {e.initials}
                </div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 400 }}>{e.name}</span>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontWeight: 400, marginLeft: 'auto' }}>{e.meeting}</span>
                <span style={{ fontSize: '11px', fontWeight: 400, padding: '3px 10px', borderRadius: '100px', marginLeft: '12px', ...statusPill[e.status] }}>
                  {e.status}
                </span>
              </div>

              {/* Accordion */}
              {isOpen && content && (
                <div style={{ background: '#111', borderRadius: '0 0 12px 12px', padding: '20px' }}>
                  {/* Type selector */}
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                    <button onClick={() => setType(e.name, 'lopande')} style={pillStyle(type === 'lopande')}>
                      Löpande 1-on-1
                    </button>
                    <button onClick={() => setType(e.name, 'medarbetarsamtal')} style={pillStyle(type === 'medarbetarsamtal')}>
                      Medarbetarsamtal
                    </button>
                  </div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)', fontWeight: 400, margin: '0 0 24px 0' }}>
                    {type === 'lopande' ? 'Baserat på 30 dagars data' : 'Baserat på all tillgänglig data sedan anställningens start'}
                  </p>

                  {/* Sections */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    <div>
                      <p style={sectionLabelStyle}>Fokus</p>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.fokus}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Energi och trend</p>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.energi}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Gap mot förväntningar</p>
                      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>{content.gap}</p>
                    </div>
                    <div>
                      <p style={sectionLabelStyle}>Rekommenderade frågor</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {content.fragor.map((q, i) => (
                          <p key={i} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontWeight: 400, margin: 0 }}>
                            {i + 1}. {q}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
