"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

const navLinks = [
  { href: "/", label: { fr: "Accueil", en: "Home" } },
  { href: "/projects", label: { fr: "Projets", en: "Projects" } },
  { href: "/about", label: { fr: "À propos", en: "About" } },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-[rgba(28,25,20,0.08)]">
      <nav className="max-w-container mx-auto px-8 h-16 flex items-center justify-between">
        {/* Monogram logo */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-ink hover:opacity-70 transition-opacity duration-200"
        >
          E<span className="text-terracotta">L</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-display text-sm font-medium transition-colors duration-200 ${
                  pathname === href
                    ? "text-terracotta"
                    : "text-ink-3 hover:text-ink"
                }`}
              >
                {label[lang]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + contact */}
        <div className="hidden md:flex items-center gap-5">
          <button
            onClick={toggle}
            className="font-mono text-[11px] text-ink-4 hover:text-ink tracking-[0.14em] uppercase transition-colors duration-200"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <a
            href="mailto:eliottlee13@gmail.com"
            className="font-display text-sm font-medium border border-[rgba(28,25,20,0.2)] text-ink-2 px-4 py-2 hover:border-terracotta hover:text-terracotta transition-all duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-ink-3 hover:text-ink transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[rgba(28,25,20,0.08)] bg-paper px-8 py-5 flex flex-col gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-sm py-1 transition-colors ${
                pathname === href ? "text-terracotta" : "text-ink-3 hover:text-ink"
              }`}
            >
              {label[lang]}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-3 border-t border-[rgba(28,25,20,0.08)]">
            <button
              onClick={toggle}
              className="font-mono text-[11px] text-ink-4 uppercase tracking-[0.14em] hover:text-ink transition-colors"
            >
              {lang === "fr" ? "Switch to EN" : "Passer en FR"}
            </button>
            <a
              href="mailto:eliottlee13@gmail.com"
              className="font-display text-sm border border-[rgba(28,25,20,0.2)] text-ink-2 px-4 py-2 hover:border-terracotta hover:text-terracotta transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
