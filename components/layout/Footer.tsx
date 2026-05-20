"use client";

import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgba(28,25,20,0.1)] bg-paper-2 py-12 px-8">
      <div className="max-w-container mx-auto">
        {/* Brand — pleine largeur sur mobile, première colonne sur desktop */}
        <div className="flex items-baseline justify-between md:hidden mb-8 pb-6 border-b border-[rgba(28,25,20,0.08)]">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">
              E<span className="text-terracotta">L</span>
            </p>
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.14em] uppercase mt-1">
              Data & Dev
            </p>
          </div>
          <a
            href="mailto:eliottlee13@gmail.com"
            className="font-mono text-[10px] text-terracotta tracking-[0.12em] uppercase hover:opacity-70 transition-opacity duration-200"
          >
            {lang === "fr" ? "Me contacter →" : "Get in touch →"}
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand — desktop uniquement */}
          <div className="hidden md:block">
            <p className="font-display text-lg font-semibold text-ink mb-1">
              E<span className="text-terracotta">L</span>
            </p>
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.14em] uppercase mt-1">
              Data & Dev
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.16em] uppercase mb-4">
              {lang === "fr" ? "Navigation" : "Navigation"}
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", fr: "Accueil", en: "Home" },
                { href: "/projects", fr: "Projets", en: "Projects" },
                { href: "/about", fr: "À propos", en: "About" },
              ].map(({ href, fr, en }) => (
                <a
                  key={href}
                  href={href}
                  className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors duration-200"
                >
                  {lang === "fr" ? fr : en}
                </a>
              ))}
            </div>
          </div>

          {/* Liens externes */}
          <div>
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.16em] uppercase mb-4">
              {lang === "fr" ? "Liens" : "Links"}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/in/eliott-lee"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors duration-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/lee-eliott"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors duration-200"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Contact — desktop uniquement */}
          <div className="hidden md:block">
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.16em] uppercase mb-4">
              Contact
            </p>
            <a
              href="mailto:eliottlee13@gmail.com"
              className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors duration-200"
            >
              eliottlee13@gmail.com
            </a>
          </div>
        </div>

        {/* Email pleine largeur — mobile uniquement */}
        <div className="md:hidden mb-8 pt-2">
          <p className="font-mono text-[10px] text-ink-4 tracking-[0.16em] uppercase mb-3">
            Contact
          </p>
          <a
            href="mailto:eliottlee13@gmail.com"
            className="font-display text-base text-ink-2 hover:text-terracotta transition-colors duration-200"
          >
            eliottlee13@gmail.com
          </a>
        </div>

        <div className="border-t border-[rgba(28,25,20,0.08)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-ink-4 tracking-[0.08em]">
            © {year} Eliott Lee
          </p>
          <p className="font-mono text-[10px] text-ink-4 tracking-[0.08em]">
            {lang === "fr"
              ? "Conçu & développé par Eliott Lee"
              : "Designed & built by Eliott Lee"}
          </p>
        </div>
      </div>
    </footer>
  );
}
