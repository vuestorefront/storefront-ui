---
layout: ComponentLayout
hideBreadcrumbs: true
---
# AccordionItem

The AccordionItem component is built on native `details` html element. Click on header triggers expanding below seated content passed inside by the prop.

<Generate />


## Figma design

See the design on [Figma](https://www.figma.com/file/Cx2jw34waZltkapwq7j7aT/SFUI-2-%7C-Design-Kit-(early-alpha)?node-id=11381%3A15149&t=eAc5joFjkRlZwK2p-0)

## Props

| Prop name   | Type    | Default value | Possible values |
| ----------- | ------- | ------------- | --------------- |
| open        | Boolean | false         |                 |
| title       | String  | ''            |                 |
| chevronLeft | Boolean | false         |                 |
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
