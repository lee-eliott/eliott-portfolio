"use client";

import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Tag, Button } from "@/components/ui";
import { useLanguage } from "@/lib/i18n";

export function ProjectDetail({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const paragraphs = project.longDescription[lang].split("\n\n").filter(Boolean);

  return (
    <div className="pt-16">
      {/* Back link */}
      <div className="max-w-container mx-auto px-8 pt-10">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-display text-sm text-ink-3 hover:text-terracotta transition-colors duration-200"
        >
          ← {lang === "fr" ? "Tous les projets" : "All projects"}
        </Link>
      </div>

      {/* Header */}
      <section className="max-w-container mx-auto px-8 py-12 border-b border-[rgba(28,25,20,0.1)]">
        <p className="eyebrow mb-4">
          {project.year} · {project.category[lang]}
        </p>
        <h1
          className="font-display font-semibold text-ink mb-3 leading-none"
          style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
        >
          {project.title}
        </h1>
        <p className="font-body text-xl text-ink-3 mb-8 italic">
          {project.subtitle[lang]}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </section>

      {/* Main image */}
      <section className="max-w-container mx-auto px-8 py-12">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-[rgba(28,25,20,0.12)] bg-paper-2 transition-all duration-300 group-hover:scale-[1.015] group-hover:border-terracotta group-hover:shadow-[0_8px_40px_rgba(193,107,79,0.12)]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </a>
        ) : (
          <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-[rgba(28,25,20,0.12)] bg-paper-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      {/* Content grid */}
      <section className="max-w-container mx-auto px-8 pb-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Long description */}
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-medium text-ink mb-4">
              {lang === "fr" ? "À propos du projet" : "About the project"}
            </h2>
            <div className="w-8 h-px bg-terracotta mb-8" />
            <div className="flex flex-col gap-5">
              {paragraphs.map((p, i) => (
                <p key={i} className="font-body text-ink-2 leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="font-mono text-[10px] text-terracotta uppercase tracking-[0.18em] mb-4">
                {lang === "fr" ? "Technologies" : "Technologies"}
              </p>
              <div className="flex flex-col">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-sm text-ink-2 py-2 border-b border-[rgba(28,25,20,0.08)] last:border-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {project.link && (
                <Button href={project.link} external>
                  {lang === "fr" ? "Voir le projet ↗" : "View project ↗"}
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
        <section className="border-t border-[rgba(28,25,20,0.1)] bg-paper-2">
          <div className="max-w-container mx-auto px-8 py-20">
            <p className="eyebrow mb-3">
              {lang === "fr" ? "Fonctionnalités" : "Features"}
            </p>
            <h2 className="font-display text-3xl font-medium text-ink mb-12">
              {lang === "fr"
                ? "Ce que l'application propose"
                : "What the app offers"}
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(28,25,20,0.08)]">
              {project.features.map((feature) => (
                <div
                  key={feature.title.fr}
                  className="bg-paper-2 p-8 flex flex-col gap-4"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <h3 className="font-display text-lg font-medium text-ink">
                    {feature.title[lang]}
                  </h3>
                  <p className="font-body text-sm text-ink-3 leading-relaxed">
                    {feature.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom nav */}
      <section className="border-t border-[rgba(28,25,20,0.1)]">
        <div className="max-w-container mx-auto px-8 py-12">
          <div className="flex justify-between items-center">
            <Link
              href="/projects"
              className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors"
            >
              ← {lang === "fr" ? "Tous les projets" : "All projects"}
            </Link>
            <Link
              href="/about"
              className="font-display text-sm text-ink-3 hover:text-terracotta transition-colors"
            >
              {lang === "fr" ? "À propos →" : "About →"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
