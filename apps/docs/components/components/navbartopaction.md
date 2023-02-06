---
layout: ComponentLayout
hideBreadcrumbs: true
description: The NavbarTopAction component is used as navigation inside NavbarTop component.
---
# NavBarTopAction

{{ $frontmatter.description }}
## Props

|    Prop name              |    Type          |      Default value    |     Possible values             |
|-----------------------    |----------------- |---------------        |---------------------------------|
| active     | `Boolean`    | `false`          |                 |
| tag        | `String`     | `button`         | `button`, `a`   |
| link       | `String`     |                  |                 |
| ariaLabel  | `String`     |                  |                 |
| icon       | `Boolean`    | `false`          |                 |
<!-- react -->
| className  | `String`     |                  |                 |
| children   | `ReactNode`  |                  |                 |
| slotIcon   | `ReactNode`  | icon displayed as a prefix to the default slot content |                 |
<!-- end react -->

<!-- vue -->

## Slots

| Slot name          |            Description                    |
| ---------          | -----------------------------------       |
|    default         |    default slot content                   |  
|    icon         |    icon displayed as a prefix to the default slot content                   |  

<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarTop/VsfNavbarTopAction.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopAction.tsx
<!-- end react -->
