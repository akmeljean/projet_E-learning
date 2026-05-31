# TimeTravel Agency - Webapp Interactive

Webapp pour une agence de voyage temporel fictive, construite avec Nuxt 4 et Vue 3.

## 🛠️ Stack Technique

- Nuxt 4 + Vue 3
- AOS pour les animations à l'apparition
- Mistral AI API pour le chatbot conversationnel
- Hébergement recommandé : Vercel

## ✨ Fonctionnalités

- Landing page immersive
- Galerie de 3 destinations temporelles
- Chatbot IA intégré via `/server/api/chat.post.ts`
- Recommandations personnalisées basées sur l’expérience utilisateur

## 🤖 IA Utilisées

- Chatbot : Mistral Large via API
- Code & architecture Nuxt : codex
- Visuels : assets du projet pédagogique


## 📁 Structure principale

- `app/` : pages, composants et layout Nuxt
- `public/legacy/` : scripts et styles du chatbot historique
- `server/api/chat.post.ts` : point d’entrée API pour le chatbot
- `nuxt.config.ts` : configuration Nuxt et variables d’environnement

## 🚀 Installation

```bash
npm install
```

## 🧪 Démarrage en local

```bash
npm run dev
```

Accédez ensuite à `http://localhost:3000`.

## 📦 Build et aperçu production

```bash
npm run build
npm run preview
```

## 🔑 Configuration

Créez un fichier `.env` à la racine avec les variables :

```env
MISTRAL_API_KEY=your_api_key
MISTRAL_MODEL=mistral-large-latest
```

## 📄 Licence

Projet pédagogique - M1/M2 Digital & IA

