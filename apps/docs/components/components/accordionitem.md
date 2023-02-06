---
layout: ComponentLayout
hideBreadcrumbs: true
description: The AccordionItem component is built on native details html element. Click on header triggers expanding below seated content passed inside by the prop.
---
# AccordionItem

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name   | Type                  | Default value | Possible values |
| ----------- | -------------------   | ------------- | --------------- |
| open        | boolean               | false         |                 |
| title       | string                | ''            |                 |
| chevronLeft | boolean               | false         |                 |
| size        | VsfAccordionItemSize  | base          | sm, base, lg    |
<!-- react -->
| slotPrefix | ReactNode  |             |                                        |                                        |
| slotSuffix | ReactNode  |             |                                        |                                        |
| onToggle   | Function  |             |                                        |                                        |
| children   | ReactNode  |             |                                        |                                        |
<!-- end react -->
<!-- vue -->
## Slots

| Slot name |           Description           |
| --------- | :-----------------------------: |
| prefix    | replaces the title with styling |
| suffix    |    replaces the chevron icon    |
| default   |      replaces the content       |

<!-- end vue -->
## Events

| Event name |       Trigger        |
| ---------- | :------------------: |
| toggle     | Details native event |

## Accessibility notes

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfAccordionItem/VsfAccordionItem.tsx
<!-- end react -->
