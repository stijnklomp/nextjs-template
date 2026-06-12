---
name: dependency-management
description: MUST USE when upgrading dependencies in this Next.js + Bun project. Covers dependency update workflows, post-upgrade verification, and common breaking-change fixes after version bumps.
---

# Dependency Management & Upgrades

This skill describes how to safely update project dependencies and verify the project still works afterward.

## Philosophy

Always verify dependency changes before committing. Run linting and type checking after any upgrade to catch breaking changes early.

## Pre-Upgrade Safety

Before touching dependencies, ensure you can revert:

```bash
# Check for uncommitted changes
git status

# If dirty, commit or stash first
git add -A && git commit -m "chore: pre-upgrade checkpoint"
```

The `bun.lock` file is your revert point. If the upgrade breaks things irreparably, restore it:

```bash
git checkout bun.lock
rm -rf node_modules
bun install --frozen-lockfile
```

## Upgrade Workflow

### Step 1: Update Dependencies

Choose the approach that fits your needs:

**Option A: Update all dependencies at once**

```bash
# Updates all dependencies to the latest version within their
# SEMVER range in package.json, then regenerates bun.lock
bun update

# To update across major versions (ignores SEMVER ranges)
bun update --latest
```

`bun update` respects the version ranges in `package.json`. For example, if `package.json` has `"next": "^16.0.0"`, `bun update` will update to the latest `16.x.x` but NOT to `17.0.0`.

To upgrade across major version boundaries, use `--latest`.

> **Note on `minimumReleaseAge`**: `bunfig.toml` sets `minimumReleaseAge = 259200` (3 days). This means `bun update` will not install releases newer than 3 days old as a security precaution. If the user needs the absolute latest versions regardless of age, they must manually lower or remove this value in `bunfig.toml` themselves. The agentic AI must not modify this setting.

**Option B: Update a specific package**

```bash
# Update one package to the latest version within its SEMVER range
bun update <package-name>

# Example: update Next.js within its current major version
bun update next

# To update across major versions for a specific package
bun update <package-name> --latest
```

**Option C: Update a package to a specific version**

```bash
# Install an exact version
bun add <package-name>@<version>

# Example: downgrade or pin a specific version
bun add next@16.2.0
```

### Major Version Upgrades — Always Check Official Migration Docs

When upgrading across a **major version boundary** (e.g., `next` 16 → 17, `react` 19 → 20, `typescript-eslint` 8 → 9), the official migration guide is the primary source of truth for what needs to change in the project.

**Before running any upgrade command**, search for the package's official migration documentation:

1. **Check the package's official docs** — Look for a "Migration" or "Upgrading" page in the project's documentation site (e.g., `nextjs.org`, `react.dev`, `typescript-eslint.io`, `eslint.org`).
2. **Check the GitHub releases page** — Major version releases often include a detailed migration guide or breaking changes section.
3. **Check the changelog** — Look for `BREAKING CHANGES` or `Migration` headings.

**What to do with the migration guide:**

- Read the migration guide **before** making any changes.
- Follow the guide's instructions exactly — they often include required config changes, renamed rules, removed APIs, or new peer dependencies.
- The migration guide dictates what needs to be updated in the project (e.g., updating Next.js config, changing React component patterns, updating Mantine imports, etc.).
- Do **not** guess what needs to change — always follow the official migration guide.

**Example workflow for a major version upgrade:**

```bash
# 1. Read the migration guide for the package
# 2. Follow the guide's instructions to update the project code
# 3. Update the package version
bun add <package-name>@<new-major-version>

# 4. Continue with the verification steps below
```

### Step 2: Reinstall from Lockfile

After updating the lockfile, reinstall to ensure `node_modules` matches:

```bash
bun install
```

### Step 3: Fix Code Formatting

Dependency upgrades can shift formatting rules (especially Prettier and ESLint plugins). Auto-fix everything:

```bash
bun run lint:fix
```

This runs ESLint with `--fix`.

### Step 4: Verify the Build

After upgrading, verify the project still builds and type-checks:

```bash
# TypeScript type checking
bun run typecheck

# Build the Next.js app
bun run build
```

If both pass, the upgrade is safe to commit.

## Common Post-Upgrade Failures & Fixes

### TypeScript Compilation Errors

**Symptom**: `tsc` or ESLint reports type errors after upgrading Next.js, React, TypeScript, or Mantine.

**Causes & Fixes**:

| Upgrade          | Common Breakage           | Fix                                                                                  |
| ---------------- | ------------------------- | ------------------------------------------------------------------------------------ |
| Next.js major    | App Router API changes    | Update page/layout exports; check `Metadata` API changes                             |
| React major      | Hook API changes          | Update `use()` and other new APIs; check type changes                                |
| TypeScript major | Stricter checks           | Fix type errors surfaced by new strictness; `noUncheckedIndexedAccess` is already on |
| Mantine major    | Component API changes     | Update component props; check for renamed or removed props                           |
| ESLint / plugins | Rule renames or new rules | Fix new violations; update `eslint.config.js` if needed                              |

**General approach**:

```bash
# See all type errors at once
bun run typecheck

# Fix the most common ones first
bun run lint:fix
```

### Runtime Errors After Upgrade

**Symptom**: Build passes but the app crashes.

**Checklist**:

1. Check `next.config.mjs` — Next.js config API may have changed
2. Check `postcss.config.cjs` — PostCSS plugin APIs may have changed
3. Check Mantine imports — Major versions often change import paths
4. Check React version compatibility — Next.js 16 requires React 19

### Docker / Compose Failures

**Symptom**: App fails in Docker but works locally.

**Causes**:

- Image base changed (`oven/bun:alpine` or `oven/bun:latest` updated)
- PostgreSQL or RabbitMQ image updated with breaking changes
- New Bun version behaves differently in Alpine

**Fix**: Check `Dockerfile` and `docker-compose.yml` for image version pins. Update base image tags if needed.

### Lockfile Conflicts

**Symptom**: `bun install --frozen-lockfile` fails after merging branches.

**Fix**:

```bash
# Regenerate from package.json
rm bun.lock
bun install
bun run lint:fix
bun run typecheck
bun run build
```

## Breaking Change Triage Strategy

When `bun run typecheck` or `bun run build` fails after a version bump:

1. **Read the changelogs** of the upgraded packages (Next.js, React, TypeScript, Mantine are the most likely culprits)
2. **Fix TypeScript errors first** — they usually point to API changes
3. **Fix lint errors second** — usually formatting or new rule violations
4. **If stuck**, bisect by reverting `bun.lock` and upgrading packages one at a time to identify the culprit

## Committing the Upgrade

Once `bun run typecheck` and `bun run build` pass:

```bash
git add -A
git commit -m "chore(deps): update dependencies"
```

Include in the commit:

- `package.json` (updated version ranges)
- `bun.lock` (the new resolved lockfile)
- Any code changes required to fix breaking changes

## Important Rules

- **Never commit a broken state** — always run `bun run typecheck` and `bun run build` before committing
- **Always run `lint:fix`** after upgrading formatting-related packages (Prettier, ESLint, etc.)
- **If upgrading Next.js**, verify the app still builds correctly with `bun run build`
- **When in doubt**, restore `bun.lock` from git and try a more targeted upgrade
- **Never modify `bunfig.toml`'s `minimumReleaseAge`** — this is a security boundary. If the user needs dependencies newer than the configured age limit, the user must manually update this value themselves. The agentic AI is not allowed to change it.
