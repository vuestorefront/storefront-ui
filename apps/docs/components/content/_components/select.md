---
layout: AtomLayout
hideBreadcrumbs: true
---
# Select

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfSelect` is a wrapper around the native `<select>` element. It provides additional styles for different states of `<select>` element.

::warning
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields.html).
::

## Examples

### Select sizes

`SfSelect` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Select/SelectSizes" style="min-height:350px" >

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Select/SelectSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Select/SelectSizes.tsx
::

</Showcase>

### Custom chevron

::vue-only
You can replace the default chevron with your own custom content by using the `chevron` slot.
::
::react-only
You can replace the default chevron with your own custom content by using the `slotChevron` prop.
::

<Showcase showcase-name="Select/SelectCustomChevron">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Select/SelectCustomChevron.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Select/SelectCustomChevron.tsx
::

</Showcase>

### Invalid state

`SfSelect` accepts an `invalid` prop that will add additional styling.

<Showcase showcase-name="Select/SelectInvalid">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Select/SelectInvalid.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Select/SelectInvalid.tsx
::

</Showcase>

## Notes

All non-prop attributes and styles added to `SfSelect` component are passed directly to native input element. This means that you can add all of the input attributes directly to `SfSelect`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClassName` prop.

If you only have a few options, consider using the [`Radio`](radio.html) component instead of `Select`.

## Accessibility notes

Since this component uses the native `<select>` element, it inherits its accessibility features. For example, keyboard users can focus the select with `tab`, open with `space`, navigate the options using `arrows`, close the options menu with `Escape`, and select an option with `Enter` or `Space`.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props


::vue-only
| Prop name           | Type              | Default value | Possible values                        |
| ------------------- | ----------------- | ------------- | -------------------------------------- |
| `modelValue`        | `boolean | string[]` |            |                                        |
| `size`              | `SfSelectSize`    | `'base'`      | `'sm'`, `'base'`,`'lg'`                |
| `disabled`          | `boolean`         | `false`       |                                        |
| `invalid`           | `boolean`         | `false`       |                                        |
| `required`          | `boolean`         | `false`       |                                        |
| `placeholder`       | `string`          |               |                                        |
| `wrapperClassName`  | `string`          |               |                                        |
::
::react-only
| Prop name           | Type              | Default value | Possible values                        |
| ------------------- | ----------------- | ------------- | -------------------------------------- |
| `value`             | `string`          |               |                                        |
| `size`              | `SfSelectSize`    | `'base'`      | `'sm'`, `'base'`,`'lg'`                |
| `disabled`          | `boolean`         | `false`       |                                        |
| `invalid`           | `boolean`         | `false`       |                                        |
| `required`          | `boolean`         | `false`       |                                        |
| `placeholder`       | `string`          |               |                                        |
| `wrapperClassName`  | `string`          |               |                                        |
| `onChange`          | `Function`        |               |                                        |
| `slotChevron`       | `ReactNode`       |               |                                        |
| `children`          | `ReactNode`       |               |                                        |
::

::vue-only
## Slots

| Slot name | Description              |
| --------- | ------------------------ |
| `default`   | Place for select options |
| `chevron`   | Custom chevron           |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

::

#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfSelect/SfSelect.vue
::

::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfSelect/SfSelect.tsx
::


::
