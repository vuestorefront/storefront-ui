---
repoPath: /components/accordionitem.md
layout: AtomLayout
hideBreadcrumbs: true
---

# AccordionItem

:::::: slot usage

The `SfAccordionItem` component is a wrapper around the native `<details>` and `<summary>` HTML elements. It allows you to create an accordion component that expands and collapses content.

The root element of this component is `<details>`, and any attributes that you apply onto the `SfAccordionItem` component will be passed to the `<details>` element. The one exception is the `onToggle` attribute. The component prevents the native browser behavior and implements its own `onToggle` handler.

::: read-more
See all of the attributes that you can pass to `<details>` in the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details).
:::

## Examples

### Basic Accordion

To control the state of the accordion, you can use the `modelValue` prop. This prop is a boolean that indicates whether the accordion is open or closed.

<Showcase showcase-name="AccordionItem/BasicAccordion" style="min-height:400px">

<<<../../preview/nuxt/pages/showcases/AccordionItem/BasicAccordion.vue

</Showcase>

### Accordion Group

This example only allows one item to be open at a time.

<Showcase showcase-name="AccordionItem/CollapsableAccordion" style="min-height:400px">

<<<../../preview/nuxt/pages/showcases/AccordionItem/CollapsableAccordion.vue

</Showcase>

## Accessibility Notes

Since `SfAccordion` uses `<details>` and `<summary>` HTML elements, it inherits all of their accessibility features. 

For example, `<summary>` elements are focusable and can be activated by pressing the `Enter` or `Space` keys.

## Playground

<Generate />

::::::

::: slot api

## Props

| Prop name         | Type                      | Default value | Possible values |
| ----------------- | ------------------------- | ------------- | --------------- |
| `modelValue`        | `boolean`                 | false         |                 |
| `summaryClass`      | `string`                  |               |                 |

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

::: slot source

## Source code

<<<../../../packages/sfui/frameworks/vue/components/SfAccordionItem/SfAccordionItem.vue

:::
