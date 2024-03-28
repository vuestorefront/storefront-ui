# ProgressCircular

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfProgressCircular` can be used provide feedback about the duration and progression of a process. 

## Examples

### Sizes

`SfProgressCircular` supports various sizes that can be set with the `size` prop: `'xs'`, `'sm'`, `'base'`, `'lg'`, `'xl'`, `'2xl'`, `'3xl'`, `'4xl'`.

<Showcase showcase-name="ProgressCircular/ProgressCircularSizes" style="min-height:320px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/ProgressCircular/ProgressCircularSizes.tsx
::

</Showcase>

### Customizing colors

By default, `SfProgressCircular` uses `primary-700` as the shape color (customizable by setting text color) and `neutral-300` for the background ring. You can change these values in your [Tailwind configuration](https://tailwindcss.com/docs/configuration#theme) or override them for a single-element using [`important modifier`](https://tailwindcss.com/docs/configuration#important-modifier).

::tip
Learn more about [overriding default styles](/customization/overriding-default-styles) in Storefront UI.
::

<Showcase showcase-name="ProgressCircular/ProgressCircularColors">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularColors.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/ProgressCircular/ProgressCircularColors.tsx
::

</Showcase>

### With floating label

::vue-only
You can add text to the center of the Progress Circle by providing content to the component via the `default` slot.
::
::react-only
You can add text to the center of the Progress Circle by providing content to the component via the `children`.
::

::warning
`SfProgressCircular` is built using an `svg`, so your content must be SVG-compatible.
::

<Showcase showcase-name="ProgressCircular/ProgressCircularFloatingLabel">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/ProgressCircular/ProgressCircularFloatingLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/ProgressCircular/ProgressCircularFloatingLabel.tsx
::

</Showcase>

## Accessibility notes

This component sets the `role="progressbar"` to [allow screen readers treat it as an indicator of progress status](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/progressbar_role).


## Playground

<Generate style="height: 450px" />

#tab-2
## Props

::vue-only
| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  `value`                |  `number`                    | `0`             |                                        |
|  `size`              |  `SfProgressSize` |   `'base'`        |   `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'`  |
|  `ariaLabel`         |  `string`                    |   `'Progress element'`  |   
::
::react-only
| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
|  `value`                |  `number`                    | `0`             |                                        |
|  `size`              |  `SfProgressSize` |   `'base'`        |   `'xs'`,`'sm'`,`'base'`,`'lg'`,`'xl'`,`'2xl'`,`'3xl'`,`'4xl'`  |
|  `ariaLabel`         |  `string`                    |   `'Progress element'`  |   
|  `className`            |  `string`                    |               |                                        |
| `children`   | `ReactNode`          |               | Default slotted content            |
::

::vue-only
## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `default`   | adds content within svg element |
::

#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfProgressCircular/SfProgressCircular.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfProgressCircular/SfProgressCircular.tsx
::

::
