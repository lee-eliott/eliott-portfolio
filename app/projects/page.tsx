import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/sections/ProjectCard";

export const metadata: Metadata = {
  title: "Projets — Eliott Lee",
  description: "Découvrez les projets web développés par Eliott Lee.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-20 border-b border-border">
        <p className="text-accent text-xs font-medium uppercase tracking-widest mb-4">
          Travaux
        </p>
        <h1 className="font-display text-6xl md:text-7xl text-text mb-6">
          Projets
        </h1>
        <p className="text-muted font-body text-lg max-w-xl leading-relaxed">
          Une sélection de mes projets de développement web, réalisés au fil de
          mes formations et expériences personnelles.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* Empty state si pas de projets */}
        {projects.length === 0 && (
          <p className="text-muted text-center py-20">
            Projets en cours de publication…
          </p>
        )}
      </section>
    </div>
  );
}
