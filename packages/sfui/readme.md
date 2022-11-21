# Introduction

Core package with components, styling and everything around them.

# Structure

- `assets` (all svg that will be converted into icons)
- `frameworks` (core part aggregating components, types, shared utils )
  - React
    - `components` (place where components and its friends(types) should be placed)
    - `hooks` (util functions react specific that helps coding)
    - `shared` (symlinked `shared` directory from `sfui/shared`, used for keeping vanila js utils like e.g `throttle`, `getDate` etc)
    - `utils` (same as `shared` but only for vue, different name because it might be hard to control naming to avoid conflicts)
  - Vue
    - `components` (place where components and its friends(types) should be placed)
    - `composables` (util functions react specific that helps coding)
    - `shared` (symlinked `shared` directory from `sfui/shared`, used for keeping vanila js utils like e.g `throttle`, `getDate` etc)
    - `utils` (same as `shared` but only for vue, different name because it might be hard to control naming to avoid conflicts)
- `styles` (scss files for both `vue` and `react` written with `BEM` methodology, so we would not be desynced with styling in separated frameworks)

# Generating icons

Navigate to `root` and run `yarn`, after that please run `yarn generate-icons` for icons to be generated based on whats inside `assets`.

# Shared

Files shared across 2 frameworks (vue,react) - they are populated from package `@sfui/shared` into `frameworks/vue` and `frameworks/react`, so we would have one place for common utils, types etc, during release package will be copied into package so it will be able work as standalone package in end-user `node_modules`
