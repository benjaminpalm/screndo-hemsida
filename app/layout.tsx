import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Screndo",
  description:
    "Screndo is an AI platform that collects and analyzes people data to give HR and leadership continuous insight into their organization.",
  icons: { icon: "/nyfavicon.png" },
  robots: { googleBot: { noimageindex: true } },
  verification: { google: "mjIBIF1f28mY21N6YttL9-o8HC1i2-qgGnmNgpQjRio" },
  openGraph: {
    title: "Screndo",
    description:
      "Screndo is an AI platform that collects and analyzes people data to give HR and leadership continuous insight into their organization.",
    url: "https://screndo.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={inter.className} style={{ background: "#fff", color: "#000", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
