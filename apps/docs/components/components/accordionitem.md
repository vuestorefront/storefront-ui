---
layout: AtomLayout
hideBreadcrumbs: true
description: The AccordionItem component is built on native details html element. Click on a header expands the content below.
---

# AccordionItem

::: slot usage

{{ $frontmatter.description }}

## Basic Accordion

Simple implementation of accordion component.

<Showcase showcase-name="AccordionItem/BasicAccordion" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/AccordionItem/BasicAccordion.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/AccordionItem/BasicAccordion.tsx#source
<!-- end react -->

</Showcase>

## Accordion Group

Accordion component that collapse inactive sections.

<Showcase showcase-name="AccordionItem/CollapsableAccordion" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/AccordionItem/CollapsableAccordion.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/AccordionItem/CollapsableAccordion.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate />

:::

::: slot api

The AccordionItem component is built on top of the [\<details>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) HTML element and accepts all of its attributes except `onToggle` attribute. The component prevents native browser behavior and implements its own `onToggle` handler.

## Props

| Prop name         | Type                      | Default value | Possible values |
| ----------------- | ------------------------- | ------------- | --------------- |
<!-- react -->
| open              | `boolean`                 | false         |                 |
| onToggle          | `(open: boolean) => void` |               |                 |
| children          | `ReactNode`               |               |                 |
| summaryClassName  | `string`                  |               |                 |
<!-- end react -->
<!-- vue -->
| modelValue        | `boolean`                 | false         |                 |
| summaryClass      | `string`                  |               |                 |
<!-- end vue -->

<!-- vue -->
## Slots

| Slot name | Description           |
| --------- | --------------------- |
| default   | content to expand     |
| summary   | header with a summary |

## Events

| Event name            | Trigger                            |
| --------------------- | ---------------------------------- |
| update:modelValue     | Triggers when click on the summary |
<!-- end vue -->

:::

::: slot source

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfAccordionItem/VsfAccordionItem.tsx
<!-- end react -->

:::
