---
repoPath: /components/drawer.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Drawer

::: slot usage

`SfDrawer` is a container that can be anchored to the left, right, top or bottom edge of the screen. This can be used to create things like navigation drawers, sliding cart views, or anything else that needs to stick to the edge of the screen. It also adds additional functionality like closing when the user clicks outside of the drawer or presses the escape key.


## Examples

### Basic Usage

`SfDrawer` supports 4 different placements that can be set via `placement` prop: `top`, `right`, `bottom`, `left`. To open/close the drawer, you can use the `open` prop and the `onClose` event. 

By default, `SfDrawer` will trigger `onClose` when the user clicks outside of the drawer or presses the escape key. These behaviors can be disabled by setting the `disableClickAway` and `disableEsc` props to `true`.

<Showcase showcase-name="Drawer/Placement" style="min-height:400px">

<<<../../preview/next/pages/showcases/Drawer/Placement.tsx#source

</Showcase>

### Drawer transition and trap focus

You can wrap `SfDrawer` in a [`<CSSTransition>`](https://reactcommunity.org/react-transition-group/css-transition) component to add enter/exit animations. Additionally, you can use the `useTrapFocus` hook for better control of focusable elements inside.

<Showcase showcase-name="Drawer/TransitionAndCloseButton" style="min-height: 400px;">

<<<../../preview/next/pages/showcases/Drawer/TransitionAndCloseButton.tsx#source
</Showcase>

## Playground

<Generate style="height: 600px"/>

:::

::: slot api

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| `open`\*                  | `boolean`                    | `false`         |                                        |
| `as`                    | `ReactElement`               | `'aside'`         |                                        |
|  `placement`            | `SfDrawerPlacement`         | `'left'`          | `'top'`, `'bottom'`, `'left'`, `'right'`   |                                        
|  `disableClickAway`     | `boolean`                    | `false`        |                                        |
|  `disableEsc`           |  `boolean`                   | `false`        |                                        |
|  `onClose`              |  `Function`                  |               |                                        |
|  `children`             |  `ReactNode`                 |               |                                        |
:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/react/components/SfDrawer/SfDrawer.tsx
</SourceCode>
:::
