---
description: Workflow de développement complet pour modifications RipApi
---

# Workflow de développement RipApi

Ce workflow doit être suivi pour toute modification du projet RipApi.

## 📋 Checklist pré-développement

// turbo-all

### 1. Créer l'issue GitHub
```bash
# Via GitHub CLI (si disponible)
gh issue create --title "feat(scope): description" --body "Description détaillée" --label "feature"
```

### 2. Créer la branche
```bash
git checkout main
git pull origin main
git checkout -b <type>/<issue-number>-<description>
```

**Types:** `feature`, `fix`, `docs`, `refactor`, `test`, `chore`

## 💻 Développement

### 3. Développer avec commits atomiques
```bash
# Faire des modifications
git add <files>
git commit -m "<type>(<scope>): <description>"
```

**Format de commit:** [Conventional Commits](https://www.conventionalcommits.org/)

### 4. Exécuter les tests
```bash
# Tests unitaires
npm run test:unit

# Tests d'intégration
npm run test:integration

# Tests E2E
npm run test:e2e

# Coverage
npm run test:coverage
```

### 5. Vérifier la qualité du code
```bash
# Lint
npm run lint

# Format
npm run format

# Type check
npm run type-check
```

## 📝 Documentation

### 6. Mettre à jour la documentation
- [ ] JSDoc pour nouvelles fonctions
- [ ] README.md si nécessaire
- [ ] Documentation API
- [ ] CHANGELOG.md

**Format CHANGELOG.md:**
```markdown
## [Unreleased]

### Added/Changed/Fixed/Removed/Deprecated/Security
- Description (#issue-number)
```

## 🚀 Créer la Pull Request

### 7. Push et créer PR
```bash
# Push la branche
git push origin <branch-name>

# Via GitHub CLI
gh pr create --title "<type>(<scope>): <description>" --body "Description\n\nCloses #<issue-number>"
```

### 8. Template PR
```markdown
## Description
Brief description

Closes #<issue-number>

## Type of change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Checklist
- [ ] Tests pass
- [ ] Lint pass
- [ ] Documentation updated
- [ ] CHANGELOG.md updated
```

## ✅ Vérifications CI

### 9. Attendre CI
- ✅ Lint
- ✅ Tests
- ✅ Build
- ✅ Security scan
- ✅ Coverage ≥80%

### 10. Corrections si échec
```bash
# Corriger les problèmes
git add <files>
git commit -m "fix: correction CI"
git push origin <branch-name>
```

## 🔍 Revue et merge

### 11. Revue de code
- Attendre approbation
- Répondre aux commentaires
- Faire les modifications demandées

### 12. Merge
- Squash and merge (par les mainteneurs)
- Suppression automatique de la branche

## 📊 Post-merge

### 13. Vérifications post-merge
- [ ] CI main passe
- [ ] Déploiement OK
- [ ] Fermer l'issue si pas auto-fermée

## 🔒 Règles de sécurité

### Avant chaque commit
```bash
# Scan de secrets
npm run security:secrets

# Audit dépendances
npm audit
```

### Checklist sécurité
- [ ] Pas de secrets hardcodés
- [ ] Variables d'environnement pour config sensible
- [ ] Validation des entrées utilisateur
- [ ] Pas de vulnérabilités connues

## ♿ Accessibilité (RGAA)

### Tests d'accessibilité
```bash
# Tests automatisés
npm run test:a11y

# Vérifications manuelles
# - Navigation clavier (Tab, Shift+Tab)
# - Lecteur d'écran
# - Contraste
# - Zoom texte 200%
```

### Checklist a11y
- [ ] Contraste ≥4.5:1
- [ ] Labels ARIA
- [ ] Navigation clavier
- [ ] Focus visible
- [ ] Textes alternatifs

## 📈 Métriques à respecter

- **Coverage:** ≥80%
- **Lighthouse:** ≥90
- **axe-core:** 0 violations
- **npm audit:** 0 high/critical

## 🚫 Interdictions

❌ Commit direct sur `main`
❌ Merge sans CI passing
❌ Merge sans revue
❌ Secrets dans le code
❌ Breaking changes sans MAJOR version

## 📚 Références

- [DEVELOPMENT.md](../DEVELOPMENT.md) - Guide complet
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Guide de contribution
- [ROADMAP.md](../ROADMAP.md) - Feuille de route
