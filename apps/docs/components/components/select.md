---
layout: AtomLayout
hideBreadcrumbs: true
---
# Select

::: slot usage

`SfSelect` is a wrapper around the native `<select>` element. It provides additional styles for different states of `<select>` element.

## Examples

### Select sizes

`SfSelect` supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Select/SelectSizes" style="min-height:350px" >

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectSizes.tsx#source
<!-- end react -->
</Showcase>

### Custom chevron

You can replace the default chevron with your own custom content by using the <!-- vue -->`chevron` slot<!-- end vue --> <!-- react -->`slotChevron` prop<!-- end react -->.

<Showcase showcase-name="Select/SelectCustomChevron">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectCustomChevron.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectCustomChevron.tsx#source
<!-- end react -->
</Showcase>

### Invalid state

`SfSelect` accepts an `invalid` prop that will add additional styling.

<Showcase showcase-name="Select/SelectInvalid">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Select/SelectInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Select/SelectInvalid.tsx#source
<!-- end react -->
</Showcase>

## Notes

All non-prop attributes and styles added to `SfSelect` component are passed directly to native input element. This means that you can add all of the input attributes directly to `SfSelect`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClassName` prop. 

If you only have a few options, consider using the [`Radio`](radio.html) component instead of `Select`.


## Accessibility notes

Since this component uses the native `<select>` element, it inherits its accessibility features. For example, keyboard users can focus the select with `tab`, open with `space`, navigate the options using `arrows`, close the options menu with `Escape`, and select an option with `Enter` or `Space`.

## Playground

<Generate />

:::

::: slot api

## Props

| Prop name         | Type            | Default value | Possible values                        |
| ----------------  | --------        | ------------- | -------------------------------------- |
| `value`             | `string`          |            |                                        |
| `size`              | `SfSelectSize`   | `'base'`          | `'sm'`, `'base'`,`'lg'`                           |
| `disabled`         | `boolean`         | `false`         |                                        |
| `invalid`           | `boolean`         | `false`         |                                        |
| `required`          | `boolean`         | `false`         |                                        |
| `placeholder`       | `string`          |             |                                        |
| `wrapperClassName`  | `string`          |             |                                        |
<!-- react -->
| `onChange`          | `Function`        |               |                                        |
| `slotChevron`       | `ReactNode`       |               |                                        |
| `children`          | `ReactNode`       |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description              |
| --------- | ------------------------ |
| `default`   | Place for select options |
| `chevron`   | Custom chevron           |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfSelect/SfSelect.vue
<!-- end vue -->

<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfSelect/SfSelect.tsx
<!-- end react -->
</SourceCode>
:::
