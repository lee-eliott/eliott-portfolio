"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projects", label: "Projets" },
  { href: "/about", label: "À propos" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl text-text hover:text-accent transition-colors duration-200"
        >
          EL
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm font-body transition-colors duration-200 ${
                  pathname === href
                    ? "text-accent"
                    : "text-muted hover:text-text"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="mailto:eliottlee13@gmail.com"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
        >
          Me contacter
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-muted hover:text-text transition-colors"
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
        <div className="md:hidden border-t border-border bg-bg px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm py-1 transition-colors ${
                pathname === href ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:eliottlee13@gmail.com"
            className="text-sm border border-accent text-accent px-4 py-2 text-center hover:bg-accent hover:text-bg transition-all duration-200 mt-2"
          >
            Me contacter
          </a>
        </div>
      )}
    </header>
  );
}
