---
layout: ComponentLayout
hideBreadcrumbs: true
---
# ListItemMenu

The ListItemMenu component is used in all kind of menus. It can act like a link or a button.

<Generate />

## Props

| Prop name          | Type    | Default value | Possible values    |
| ------------------ | ------- | ------------- | ------------------ |
| size               | String  | 'base'        | 'sm', 'base', 'lg' |
| link               | String  | ''            |                    |
| label              | String  | ''            |                    |
| secondaryText      | String  | ''            |                    |
| counter            | String  | ''            |                    |
| truncate           | Boolean | false         |                    |
| disabled           | Boolean | false         |                    |
| selected           | Boolean | false         |                    |
| selectedBackground | Boolean | false         |                    |
| tag                | 'li'    | undefined     |                    |
<!-- react -->
| onClick            | `Function`  |               |                            |
| children           | `ReactNode` |               | label content              |
| slotSecondaryText      | `ReactNode` |               | secondaryText content      |
| slotPrefix         | `ReactNode` |               | Right side slotted content |
| slotSuffix         | `ReactNode` |               | Left side slotted content  |
| className          | String      |               |                            |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name     |        Description         |
| ------------- | :------------------------: |
| default       |       label content        |
| secondaryText |   secondary text content   |
| prefix        | right side slotted content |
| suffix        | left side slotted content  |

<!-- end vue -->

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue

<!-- end vue -->
<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/VsfListItemMenu/VsfListItemMenu.tsx

<!-- end react -->
