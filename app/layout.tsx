import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Eliott Lee — Data Engineer",
  description:
    "Portfolio d'Eliott Lee, ingénieur diplômé orienté Data Engineering. SQL, Python, Power BI, et projets perso en tout genre.",
  keywords: ["data engineer", "portfolio", "Python", "SQL", "Power BI", "Power Apps"],
  openGraph: {
    title: "Eliott Lee — Data Engineer",
    description: "Portfolio d'Eliott Lee, étudiant développeur web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-bg text-text font-body min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
