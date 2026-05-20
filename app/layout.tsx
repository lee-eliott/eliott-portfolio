import type { Metadata } from "next";
import { Instrument_Sans, Spectral, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LanguageProvider } from "@/lib/i18n";
import { CustomCursor } from "@/components/ui/CustomCursor";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spectral = Spectral({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eliott Lee — Data Engineer",
  description:
    "Portfolio d'Eliott Lee, ingénieur diplômé orienté Data Engineering. SQL, Python, Power BI, et projets perso en tout genre.",
  keywords: ["data engineer", "portfolio", "Python", "SQL", "Power BI", "Power Apps"],
  openGraph: {
    title: "Eliott Lee — Data Engineer",
    description: "Portfolio d'Eliott Lee, ingénieur diplômé orienté Data Engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body
        className={`${instrumentSans.variable} ${spectral.variable} ${jetbrainsMono.variable} bg-paper text-ink font-body min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          <CustomCursor />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
