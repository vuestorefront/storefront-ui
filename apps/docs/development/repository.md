# Repository

This repository was built on top of [Turborepo](https://turborepo.org/) - solution that is enabling monorepo setup.
All the features and capabilities can be found on the official docs site, however the most important and powerful one
might be asynchronous pipelines. You can run and build your apps in the parallel mode along with reusable packages that
can be shared across the whole structure and repository. It's also allows you to build dependent processes - it means
that you can wait to build or run one app before another.

## Setup

#### Required system dependencies

-   [NodeJS](https://nodejs.org/en/) -  JavaScript runtime environment.
-   [yarn](https://yarnpkg.com/) - package manager used to maintain project dependencies

### a. NodeJS

Install `NodeJS` JavaScript runtime based on your environment of choice:

For Homebrew on OS X and macOS

```sh
brew install node
```

You can also download and install NodeJS directly from the [official website](https://nodejs.org/en/).

If you need to use different versions of NodeJS for other projects we recommend to install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) or any other NodeJS version manager.

Ensure that `NodeJS` environment is at least v16.

### b. Yarn

Install `yarn` [package manager](https://yarnpkg.com/getting-started/install).

You can use `corepack` to install and manage `yarn` version.

```sh
corepack prepare yarn@3.4.1 --activate
```

To enforce the consistency of `yarn` version, the binary will be executed based on `.yarnrc.yml` file configuration. This repository codebase contains yarn `3.4.1` binary version.

### c. Install dependencies

Execute `yarn` command in terminal to install all required dependencies.

### d. Configure GIT hooks

Execute `yarn prepare` or `npx husky install` command in terminal to setup GIT hooks integration.

### e. Run the project

Run pipeline on the root directory

```bash
yarn dev # run dev apps
yarn dev:docs # run documentation website
```
Access the applications on the `localhost` and specific port:

- Docs: `8080`
- Nuxt: `3001`
- Next.js: `3002`

## npm scripts

List of useful commands that could be used by developers. Execution in the command-line interface should be prefixed with `yarn` package manager.

| Command          | Description                                          |
| ---------------- | ---------------------------------------------------- |
| `dev`            | run applictions in development mode                  |
| `dev:docs`       | run documentation website                            |
| `generate-icons` | automatically generates components for icons         |
| `build`          | build applictions distribution                       |
| `lint`           | run linter against codebase                          |
| `test`           | run tests                                            |
| `clean`          | clean up `node_modules` and removes `yarn.lock` file |
| `clean:total`    | clean up project dependencies and `turborepo` cache  |

## Repository Structure

- .husky (Git Hooks)
- apps (applications folder - all the node, runtime based applications)
  - docs (documentations folder / applications)
    - components (SFUI components docs)
    - development (repository related docs and informations)
  - preview (Mitosis output components preview applications)
    - nuxt (Nuxt/Vue preview application)
    - vue (Vue preview application)
    - next (Next/React preview application)
    - shared (shared utils for preview application)
- packages (packages folder - reusable, static packages like configs and types)
  - sfui (reusable components, described in detail [here](https://github.com/vuestorefront/storefront-ui/blob/v2/packages/sfui/README.md)).
  - config (all the configs)
    - eslint (shared eslint config)
    - example-style (styles created specifically for example pages)
    - stylelint (stylelint config)
    - tailwind (tailwind config and default styles)
    - tests (test apps configuration & utils)
    - typescript (base typescript config)
- tests (all the repository tests)
- `turbo.json` (**Turborepo** entrypoint / config)
- `package.json` (workspaces definitions)

## Rules

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

## Imports

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
const { tailwindConfig } = require('@storefront-ui/tailwind-config');

module.exports = {
  presets: [tailwindConfig]
};
```
