"use client";

import Image from "next/image";
import { Button } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n";

const timeline = [
  {
    year: "2024 - Actuel",
    title: {
      fr: "Consultant Data — Davidson Consulting",
      en: "Data Consultant — Davidson Consulting",
    },
    description: {
      fr: "En mission chez Bouygues Telecom. Conception de tableaux de bord Power BI, développement de solutions d'automatisation en Python, Power Automate et Power Apps, et manipulation de donnée via SQL et Python. Référent IA pour les régions Centre-Alpes et Méditerranée.",
      en: "Assigned to Bouygues Telecom. Power BI dashboard design, automation with Python, Power Automate and Power Apps, data manipulation via SQL and Python. AI reference for the Centre-Alpes and Mediterranean regions.",
    },
  },
  {
    year: "2024",
    title: {
      fr: "Diplômé ingénieur — ECAM Lasalle",
      en: "Engineering degree — ECAM Lasalle",
    },
    description: {
      fr: "Arts et Métiers. Spécialisation en informatique, développement logiciel et data.",
      en: "Arts et Métiers school. Specialisation in computer science, software development and data.",
    },
  },
  {
    year: "2023 - 2024",
    title: {
      fr: "Alternance - Bouygues Telecom",
      en: "Apprenticeship — Bouygues Telecom",
    },
    description: {
      fr: "Pilotage du nettoyage et de la transformation des données dans le cadre d'une migration vers un nouvel outil de gestion. Automatisation de traitements récurrents en Python et création de tableaux de bord Power BI pour le suivi de l'activité.",
      en: "Led data cleaning and transformation for a management tool migration. Automated recurring processes in Python and built Power BI dashboards to monitor activity.",
    },
  },
  {
    year: "2022",
    title: { fr: "Formation Power BI", en: "Power BI training" },
    description: {
      fr: "Formation Udemy. Conception de rapports et tableaux de bord : import de données multi-sources, transformation avec Power Query, modélisation et introduction au langage DAX.",
      en: "Udemy course. Report and dashboard design: multi-source data import, Power Query transformation, data modelling and introduction to DAX.",
    },
  },
  {
    year: "2022",
    title: {
      fr: "Formation Développeur Web Complet",
      en: "Full-Stack Web Developer training",
    },
    description: {
      fr: "Formation Udemy. Maîtrise de HTML, CSS, JavaScript et les fondamentaux du développement web.",
      en: "Udemy course. HTML, CSS, JavaScript and web development fundamentals.",
    },
  },
  {
    year: "2021",
    title: { fr: "Formation Développeur Python", en: "Python Developer training" },
    description: {
      fr: "Formation Udemy. Découverte de Django, du déploiement web et de la data science.",
      en: "Udemy course. Introduction to Django, web deployment and data science.",
    },
  },
  {
    year: "2019",
    title: { fr: "Autodidacte — premiers pas", en: "Self-taught — first steps" },
    description: {
      fr: "Découverte de la programmation via Python. Apprentissage par la pratique et les ressources en ligne.",
      en: "Discovered programming through Python. Learning by doing and online resources.",
    },
  },
];

