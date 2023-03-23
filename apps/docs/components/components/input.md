---
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

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputWithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputWithoutLabel.tsx
<!-- end react -->
</Showcase>

### Input with icons

You can insert content before and after your input using the <!-- vue --> `prefix` and `suffix` slots<!-- end vue --><!-- react -->`slotPrefix` and `slotSuffix` props<!-- end react -->. 

This can be useful for adding icons or buttons to your input.

<Showcase showcase-name="Input/InputIcons">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputIcons.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputIcons.tsx#source
<!-- end react -->
</Showcase>

### Input in disabled state

`SfInput` comes with out-of-the-box styles for a disabled input.

<Showcase showcase-name="Input/InputDisabled">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputDisabled.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputDisabled.tsx#source
<!-- end react -->
</Showcase>

### Readonly Input

`SfInput` comes with out-of-the-box styles for a readonly input.

<Showcase showcase-name="Input/InputReadonly">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputReadonly.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputReadonly.tsx#source
<!-- end react -->
</Showcase>

### Invalid State

If you pass the `invalid` prop, the input will be styled to indicate an invalid state.

<Showcase showcase-name="Input/InputInvalid">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputInvalid.tsx#source
<!-- end react -->
</Showcase>

### Full Example

This is an example of what `SfInput` might look like in your end code. It has a label, help text, character counting, and different styles depending on the input state.

<Showcase showcase-name="Input/InputCharacters">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Input/InputCharacters.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Input/InputCharacters.tsx#source
<!-- end react -->
</Showcase>

## Notes

All non-prop attributes and styles added to `SfInput` component are passed directly to the native input element. This means that you can add all of the input attributes directly to `SfInput`. If you want to style the wrapper `div`, you can pass your classes via the <!-- vue -->`wrapperClass`<!-- end vue --><!-- react --> `wrapperClassName`<!-- end react -->prop. 

Since, `size` is a specified prop of `SfInput`, you won't be able to pass the native `size` attribute to your input element. Instead, you can use the `width` property with `ch` unit instead (eg. `width: 10ch`).

## Accessibility notes

Since `SfInput` uses `<input>`, it inherits all the features of the native input. For example, `SfInput` is focusable for keyboard users with `tab`.

## Playground

<Generate style="height: 600px;"/>

:::

::: slot api

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |                                        |
<!-- react -->
| `className`    | `string`          |               |                                        |
| `slotPrefix`   | `ReactNode`       |               |                                        |
| `slotSuffix`   | `ReactNode`       |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                        |
| --------- | ---------------------------------- |
| `prefix`    | Custom content for prefix in input |
| `suffix`    | Custom content for suffix in input |
<!-- end vue -->

<!-- vue -->

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->


:::

::: slot source
<SourceCode>

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/SfInput/SfInput.vue

<!-- end vue -->

<!-- react -->

<<< ../../../packages/sfui/frameworks/react/components/SfInput/SfInput.tsx

<!-- end react -->
</SourceCode>
:::
