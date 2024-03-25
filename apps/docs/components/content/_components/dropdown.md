# Dropdown

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

The `SfDropdown` component is built on top of `useDropdown`  and accepts all its params.


::react-only
Learn more about `useDropdown` hook in the [Hooks > useDropdown docs](/react/hooks/usedropdown).
::
::vue-only
Learn more about `useDropdown` composable in the [Composables > useDropdown docs](/vue/hooks/usedropdown).
::


## Examples

### Basic Usage

By default, the floating content of `SfDropdown` will be placed below your trigger element.

<Showcase showcase-name="Dropdown/BasicDropdown" style="min-height:400px">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Dropdown/BasicDropdown.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Dropdown/BasicDropdown.tsx

::

</Showcase>

## Accessibility notes

The floating content area has an `aria-hidden` attribute that reflects the visibility of the dropdown (`modelValue`). When the dropdown is not open (`modelValue` is `false`), the `aria-hidden` attribute is set to `true`, ensuring that the content is hidden from assistive technologies.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props


::react-only
| Prop name | Type | Default value | Possible values |
| --------- | ---- | ------------- | --------------- |
| `open` | `boolean` | | |
| `onClose`\* | `() => void` | | |
| `trigger`\* | `ReactNode` | | |
| `children` | `ReactNode` | | |
| `placement` | `SfPopoverPlacement` | `'bottom'` | Placement of floating element |
| `middleware` | `UseFloatingProps['middleware']` | | Array of `@floating-ui` middlewares |
| `strategy` | `SfPopoverStrategy` | `'absolute'` | Positioning strategy (`absolute` or `fixed`) |
::

::vue-only
| Prop name | Type | Default value | Possible values |
| --------- | ---- | ------------- | --------------- |
| `modelValue` | `boolean` | | |
| `placement` | `SfPopoverPlacement` | `'bottom'` | Placement of floating element |
| `middleware` | `UseFloatingProps['middleware']` | | Array of `@floating-ui` middlewares |
| `strategy` | `SfPopoverStrategy` | `'absolute'` | Positioning strategy (`absolute` or `fixed`) |
::


::vue-only

## Slots

| Slot name | Description                        |
| --------- | ---------------------------------- |
| `default` | Dropdown content                   |
| `trigger` | Element that opens up the dropdown |

## Events

| Event name          | Trigger                                            |
| ------------------- | -------------------------------------------------- |
| `update:modelValue` | emits on clicking outside of dropdown or on escape |

::

#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfDropdown/SfDropdown.vue

::
::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfDropdown/SfDropdown.tsx

::

::
