import { I18n } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  subtitle: I18n;
  description: I18n;
  longDescription: I18n;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  year: string;
  category: I18n;
  features?: { icon: string; title: I18n; description: I18n }[];
};

export const projects: Project[] = [
  {
    slug: "pacelab",
    title: "PaceLab",
    subtitle: {
      fr: "Tracker de running personnel, sans abonnement",
      en: "Personal running tracker, no subscription",
    },
    description: {
      fr: "Application web de suivi de course à pied connectée à Strava, conçue pour les débutants qui veulent suivre leur progression sans payer de premium.",
      en: "Web app for tracking runs connected to Strava, designed for beginners who want to follow their progress without paying for a premium plan.",
    },
    longDescription: {
      fr: "PaceLab est né d'un besoin simple : je me suis lancé dans la course à pied et je voulais suivre mes progrès sans payer un abonnement premium sur des plateformes qui proposent bien plus que ce dont j'avais besoin. J'ai donc créé ma propre application, connectée à l'API Strava, pensée exactement pour mon usage.\n\nC'est mon premier vrai projet d'application web complet, développé en collaboration avec Claude. Une aventure technique et pédagogique qui m'a permis de prendre en main Next.js, Supabase, et l'écosystème moderne du développement web.\n\nPour ne pas avoir à créer de compte pour tester, un mode démo donne accès à un profil fictif complet et représentatif. Une façon de voir à quoi ressemble l'application sans aucun engagement.",
      en: "PaceLab started from a simple need: I got into running and wanted to track my progress without paying for a premium subscription on platforms that offer far more than I needed. So I built my own app, connected to the Strava API, designed exactly for my use case.\n\nThis is my first real full-stack web project, developed in collaboration with Claude. A technical and learning adventure that helped me get comfortable with Next.js, Supabase, and the modern web development ecosystem.\n\nTo avoid requiring an account to explore it, a demo mode gives access to a complete fictional profile. A way to see the app as it really is, with no commitment.",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "Strava API", "Tailwind CSS"],
    image: "/images/pacelab.jpg",
    link: "https://pacelab-five.vercel.app/",
    year: "2025",
    category: { fr: "Web App", en: "Web App" },
    features: [
      {
        icon: "📊",
        title: { fr: "Dashboard", en: "Dashboard" },
        description: {
          fr: "Statistiques clés en un coup d'œil — distance, allure, dénivelé, série de sorties et calendrier hebdomadaire.",
          en: "Key stats at a glance — distance, pace, elevation, streak, and weekly calendar.",
        },
      },
      {
        icon: "📈",
        title: { fr: "Analyse avancée", en: "Advanced analytics" },
        description: {
          fr: "Graphiques d'évolution sur le temps, comparaison de performances et tendances sur l'ensemble des activités.",
          en: "Progress charts over time, performance comparisons, and trends across all activities.",
        },
      },
      {
        icon: "🏅",
        title: { fr: "Badges & récompenses", en: "Badges & rewards" },
        description: {
          fr: "Un système de badges ludiques pour célébrer les jalons et maintenir la motivation à chaque sortie.",
          en: "A playful badge system to celebrate milestones and keep motivation high on every run.",
        },
      },
      {
        icon: "🗺️",
        title: { fr: "Parcours", en: "Routes" },
        description: {
          fr: "Paramétrage des parcours favoris avec distance et dénivelé, associés automatiquement aux activités correspondantes.",
          en: "Set up favourite routes with distance and elevation, automatically matched to corresponding activities.",
        },
      },
      {
        icon: "👥",
        title: { fr: "Compagnons de course", en: "Running companions" },
        description: {
          fr: "Enregistrement des partenaires habituels pour garder une trace de qui court avec vous et à quelle fréquence.",
          en: "Log your regular running partners to keep track of who runs with you and how often.",
        },
      },
      {
        icon: "👁️",
        title: { fr: "Mode démo", en: "Demo mode" },
        description: {
          fr: "Accès à un profil fictif complet sans création de compte — pour voir l'application telle qu'elle est, sans engagement.",
          en: "Access a full fictional profile without creating an account — see the app as it really is, no strings attached.",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
