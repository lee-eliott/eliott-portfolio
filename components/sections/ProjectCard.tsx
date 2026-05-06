import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import { Tag } from "@/components/ui";

type Props = {
  project: Project;
  index?: number;
};

export function ProjectCard({ project, index = 0 }: Props) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-surface border border-border hover:border-accent/40 transition-all duration-300 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-surface-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-xs text-muted font-body mb-1">{project.year} · {project.category}</p>
            <h3 className="font-display text-2xl text-text group-hover:text-accent transition-colors duration-200">
              {project.title}
            </h3>
          </div>
          {/* Arrow icon */}
          <span className="text-muted group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 mt-1">
            ↗
          </span>
        </div>

        <p className="text-muted text-sm font-body leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
