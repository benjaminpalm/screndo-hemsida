'use client'

import { createContext, useContext, useState } from 'react'

type Lang = 'sv' | 'en'

const translations = {
  sv: {
    privacyHeadline: 'Integritetspolicy',
    lastUpdated: 'Senast uppdaterad: juni 2026',
    collectTitle: 'Vad vi samlar in',
    collectText: 'Vi samlar in den information du anger när du bokar ett intro: namn, jobbmejl, företagsnamn, jobbtitel och antal anställda.',
    whyTitle: 'Varför vi samlar in den',
    whyText: 'Vi använder informationen enbart för att kontakta dig om Screndo och förbereda vårt introduktionsmöte. Vi säljer eller delar inte din data med tredje part.',
    keepTitle: 'Hur länge vi sparar den',
    keepText: 'Vi sparar din information så länge det behövs för att upprätthålla vår affärsrelation. Du kan begära radering när som helst.',
    rightsTitle: 'Dina rättigheter',
    rightsText: 'Enligt GDPR har du rätt att få tillgång till, korrigera eller radera dina personuppgifter. För att utöva dessa rättigheter, kontakta oss på screndocom@gmail.com.',
    contactTitle: 'Kontakt',
    contactText: 'Screndo, screndocom@gmail.com',
    pageHeadline: 'Boka intro',
    pageSubline: 'Vi hör av oss inom 24 timmar.',
    workEmail: 'Jobbmejl',
    firstName: 'Förnamn',
    lastName: 'Efternamn',
    companyName: 'Företagsnamn',
    jobTitle: 'Jobbtitel',
    companySize: 'Antal anställda',
    selectPlaceholder: 'Välj...',
    size1: '1-50 anställda',
    size2: '51-200 anställda',
    size3: '201-500 anställda',
    size4: '500+ anställda',
    textareaLabel: 'Något du vill att vi vet innan vi ses?',
    submitButton: 'Skicka förfrågan',
    validationError: 'Fyll i det här obligatoriska fältet.',
    submittedMessage: 'Tack! Vi hör av oss snart.',
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
    privacyHeadline: 'Privacy Policy',
    lastUpdated: 'Last updated: June 2026',
    collectTitle: 'What we collect',
    collectText: 'We collect the information you provide when booking an intro: name, work email, company name, job title, and company size.',
    whyTitle: 'Why we collect it',
    whyText: 'We use this information solely to contact you about Screndo and prepare for our introductory meeting. We do not sell or share your data with third parties.',
    keepTitle: 'How long we keep it',
    keepText: 'We retain your information for as long as necessary to maintain our business relationship. You can request deletion at any time.',
    rightsTitle: 'Your rights',
    rightsText: 'Under GDPR, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at screndocom@gmail.com.',
    contactTitle: 'Contact',
    contactText: 'Screndo, screndocom@gmail.com',
    pageHeadline: 'Book an intro',
    pageSubline: 'We will reach out within 24 hours.',
    workEmail: 'Work email',
    firstName: 'First name',
    lastName: 'Last name',
    companyName: 'Company name',
    jobTitle: 'Job title',
    companySize: 'Company size',
    selectPlaceholder: 'Select...',
    size1: '1-50 employees',
    size2: '51-200 employees',
    size3: '201-500 employees',
    size4: '500+ employees',
    textareaLabel: 'Anything you want us to know before we meet?',
    submitButton: 'Send request',
    validationError: 'Please complete this required field.',
    submittedMessage: 'Thanks! We will be in touch soon.',
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
