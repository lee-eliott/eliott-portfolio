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
};

export const projects: Project[] = [
  {
    slug: "travel-agency",
    title: "Travel Agency",
    subtitle: "Site web pour une agence de voyage",
    description:
      "Site vitrine moderne pour une agence de voyage, conçu en HTML & CSS pur lors d'une formation Udemy.",
    longDescription:
      "Réalisé dans le cadre de la formation 'Formation Complète Développeur Web' sur Udemy, ce projet m'a permis de maîtriser les fondamentaux du HTML et du CSS. L'objectif était de créer un site vitrine complet pour une agence de voyage, avec une attention particulière portée à la mise en page responsive et à l'expérience utilisateur.",
    technologies: ["HTML", "CSS"],
    image: "/images/travel-agency.jpg",
    link: "https://lee-eliott.github.io/travel-agency/",
    year: "2022",
    category: "Web",
  },
  {
    slug: "restaurant",
    title: "El Pizza Mama",
    subtitle: "Application web de gestion de menu",
    description:
      "Application Django permettant à un restaurateur de gérer dynamiquement son menu de pizzas en ligne.",
    longDescription:
      "Développé dans le cadre de la formation 'Développeur Python | Formation Complète 2021' sur Udemy, ce projet a mis en pratique Python, Django et le déploiement sur Heroku. J'ai conçu une interface d'administration intuitive permettant à un client fictif de modifier facilement son menu de pizzas en ligne, sans aucune connaissance technique requise.",
    technologies: ["Python", "Django", "HTML", "CSS", "Heroku"],
    image: "/images/restaurant.jpg",
    link: "https://elpizzamamadjango.herokuapp.com/",
    year: "2021",
    category: "Web",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
