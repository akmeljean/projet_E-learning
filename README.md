# TimeTravel Agency - Webapp Interactive

Webapp pour une agence de voyage temporel fictive, construite avec **Nuxt 4** et **Vue 3**. Le chatbot conversationnel est propulsé par **Mistral AI** via une route API serveur sécurisée.

## 🛠️ Stack Technique

| Technologie | Rôle |
|---|---|
| Nuxt 4 + Vue 3 | Framework front & SSR |
| Nitro (preset Netlify) | Serveur + fonctions serverless |
| AOS | Animations à l'apparition |
| Mistral AI API | Chatbot conversationnel IA |
| Netlify | Hébergement & déploiement continu |

## ✨ Fonctionnalités

- 🌍 Landing page immersive avec vidéo hero
- 🗺️ Galerie de 3 destinations temporelles (Crétacé, Paris 1889, Florence 1504)
- 💬 Chatbot IA "Chrono" intégré (widget flottant) via `/api/chat`
- 🌐 Support multilingue (FR / EN / ES)
- 🎨 Thème clair/sombre avec persistance localStorage
- 🧩 Quiz de recommandation de destination

## 🤖 IA Utilisées

- **Chatbot** : Mistral Large via API (`mistral-large-latest`)
- **Code & architecture Nuxt** : Codex, Antigravity
- **Visuels** : Assets du projet pédagogique

## 📁 Structure principale

```
.
├── app/
│   ├── components/     # AppNavbar, DestinationQuiz, MediaGallery...
│   └── pages/          # index.vue, epoch/[slug].vue...
├── plugins/
│   └── ui-bridge.client.ts   # Pont entre Nuxt et scripts legacy
├── public/
│   └── legacy/         # chatbot.js, styles.css, i18n.js...
├── server/
│   └── api/
│       └── chat.post.ts      # Endpoint API sécurisé Mistral AI
├── netlify.toml        # Configuration Netlify (build + Node 20)
└── nuxt.config.ts      # Configuration Nuxt + runtimeConfig
```

## 🚀 Installation

```bash
npm install
```

## 🔑 Configuration des variables d'environnement

Créez un fichier `.env` à la racine (ne jamais le commiter !) :

```env
MISTRAL_API_KEY=votre_cle_api_mistral
MISTRAL_MODEL=mistral-large-latest
```

## 🧪 Démarrage en local

```bash
npm run dev
```

Accédez ensuite à `http://localhost:3000`.

## 📦 Build production

```bash
npm run build
npm run preview
```

## ☁️ Déploiement sur Netlify

Le projet est configuré pour Netlify via `netlify.toml` :

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

**Variables à configurer dans le dashboard Netlify** (`Site configuration > Environment variables`) :

| Variable | Valeur |
|---|---|
| `MISTRAL_API_KEY` | Votre clé API Mistral |
| `MISTRAL_MODEL` | `mistral-large-latest` |

> ⚠️ Ne jamais mettre la vraie valeur de `MISTRAL_API_KEY` dans le code ou dans `nuxt.config.ts`. Elle doit uniquement exister dans les variables d'environnement Netlify.

## 📄 Licence

Projet pédagogique — M1/M2 Digital & IA
