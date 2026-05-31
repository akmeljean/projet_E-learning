# Phase 1 — Architecture & Planning (TimeTravel Agency)

## Équipe (4 personnes)
- PO / UX: (Nom)
- UI / Front: (Nom)
- Intégration IA (chatbot, prompts): (Nom)
- QA / Perf & responsive: (Nom)

## Structure de navigation
- `/` Accueil (hero + présentation + destinations + CTA + chatbot)
- `/epoch/antiquity` Détails destination (Antiquité)
- `/epoch/middle-ages` Détails destination (Moyen-Âge)
- `/epoch/future` Détails destination (Futur)
- (Optionnel) `/booking` Réservation (formulaire + validation)

## Sections clés (page d’accueil)
- Navbar fixe (langue, dark mode, favoris)
- Hero immersive (titre animé, CTA vers destinations + IA)
- Présentation agence (valeurs)
- Galerie destinations (3 cards interactives)
- CTA “Demander conseil à l’IA”
- Footer

## Features essentielles (MVP)
- Découvrir les destinations temporelles (cards + pages détails)
- Interagir avec un agent conversationnel (chatbot flottant)
- Personnaliser le voyage (via chatbot + préférences sauvegardées)
- Réserver / planifier (optionnel selon le temps)

## Responsive (mobile-first)
- Navbar: menu compact / contrôles accessibles
- Cards destinations: 1 colonne mobile, 3 colonnes desktop
- CTA: boutons full-width sur mobile

## Performance / chargement
- Images en `loading="lazy"` + `decoding="async"`
- Assets locaux dans `public/photo`
- (À faire ensuite) Compression images + `Nuxt Image` si souhaité

## Animations (0.6–0.8s, easing natural)
Choix: **AOS** (simple à intégrer et déjà en place).
- Fade-in progressif des sections au scroll (`data-aos="fade-up"`, 700–800ms)
- Animation du titre hero (CSS reveal)
- Hover effects cards (déjà présents + polish via thème)
- Transition douce entre pages (Nuxt `pageTransition`)

