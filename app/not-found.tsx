import Link from "next/link";

export default function NotFound() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center px-6">
        <p className="font-display text-8xl text-border mb-4">404</p>
        <h1 className="font-display text-3xl text-text mb-4">
          Page introuvable
        </h1>
        <p className="text-muted font-body mb-10">
          Cette page n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-accent text-bg text-sm font-medium px-6 py-3 hover:bg-accent-dark transition-colors"
        >
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}
