# Textarea component

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

The Textarea is a multi-line text input control allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<textarea>` HTML tag, providing a consistent and visually appealing appearance out of the box. The component supports autoresizing based on the content entered by the user and provides the option to display a character count.

### Textarea in disabled state

`SfTextarea` comes with out-of-the-box styles for a disabled Textarea.

<Showcase showcase-name="Textarea/TextareaDisabled">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Textarea/TextareaDisabled.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Textarea/TextareaDisabled.tsx
::

</Showcase>

### Readonly Textarea

`SfTextarea` comes with out-of-the-box styles for a readonly Textarea.

<Showcase showcase-name="Textarea/TextareaReadonly">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Textarea/TextareaReadonly.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Textarea/TextareaReadonly.tsx
::

</Showcase>

### Invalid State

If you pass the `invalid` prop, the Textarea will be styled to indicate an invalid state.

<Showcase showcase-name="Textarea/TextareaInvalid" style="min-height: 200px;">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Textarea/TextareaInvalid.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Textarea/TextareaInvalid.tsx
::

</Showcase>

### Textarea with characters counter

The Textarea component provides the option to display a character count, allowing users to track the number of characters they have entered. This feature can be helpful when there are character limits or restrictions for the input.

<Showcase showcase-name="Textarea/TextareaCharacters">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Textarea/TextareaCharacters.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Textarea/TextareaCharacters.tsx
::

</Showcase>

### Textarea with autoresize

The Textarea component supports autoresizing based on the content entered by the user. As the user types or deletes text, the height of the textarea adjusts automatically to fit the content, eliminating the need for scrollbars. In the example below we use [`@frsource/autoresize-textarea`](https://www.frsource.org/autoresize-textarea/) library to provide this feature. 

<Showcase showcase-name="Textarea/TextareaAutoresize">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Textarea/TextareaAutoresize.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Textarea/TextareaAutoresize.tsx
::

</Showcase>


## Accessibility notes

Textarea is multi-line input, so Return or Enter key inserts a line break.

## Playground

<Generate style="height: 600px;"/>

#tab-2

## Props

::vue-only
| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |  
::


::react-only
| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |  
| `className`      | `string`         |          |      
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
<<<../../../../../packages/sfui/frameworks/vue/components/SfTextarea/SfTextarea.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfTextarea/SfTextarea.tsx
::

::