# 🚀 RipApi

> Application web modulaire et extensible pour interroger des API REST, GraphQL et SOAP

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)

---

## 📋 Table des matières

- [À propos](#-à-propos)
- [Fonctionnalités](#-fonctionnalités)
- [Installation](#-installation)
- [Utilisation](#-utilisation)
- [Développement](#-développement)
- [Docker](#-docker)
- [Tests](#-tests)
- [Documentation](#-documentation)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🎯 À propos

RipApi est une plateforme complète pour tester et documenter vos API. Inspirée par Postman et Insomnia, RipApi offre une architecture modulaire unique permettant une extensibilité maximale.

### Caractéristiques principales

- **Multi-protocoles**: REST, GraphQL, SOAP
- **Authentification extensible**: Local, SSO, Kerberos, OAuth, et plus
- **Collections partagées**: Public, privé, ou par groupes
- **Mode offline**: Fonctionne sans connexion internet
- **Accessibilité**: Conforme RGAA AAA
- **Sécurité**: Compatible HDS (Hébergement de Données de Santé)

---

## ✨ Fonctionnalités

### Actuellement implémentées (v0.0.0)

- ✅ Architecture modulaire extensible
- ✅ Support REST API basique
- ✅ Design system moderne avec dark mode
- ✅ Infrastructure Docker
- ✅ Tests unitaires et E2E

### En cours de développement

Consultez la [ROADMAP.md](./ROADMAP.md) pour voir toutes les fonctionnalités planifiées.

---

## 📦 Installation

### Prérequis

- Node.js >= 20.0.0
- npm >= 10.0.0

### Installation locale

```bash
# Cloner le dépôt
git clone https://github.com/votre-org/ripapi.git
cd ripapi

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env

# Lancer en mode développement
npm run dev
```

L'application sera disponible sur http://localhost:5173

---

## 🚀 Utilisation

### Mode développement

```bash
npm run dev
```

### Build production

```bash
npm run build
npm run preview
```

### Variables d'environnement

Consultez `.env.example` pour toutes les options disponibles.

---

## 👨‍💻 Développement

### Structure du projet

```
ripapi/
├── src/
│   ├── lib/
│   │   ├── core/           # Core système (module registry, config)
│   │   ├── modules/        # Modules extensibles (auth, api)
│   │   ├── components/     # Composants Svelte
│   │   └── routes/         # Routes SvelteKit
│   └── app.html            # Template HTML
├── tests/
│   ├── unit/               # Tests unitaires
│   └── e2e/                # Tests E2E
├── ROADMAP.md              # Feuille de route
├── CONTRIBUTING.md         # Guide de contribution
└── DEVELOPMENT.md          # Processus de développement
```

### Commandes disponibles

```bash
# Développement
npm run dev                 # Serveur de développement
npm run build              # Build production
npm run preview            # Preview du build

# Tests
npm run test               # Tous les tests
npm run test:unit          # Tests unitaires
npm run test:e2e           # Tests E2E
npm run test:coverage      # Coverage

# Qualité de code
npm run lint               # Vérifier le code
npm run lint:fix           # Corriger automatiquement
npm run format             # Formater le code
npm run type-check         # Vérifier TypeScript
```

---

## 🐳 Docker

### Build et lancement avec Docker

```bash
# Build l'image
docker build -t ripapi:latest .

# Lancer le container
docker run -p 3000:3000 ripapi:latest
```

### Docker Compose

```bash
# Lancer avec Docker Compose
docker-compose up -d

# Arrêter
docker-compose down

# Voir les logs
docker-compose logs -f
```

L'application sera disponible sur http://localhost:3000

---

## 🧪 Tests

### Tests unitaires

```bash
npm run test:unit
```

### Tests d'intégration

```bash
npm run test:integration
```

### Tests E2E

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:coverage
```

Objectif de coverage: **80%** minimum

---

## 📚 Documentation

- [ROADMAP.md](./ROADMAP.md) - Feuille de route exhaustive
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Guide de contribution
- [DEVELOPMENT.md](./DEVELOPMENT.md) - Processus de développement
- [CHANGELOG.md](./CHANGELOG.md) - Historique des versions
- [SECURITY.md](./SECURITY.md) - Politique de sécurité

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez [CONTRIBUTING.md](./CONTRIBUTING.md) pour commencer.

### Processus rapide

1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'feat: Add AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

---

## 📄 Licence

Ce projet est sous licence MIT. Voir [LICENSE](./LICENSE) pour plus de détails.

---

## 👥 Auteurs

- **Équipe RipApi** - [GitHub](https://github.com/votre-org/ripapi)

---

## 🙏 Remerciements

- SvelteKit pour le framework
- Toute la communauté open source

---

## 📞 Contact

- **Issues**: [GitHub Issues](https://github.com/votre-org/ripapi/issues)
- **Discussions**: [GitHub Discussions](https://github.com/votre-org/ripapi/discussions)

---

**⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !**
