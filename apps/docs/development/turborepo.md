## Turborepo

---

This repository was built on top of [Turborepo](https://turborepo.org/) - solution that is enabling monorepo setup.
All the features and capabilities can be found on the official docs site, however the most important and powerful one
might be asynchronous pipelines. You can run and build your apps in the parallel mode along with reusable packages that
can be shared across the whole structure and repository. It's also allows you to build dependent processes - it means
that you can wait to build or run one app before another.

### Setup

---

Install dependencies.

```bash
yarn
```

Run pipeline on root directory

```bash
yarn dev # run dev mode
yarn build # run build mode
```

Ports:

- Docs: `8000`
- Nuxt: `3001`
- Remix: `3002`

Clean the repository.

```bash
yarn clean
yarn clean:total # with cachas
```

### Repository Structure

---

- .husky (Git Hooks)
- .stale (old components, stories and previews)
- apps (applications folder - all the node, runtime based applications)
  - dosc (documentations folder / applications)
    - components (SFUI components docs)
    - development (repository related docs and informations)
  - mitosis (Mitosis application)
  - preview (Mitosis output components preview applications)
    - nuxt (Nuxt/Vue preview application)
    - next (Next/React preview application)
- packages (packages folder - reusable, static packages like configs and types)
  - sfui (reusable components, more in readme.md in this package)
  - config (all the configs)
    - base (repository base config)
    - eslint (shared eslint config)
    - example-style (styles created specifically for example pages)
    - style (style-lint config)
    - tailwind (tailwind config and default styles)
    - typescript (base typescript config)
  - modules (reusable modules folder)
  - types (all the apps and packages types)
- tests (all the repository tests)
- `turbo.json` (**Turborepo** entrypoint / config)
- `package.json` (workspaces definitions)

### Rules

---

1. Reuse as much as you can.
2. Use one config - define one package for config (TS, Lint, any other). Don't create and define configs for all
   the packages (per package). If you need it you can extend it with the app-related rules. Check the **Typescript**
   or **Tailwind** configs as a reference.
3. Don't define many NPM package definitions - if NPM package is globally used, or for more than one app (or packages)
   then install it with main `packages.json` file, if you're using a certain package just for one app add it to
   the specific `package.json` file. This way you'll avoid the versions mismatches.
4. Put all of your shared code & typings in one place, within shared package(s) (e.g. `@storefront-ui/shared`), and import them to all the apps needed.
5. Package that is part of the repository can be registered globally, with the main `package.json` file, or within
   the certain apps - use `workspace:*` as a version marker (`@storefront-ui/shared: "workspace:*"`).
6. Keep the namespace consistence.

### Imports

---

Import types.

```ts
import { Type } from '@storefront-ui/shared';
```

Extend typescript config.

```json
{
  "extends": "@storefront-ui/typescript-config/base.json",
  "compilerOptions": {
    ...
  }
}
```

Import and use config.

```ts
import config from '@storefront-ui/eslint-config';

export default {
  ...config,
};
```

or

```js
const config = require('@storefront-ui/tailwind-config/index.json');

module.exports = {
  ...config,
};
```
