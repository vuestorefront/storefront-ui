---
layout: ComponentLayout
hideBreadcrumbs: true
---
# Navbar Bottom Item

The Navbar bottom component is used as navigation on mobile devices. Usually has links to the most common places on a website like homepage. Used in [Navbar Bottom](navbarbottom.html) component.

NOTE: When prop `link` provided will use internally [link](link.html) component.
## Props

| Prop name | Type      | Default value | Possible values |
| --------- | --------- | ------------- | --------------- |
| label     | `string`  |               |                 |
| active    | `boolean` | `false`       |                 |
<!-- vue -->
| tag       | `"a" | RouterLink | NuxtLink`   | `button`      | `"a" | RouterLink | NuxtLink`   |
| link      | `string | RouteLocationRaw`  |               |                 |
<!-- end vue -->
<!-- react -->
| tag       | `"a" | Link`  | `button`      | `"a" | Link`   |
| link      | `string`  |               |                 |
| className | `string`            |               |                 |
| slotIcon  | `ReactNode`         |               |                 |
| onClick   | `MouseEventHandler` |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description       |
| --------- | ----------------- |
| icon      | icon slot content |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfNavbarBottom/VsfNavbarBottomItem.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfNavbarBottom/VsfNavbarBottomItem.tsx
<!-- end react -->
