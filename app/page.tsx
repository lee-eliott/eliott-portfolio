"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { useLanguage } from "@/lib/i18n";

const skills = {
  fr: [
    { label: "Langages", items: ["SQL", "DAX", "Python", "HTML", "CSS", "JavaScript"] },
    { label: "Frameworks", items: ["Django", "Next.js", "React"] },
    { label: "Outils", items: ["Git", "GitHub", "VS Code", "Heroku"] },
    { label: "Intérêts", items: ["Data Science", "IA", "UX/UI", "Machine Learning"] },
  ],
  en: [
    { label: "Languages", items: ["SQL", "DAX", "Python", "HTML", "CSS", "JavaScript"] },
    { label: "Frameworks", items: ["Django", "Next.js", "React"] },
    { label: "Tools", items: ["Git", "GitHub", "VS Code", "Heroku"] },
    { label: "Interests", items: ["Data Science", "AI", "UX/UI", "Machine Learning"] },
  ],
};

export default function HomePage() {
  const { lang } = useLanguage();
  const s = skills[lang];

  return (
    <>
      {/* ── HERO (Variant A — Éditorial deux colonnes) ─────── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-paper">
        {/* Grain */}
        <div className="grain-overlay" />
        {/* Warm glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-terracotta-3/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/4 translate-x-1/3" />

        <div className="max-w-container mx-auto px-8 w-full py-20">
          <div className="grid md:grid-cols-[1.4fr_0.9fr] gap-12 lg:gap-20 items-center">

            {/* Left — texte */}
            <div>
              <p className="eyebrow mb-7 animate-fade-up opacity-0-init">
                {lang === "fr" ? "Développeur" : "Developer"}
              </p>

              <h1
                className="font-display font-semibold leading-[0.88] text-ink mb-8 animate-fade-up animate-delay-100 opacity-0-init"
                style={{ fontSize: "clamp(60px, 10vw, 136px)" }}
              >
                Eliott
                <br />
                <span className="text-terracotta">Lee</span>
              </h1>

              <div className="w-10 h-px bg-[rgba(28,25,20,0.15)] mb-8 animate-fade-up animate-delay-200 opacity-0-init" />

              <p className="font-body text-lg text-ink-2 leading-relaxed mb-10 max-w-md animate-fade-up animate-delay-300 opacity-0-init">
                {lang === "fr" ? (
                  <>
                    Diplômé ingénieur, orienté{" "}
                    <span className="italic-flourish">Data Engineering</span> — SQL,
                    Python, Power BI. Sur mon temps libre, je crée des{" "}
                    <span className="italic-flourish">outils qui font gagner du temps</span>{" "}
                    : scripts, automatisations, petites apps web. Peu importe le langage,
                    j&apos;aime construire des choses utiles.
                  </>
                ) : (
                  <>
                    Engineering graduate, focused on{" "}
                    <span className="italic-flourish">Data Engineering</span> — SQL,
                    Python, Power BI. In my free time, I build{" "}
                    <span className="italic-flourish">tools that save time</span>: scripts,
                    automations, small web apps. Whatever the language, I love building
                    useful things.
                  </>
                )}
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400 opacity-0-init">
                <Button href="/projects">
                  {lang === "fr" ? "Voir mes projets" : "View my projects"} →
                </Button>
                <Button href="/about" variant="ghost">
                  {lang === "fr" ? "En savoir plus" : "Learn more"}
                </Button>
              </div>
            </div>

            {/* Right — portrait + meta */}
            <div className="flex flex-col items-center md:items-end gap-8 animate-fade-up animate-delay-200 opacity-0-init">
              {/* Portrait circulaire */}
              <div className="relative">
                <div className="group relative w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden ring-1 ring-[rgba(28,25,20,0.08)] hover:ring-2 hover:ring-terracotta/30 transition-all duration-500">
                  <Image
                    src="/images/profile.png"
                    alt="Eliott Lee"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    priority
                  />
                  <div className="grain-overlay opacity-20" />
                </div>
                {/* Status dot with pulse */}
                <div className="absolute bottom-4 right-4 w-4 h-4">
                  <div className="absolute inset-0 bg-sage rounded-full ring-2 ring-paper z-10" />
                  <div className="absolute inset-0 bg-sage/60 rounded-full animate-ping" />
                </div>
              </div>

              {/* Info cards */}
              <div className="grid grid-cols-2 gap-3 w-full max-w-[17rem]">
                <div className="group bg-paper-2 border border-[rgba(28,25,20,0.08)] p-4 hover:border-terracotta/40 hover:scale-[1.04] transition-all duration-300 cursor-default">
                  <div className="w-4 h-px bg-terracotta mb-2 transition-all duration-300 group-hover:w-6" />
                  <p className="font-mono text-[10px] text-ink-4 tracking-[0.14em] uppercase mb-1.5">
                    {lang === "fr" ? "Activité" : "Activity"}
                  </p>
                  <p className="font-display text-sm font-medium text-ink">
                    Data & Dev
                  </p>
                </div>
                <div className="group bg-paper-2 border border-[rgba(28,25,20,0.08)] p-4 hover:border-terracotta/40 hover:scale-[1.04] transition-all duration-300 cursor-default">
                  <div className="w-4 h-px bg-terracotta mb-2 transition-all duration-300 group-hover:w-6" />
                  <p className="font-mono text-[10px] text-ink-4 tracking-[0.14em] uppercase mb-1.5">
                    {lang === "fr" ? "Lieu" : "Location"}
                  </p>
                  <p className="font-display text-sm font-medium text-ink">Lyon, FR</p>
                </div>
                <div className="group bg-paper-2 border border-[rgba(28,25,20,0.08)] p-4 col-span-2 hover:border-terracotta/40 hover:scale-[1.02] transition-all duration-300 cursor-default">
                  <div className="w-4 h-px bg-terracotta mb-2 transition-all duration-300 group-hover:w-8" />
                  <p className="font-mono text-[10px] text-ink-4 tracking-[0.14em] uppercase mb-1.5">
                    {lang === "fr" ? "Poste actuel" : "Current role"}
                  </p>
                  <p className="font-display text-sm font-medium text-ink">
                    Davidson Consulting
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-ink-4 tracking-[0.16em] uppercase">
              Scroll
            </span>
            <div className="relative w-px h-10 bg-ink-4/15 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-ink-4/60 animate-scroll-drop" />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ───────────────────────────────── */}
      <section className="border-y border-[rgba(28,25,20,0.1)] bg-paper-2 py-14">
        <div className="max-w-container mx-auto px-8">
          <Reveal>
            <p className="font-body text-2xl md:text-3xl text-ink-2 leading-relaxed max-w-3xl">
              {lang === "fr" ? (
                <>
                  L&apos;IA m&apos;ouvre des portes. Data, web, automatisation : j&apos;explore de{" "}
                  <span className="italic-flourish">nouveaux territoires</span> et je
                  construis des outils qui m&apos;aident au quotidien.
                </>
              ) : (
                <>
                  AI opens doors for me. Data, web, automation: I explore{" "}
                  <span className="italic-flourish">new territories</span> and build
                  tools that help me every day.
                </>
              )}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PROJETS ───────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-8 py-20">
        <div className="flex items-end justify-between gap-4 mb-2 pb-5 border-b border-[rgba(28,25,20,0.12)]">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[11px] text-ink-4 tracking-[0.18em] uppercase">
              {lang === "fr" ? "Travaux" : "Work"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
              {lang === "fr" ? "Projets récents" : "Recent projects"}
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden sm:flex items-center gap-1 font-display text-sm text-terracotta hover:gap-2 transition-all duration-200"
          >
            {lang === "fr" ? "Tous les projets" : "All projects"} →
          </Link>
        </div>

        <Reveal stagger className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </Reveal>

        <div className="mt-6 sm:hidden">
          <Button href="/projects" variant="ghost">
            {lang === "fr" ? "Tous les projets →" : "All projects →"}
          </Button>
        </div>
      </section>

      {/* ── COMPÉTENCES ───────────────────────────────────── */}
      <section className="bg-paper-2 border-y border-[rgba(28,25,20,0.1)]">
        <div className="max-w-container mx-auto px-8 py-20">
          <div className="flex items-baseline gap-4 mb-12 pb-5 border-b border-[rgba(28,25,20,0.12)]">
            <span className="font-mono text-[11px] text-ink-4 tracking-[0.18em] uppercase">
              Stack
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
              {lang === "fr" ? "Compétences" : "Skills"}
            </h2>
          </div>

          <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
            {s.map(({ label, items }) => (
              <div key={label}>
                <p className="font-mono text-[10px] text-terracotta uppercase tracking-[0.18em] mb-4">
                  {label}
                </p>
                <div className="flex flex-col">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="font-body text-sm text-ink-2 py-2 border-b border-[rgba(28,25,20,0.08)] last:border-0 hover:text-terracotta hover:translate-x-1.5 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── CTA CONTACT ───────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-container mx-auto px-8 text-center">
          <p className="eyebrow mb-6">{lang === "fr" ? "Contact" : "Contact"}</p>
          <h2
            className="font-display font-medium text-ink mb-6"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            {lang === "fr" ? "Travaillons ensemble" : "Let's work together"}
          </h2>
          <p className="font-body text-lg text-ink-3 mb-10 max-w-lg mx-auto">
            {lang === "fr"
              ? "Vous avez un projet ? Une question ? N'hésitez pas à me contacter."
              : "Got a project? A question? Feel free to reach out."}
          </p>
          <a
            href="mailto:eliottlee13@gmail.com?subject=Contact depuis le portfolio"
            className="inline-flex items-center gap-3 bg-terracotta text-paper font-display font-medium text-sm px-8 py-4 hover:bg-terracotta-2 transition-colors duration-200"
          >
            eliottlee13@gmail.com
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
