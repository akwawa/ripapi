# Keep a Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Initial project structure with SvelteKit + TypeScript
- Modular architecture with plugin system
  - Module registry for extensible modules (`src/lib/core/module-registry.ts`)
  - Complete type definitions (`src/lib/core/types.ts`)
  - Centralized configuration system (`src/lib/core/config.ts`)
- Authentication provider system
  - Auth provider registry (`src/lib/modules/auth/registry.ts`)
  - Local auth provider (username/password structure)
  - Bearer token auth provider
- API protocol support
  - API protocol registry (`src/lib/modules/api/registry.ts`)
  - Complete REST API implementation with fetch, auth, performance metrics
  - GraphQL protocol structure (ready for implementation)
  - SOAP protocol structure (ready for implementation)
- Design system with CSS tokens
  - Complete CSS variables for colors, spacing, typography
  - Dark mode support (data-theme and prefers-color-scheme)
  - Animations and transitions
  - Accessibility-first approach (RGAA foundations)
- Database schema
  - Complete SQLite schema (`server/db/schema.sql`)
  - Users, roles, collections, requests, groups, permissions
  - Request history and audit logs (HDS compliance ready)
  - Migration system structure
  - Development seed data
- Docker configuration
  - Multi-stage Dockerfile optimized for production
  - Docker Compose with volumes and health checks
  - Non-root user for security
- GitHub Actions CI/CD
  - Lint, format, and type checking
  - Unit tests with Vitest
  - E2E tests with Playwright (configured)
  - Build verification
  - Security scanning (npm audit, Trivy)
  - Docker image build and push to GHCR
- Testing infrastructure
  - Vitest configuration with 80% coverage threshold
  - Playwright configuration for multi-browser E2E tests
  - Sample unit tests for module registry (7/7 passing)
  - Sample E2E tests for homepage
  - Accessibility testing setup (axe-playwright)
- Progressive Web App foundations
  - Manifest.json with icons and metadata
  - Service Worker structure (ready for implementation)
- Documentation
  - Comprehensive README with quick start and full documentation
  - Exhaustive ROADMAP with all planned features
  - CONTRIBUTING guide with code standards and workflow
  - DEVELOPMENT guide with mandatory checklist for agent/developers
  - QUICKSTART for new developers
  - Walkthrough with complete initialization details
  - SECURITY policy with vulnerability reporting
  - CHANGELOG in Keep a Changelog format
- SEO and web standards
  - robots.txt
  - Proper HTML meta tags
  - Semantic HTML structure
- Development tooling
  - ESLint with strict TypeScript rules
  - Prettier with Svelte support
  - EditorConfig for consistency
  - .gitignore and .gitattributes
  - .env.example template

## [0.0.0] - 2025-12-02

### Added

- Project initialization
