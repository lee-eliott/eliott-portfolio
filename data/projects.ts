export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  link?: string;
  github?: string;
  year: string;
  category: string;
  features?: { icon: string; title: string; description: string }[];
};

export const projects: Project[] = [
  {
    slug: "pacelab",
    title: "PaceLab",
    subtitle: "Tracker de running personnel, sans abonnement",
    description:
      "Application web de suivi de course à pied connectée à Strava, conçue pour les débutants qui veulent suivre leur progression sans payer de premium.",
    longDescription:
      "PaceLab est né d'un besoin simple : je me suis lancé dans la course à pied et je voulais suivre mes progrès sans payer un abonnement premium sur des plateformes qui proposent bien plus que ce dont j'avais besoin. J'ai donc créé ma propre application, connectée à l'API Strava, pensée exactement pour mon usage.\n\nC'est mon premier vrai projet d'application web complet, développé en collaboration avec Claude. Une aventure technique et pédagogique qui m'a permis de prendre en main Next.js, Supabase, et l'écosystème moderne du développement web.\n\nPour ne pas avoir à créer de compte pour tester, un mode démo donne accès à un profil fictif complet et représentatif. Une façon de voir à quoi ressemble l'application sans aucun engagement.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Strava API", "Tailwind CSS"],
    image: "/images/pacelab.jpg",
    link: "https://pacelab-five.vercel.app/",
    year: "2025",
    category: "Web App",
    features: [
      {
        icon: "📊",
        title: "Dashboard",
        description: "Statistiques clés en un coup d'œil — distance, allure, dénivelé, série de sorties et calendrier hebdomadaire.",
      },
      {
        icon: "📈",
        title: "Analyse avancée",
        description: "Graphiques d'évolution sur le temps, comparaison de performances et tendances sur l'ensemble des activités.",
      },
      {
        icon: "🏅",
        title: "Badges & récompenses",
        description: "Un système de badges ludiques pour célébrer les jalons et maintenir la motivation à chaque sortie.",
      },
      {
        icon: "🗺️",
        title: "Parcours",
        description: "Paramétrage des parcours favoris avec distance et dénivelé, associés automatiquement aux activités correspondantes.",
      },
      {
        icon: "👥",
        title: "Compagnons de course",
        description: "Enregistrement des partenaires habituels pour garder une trace de qui court avec vous et à quelle fréquence.",
      },
      {
        icon: "👁️",
        title: "Mode démo",
        description: "Accès à un profil fictif complet sans création de compte — pour voir l'application telle qu'elle est, sans engagement.",
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}