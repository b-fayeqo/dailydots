# dailydots

Habit tracker grid built with Vue 3 composition API

Started as a weekend hack, grew on me.

## Installation

```bash
npm install
npm run dev
```

## What it does

- Composition API + script setup
- State persisted to localStorage
- GitHub-style contribution grid per habit
- Vite dev setup with hot reload

## Examples

```bash
# open http://localhost:5173
# click a cell to toggle that day
```

## Project structure

```text
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   └── bug_report.md
│   └── workflows/
│       └── ci.yml
├── docs/
│   ├── configuration.md
│   ├── faq.md
│   ├── roadmap.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── src/
│   ├── App.vue
│   ├── main.js
│   └── store.js
├── .editorconfig
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── index.html
├── package.json
└── vite.config.js
```

## FAQ

**Is this production ready?**  
It works for my use case; review the code before relying on it.

**Why no framework?**  
The stdlib covers what this project needs.
