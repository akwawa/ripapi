# 🤝 Guide de contribution à RipApi

Merci de votre intérêt pour contribuer à RipApi ! Ce document vous guidera à travers le processus de contribution.

---

## 📋 Table des matières

1. [Code de conduite](#-code-de-conduite)
2. [Comment contribuer](#-comment-contribuer)
3. [Configuration de l'environnement de développement](#-configuration-de-lenvironnement-de-développement)
4. [Workflow de développement](#-workflow-de-développement)
5. [Standards de code](#-standards-de-code)
6. [Processus de revue](#-processus-de-revue)
7. [Conventions de commit](#-conventions-de-commit)
8. [Documentation](#-documentation)
9. [Tests](#-tests)
10. [Sécurité](#-sécurité)

---

## 📜 Code de conduite

### Nos engagements

Nous nous engageons à:
- Créer un environnement accueillant et inclusif
- Respecter les points de vue et expériences différents
- Accepter les critiques constructives avec grâce
- Se concentrer sur ce qui est le mieux pour la communauté
- Faire preuve d'empathie envers les autres membres

### Comportements inacceptables

- Langage ou images à caractère sexuel
- Trolling, insultes ou commentaires désobligeants
- Harcèlement public ou privé
- Publication d'informations privées sans permission
- Tout comportement inapproprié en contexte professionnel

### Application

Les violations du code de conduite peuvent être signalées en contactant l'équipe du projet. Toutes les plaintes seront examinées et traitées de manière confidentielle.

---

## 🚀 Comment contribuer

### Types de contributions

Nous acceptons plusieurs types de contributions:

#### 🐛 Signaler un bug
1. Vérifiez que le bug n'a pas déjà été signalé dans les [Issues](https://github.com/votre-org/ripapi/issues)
2. Créez une nouvelle issue avec le template "Bug Report"
3. Incluez:
   - Description claire du problème
   - Étapes pour reproduire
   - Comportement attendu vs obtenu
   - Captures d'écran si applicable
   - Version de RipApi
   - Environnement (OS, navigateur, version)

#### ✨ Proposer une fonctionnalité
1. Vérifiez la [Roadmap](./ROADMAP.md) pour voir si elle est déjà prévue
2. Recherchez dans les issues si quelqu'un l'a déjà proposée
3. Créez une issue avec le template "Feature Request"
4. Décrivez:
   - Le problème que cela résout
   - La solution proposée
   - Des alternatives considérées
   - Des exemples d'utilisation

#### 📝 Améliorer la documentation
- Corriger des fautes de frappe
- Clarifier des explications
- Ajouter des exemples
- Traduire la documentation

#### 🔧 Contribuer au code
- Corriger des bugs
- Implémenter des fonctionnalités
- Optimiser les performances
- Améliorer l'accessibilité

---

## 💻 Configuration de l'environnement de développement

### Prérequis

- **Node.js**: Version 20.x ou supérieure
- **npm**: Version 10.x ou supérieure
- **Git**: Version 2.x ou supérieure
- **Docker**: Version 24.x ou supérieure (pour tester le déploiement)

### Installation

1. **Fork le projet**
   ```bash
   # Via GitHub UI: cliquez sur "Fork"
   ```

2. **Cloner votre fork**
   ```bash
   git clone https://github.com/votre-username/ripapi.git
   cd ripapi
   ```

3. **Ajouter le dépôt upstream**
   ```bash
   git remote add upstream https://github.com/votre-org/ripapi.git
   ```

4. **Installer les dépendances**
   ```bash
   npm install
   ```

5. **Configurer l'environnement**
   ```bash
   cp .env.example .env
   # Éditez .env avec vos paramètres locaux
   ```

6. **Initialiser la base de données**
   ```bash
   npm run db:migrate
   npm run db:seed # (optionnel, pour données de test)
   ```

7. **Lancer l'application en mode développement**
   ```bash
   npm run dev
   ```

8. **Vérifier que tout fonctionne**
   ```bash
   npm run test
   npm run lint
   ```

### Structure du projet

```
ripapi/
├── src/
│   ├── lib/
│   │   ├── components/      # Composants Svelte
│   │   ├── stores/          # Stores Svelte
│   │   ├── services/        # Services métier
│   │   ├── modules/         # Modules extensibles
│   │   ├── utils/           # Utilitaires
│   │   └── types/           # Types TypeScript
│   ├── routes/
│   │   ├── api/             # API endpoints
│   │   └── +page.svelte     # Page principale
│   └── app.html
├── server/
│   ├── db/                  # Base de données
│   │   ├── migrations/      # Migrations SQL
│   │   └── seeds/           # Données de test
│   └── config/              # Configuration serveur
├── tests/
│   ├── unit/                # Tests unitaires
│   ├── integration/         # Tests d'intégration
│   └── e2e/                 # Tests end-to-end
├── docs/                    # Documentation
├── .github/
│   ├── workflows/           # GitHub Actions
│   └── ISSUE_TEMPLATE/      # Templates d'issues
├── docker/                  # Configuration Docker
├── ROADMAP.md
├── CONTRIBUTING.md
├── DEVELOPMENT.md
└── README.md
```

---

## 🔄 Workflow de développement

### 1. Créer une issue

Avant de commencer à coder, créez ou assignez-vous une issue existante.

### 2. Créer une branche

```bash
# Synchroniser avec upstream
git fetch upstream
git checkout main
git merge upstream/main

# Créer une branche depuis main
git checkout -b type/issue-number-description
```

**Nomenclature des branches:**
- `feature/123-add-graphql-support` - Nouvelle fonctionnalité
- `fix/456-fix-auth-bug` - Correction de bug
- `docs/789-update-readme` - Documentation
- `refactor/101-improve-api-service` - Refactoring
- `test/202-add-unit-tests` - Tests
- `chore/303-update-dependencies` - Maintenance

### 3. Développer

- Faites des commits atomiques et fréquents
- Suivez les [conventions de commit](#-conventions-de-commit)
- Testez votre code localement
- Assurez-vous que les tests passent

```bash
npm run dev         # Lancer en mode développement
npm run test        # Lancer les tests
npm run test:watch  # Tests en mode watch
npm run lint        # Vérifier le code
npm run format      # Formater le code
```

### 4. Créer une Pull Request (PR)

1. **Pusher votre branche**
   ```bash
   git push origin votre-branche
   ```

2. **Créer la PR sur GitHub**
   - Utilisez le template de PR
   - Référencez l'issue (ex: `Closes #123`)
   - Remplissez toutes les sections
   - Ajoutez des captures d'écran si applicable

3. **S'assurer que la CI passe**
   - Tous les tests doivent être verts
   - Pas de conflit avec `main`
   - Coverage maintenu ou amélioré

### 5. Revue de code

- Répondez aux commentaires de revue
- Effectuez les modifications demandées
- Demandez des clarifications si nécessaire
- Soyez patient et respectueux

### 6. Merge

- Seuls les mainteneurs peuvent merger
- Le merge se fait après validation de toutes les revues
- La branche sera supprimée automatiquement après le merge

---

## 📏 Standards de code

### TypeScript

- **Mode strict activé**: Pas de `any` sauf justification
- **Types explicites**: Pour les paramètres et retours de fonction
- **Interfaces over types**: Privilégier `interface` pour les objets
- **Nommage**:
  - PascalCase pour les types, interfaces, classes
  - camelCase pour les variables, fonctions
  - SCREAMING_SNAKE_CASE pour les constantes

```typescript
// ✅ Bon
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

const MAX_RETRY_ATTEMPTS = 3;

function fetchUserProfile(userId: string): Promise<UserProfile> {
  // ...
}

// ❌ Mauvais
const max_retry = 3;  // Mauvaise convention

function fetchUser(id: any) {  // Pas de type any
  // ...
}
```

### Svelte

- **Composition**: Privilégier les petits composants réutilisables
- **Props typées**: Toujours typer les props
- **Reactive statements**: Utiliser `$:` pour la réactivité
- **Stores**: Utiliser les stores pour état global

```svelte
<script lang="ts">
  // ✅ Bon
  export let userId: string;
  export let onSave: (data: FormData) => void;
  
  let isLoading = false;
  
  $: userInitials = userName ? userName.split(' ').map(n => n[0]).join('') : '';
</script>
```

### CSS

- **Scoped styles**: Privilégier les styles scopés Svelte
- **Variables CSS**: Utiliser les tokens du design system
- **Mobile-first**: Responsive design mobile d'abord
- **Accessibilité**: Respecter les contrastes WCAG AAA

```svelte
<style>
  .button {
    /* Utiliser les variables du design system */
    background-color: var(--color-primary);
    padding: var(--spacing-md);
    border-radius: var(--radius-sm);
    
    /* Mobile-first */
    font-size: var(--font-size-sm);
  }
  
  @media (min-width: 768px) {
    .button {
      font-size: var(--font-size-md);
    }
  }
</style>
```

### Formatage

- **Prettier**: Configuration dans `.prettierrc`
- **ESLint**: Configuration dans `.eslintrc.json`
- **EditorConfig**: Configuration dans `.editorconfig`

```bash
# Formater automatiquement
npm run format

# Vérifier sans modifier
npm run format:check
```

### Commentaires

- **JSDoc**: Pour les fonctions publiques
- **Inline comments**: Pour la logique complexe
- **TODO comments**: Format `// TODO(username): Description`

```typescript
/**
 * Exécute une requête API avec retry automatique
 * @param config - Configuration de la requête
 * @param options - Options d'exécution
 * @returns La réponse de l'API
 * @throws {APIError} Si toutes les tentatives échouent
 */
export async function executeRequest(
  config: RequestConfig,
  options: ExecutionOptions = {}
): Promise<APIResponse> {
  // TODO(john): Ajouter support pour WebSocket
  // ...
}
```

---

## 👀 Processus de revue

### Pour les contributeurs

**Avant de soumettre:**
- [ ] Les tests passent localement
- [ ] Le code est formaté (`npm run format`)
- [ ] Pas d'erreurs lint (`npm run lint`)
- [ ] La documentation est à jour
- [ ] Les commits suivent les conventions
- [ ] La PR décrit clairement les changements

**Pendant la revue:**
- Répondez aux commentaires dans les 48h
- Soyez ouvert aux suggestions
- Demandez des clarifications si nécessaire
- Marquez les conversations comme résolues quand approprié

### Pour les reviewers

**Critères de revue:**
- [ ] Le code respecte les standards
- [ ] Les tests sont adéquats (couverture maintenue)
- [ ] Pas de régression fonctionnelle
- [ ] Pas de problème de sécurité
- [ ] Pas de problème de performance
- [ ] Documentation mise à jour
- [ ] Accessibilité respectée (RGAA)

**Style de revue:**
- Soyez constructif et respectueux
- Expliquez le "pourquoi" de vos suggestions
- Utilisez les prefixes:
  - `[nit]`: Suggestion mineure, non bloquante
  - `[question]`: Demande de clarification
  - `[blocking]`: Doit être résolu avant merge
  - `[praise]`: Positif, bon travail!

**Délais:**
- Première revue: sous 48h
- Revues suivantes: sous 24h

---

## 💬 Conventions de commit

### Format

Nous suivons la spécification [Conventional Commits](https://www.conventionalcommits.org/).

```
<type>(<scope>): <subject>

[body optionnel]

[footer optionnel]
```

### Types

- `feat`: Nouvelle fonctionnalité
- `fix`: Correction de bug
- `docs`: Documentation uniquement
- `style`: Formatage, points-virgules manquants, etc.
- `refactor`: Refactoring du code
- `perf`: Amélioration de performance
- `test`: Ajout ou modification de tests
- `chore`: Maintenance, dépendances, configuration
- `ci`: Changements CI/CD
- `build`: Changements système de build
- `revert`: Annulation d'un commit précédent

### Scopes suggérés

- `api`: Code backend/API
- `ui`: Interface utilisateur
- `auth`: Authentification
- `collections`: Gestion des collections
- `rest`: Support REST
- `graphql`: Support GraphQL
- `soap`: Support SOAP
- `storage`: Stockage de données
- `docker`: Configuration Docker
- `security`: Sécurité
- `a11y`: Accessibilité

### Exemples

```bash
# Feature
git commit -m "feat(graphql): add introspection support"

# Fix
git commit -m "fix(auth): resolve token expiration bug"

# Breaking change
git commit -m "feat(api)!: change authentication flow

BREAKING CHANGE: The authentication endpoint now requires a different payload format."

# Multi-line
git commit -m "refactor(ui): reorganize component structure

- Move common components to shared folder
- Update imports across the application
- Add component documentation

Closes #123"
```

### Règles

- Utiliser l'impératif présent: "add" et non "added" ou "adds"
- Pas de majuscule au début du sujet
- Pas de point à la fin du sujet
- Limiter le sujet à 50 caractères
- Limiter le corps à 72 caractères par ligne
- Séparer le sujet du corps par une ligne vide
- Utiliser le corps pour expliquer le "quoi" et le "pourquoi", pas le "comment"

### Commitizen (optionnel)

Pour vous aider à respecter les conventions:

```bash
npm install -g commitizen
npm install -g cz-conventional-changelog

# Puis utiliser
git cz
```

---

## 📚 Documentation

### Documentation du code

- **JSDoc**: Pour toutes les fonctions publiques
- **Commentaires**: Pour la logique complexe
- **README**: Pour chaque module/package

### Documentation utilisateur

Située dans `/docs`:
- Tutoriels
- Guides d'utilisation
- FAQ
- Exemples

### Documentation technique

- Architecture Decision Records (ADR) dans `/docs/adr`
- Diagrammes dans `/docs/diagrams`
- API reference générée automatiquement

### Mise à jour

Lors de chaque PR qui modifie le comportement:
- [ ] Mettre à jour le README si nécessaire
- [ ] Mettre à jour la documentation API
- [ ] Ajouter/mettre à jour les exemples
- [ ] Mettre à jour CHANGELOG.md

---

## 🧪 Tests

### Types de tests

#### Tests unitaires
- Localisation: `/tests/unit`
- Framework: Vitest
- Couverture minimale: 80%

```typescript
import { describe, it, expect } from 'vitest';
import { parseAuthHeader } from '$lib/utils/auth';

describe('parseAuthHeader', () => {
  it('should parse Bearer token correctly', () => {
    const result = parseAuthHeader('Bearer abc123');
    expect(result).toEqual({ type: 'bearer', token: 'abc123' });
  });
  
  it('should throw on invalid format', () => {
    expect(() => parseAuthHeader('Invalid')).toThrow();
  });
});
```

#### Tests d'intégration
- Localisation: `/tests/integration`
- Testent l'interaction entre modules

```typescript
import { describe, it, expect, beforeEach } from 'vitest';
import { setupTestDB, teardownTestDB } from '../helpers';

describe('Collection API', () => {
  beforeEach(async () => {
    await setupTestDB();
  });
  
  it('should create and retrieve a collection', async () => {
    const response = await createCollection({ name: 'Test' });
    expect(response.status).toBe(201);
    
    const collection = await getCollection(response.data.id);
    expect(collection.name).toBe('Test');
  });
});
```

#### Tests E2E
- Localisation: `/tests/e2e`
- Framework: Playwright
- Testent les workflows utilisateurs

```typescript
import { test, expect } from '@playwright/test';

test('user can create a REST request', async ({ page }) => {
  await page.goto('/');
  await page.click('button:has-text("New Request")');
  await page.selectOption('[name="method"]', 'GET');
  await page.fill('[name="url"]', 'https://api.example.com/users');
  await page.click('button:has-text("Send")');
  
  await expect(page.locator('.response-status')).toContainText('200');
});
```

### Tests d'accessibilité

```typescript
import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test('homepage should be accessible', async ({ page }) => {
  await page.goto('/');
  await injectAxe(page);
  await checkA11y(page);
});
```

### Exécution des tests

```bash
# Tous les tests
npm run test

# Tests unitaires uniquement
npm run test:unit

# Tests d'intégration
npm run test:integration

# Tests E2E
npm run test:e2e

# Mode watch
npm run test:watch

# Couverture
npm run test:coverage
```

### Règles pour les tests

- Un test = une responsabilité
- Noms descriptifs (Given-When-Then)
- Pas d'interdépendances entre tests
- Utiliser des fixtures pour les données de test
- Mocker les dépendances externes
- Tests déterministes (pas de `Math.random()`, dates fixes)

---

## 🔒 Sécurité

### Signaler une vulnérabilité

**NE PAS créer d'issue publique pour les vulnérabilités de sécurité.**

1. Envoyez un email à: security@ripapi.dev
2. Incluez:
   - Description de la vulnérabilité
   - Étapes pour reproduire
   - Impact potentiel
   - Suggestions de correctif (si applicable)

3. Nous nous engageons à:
   - Accuser réception sous 48h
   - Fournir une évaluation initiale sous 7 jours
   - Tenir le rapporteur informé des progrès
   - Créditer le rapporteur (sauf s'il préfère rester anonyme)

### Bonnes pratiques de sécurité

- **Jamais de secrets dans le code**: Utiliser variables d'environnement
- **Validation des entrées**: Toujours valider et sanitiser
- **Principe du moindre privilège**: Permissions minimales nécessaires
- **Dépendances**: Vérifier régulièrement les vulnérabilités
- **HTTPS uniquement**: En production
- **Headers de sécurité**: CSP, HSTS, X-Frame-Options, etc.

### Checklist de sécurité pour PR

- [ ] Pas de secrets hardcodés
- [ ] Validation des entrées utilisateur
- [ ] Pas de SQL injection possible
- [ ] Pas de XSS possible
- [ ] CSRF protection
- [ ] Rate limiting approprié
- [ ] Logs ne contiennent pas de données sensibles
- [ ] Dépendances à jour (pas de vulnérabilités connues)

---

## 🎓 Ressources supplémentaires

### Documentation technique
- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)

### Accessibilité
- [RGAA](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Sécurité
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [HDS Certification](https://esante.gouv.fr/labels-certifications/hds)

---

## 📞 Besoin d'aide?

- **Questions générales**: [Discussions GitHub](https://github.com/votre-org/ripapi/discussions)
- **Bugs et features**: [Issues GitHub](https://github.com/votre-org/ripapi/issues)
- **Chat**: [Discord](https://discord.gg/ripapi) (si applicable)
- **Email**: contribute@ripapi.dev

---

## 🙏 Remerciements

Merci à tous les contributeurs qui rendent RipApi meilleur! 🎉

Votre nom sera ajouté automatiquement au fichier CONTRIBUTORS.md lors de votre première contribution mergée.

---

**Dernière mise à jour:** 2025-12-02  
**Version:** 1.0.0
