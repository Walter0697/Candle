# Conventional Commits for Candle

This project uses [Conventional Commits](https://www.conventionalcommits.org/) with [semantic-release](https://github.com/semantic-release/semantic-release) for automated versioning and releases.

## Commit Message Format

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Types

- **feat**: A new feature (triggers minor version bump)
- **fix**: A bug fix (triggers patch version bump)
- **chore**: Changes to build process, dependencies, or maintenance (no version bump)
- **docs**: Documentation changes (no version bump)
- **style**: Code style changes (no version bump)
- **refactor**: Code refactoring (no version bump)
- **perf**: Performance improvements (triggers patch version bump)
- **test**: Adding or updating tests (no version bump)

## Scopes

- **dictionary**: Dictionary-related changes
- **ui**: User interface changes
- **game**: Game logic changes
- **build**: Build system changes

## Examples

```bash
# New feature - triggers minor version bump (1.7.15 → 1.8.0)
git commit -m "feat(game): add new difficulty levels"

# Bug fix - triggers patch version bump (1.7.15 → 1.7.16)
git commit -m "fix(ui): fix button alignment issue"

# Dictionary update - no version bump (maintenance)
git commit -m "chore(dictionary): update from rime-cantonese source"

# Breaking change - triggers major version bump (1.7.15 → 2.0.0)
git commit -m "feat!: redesign game interface

BREAKING CHANGE: The game interface has been completely redesigned"
```

## Automated Workflow

1. **Commit with conventional format** → Pushed to `shumai` branch
2. **Semantic-release analyzes commits** → Determines version bump
3. **Creates release** → If version bump needed
4. **Deploy workflow triggers** → On release creation
5. **GitHub Pages updates** → With new version

## Dictionary Updates

Dictionary updates use the `chore(dictionary):` prefix and don't trigger version bumps since they're maintenance updates. The semantic-release will still create releases for other types of commits.

## Breaking Changes

Use `!` after the type to indicate breaking changes:
- `feat!:` - Breaking feature
- `fix!:` - Breaking fix

This will trigger a major version bump.
