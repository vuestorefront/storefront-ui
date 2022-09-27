## Component

### Naming

- component name should be prefixed with `Vsf` string;
- each components should be placed in dedicated directory
    - `packages/sfui/frameworks/vue/VsfComponentName/VsfComponentName.vue`
    - `packages/sfui/frameworks/react/VsfComponentName/VsfComponentName.tsx`

### Styling

- every css styling should be placed under `@sfui/sfui/styles/components` and import to `index.scss` file. We write in BEM methodology, so its easier to sync template between vue and react


## Examples

**Q**: How can I write components
**A**: You need to create example component in `examples/YOUR_COMPONENT_NAME` for each framework. When writing docs for those components `examples/YOUR_COMPONENT_NAME?docs=true` so sidebar wont be visible and link in as iframe (TBD)

### Prop naming

We should name `title` (control in `prepareControls`) same as prop name, it will be easier to read examples for testers


