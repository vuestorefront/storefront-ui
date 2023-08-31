---
repoPath: /components/input.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Input

::: slot usage

`SfInput` is a single-line text field allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<input type="text">` and supports supports adding content before/after the text input.

## Examples


### Basic input component

`SfInput` supports 3 sizes that can be set with the `size` prop: `'sm'`, `md`, and `'lg'`.

<Showcase showcase-name="Input/InputWithoutLabel" style="min-height:400px;">

<<<../../preview/next/pages/showcases/Input/InputWithoutLabel.tsx
</Showcase>

### Input with icons

You can insert content before and after your input using the `slotPrefix` and `slotSuffix` props. 

This can be useful for adding icons or buttons to your input.

<Showcase showcase-name="Input/InputIcons">

<<<../../preview/next/pages/showcases/Input/InputIcons.tsx#source
</Showcase>

### Input in disabled state

`SfInput` comes with out-of-the-box styles for a disabled input.

<Showcase showcase-name="Input/InputDisabled">

<<<../../preview/next/pages/showcases/Input/InputDisabled.tsx#source
</Showcase>

### Readonly Input

`SfInput` comes with out-of-the-box styles for a readonly input.

<Showcase showcase-name="Input/InputReadonly">

<<<../../preview/next/pages/showcases/Input/InputReadonly.tsx#source
</Showcase>

### Invalid State

If you pass the `invalid` prop, the input will be styled to indicate an invalid state.

<Showcase showcase-name="Input/InputInvalid">

<<<../../preview/next/pages/showcases/Input/InputInvalid.tsx#source
</Showcase>

### Full Example

This is an example of what `SfInput` might look like in your end code. It has a label, help text, character counting, and different styles depending on the input state.

<Showcase showcase-name="Input/InputCharacters">

<<<../../preview/next/pages/showcases/Input/InputCharacters.tsx#source
</Showcase>

## Notes

All non-prop attributes and styles added to `SfInput` component are passed directly to the native input element. This means that you can add all of the input attributes directly to `SfInput`. If you want to style the wrapper `div`, you can pass your classes via the  `wrapperClassName`prop. 

Since, `size` is a specified prop of `SfInput`, you won't be able to pass the native `size` attribute to your input element. Instead, you can use the `width` property with `ch` unit instead (eg. `width: 10ch`).

## Accessibility notes

Since `SfInput` uses `<input>`, it inherits all the features of the native input. For example, `SfInput` is focusable for keyboard users with `tab`.

Avoid adding `div` tags to slots. If an input element is wrapped in `label` tag (recommended) then it can't have `div` inside.

## Playground

<Generate style="height: 600px;"/>

:::

::: slot api

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |                                        |
| `wrapperTag`    | `string`         | `span`        | Any tag name for input wrapper         |
| `wrapperAs`    | `string`          | `span`        | Any tag name for input wrapper         |
| `className`    | `string`          |               |                                        |
| `slotPrefix`   | `ReactNode`       |               |                                        |
| `slotSuffix`   | `ReactNode`       |               |                                        |




:::

::: slot source
<SourceCode>



<<< ../../../packages/sfui/frameworks/react/components/SfInput/SfInput.tsx

</SourceCode>
:::
