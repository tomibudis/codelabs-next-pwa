# PWA Boilerplate

This is the Next.js application for PWA Frontend Template

### Lighthouse

![Lighthouse Accessibility Badge](./lighthouse/lighthouse_accessibility.svg) ![Lighthouse Best Practices Badge](./lighthouse/lighthouse_best-practices.svg) ![Lighthouse Performance Badge](./lighthouse/lighthouse_performance.svg) ![Lighthouse PWA Badge](./lighthouse/lighthouse_pwa.svg) ![Lighthouse SEO Badge](./lighthouse/lighthouse_seo.svg)

## uTests Coverage Status

| Statements                                                                         | Branches                                                                       | Functions                                                                           | Lines                                                                       |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-77.12%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-54.23%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-87.09%25-yellow.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-81.11%25-yellow.svg?style=flat) |

## Prerequisite

```
node ^v14.17.0
npm ^6.14.13
```

## What chore library inside this repository?

```
- jest & testing-library
- styled-component
- bootstrap 5
- react-query
- nextjs@latest
- next-pwa
- axios
- dayjs
```

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
│   ├── Text
│   │   ├── Text.tsx
│   │   └── index.ts
│   └── index.ts
├── modules
│   ├── Todo
│   │   └── index.ts
│   └── index.ts
├── styles
│   ├── config.scss
│   └── globals.scss
├── utils
│   ├── axios.ts
│   ├── date.ts
│   ├── index.ts
│   └── testUtils.tsx
└── views
    └── Homepage
        ├── Homepage.tsx
        ├── __test__
        │   ├── Homepage.test.tsx
        │   └── __snapshots__
        │       └── Homepage.test.tsx.snap
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

Additional information can be found [here](https://github.com/KWRI/engineering-resources/blob/develop/git/commit_standards.md)

## Generate lighthouse

1. build application with `npm run build`
2. run app locally `npm run start`
3. run `npx lighthouse-badges --urls http://localhost:3000 -o lighthouse`
