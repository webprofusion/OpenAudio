# Contributing Guide

Thanks for helping grow OpenAudio! This project is fully data‑driven: the website and README are generated from JSON collections under `data/`. Contributions are made by proposing JSON changes ("patches") via Pull Requests.

## How Contributions Work (JSON patches)

- Edit only the relevant file in `data/`:
  - `data/plugins.json` — Audio Plugins
  - `data/collections.json` — Collections
  - `data/apps.json` — Audio Apps
  - `data/libraries.json` — Libraries & APIs
  - `data/samples.json` — Code Samples
  - `data/resources.json` — Open Data Resources
- Add or update entries as small, focused JSON diffs. Your PR will effectively be a "JSON patch" to these lists. Do not modify generated files (e.g. README or any `out/` files).
- Keep entries alphabetically sorted by the `name` field (case‑insensitive). CI tests enforce this.
- Follow the schema for each collection:
  - Plugins: `{ name, url, description, type, frameworks[] }`
  - Apps: `{ name, description, repository, url? }`
  - Libraries: `{ name, description, repository, url? }`
  - Collections/Resources/Samples: `{ name, url, description }`
- `repository` must be one of:
  - GitHub: `{ type: "GitHub", user, repo }`
  - SourceForge: `{ type: "SourceForge", project }`
  - Assembla: `{ type: "Assembla", space }`

## Recommended PR Checklist

- Minimal JSON change only (no formatting churn).
- Sorted `name` entries.
- Valid URLs and concise descriptions.
- Correct `type` and `frameworks` for plugins.
- Use existing project naming conventions.

## Build and Test

All build/test commands live in the `generator/` folder.

### Prerequisites

- Node.js and npm installed.

### Install, Test, Lint, Format

```bash
cd generator
npm ci
npm test            # Runs unit tests (vitest)
npm run test:lint   # ESLint (TypeScript)
npm run test:format # Prettier formatting check
```

### Generate README (build)

This compiles TypeScript and generates the site README into `out/README.md`.

```bash
cd generator
npm run generate
```

## Contribution Workflow

1. Fork the repo and create a feature branch.
2. Edit the appropriate `data/*.json` file with your changes.
3. Run tests and checks in `generator/`.
4. Commit only the JSON changes (and any necessary fixes to pass tests).
5. Open a Pull Request. The PR diff is your JSON patch.

## Notes

- Do not edit `README.md` directly; it is generated.
- Large reorders or format changes make reviews harder; prefer minimal diffs.
- If unsure where an entry belongs, open an issue first for guidance.
