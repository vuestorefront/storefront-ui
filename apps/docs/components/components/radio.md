---
layout: AtomLayout
hideBreadcrumbs: true
description: A radio is a checkable input always appears in a group of elements with the same role, where no more than one of the radio can be checked at a time.
---
# Radio

::: slot usage

{{ $frontmatter.description }}

## Accessibility notes

- Providing a bigger hit area for your radio buttons - select a radio button by clicking on its associated `label` element, as well as on the radio button itself.
- [ARIA - radio role:](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radio_role) The radio role is one of a group of checkable buttons, in a radiogroup, where no more than one of the buttons can be checked at a time.
- A radio element is a checkable input in a group of role elements, of which only one of which can be checked at a time. The radio elements must be grouped together in a [`radiogroup`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/radiogroup_role) to indicate which ones affect the same value.

## Radio without label

Radio input component without a label.

<Showcase showcase-name="Radio/RadioWithoutLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioWithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioWithoutLabel.tsx#source
<!-- end react -->
</Showcase>

## Radio with control on left

Radio base component with input control aligned to the left.

<Showcase showcase-name="Radio/RadioLeading">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioLeading.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioLeading.tsx#source
<!-- end react -->
</Showcase>

## Radio with control on right

Radio base component with input control aligned to the right.

<Showcase showcase-name="Radio/RadioTrailing">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioTrailing.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioTrailing.tsx#source
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
## Props

| Prop name  | Type                          | Default value | Possible values       |
| ---------- | ----------------------------- | ------------- | --------------------- |
| `name`\*       | `string`                        |               |                       |
| `invalid`    | `boolean`                       | `false`         |                       |
<!-- vue -->
| `value`      | `string`                        |               |                       |
| `modelValue` | `string`                        |               |                       |
| `disabled`   | `boolean`                       | `false`         |                       |
<!-- end vue -->
<!-- react -->
| `checked`   | `boolean`                        |               |                       |
| `onChange`   | `Function`     |               |                       |
| `className` | `string`                         |               |                       |
<!-- end react -->

<!-- vue -->
## Events

| Event name        | Trigger                   |
| ----------------- | ------------------------- |
| `update:modelValue` | triggers radio event emit |

<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfRadio/SfRadio.vue
<!-- end vue -->

<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfRadio/SfRadio.tsx
<!-- end react -->
</SourceCode>
:::
