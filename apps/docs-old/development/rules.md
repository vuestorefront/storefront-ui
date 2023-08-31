# Component

## Naming

- component name should be prefixed with `Sf` string;
- each components should be placed in dedicated directory
  - `packages/sfui/frameworks/vue/SfComponentName/SfComponentName.vue`
  - `packages/sfui/frameworks/react/SfComponentName/SfComponentName.tsx`

## Prop naming

We should name `title` (control in `prepareControls`) same as prop name, it will be easier to read examples for testers

## Tag aliases

For some components we need to provide possibility to change tag via component prop. In such cases the prop name should be `tag` (for Vue) and `as` (for React).
In cases when we want to customize tag of nested elements we should add a prefix to the prop name, e.g.: `titleTag` (Vue) or `titleAs` (React).
