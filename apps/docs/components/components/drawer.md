---
layout: AtomLayout
hideBreadcrumbs: true
description: VsfDrawer is surface containing supplementary content that is anchored to the left, right, top or bottom edge of the screen.
---
# Drawer

::: slot usage

{{ $frontmatter.description }}

## Examples

### Drawer placement

Drawer supports 4 different placements that can be set via `placement` prop: `top`, `right`, `bottom`, `left`.

<Showcase showcase-name="Drawer/Placement" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Drawer/Placement.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Drawer/Placement.tsx
<!-- end react -->

</Showcase>

### Drawer transition and trap focus

Component can be wrapped in <!-- vue -->[`<transition>`](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)<!-- end vue --><!-- react -->[`<CSSTransition>`](https://reactcommunity.org/react-transition-group/css-transition)<!-- end react --> component for animated showing and hiding. Drawer as well can use `useTrapFocus`  <!-- vue -->`composable`<!-- end vue --><!-- react -->`hook`<!-- end react --> for better control of focusable elements inside.

<Showcase showcase-name="Drawer/TransitionAndCloseButton" style="min-height: 400px;">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Drawer/TransitionAndCloseButton.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Drawer/TransitionAndCloseButton.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate style="height: 600px"/>

:::

::: slot api

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
<!-- vue -->
| modelValue            | boolean                    | false         |                                        |
| tag                   | string                     | aside         |                                        |
<!-- end vue -->
<!-- react -->
| open                  | boolean                    | false         |                                        |
| as                    | ReactElement               | aside         |                                        |
<!-- end react -->
|  placement            | VsfDrawerPlacement         | VsfDrawerPlacement.left        |                                        |
|  disableClickAway     | boolean                    | false        |                                        |
|  disableEsc           |  boolean                   | false        |                                        |
<!-- react -->
|  children             |  ReactNode                 |               |                                        |
|  onClose              |  Function                  |               |                                        |
<!-- end react -->
<!-- vue -->

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| default   | place content of drawer |

## Events

| Event name        | Trigger                        |
| ----------------- | ------------------------------ |
| update:modelValue | emits on clicking close button |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDrawer/VsfDrawer.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDrawer/VsfDrawer.tsx
<!-- end react -->
</SourceCode>
:::
