import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";
import { Tag, Button } from "@/components/ui";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Projet introuvable" };
  return {
    title: `${project.title} — Eliott Lee`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) notFound();

  const paragraphs = project.longDescription.split("\n\n").filter(Boolean);

  return (
    <div className="pt-16">
      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
        >
          ← Tous les projets
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-5xl mx-auto px-6 py-12 border-b border-border">
        <p className="text-accent text-xs font-medium uppercase tracking-widest mb-4">
          {project.year} · {project.category}
        </p>
        <h1 className="font-display text-5xl md:text-6xl text-text mb-3">
          {project.title}
        </h1>
        <p className="text-muted font-body text-xl mb-8">{project.subtitle}</p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </section>

      {/* Main image */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="relative w-full aspect-video overflow-hidden bg-surface border border-border">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Content grid */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Long description */}
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl text-text mb-6">
              À propos du projet
            </h2>
            <div className="w-8 h-px bg-accent mb-8" />
            <div className="flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-body text-muted leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            {/* Technologies */}
            <div>
              <p className="text-xs text-accent uppercase tracking-widest font-medium mb-4">
                Technologies
              </p>
              <div className="flex flex-col gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-muted py-1.5 border-b border-border font-body"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              {project.link && (
                <Button href={project.link} external>
                  Voir le projet ↗
                </Button>
              )}
              {project.github && (
                <Button href={project.github} variant="ghost" external>
                  GitHub ↗
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      {project.features && project.features.length > 0 && (
        <section className="border-t border-border bg-surface">
          <div className="max-w-5xl mx-auto px-6 py-20">
            <p className="text-accent text-xs font-medium uppercase tracking-widest mb-3">
              Fonctionnalités
            </p>
            <h2 className="font-display text-3xl text-text mb-12">
              Ce que l&apos;application propose
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-surface p-8 flex flex-col gap-4"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <h3 className="font-display text-lg text-text">
                    {feature.title}
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="border-t border-border">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              ← Tous les projets
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted hover:text-accent transition-colors"
            >
              À propos →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}