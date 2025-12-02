# 🔐 Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@ripapi.dev** (à créer)

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
   4.Release patches as soon as possible

## Security Best Practices

### For Users

- Always use the latest version
- Use strong, unique passwords
- Enable Two-Factor Authentication when available
- Keep your SECRET_KEY secure and never commit it
- Run on HTTPS in production
- Follow the principle of least privilege for user permissions

### For Developers

refer to [DEVELOPMENT.md](./DEVELOPMENT.md) for security guidelines during development.

Key points:

- Never commit secrets or API keys
- Run `npm audit` regularly
- Keep dependencies up to date
- Follow secure coding practices
- Validate all user inputs
- Use prepared statements for database queries
- Implement proper error handling (don't expose internal details)

## Security Features

### Authentication

- Multiple authentication providers (local, SSO, Kerberos, etc.)
- Password hashing with Argon2id (planned)
- Session management with JWT
- Rate limiting on authentication endpoints

### Data Protection

- Encryption at rest for sensitive data (planned)
- TLS 1.3 for data in transit
- HTTPOnly, Secure cookies
- CSRF protection
- XSS protection

### Access Control

- Role-Based Access Control (RBAC)
- Granular permissions system
- Audit logging for sensitive operations

### Compliance

- RGAA AAA accessibility standards
- HDS (Hébergement de Données de Santé) compliance for health data
- GDPR-ready architecture

## External Security Audits

We plan to conduct regular security audits. Results will be published here once available.

## Vulnerability Disclosure Timeline

- Day 0: Vulnerability reported
- Day 1-2: Acknowledgment sent to reporter
- Day 3-7: Investigation and validation
- Day 8-30: Patch development and testing
- Day 31: Coordinated disclosure and patch release

## Recognition

We thank the following security researchers for responsibly disclosing vulnerabilities:

(List will be updated as vulnerabilities are reported and fixed)

---

**Last Updated:** 2025-12-02
