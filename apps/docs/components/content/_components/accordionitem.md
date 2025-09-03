# AccordionItem

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1
The `SfAccordionItem` component is a wrapper around the native `<details>` and `<summary>` HTML elements. It allows you to create an accordion component that expands and collapses content.

The root element of this component is `<details>`, and any attributes that you apply onto the `SfAccordionItem` component will be passed to the `<details>` element. The one exception is the `onToggle` attribute. The component prevents the native browser behavior and implements its own `onToggle` handler.

::info
See all of the attributes that you can pass to `<details>` in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).
::

## Examples

### Basic Accordion

:::vue-only
To control the state of the accordion, you can use the `modelValue` prop. This prop is a boolean that indicates whether the accordion is open or closed.
:::

:::react-only
To control the state of the accordion, you can use the `open` prop. This prop is a boolean that indicates whether the accordion is open or closed.
:::


<Showcase showcase-name="AccordionItem/BasicAccordion" style="min-height:400px">

:::vue-only
<<<../../../../preview/nuxt/pages/showcases/AccordionItem/BasicAccordion.vue
:::
:::react-only
<<<../../../../preview/next/pages/showcases/AccordionItem/BasicAccordion.tsx
:::

</Showcase>

### Accordion Group

This example only allows one item to be open at a time.

<Showcase showcase-name="AccordionItem/CollapsableAccordion" style="min-height:400px">

:::vue-only
<<<../../../../preview/nuxt/pages/showcases/AccordionItem/CollapsableAccordion.vue
:::
:::react-only
<<<../../../../preview/next/pages/showcases/AccordionItem/CollapsableAccordion.tsx
:::

</Showcase>

### Animated

Animate AccordionItem to give that nice feeling of smooth transition.

<Showcase showcase-name="AccordionItem/AccordionAnimate" style="min-height:400px">

:::vue-only
<<<../../../../preview/nuxt/pages/showcases/AccordionItem/AccordionAnimate.vue
:::

:::react-only
<<<../../../../preview/next/pages/showcases/AccordionItem/AccordionAnimate.tsx
:::

</Showcase>

## Accessibility Notes

Since `SfAccordion` uses `<details>` and `<summary>` HTML elements, it inherits all of their accessibility features.

For example, `<summary>` elements are focusable and can be activated by pressing the `Enter` or `Space` keys.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props

:::react-only
| Prop name         | Type                      | Default value | Possible values |
| ----------------- | ------------------------- | ------------- | --------------- |
| `open`              | `boolean`                 | false         |                 |
| `summaryClassName`  | `string`                  |               |                 |
| `onToggle`          | `(open: boolean) => void` |               |                 |
| `children`          | `ReactNode`               |               |                 |
:::


:::vue-only
| Prop name         | Type                      | Default value | Possible values |
| ----------------- | ------------------------- | ------------- | --------------- |
| `modelValue`        | `boolean`                 | false         |                 |
| `summaryClass`      | `string`                  |               |                 |
:::

:::vue-only
## Slots

| Slot name | Description           |
| --------- | --------------------- |
| `default`   | content to expand     |
| `summary`   | header with a summary |

## Events

| Event name            | Trigger                            |
| --------------------- | ---------------------------------- |
| `update:modelValue`     | Triggers when click on the summary |
:::

#tab-3
## Source code

:partial{content="block-callout"}

:::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfAccordionItem/SfAccordionItem.vue
:::
:::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfAccordionItem/SfAccordionItem.tsx
:::

::
