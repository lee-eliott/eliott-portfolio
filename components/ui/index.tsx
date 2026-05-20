import Link from "next/link";
import { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block font-mono text-[10px] font-medium px-2 py-0.5 bg-paper-2 text-ink-4 border border-[rgba(28,25,20,0.1)] tracking-wide">
      {children}
    </span>
  );
}

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`max-w-container mx-auto px-8 py-20 ${className}`}>
      {children}
    </section>
  );
}

export function SectionHeading({
  label,
  title,
  action,
}: {
  label: string;
  title: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-6 mb-12 pb-5 border-b border-[rgba(28,25,20,0.12)]">
      <div className="flex items-baseline gap-4 flex-wrap">
        <span className="font-mono text-[11px] text-ink-4 tracking-[0.18em] uppercase">
          {label}
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">{title}</h2>
      </div>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}

export function AccentLine() {
  return <div className="w-10 h-px bg-terracotta" />;
}

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
    "inline-flex items-center gap-2 font-display font-medium text-sm px-5 py-2.5 transition-all duration-200 active:scale-[0.98]";
  const styles = {
    primary: "bg-terracotta text-paper hover:bg-terracotta-2",
    ghost:
      "border border-[rgba(28,25,20,0.22)] text-ink-2 hover:border-terracotta hover:text-terracotta",
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
