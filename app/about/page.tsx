import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos — Eliott Lee",
  description:
    "En savoir plus sur Eliott Lee, étudiant ingénieur développeur web.",
};

const timeline = [
  {
    year: "2024 - Actuel",
    title: "Consultant Data — Davidson Consulting",
    description: "En mission chez Bouygues Telecom. Conception de tableaux de bord Power BI, développement de solutions d'automatisation en Python, Power Automate et Power Apps, et manipulation de donnée via SQL et Python. Référent IA pour les régions Centre-Alpes et Méditerranée.",
  },
  {
    year: "2024",
    title: "Diplômé ingénieur — ECAM Lasalle",
    description: "Arts et Métiers. Spécialisation en informatique, développement logiciel et data.",
  },
  {
    year: "2023 - 2024",
    title: "Alternance - Bouygues Telecom",
  description: "Pilotage du nettoyage et de la transformation des données dans le cadre d'une migration vers un nouvel outil de gestion. Automatisation de traitements récurrents en Python et création de tableaux de bord Power BI pour le suivi de l'activité.",
 },
  {
    year: "2022",
    title: "Formation Power BI",
    description: "Formation Udemy. Conception de rapports et tableaux de bord : import de données multi-sources, transformation avec Power Query, modélisation et introduction au langage DAX.",
  },
  {
    year: "2022",
    title: "Formation Développeur Web Complet",
    description: "Formation Udemy. Maîtrise de HTML, CSS, JavaScript et les fondamentaux du développement web.",
  },
  {
    year: "2021",
    title: "Formation Développeur Python",
    description: "Formation Udemy. Découverte de Django, du déploiement web et de la data science.",
  },
  {
    year: "2019",
    title: "Autodidacte — premiers pas",
    description: "Découverte de la programmation via Python. Apprentissage par la pratique et les ressources en ligne.",
  },
];

const values = [
  {
    title: "Autodidacte",
    description:
      "J'ai appris à coder par moi-même, en explorant les ressources en ligne et en pratiquant sur des projets concrets.",
  },
  {
    title: "Curieux",
    description:
      "De la data science au web design, j'explore constamment de nouveaux domaines techniques.",
  },
  {
    title: "Méthodique",
    description:
      "J'accorde une attention particulière à la qualité du code, à sa lisibilité et à sa maintenabilité.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent text-xs font-medium uppercase tracking-widest mb-4">
              À propos
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-text mb-8 leading-tight">
              Bonjour, je suis
              <br />
              <span className="text-accent">Eliott</span>
            </h1>
            <div className="w-12 h-px bg-border mb-8" />
            <p className="font-body text-muted text-lg leading-relaxed mb-6">
              Diplômé ingénieur de l'ECAM Lasalle, je m'oriente vers le <span className="text-text">Data Engineering</span> — SQL, Python, Power BI, Power Apps sont mes outils du quotidien.
            </p>
            <p className="font-body text-muted text-lg leading-relaxed mb-10">
              En parallèle, je développe des <span className="text-text">projets perso</span> sur mon temps libre : scripts d'automatisation, petites apps web, outils pratiques. HTML, CSS, Python, peu importe le langage — j'aime créer des choses utiles qui font gagner du temps.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                href="https://www.linkedin.com/in/eliott-lee"
                external
              >
                LinkedIn ↗
              </Button>
              <Button
                href="mailto:eliottlee13@gmail.com"
                variant="ghost"
                external
              >
                Me contacter
              </Button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-3 border border-accent/20" />
              <div className="relative w-72 h-72 overflow-hidden bg-surface">
                <Image
                  src="/images/profile2.jpg"
                  alt="Eliott Lee"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALEURS ───────────────────────────────────────── */}
      <Section>
        <SectionHeading label="Profil" title="Ce qui me définit" />

        <div className="grid sm:grid-cols-3 gap-6">
          {values.map(({ title, description }) => (
            <div
              key={title}
              className="bg-surface border border-border p-6 hover:border-accent/30 transition-colors duration-300"
            >
              <div className="w-6 h-px bg-accent mb-4" />
              <h3 className="font-display text-xl text-text mb-3">{title}</h3>
              <p className="font-body text-muted text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PARCOURS ──────────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionHeading label="Parcours" title="Timeline" />

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />

            <div className="flex flex-col gap-10">
              {timeline.map(({ year, title, description }) => (
                <div key={year} className="flex gap-8 items-start">
                  {/* Dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-2 h-2 bg-accent rounded-full ring-4 ring-surface" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <p className="text-accent text-xs font-medium uppercase tracking-widest mb-1">
                      {year}
                    </p>
                    <h3 className="font-display text-xl text-text mb-2">
                      {title}
                    </h3>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-text mb-6">
            Envie de collaborer ?
          </h2>
          <p className="text-muted font-body mb-8">
            Contactez-moi pour discuter de vos projets ou en savoir plus.
          </p>
          <a
            href="mailto:eliottlee13@gmail.com?subject=Contact depuis le portfolio"
            className="inline-flex items-center gap-3 bg-accent text-bg text-sm font-medium px-8 py-4 hover:bg-accent-dark transition-colors duration-200"
          >
            Envoyer un email →
          </a>
        </div>
      </section>
    </div>
  );
}
