import Link from "next/link";
import { ReactNode } from "react";

/* ─── Tag / Badge ─────────────────────────────────────────── */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-xs font-body font-medium px-2.5 py-1 bg-surface-2 text-muted border border-border">
      {children}
    </span>
  );
}

/* ─── Section wrapper ─────────────────────────────────────── */
export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-5xl mx-auto px-6 py-20 ${className}`}>
      {children}
    </section>
  );
}

/* ─── Section heading ─────────────────────────────────────── */
export function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="text-accent text-xs font-body font-medium uppercase tracking-widest mb-3">
        {label}
      </p>
      <h2 className="font-display text-4xl md:text-5xl text-text">{title}</h2>
    </div>
  );
}

/* ─── Accent line ─────────────────────────────────────────── */
export function AccentLine() {
  return <div className="w-12 h-px bg-accent" />;
}

/* ─── Button ──────────────────────────────────────────────── */
type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 text-sm px-5 py-2.5 font-body font-medium transition-all duration-200";
  const styles = {
    primary:
      "bg-accent text-bg hover:bg-accent-dark",
    ghost:
      "border border-border text-muted hover:border-accent hover:text-accent",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}