const values = [
  {
    title: { fr: "Autodidacte", en: "Self-taught" },
    description: {
      fr: "J'ai appris à coder par moi-même, en explorant les ressources en ligne et en pratiquant sur des projets concrets.",
      en: "I taught myself to code by exploring online resources and practising on concrete projects.",
    },
  },
  {
    title: { fr: "Curieux", en: "Curious" },
    description: {
      fr: "De la data science au web design, j'explore constamment de nouveaux domaines techniques.",
      en: "From data science to web design, I constantly explore new technical domains.",
    },
  },
  {
    title: { fr: "Méthodique", en: "Methodical" },
    description: {
      fr: "J'accorde une attention particulière à la qualité du code, à sa lisibilité et à sa maintenabilité.",
      en: "I pay close attention to code quality, readability and maintainability.",
    },
  },
];

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div className="pt-16">
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-8 py-20 border-b border-[rgba(28,25,20,0.1)]">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="eyebrow mb-5">{lang === "fr" ? "À propos" : "About"}</p>
            <h1
              className="font-display font-semibold text-ink mb-8 leading-tight"
              style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
            >
              {lang === "fr" ? (
                <>
                  Bonjour, je suis{" "}
                  <span className="text-terracotta">Eliott</span>
                </>
              ) : (
                <>
                  Hi, I&apos;m <span className="text-terracotta">Eliott</span>
                </>
              )}
            </h1>
            <div className="w-10 h-px bg-[rgba(28,25,20,0.15)] mb-8" />
            <p className="font-body text-lg text-ink-2 leading-relaxed mb-6">
              {lang === "fr" ? (
                <>
                  Diplômé ingénieur de l&apos;ECAM Lasalle, je m&apos;oriente vers le{" "}
                  <span className="italic-flourish">Data Engineering</span> — SQL, Python,
                  Power BI, Power Apps sont mes outils du quotidien.
                </>
              ) : (
                <>
                  Engineering graduate from ECAM Lasalle, I focus on{" "}
                  <span className="italic-flourish">Data Engineering</span> — SQL, Python,
                  Power BI and Power Apps are my everyday tools.
                </>
              )}
            </p>
            <p className="font-body text-lg text-ink-2 leading-relaxed mb-10">
              {lang === "fr" ? (
                <>
                  En parallèle, je développe des{" "}
                  <span className="italic-flourish">projets perso</span> sur mon temps
                  libre : scripts d&apos;automatisation, petites apps web, outils pratiques.
                  HTML, CSS, Python, peu importe le langage — j&apos;aime créer des choses
                  utiles qui font gagner du temps.
                </>
              ) : (
                <>
                  On the side, I develop{" "}
                  <span className="italic-flourish">personal projects</span> in my free
                  time: automation scripts, small web apps, practical tools. HTML, CSS,
                  Python, whatever the language — I love building useful things that save
                  time.
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="https://www.linkedin.com/in/eliott-lee" external>
                LinkedIn ↗
              </Button>
              <Button href="mailto:eliottlee13@gmail.com" variant="ghost" external>
                {lang === "fr" ? "Me contacter" : "Get in touch"}
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="group relative w-72 h-72 overflow-hidden bg-paper-2 ring-1 ring-[rgba(28,25,20,0.08)] hover:ring-2 hover:ring-terracotta/30 transition-all duration-500">
                <Image
                  src="/images/profile2.jpg"
                  alt="Eliott Lee"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="grain-overlay opacity-20" />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[rgba(28,25,20,0.1)] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ───────────────────────────────────────── */}
      <section className="max-w-container mx-auto px-8 py-20">
        <div className="flex items-baseline gap-4 mb-12 pb-5 border-b border-[rgba(28,25,20,0.12)]">
          <span className="font-mono text-[11px] text-ink-4 tracking-[0.18em] uppercase">
            {lang === "fr" ? "Profil" : "Profile"}
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
            {lang === "fr" ? "Ce qui me définit" : "What defines me"}
          </h2>
        </div>

        <Reveal stagger className="grid sm:grid-cols-3 gap-6">
          {values.map(({ title, description }) => (
            <div
              key={title.fr}
              className="group bg-paper-2 border border-[rgba(28,25,20,0.08)] p-6 hover:border-terracotta/40 hover:scale-[1.04] transition-all duration-300 cursor-default"
            >
              <div className="w-6 h-px bg-terracotta mb-5 transition-all duration-300 group-hover:w-10" />
              <h3 className="font-display text-xl font-medium text-ink mb-3">
                {title[lang]}
              </h3>
              <p className="font-body text-sm text-ink-3 leading-relaxed">
                {description[lang]}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── PARCOURS ──────────────────────────────────────── */}
      <section className="border-t border-[rgba(28,25,20,0.1)] bg-paper-2">
        <div className="max-w-container mx-auto px-8 py-20">
          <div className="flex items-baseline gap-4 mb-12 pb-5 border-b border-[rgba(28,25,20,0.12)]">
            <span className="font-mono text-[11px] text-ink-4 tracking-[0.18em] uppercase">
              {lang === "fr" ? "Parcours" : "Journey"}
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
              Timeline
            </h2>
          </div>

          <div className="relative">
            {/* Ligne verticale — centrée sur les dots (year 48px + gap 24px + demi-dot 6px = 78px) */}
            <div className="absolute left-[78px] top-2 bottom-2 w-px bg-[rgba(28,25,20,0.1)]" />

            <Reveal stagger className="flex flex-col gap-8">
              {timeline.map(({ year, title, description }) => (
                <div key={year + title.fr} className="group flex gap-6 items-start cursor-default">
                  {/* Année */}
                  <div className="w-12 flex-shrink-0 text-right pt-1">
                    <span className="font-mono text-[10px] text-ink-4 tracking-[0.06em] leading-tight group-hover:text-terracotta transition-colors duration-300">
                      {year}
                    </span>
                  </div>

                  {/* Dot — sur la ligne */}
                  <div className="flex-shrink-0 mt-1.5 relative z-10">
                    <div className="w-3 h-3 bg-paper-2 border-2 border-terracotta rounded-full ring-2 ring-paper-2 transition-all duration-300 group-hover:scale-[1.4] group-hover:bg-terracotta" />
                  </div>

                  {/* Content */}
                  <div className="pb-2 flex-1 transition-transform duration-300 group-hover:translate-x-0.5">
                    <h3 className="font-display text-base font-semibold text-ink mb-1 group-hover:text-terracotta transition-colors duration-300">
                      {title[lang]}
                    </h3>
                    <p className="font-body text-sm text-ink-3 leading-relaxed">
                      {description[lang]}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-8 text-center">
          <p className="eyebrow mb-5">
            {lang === "fr" ? "Collaborer" : "Collaborate"}
          </p>
          <h2
            className="font-display font-medium text-ink mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
          >
            {lang === "fr" ? "Envie de collaborer ?" : "Want to work together?"}
          </h2>
          <p className="font-body text-lg text-ink-3 mb-8 max-w-md mx-auto">
            {lang === "fr"
              ? "Contactez-moi pour discuter de vos projets ou en savoir plus."
              : "Reach out to discuss your projects or learn more about my work."}
          </p>
          <a
            href="mailto:eliottlee13@gmail.com?subject=Contact depuis le portfolio"
            className="inline-flex items-center gap-3 bg-terracotta text-paper font-display font-medium text-sm px-8 py-4 hover:bg-terracotta-2 transition-colors duration-200"
          >
            {lang === "fr" ? "Envoyer un email" : "Send an email"} →
          </a>
        </div>
      </section>
    </div>
  );
}
