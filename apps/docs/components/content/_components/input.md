# Input

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfInput` is a single-line text field allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<input type="text">` and supports supports adding content before/after the text input.

::info
If you need to make this field required, it is crucial to communicate this intention clearly to your end users. You can find more information about [required form fields in our guide here](../blocks/FormFields).
::

## Examples


### Basic input component

`SfInput` supports 3 sizes that can be set with the `size` prop: `'sm'`, `md`, and `'lg'`.

<Showcase showcase-name="Input/InputWithoutLabel" style="min-height:400px;">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputWithoutLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputWithoutLabel.tsx
::

</Showcase>

### Input with icons

::vue-only
You can insert content before and after your input using the `prefix` and `suffix` slots. 
::
::react-only
You can insert content before and after your input using the `slotPrefix` and `slotSuffix` props. 
::


This can be useful for adding icons or buttons to your input.

<Showcase showcase-name="Input/InputIcons">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputIcons.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputIcons.tsx
::

</Showcase>

### Input in disabled state

`SfInput` comes with out-of-the-box styles for a disabled input.

<Showcase showcase-name="Input/InputDisabled">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputDisabled.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputDisabled.tsx
::

</Showcase>

### Readonly Input

`SfInput` comes with out-of-the-box styles for a readonly input.

<Showcase showcase-name="Input/InputReadonly">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputReadonly.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputReadonly.tsx
::

</Showcase>

### Invalid State

If you pass the `invalid` prop, the input will be styled to indicate an invalid state.

<Showcase showcase-name="Input/InputInvalid">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputInvalid.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputInvalid.tsx
::

</Showcase>

### Full Example

This is an example of what `SfInput` might look like in your end code. It has a label, help text, character counting, and different styles depending on the input state.

<Showcase showcase-name="Input/InputCharacters">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Input/InputCharacters.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Input/InputCharacters.tsx
::

</Showcase>

## Notes

::vue-only
All non-prop attributes and styles added to `SfInput` component are passed directly to the native input element. This means that you can add all of the input attributes directly to `SfInput`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClass` prop. 
::
::react-only
All non-prop attributes and styles added to `SfInput` component are passed directly to the native input element. This means that you can add all of the input attributes directly to `SfInput`. If you want to style the wrapper `div`, you can pass your classes via the `wrapperClassName` prop. 
::

Since, `size` is a specified prop of `SfInput`, you won't be able to pass the native `size` attribute to your input element. Instead, you can use the `width` property with `ch` unit instead (eg. `width: 10ch`).

## Accessibility notes

Since `SfInput` uses `<input>`, it inherits all the features of the native input. For example, `SfInput` is focusable for keyboard users with `tab`.

Avoid adding `div` tags to slots. If an input element is wrapped in `label` tag (recommended) then it can't have `div` inside.

## Playground

<Generate style="height: 600px;"/>

#tab-2

## Props

::vue-only
| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |                                        |
| `wrapperTag`    | `string`         | `span`        | Any tag name for input wrapper         |
::

::react-only
| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |                                        |
| `wrapperTag`    | `string`         | `span`        | Any tag name for input wrapper         |
| `wrapperAs`    | `string`          | `span`        | Any tag name for input wrapper         |
| `className`    | `string`          |               |                                        |
| `slotPrefix`   | `ReactNode`       |               |                                        |
| `slotSuffix`   | `ReactNode`       |               |                                        |
::

::vue-only
## Slots

| Slot name | Description                        |
| --------- | ---------------------------------- |
| `prefix`    | Custom content for prefix in input |
| `suffix`    | Custom content for suffix in input |
::

::vue-only

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

::


#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfInput/SfInput.vue

::

::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfInput/SfInput.tsx

::
::
