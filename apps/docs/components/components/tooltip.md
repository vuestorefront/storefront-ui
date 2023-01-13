# Tooltip component

VsfTooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page.

<Generate />

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| label                 | String                     |  ''                          |                         |
| placement             | VsfTooltipPlacement        |  VsfTooltipPlacement.bottom  |                         |
| hidePointer           | Boolean                    |  false                       |                         |
| modelValue            | Boolean                    |  false                       |                         |
<!-- react -->
| className             |  String                    |                              |                         |
| onOpenUpdate          |  Function                  |                              |                         |
<!-- end react -->
 
<!-- vue -->

## Slots

| Slot name       |            Description                             |
| ---------       | :-------------------------------:                  |
|  default        |  content around which the tooltip should appear    |
|  label          |  replaces label text                               |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

<!-- end vue -->


## Accessibility notes

Tooltip element has role="tooltip"
 

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfTooltip/VsfTooltip.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfTooltip/VsfTooltip.tsx
<!-- end react -->
