# 🚀 Quick Start - RipApi

## Démarrage rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Lancer en mode développement

```bash
npm run dev
```

L'application sera disponible sur **http://localhost:5173**

### 3. Vérifier que tout fonctionne

```bash
# Lint
npm run lint

# Tests
npm run test -- --no-coverage

# Build
npm run build
```

---

## Commandes principales

| Commande | Description |
|----------|-------------|
| `npm run dev` | Démarrer le serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Preview du build |
| `npm run lint` | Vérifier le code |
| `npm run lint:fix` | Corriger automatiquement |
| `npm run format` | Formater le code |
| `npm run test` | Tests en mode watch |
| `npm run test:unit` | Tests unitaires |
| `npm run test:e2e` | Tests end-to-end |
| `npm run type-check` | Vérifier TypeScript |

---

## Docker

```bash
# Build et lancer avec Docker Compose
docker-compose up -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

---

## Prochaines étapes

1. Consultez [ROADMAP.md](./ROADMAP.md) pour voir toutes les fonctionnalités planifiées
2. Lisez [CONTRIBUTING.md](./CONTRIBUTING.md) pour contribuer
3. Suivez [DEVELOPMENT.md](./DEVELOPMENT.md) pour le workflow de développement

---

**Besoin d'aide?** Consultez le [README.md](./README.md) complet.
