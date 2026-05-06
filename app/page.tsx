import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Section, SectionHeading, Button, AccentLine, Tag } from "@/components/ui";
import { ProjectCard } from "@/components/sections/ProjectCard";

/* ─── Skills data ─────────────────────────────────────────── */
const skills = [
  { label: "Langages", items: ["SQL", "DAX", "Python", "HTML", "CSS", "JavaScript"] },
  { label: "Frameworks", items: ["Django", "Next.js", "React"] },
  { label: "Outils", items: ["Git", "GitHub", "VS Code", "Heroku"] },
  { label: "Intérêts", items: ["Data Science", "IA", "UX/UI", "Machine Learning"] },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center pt-16">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#E8E8E8 1px, transparent 1px), linear-gradient(90deg, #E8E8E8 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-accent text-xs font-medium uppercase tracking-widest mb-6 animate-fade-up">
                Développeur
              </p>

              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl leading-none text-text mb-6 animate-fade-up animate-delay-100">
                Eliott
                <br />
                <span className="text-accent">Lee</span>
              </h1>

              <div className="w-12 h-px bg-border mb-6 animate-fade-up animate-delay-200" />

              <p className="text-muted font-body text-lg leading-relaxed mb-10 max-w-md animate-fade-up animate-delay-300">
                Diplômé ingénieur, orienté <span className="text-text">Data Engineering</span> — SQL, Python, Power BI.
                Sur mon temps libre, je crée des <span className="text-text">outils qui font gagner du temps</span> :
                scripts, automatisations, petites apps web. Peu importe le langage, j'aime construire des choses utiles.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-400">
                <Button href="/projects">Voir mes projets</Button>
                <Button href="/about" variant="ghost">
                  En savoir plus
                </Button>
              </div>
            </div>

            {/* Right: Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Decorative border */}
                <div className="absolute -inset-3 border border-accent/20" />
                <div className="absolute -inset-6 border border-border" />

                <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden">
                  <Image
                    src="/images/profile.png"
                    alt="Eliott Lee"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted">
            <span className="text-xs font-body uppercase tracking-widest">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-muted to-transparent" />
          </div>
        </div>
      </section>

      {/* ── INTRO STATEMENT ───────────────────────────────── */}
      <section className="border-y border-border py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="font-display text-3xl md:text-4xl text-text/70 leading-relaxed max-w-3xl">
            Je crée des{" "}
            <span className="text-text">expériences web modernes</span> en
            combinant design soigné et code robuste.
          </p>
        </div>
      </section>

      {/* ── PROJETS (aperçu) ──────────────────────────────── */}
      <Section>
        <div className="flex items-end justify-between mb-12">
          <SectionHeading label="Travaux" title="Projets récents" />
          <Link
            href="/projects"
            className="text-sm text-muted hover:text-accent transition-colors duration-200 hidden sm:block"
          >
            Tous les projets →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Button href="/projects" variant="ghost">
            Tous les projets →
          </Button>
        </div>
      </Section>

      {/* ── COMPÉTENCES ───────────────────────────────────── */}
      <section className="border-t border-border bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <SectionHeading label="Stack" title="Compétences" />

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map(({ label, items }) => (
              <div key={label}>
                <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">
                  {label}
                </p>
                <div className="flex flex-col gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-muted font-body py-1.5 border-b border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ───────────────────────────────────── */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AccentLine />
          <h2 className="font-display text-5xl md:text-6xl text-text mt-6 mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-muted font-body text-lg mb-10 max-w-lg mx-auto">
            Vous avez un projet ? Une question ? N'hésitez pas à me contacter.
          </p>
          <a
            href="mailto:eliottlee13@gmail.com?subject=Contact depuis le portfolio"
            className="inline-flex items-center gap-3 bg-accent text-bg text-sm font-medium px-8 py-4 hover:bg-accent-dark transition-colors duration-200"
          >
            eliottlee13@gmail.com
            <span>→</span>
          </a>
        </div>
      </section>
    </>
  );
}
