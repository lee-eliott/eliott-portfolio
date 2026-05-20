"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  const { lang } = useLanguage();

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex gap-5 py-6 border-b border-[rgba(28,25,20,0.1)] hover:border-terracotta/30 transition-all duration-300"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Index */}
      <span className="font-mono text-[11px] text-ink-4 w-6 flex-shrink-0 pt-1.5 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Thumbnail */}
      <div className="relative w-28 h-[72px] flex-shrink-0 overflow-hidden bg-paper-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="112px"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-mono text-[10px] text-ink-4 tracking-[0.12em] uppercase mb-0.5">
              {project.year} · {project.category[lang]}
            </p>
            <h3 className="font-display text-lg font-semibold text-ink group-hover:text-terracotta transition-colors duration-200 truncate">
              {project.title}
            </h3>
          </div>
          <span className="text-ink-4 group-hover:text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 mt-4 text-sm">
            ↗
          </span>
        </div>

        <p className="font-body text-sm text-ink-3 leading-relaxed line-clamp-2 mt-1 mb-2">
          {project.description[lang]}
        </p>

        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] text-ink-4 px-1.5 py-0.5 bg-paper-2 border border-[rgba(28,25,20,0.1)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
