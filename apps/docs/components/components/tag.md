---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Tag

The Tag component draws attention to new or categorized content elements.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11418%3A18666)


<!-- vue -->
## Props

|   Prop name    |   Type   | Default value | Possible values |
|:--------------:|:--------:|:-------------:|:---------------:|
| `variant`      |`String`  | `gray`            | `gray`, `primary`, `secondary`, `warning`, `negative` |
| `label`      | `String`  | ''           | 'Label' |
| `size`         |  `String` | `base`        | `sm`, `base`                                   |
| `strong`        | `Boolean`  | false        | true, false                                     |


## Slots

|   Slot name    |        Description        |
|:--------------:|:-------------------------:|
| `icon`      |   content will be displayed in the placement of icon  |

<!-- end vue -->

<!-- react -->
## Props

|   Prop name    |   Type   | Default value | Possible values |
|:--------------:|:--------:|:-------------:|:---------------:|
| `variant`      |`String`  | `gray`            | `gray`, `primary`, `secondary`, `warning`, `negative` |
| `label`      | `String`  | `base`            | '' |
| `size`         |  `String` | `base`        | `sm`, `base`                                   |
| `strong`        | `Boolean`  | false        | true, false                                     |
| `children`        | `ReactNode`  |       |                                     |

<!-- end react -->

## Accessibility notes

Component uses `aria-live` attribute for dynamical change of content. For more information on usage and allowed attributes, please look into: [Click here](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions) 

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfTag/VsfTag.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfTag/VsfTag.tsx
<!-- end react -->
