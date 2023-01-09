---
layout: ComponentLayout
hideBreadcrumbs: true
---
# QuantitySelector

The QuantitySelector allows the selection of a digital value and the display of additional information.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=12113%3A17580&t=LIzxPt9OJb9F1mXf-1)

## Props

| Prop name      | Type                       | Default value       | Possible values |
| -------------- | -------------------------- | ------------------- | --------------- |
| minValue       | `Number`                   | 1                   |                 |
| maxValue       | `Number`                   | `Infinity`          |                 |
| step           | `Number`                   | 1                   |                 |
| size           | `VsfQuantitySelectorSizes` | `base`              | `base`, `lg`    |
| disabled       | `Boolean`                  | `false`             |                 |
| block          | `Boolean`                  | `false`             |                 |
| inputAriaLabel | `String`                   | `Quantity Selector` |                 |
| inputId        | `String`                   | `qty-selector`      |                 |
| decimal        | `Number`                   |                     |                 |

### React only:

| Prop name | Type        | Default value | Possible values |
| --------- | ----------- | ------------- | --------------- |
| children  | `ReactNode` |               |                 |
| className | `String`    |               |                 |
| onChange  | `Function`  |               |                 |
| value     | `Number`    |               |                 |

### Vue only:

| Prop name  | Type     | Default value | Possible values |
| ---------- | -------- | ------------- | --------------- |
| modelValue | `Number` |               |                 |

## Slots

### Vue only:

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   | default slot for optional content |

## Events

### Vue only:

| Event name        |            Trigger            |
| ----------------- | :---------------------------: |
| update:modelValue | triggers v-model update event |

## Accessibility notes

- Use the `aria-label` attribute on the input element to defines the accessible name of the quantity selector.
- The input field element have an attribute `id`

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfQuantitySelector/VsfQuantitySelector.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfQuantitySelector/VsfQuantitySelector.tsx
