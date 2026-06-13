'use client'

import { createContext, useContext, useState } from 'react'

type Lang = 'sv' | 'en'

const translations = {
  sv: {
    login: 'Logga in',
    bookIntro: 'Boka intro',
    headline: 'Continuous people intelligence',
    subline: 'Ärliga, dagliga signaler från dina medarbetare, omvandlade till ett tydligt underlag inför varje samtal.',
    getStarted: 'Kom igång',
    seeHow: 'Se hur det fungerar',
    overlayTitle: 'Ett system som lyssnar.',
    overlaySub: 'Screndo översätter din organisation i realtid.',
    whatHeadline: 'De flesta organisationer är fulla av signaler. Nästan inga blir hörda.',
    whatPara1: 'Screndo är en plattform för kontinuerlig people intelligence. Den lyssnar på din organisation genom strukturerad och ostrukturerad data och översätter det till tydlig insikt för HR och ledning.',
    whatPara2: 'Inte ännu en årlig undersökning. Inte en dashboard som ingen öppnar. Ett system som faktiskt fungerar.',
    gardenText: 'Organisationer är levande.',
    ctaHeadline: 'Se hela bilden. Inte bara enkätsvaren.',
    ctaButton: 'Boka intro',
    product: 'Produkt',
    about: 'Om oss',
    careers: 'Karriär',
    privacy: 'Integritet',
  },
  en: {
    login: 'Log in',
    bookIntro: 'Book an intro',
    headline: 'Continuous people intelligence',
    subline: 'Honest, daily signals from your people, turned into clear context before every conversation.',
    getStarted: 'Get started',
    seeHow: 'See how it works',
    overlayTitle: 'A system that listens.',
    overlaySub: 'Screndo translates your organization in real time.',
    whatHeadline: 'Most organizations are full of signal. Almost none of it gets heard.',
    whatPara1: 'Screndo is a continuous people intelligence platform. It listens to your organization through structured and unstructured data and translates that into clear insight for HR and leadership.',
    whatPara2: 'Not another annual survey. Not a dashboard nobody opens. A system that actually works.',
    gardenText: 'Organizations are living things.',
    ctaHeadline: 'See the whole picture. Not just the survey results.',
    ctaButton: 'Book an intro',
    product: 'Product',
    about: 'About',
    careers: 'Careers',
    privacy: 'Privacy',
  },
}

type Translations = typeof translations.sv

const LanguageContext = createContext<{
  lang: Lang
  t: Translations
  toggle: () => void
}>({
  lang: 'sv',
  t: translations.sv,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('sv')
  const toggle = () => setLang((l) => (l === 'sv' ? 'en' : 'sv'))
  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
