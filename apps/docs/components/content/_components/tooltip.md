# Tooltip

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfTooltip` can be used to provide additional information when an element receives focus or is hovered.

It's built on top of `useTooltip` and accepts all its params.

::react-only
Learn more about `useTooltip` hook in the [Hooks > useTooltip docs](/react/hooks/useTooltip.html).
::
::vue-only
Learn more about `useTooltip` composable in the [Composables > useTooltip docs](/vue/hooks/useTooltip.html).
::


## Examples

### Basic Usage

The tooltip appears on hover and is useful for displaying extra information to desktop users. For accessibility, always set the `id` prop on `SfTooltip` and use the same value for the `aria-describedby` attribute on the child element.

<Showcase showcase-name="Tooltip/BasicTooltip">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Tooltip/BasicTooltip.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Tooltip/BasicTooltip.tsx
::

</Showcase>

### Focusable Tooltip content

For improved accessibility and better support for mobile users, ensure the tooltip’s trigger element is focusable. You can do this by applying a `tabindex` attribute or by using a natively focusable element such as a `button` or `input`. Also, handle the `focus` and `blur` events on the trigger to control the tooltip’s visibility. See the showcase below for a implementation example.

<Showcase showcase-name="Tooltip/FocusableTooltip">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Tooltip/FocusableTooltip.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Tooltip/FocusableTooltip.tsx
::

</Showcase>

## Accessibility notes

By default, this component sets `role="tooltip"`.


## Playground

<Generate style="height: 450px" />

#tab-2

## Props

::vue-only
| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\*   | `string`                                                 |               |                 |
| `modelValue` | `boolean`                                                | `false`       |                 |
| `showArrow` | `boolean`                                                | `false`       |                 |
| `placement` | `SfPopoverPlacement`                                    |               |                 |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` |               |                 |
::
::react-only
| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `label`\*   | `string`                                                 |               |                 |
| `open` | `boolean`                                                | `false`       |                 |
| `showArrow` | `boolean`                                                | `false`       |                 |
| `placement` | `SfPopoverPlacement`                                    |               |                 |
| `arrowSize` | `${number}px` &#124; `${number}em` &#124; `${number}rem` |               |                 |
| `children` | `ReactNode` | | |
::

::vue-only
## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| `default`   | Content being described by the tooltip   |
::
#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfTooltip/SfTooltip.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfTooltip/SfTooltip.tsx
::

::
