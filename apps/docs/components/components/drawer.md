---
layout: AtomLayout
hideBreadcrumbs: true
---
# Drawer

::: slot usage

`SfDrawer` is a container that can be anchored to the left, right, top or bottom edge of the screen. This can be used to create things like navigation drawers, sliding cart views, or anything else that needs to stick to the edge of the screen. It also adds additional functionality like closing when the user clicks outside of the drawer or presses the escape key.


## Examples

### Basic Usage

`SfDrawer` supports 4 different placements that can be set via `placement` prop: `top`, `right`, `bottom`, `left`. To open/close the drawer, you can use <!-- vue -->`v-model`<!-- end vue --><!-- react -->the `open` prop and the `onClose` event<!-- end react -->. 

By default, `SfDrawer` will <!-- vue -->emit `update:modelValue`<!-- end vue --><!-- react -->trigger `onClose`<!-- end react --> when the user clicks outside of the drawer or presses the escape key. These behaviors can be disabled by setting the `disableClickAway` and `disableEsc` props to `true`.

<Showcase showcase-name="Drawer/Placement" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Drawer/Placement.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Drawer/Placement.tsx#source
<!-- end react -->

</Showcase>

### Drawer transition and trap focus

You can wrap `SfDrawer` in a <!-- vue -->[`<transition>`](https://vuejs.org/guide/built-ins/transition.html#the-transition-component)<!-- end vue --><!-- react -->[`<CSSTransition>`](https://reactcommunity.org/react-transition-group/css-transition)<!-- end react --> component to add enter/exit animations. Additionally, you can use the `useTrapFocus` <!-- vue -->composable<!-- end vue --><!-- react -->hook<!-- end react --> for better control of focusable elements inside.

<Showcase showcase-name="Drawer/TransitionAndCloseButton" style="min-height: 400px;">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Drawer/TransitionAndCloseButton.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Drawer/TransitionAndCloseButton.tsx#source
<!-- end react -->
</Showcase>

## Playground

<Generate style="height: 600px"/>

:::

::: slot api

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
<!-- vue -->
| `modelValue`            | `boolean`                    | `false`         |                                        |
| `tag`                   | `string`                     | `'aside'`         |                                        |
<!-- end vue -->
<!-- react -->
| `open`\*                  | `boolean`                    | `false`         |                                        |
| `as`                    | `ReactElement`               | `'aside'`         |                                        |
<!-- end react -->
|  `placement`            | `SfDrawerPlacement`         | `'left'`          | `'top'`, `'bottom'`, `'left'`, `'right'`   |                                        
|  `disableClickAway`     | `boolean`                    | `false`        |                                        |
|  `disableEsc`           |  `boolean`                   | `false`        |                                        |
<!-- react -->
|  `onClose`              |  `Function`                  |               |                                        |
|  `children`             |  `ReactNode`                 |               |                                        |
<!-- end react -->
<!-- vue -->

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| `default`   | place content of drawer |

## Events

| Event name        | Trigger                        |
| ----------------- | ------------------------------ |
| `update:modelValue` | emits on clicking close button |
<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfDrawer/SfDrawer.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfDrawer/SfDrawer.tsx
<!-- end react -->
</SourceCode>
:::
