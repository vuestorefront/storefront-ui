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

## Notes

For filtering use [ListItemFilterRadio](listitemfilterradio.md) component instead of Radio. For long set of options use Select component.

## Radio with label

It's a good practice to have label for inputs elements.

<Showcase showcase-name="Radio/RadioWithLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioWithLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioWithLabel.tsx
<!-- end react -->
</Showcase>

## Radio with small label

Label can be smaller than an input.

<Showcase showcase-name="Radio/RadioWithLabelSmall">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioWithLabelSmall.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioWithLabelSmall.tsx
<!-- end react -->
</Showcase>

## Alignment

Label can be either on the right side of an input or on the left side.

<Showcase showcase-name="Radio/RadioAlignment">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Radio/RadioAlignment.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Radio/RadioAlignment.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />

:::

::: slot api
## Props

| Prop name  | Type                          | Default value | Possible values       |
| ---------- | ----------------------------- | ------------- | --------------------- |
| invalid    | Boolean                       | false         |                       |
<!-- vue -->
| name       | String                        |               |                       |
| value      | String                        |               |                       |
| modelValue | String                        |               |                       |
| disabled   | Boolean                       | false         |                       |
<!-- end vue -->
<!-- react -->
| checked   | boolean                        |               |                       |
| className | String                         |               |                       |
| onChange   | triggers radio event emit     |               |                       |
<!-- end react -->

<!-- vue -->
## Events

| Event name        |          Trigger          |
| ----------------- | :-----------------------: |
| update:modelValue | triggers radio event emit |

<!-- end vue -->
:::

::: slot source
## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfRadio/VsfRadio.vue
<!-- end vue -->

<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfRadio/VsfRadio.tsx
<!-- end react -->
:::
