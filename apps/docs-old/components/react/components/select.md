---
repoPath: /components/select.md
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

<<<../../preview/next/pages/showcases/Select/SelectSizes.tsx#source
</Showcase>

### Custom chevron

You can replace the default chevron with your own custom content by using the  `slotChevron` prop.

<Showcase showcase-name="Select/SelectCustomChevron">

<<<../../preview/next/pages/showcases/Select/SelectCustomChevron.tsx#source
</Showcase>

### Invalid state

`SfSelect` accepts an `invalid` prop that will add additional styling.

<Showcase showcase-name="Select/SelectInvalid">

<<<../../preview/next/pages/showcases/Select/SelectInvalid.tsx#source
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
| `onChange`          | `Function`        |               |                                        |
| `slotChevron`       | `ReactNode`       |               |                                        |
| `children`          | `ReactNode`       |               |                                        |


:::

::: slot source
<SourceCode>

<<< ../../../packages/sfui/frameworks/react/components/SfSelect/SfSelect.tsx
</SourceCode>
:::
