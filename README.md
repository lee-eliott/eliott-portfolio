# Eliott Lee — Portfolio

Portfolio personnel développé avec **Next.js 14**, **TypeScript** et **Tailwind CSS**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — DM Serif Display + DM Sans

## Structure

```
app/
  layout.tsx              # Layout racine (Navbar + Footer)
  page.tsx                # Page d'accueil (Hero, Projets, Skills, CTA)
  globals.css             # Variables CSS + Tailwind
  about/page.tsx          # Page À propos
  projects/
    page.tsx              # Grille de projets
    [slug]/page.tsx       # Page détail projet

components/
  layout/
    Navbar.tsx            # Navigation (responsive)
    Footer.tsx            # Pied de page
  sections/
    ProjectCard.tsx       # Carte projet
  ui/
    index.tsx             # Composants UI réutilisables (Button, Tag, Section...)

data/
  projects.ts             # Source de vérité des projets
```

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## Ajouter un projet

Editer `data/projects.ts` :

```ts
{
  slug: "mon-projet",
  title: "Mon Projet",
  subtitle: "Description courte",
  description: "Résumé pour la carte",
  longDescription: "Description complète pour la page détail",
  technologies: ["React", "Node.js"],
  image: "/images/mon-projet.jpg",  // Placer l'image dans /public/images/
  link: "https://...",
  github: "https://github.com/...",
  year: "2024",
  category: "Web",
}
```

## Images

Placer les images de projets dans `/public/images/` :
- `profile.png` — Photo de profil (hero)
- `profile2.jpg` — Photo de profil (about)
- `travel-agency.jpg` — Capture projet agence de voyage
- `restaurant.jpg` — Capture projet restaurant

## Build & Deploy

```bash
npm run build
npm run start
```

Compatible avec **Vercel** (déploiement automatique depuis GitHub).
