# Introduction

Core package with components, styling and everything around them.

## Structure

- `assets` (all svg that will be converted into icons)
- `frameworks` (core part aggregating components, types, shared utils )
  - `react`
    - `components` (place where components and its friends(types) should be placed)
    - `hooks` (util functions react specific that helps coding)
    - `shared` (same as `shared` but only for react)
  - `vue`
    - `components` (place where components and its friends(types) should be placed)
    - `composables` (util functions react specific that helps coding)
    - `shared` (same as `shared` but only for vue)
  - `sass` (styles used in components)
  - `css` (compiled `sass` package)
- `shared` (Files shared across 2 frameworks - they are populated from package `@storefront-ui/shared` into `frameworks/vue` and `frameworks/react`, so we would have one place for common utils, types etc, during release package will be copied into package so it will be able work as standalone package in end-user `node_modules`)

## Generating icons

Navigate to `root` and run `yarn`, after that please run `yarn generate-icons` for icons to be generated based on whats inside `assets`.
