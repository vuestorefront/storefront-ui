# Drawer


::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfDrawer` is a container that can be anchored to the left, right, top or bottom edge of the screen. This can be used to create things like navigation drawers, sliding cart views, or anything else that needs to stick to the edge of the screen. It also adds additional functionality like closing when the user clicks outside of the drawer or presses the escape key.

## Examples

### Basic Usage

`SfDrawer` supports 4 different placements that can be set via `placement` prop: `top`, `right`, `bottom`, `left`. 

::vue-only
To open/close the drawer, you can use `v-model`.
::

::react-only
To open/close the drawer, you can use the the `open` prop and the `onClose` event
::

By default, `SfDrawer` will trigger the close event when the user clicks outside of the drawer or presses the escape key. These behaviors can be disabled by setting the `disableClickAway` and `disableEsc` props to `true`.

<Showcase showcase-name="Drawer/Placement" style="min-height:400px">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Drawer/Placement.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Drawer/Placement.tsx

::

</Showcase>

### Drawer transition and trap focus

::vue-only

You can wrap `SfDrawer` in a [`<transition>`](https://vuejs.org/guide/built-ins/transition.html#the-transition-component) component to add enter/exit animations. 
::

::react-only
You can wrap `SfDrawer` in a [`<CSSTransition>`](https://reactcommunity.org/react-transition-group/css-transition) component to add enter/exit animations. 
::

Additionally, you can use the `useTrapFocus` utility for better control of focusable elements inside.

<Showcase showcase-name="Drawer/TransitionAndCloseButton" style="min-height: 400px;" no-scale>

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Drawer/TransitionAndCloseButton.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Drawer/TransitionAndCloseButton.tsx

::

</Showcase>

## Accessibility notes

The component is providing keyboard accessibility with `@keydown.esc="onEscKeyDown"` and `onClickOutside` function which allows users to close the drawer by pressing the Escape key or click outside of the drawer.

## Playground

<Generate style="height: 600px"/>

#tab-2

## Props


::vue-only
| Prop name | Type | Default value | Possible values |
| --------- | ---- | ------------- | --------------- |
| `modelValue` | `boolean` | `false` | |
| `tag` | `string` | `'aside'` | |
| `placement` | `SfDrawerPlacement` | `'left'` | `'top'`, `'bottom'`, `'left'`, `'right'` |  
| `disableClickAway` | `boolean` | `false` | |
| `disableEsc` | `boolean` | `false` | |
::
::react-only
| Prop name | Type | Default value | Possible values |
| --------- | ---- | ------------- | --------------- |
| `open`\* | `boolean` | `false` | |
| `as` | `ReactElement` | `'aside'` | |
| `placement` | `SfDrawerPlacement` | `'left'` | `'top'`, `'bottom'`, `'left'`, `'right'` |  
| `disableClickAway` | `boolean` | `false` | |
| `disableEsc` | `boolean` | `false` | |
| `onClose` | `Function` | | |
| `children` | `ReactNode` | | |
::

::vue-only

## Slots

| Slot name | Description             |
| --------- | ----------------------- |
| `default` | place content of drawer |

## Events

| Event name          | Trigger                        |
| ------------------- | ------------------------------ |
| `update:modelValue` | emits on clicking close button |

::

#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfDrawer/SfDrawer.vue

::
::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfDrawer/SfDrawer.tsx

::

::
