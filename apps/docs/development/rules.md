# Component

## Naming

- component name should be prefixed with `Vsf` string;
- each components should be placed in dedicated directory
  - `packages/sfui/frameworks/vue/VsfComponentName/VsfComponentName.vue`
  - `packages/sfui/frameworks/react/VsfComponentName/VsfComponentName.tsx`

## Styling

- every scss styling should be placed under `@storefront-ui/sass/components` and import to `index.scss` file. We write in BEM methodology, so its easier to sync template between vue and react

## Prop naming

We should name `title` (control in `prepareControls`) same as prop name, it will be easier to read examples for testers
