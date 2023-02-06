---
layout: ComponentLayout
hideBreadcrumbs: true
description: The QuantitySelector allows the selection of a digital value and the display of additional information.
---
# QuantitySelector

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name      | Type                       | Default value       | Possible values |
| -------------- | -------------------------- | ------------------- | --------------- |
<!-- vue -->
| modelValue | `number` |               |                 |
<!-- end vue -->
<!-- react -->
| value     | `number`    |               |                 |
<!-- end react -->
| minValue       | `number`                   | `1`                  |                 |
| maxValue       | `number`                   | `Infinity`          |                 |
| step           | `number`                   | `1`                   |                 |
| size           | `VsfQuantitySelectorSize` | `base`              | `base`, `lg`    |
| disabled       | `boolean`                  | `false`             |                 |
| block          | `boolean`                  | `false`             |                 |
| ariaLabelInput | `string`                   | `Quantity Selector` |                 |
| ariaLabelDecrease | `string`                   | `decrease` |                 |
| ariaLabelIncrease | `string`                   | `increase` |                 |
| inputId        | `string`                   | `qty-selector`      |                 |
| decimal        | `number`                   |                     |                 |
<!-- react -->
| children  | `ReactNode` |               |                 |
| className | `string`    |               |                 |
| onChange  | `Function`  |               |                 |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description      |
| --------- | ---------------- |
| default   | default slot for optional content |

## Events

| Event name        | Trigger                      |
| ----------------- | ---------------------------- |
| update:modelValue | triggers when value is changed |
<!-- end vue -->

## Accessibility notes

- Use the `aria-label` attribute on the input element to defines the accessible name of the quantity selector.
- The input field element have an attribute `id`

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfQuantitySelector/VsfQuantitySelector.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfQuantitySelector/VsfQuantitySelector.tsx
<!-- end react -->
