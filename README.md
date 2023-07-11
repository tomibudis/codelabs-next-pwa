# PWA Boilerplate

This is the Next.js application for PWA Frontend Template

### Lighthouse

![Lighthouse Accessibility Badge](./lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices Badge](./lighthouse/lighthouse_best-practices.svg) ![Lighthouse Performance Badge](./lighthouse/lighthouse_performance.svg) ![Lighthouse PWA Badge](./lighthouse/lighthouse_pwa.svg) ![Lighthouse SEO Badge](./lighthouse/lighthouse_seo.svg)

## uTests Coverage Status

| Statements                                                                         | Branches                                                                       | Functions                                                                           | Lines                                                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-77.12%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-54.23%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-87.09%25-yellow.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-81.11%25-yellow.svg?style=flat) |

## What chore library inside this repository?

```
- jest & testing-library
- tailwindcss
- @tanstack/react-query
- nextjs@12.x.x
- next-pwa
- axios
- dayjs
```

## How to Install

Prerequisite

```
node ^v18.13.0 (stable version)
npm ^7.10.0
```

run script

```
npx tomibudis/codelabs-next-pwa {appName}
```

When init project successfully. follow the following command script to start

## Development

**Run locally as dev mode**

- npm run install
- npm run dev
- open http://localhost:3000

**Build Mode (production)**

- npm run install
- npm run build
- npm run start
- open http://localhost:3000

**uTest**

- npm run test

**build coverage badge**

- npm run test:coverage

### Folder Structure

```
src
├── components
│   └── index.ts
├── constants
│   └── index.ts
├── hooks
│   ├── mutations
│   └── queries
│       └── use-todo.ts
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── _offline.tsx
│   ├── api
│   │   └── hello.ts
│   └── index.tsx
├── styles
│   ├── config.scss
│   └── globals.scss
├── types
├── utils
│   ├── axios.ts
│   ├── date.ts
│   └── test-utils.tsx
└── views
    └── homepage
        ├── __test__
        │   ├── __snapshots__
        │   │   └── Homepage.test.tsx.snap
        │   └── homepage.test.tsx
        ├── homepage.tsx
        └── index.ts
```

## Commit

All commit messages should conform to the [conventional commit format](https://www.conventionalcommits.org) and should use following syntax: `type(scope): subject`. While the type is mandatory, the scope is optional.
Examples:

```
docs: add README.md
```

```
fix(Header): fix padding issue
```

```
feat: create Home view
```

Main types are `fix` and `feat`, however it is possible to also use:

- `chore`
- `docs`
- `style`
- `refactor`
- `perf`
- `test`

## Generate lighthouse

1. build application with `npm run build`
2. run app locally `npm run start`
3. run `npx lighthouse-badges --urls http://localhost:3000 -o lighthouse`

## How to Publish NPM Registry

https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
