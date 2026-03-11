import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: 'Screndo – People Intelligence Platform',
  description: 'Screndo ger managers en levande bild av sitt team varje dag. OKR-tracking, pulsmätningar och AI-assistenter för svenska bolag med 50–200 anställda.',
  keywords: 'people intelligence, HR platform, OKR tracking, pulsmätningar, svensk arbetsrätt, HR-verktyg Sverige',
  openGraph: {
    title: 'Screndo – People Intelligence, Built for Humans',
    description: 'People intelligence för växande europeiska bolag. Kom igång på 20 minuter.',
    url: 'https://screndo.com',
    siteName: 'Screndo',
    locale: 'sv_SE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Screndo – People Intelligence Platform',
    description: 'People intelligence för växande europeiska bolag.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://screndo.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Screndo",
              "applicationCategory": "BusinessApplication",
              "description": "People intelligence platform för svenska och europeiska bolag med 50-200 anställda. OKR-tracking, pulsmätningar och AI-assistenter baserade på svensk arbetsrätt.",
              "url": "https://screndo.com",
              "offers": {
                "@type": "Offer",
                "price": "89",
                "priceCurrency": "SEK",
                "priceSpecification": "per anställd per månad"
              },
              "operatingSystem": "Web",
              "inLanguage": ["sv", "en"],
              "areaServed": ["SE", "NO", "DK", "EU"],
              "founder": {
                "@type": "Person",
                "name": "Benjamin Palm"
              },
              "location": {
                "@type": "Place",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Stockholm",
                  "addressCountry": "SE"
                }
              }
            })
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
