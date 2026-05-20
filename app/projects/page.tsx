"use client";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n";

export default function ProjectsPage() {
  const { lang } = useLanguage();

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-container mx-auto px-8 py-20 border-b border-[rgba(28,25,20,0.1)]">
        <p className="eyebrow mb-5">{lang === "fr" ? "Travaux" : "Work"}</p>
        <h1
          className="font-display font-semibold text-ink mb-6 leading-none"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          {lang === "fr" ? "Projets" : "Projects"}
        </h1>
        <p className="font-body text-lg text-ink-3 max-w-xl leading-relaxed">
          {lang === "fr"
            ? "Une sélection de mes projets de développement web, réalisés au fil de mes formations et expériences personnelles."
            : "A selection of my web development projects, built through training and personal exploration."}
        </p>
      </section>

      {/* Liste */}
      <section className="max-w-container mx-auto px-8 py-12">
        <Reveal stagger className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </Reveal>

        {projects.length === 0 && (
          <p className="font-body text-ink-3 text-center py-20">
            {lang === "fr" ? "Projets en cours de publication…" : "Projects coming soon…"}
          </p>
        )}
      </section>
    </div>
  );
}
