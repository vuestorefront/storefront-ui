---
layout: AtomLayout
hideBreadcrumbs: true
---

# Textarea component

::: slot usage

The Textarea is a multi-line text input control allows users to enter any combination of letters, numbers, or symbols. It adds default styles to the native `<textarea>` HTML tag, providing a consistent and visually appealing appearance out of the box. The component supports autoresizing based on the content entered by the user and provides the option to display a character count.

### Textarea in disabled state

`SfTextarea` comes with out-of-the-box styles for a disabled Textarea.

<Showcase showcase-name="Textarea/TextareaDisabled">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaDisabled.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaDisabled.tsx#source
<!-- end react -->
</Showcase>

### Readonly Textarea

`SfTextarea` comes with out-of-the-box styles for a readonly Textarea.

<Showcase showcase-name="Textarea/TextareaReadonly">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaReadonly.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaReadonly.tsx#source
<!-- end react -->
</Showcase>

### Invalid State

If you pass the `invalid` prop, the Textarea will be styled to indicate an invalid state.

<Showcase showcase-name="Textarea/TextareaInvalid" style="min-height: 200px;">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaInvalid.tsx#source
<!-- end react -->
</Showcase>

### Textarea with characters counter

The Textarea component provides the option to display a character count, allowing users to track the number of characters they have entered. This feature can be helpful when there are character limits or restrictions for the input.

<Showcase showcase-name="Textarea/TextareaCharacters">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaCharacters.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaCharacters.tsx#source
<!-- end react -->
</Showcase>

### Textarea with autoresize

The Textarea component supports autoresizing based on the content entered by the user. As the user types or deletes text, the height of the textarea adjusts automatically to fit the content, eliminating the need for scrollbars. In the example below we use [`@frsource/autoresize-textarea`](https://www.frsource.org/autoresize-textarea/) library to provide this feature. 

<Showcase showcase-name="Textarea/TextareaAutoresize">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaAutoresize.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaAutoresize.tsx#source
<!-- end react -->
</Showcase>


## Accessibility notes

Textarea is multi-line input, so Return or Enter key inserts a line break.

## Playground

<Generate style="height: 600px;"/>

:::

::: slot api

## Props

| Prop name    | Type            | Default value | Possible values                        |
| ------------ | --------        | ------------- | -------------------------------------- |
| `size`         | `SfInputSize`  | `'base'`          | `'sm'`, `'base'`, `'lg'`                           |
| `invalid`      | `boolean`         | `false`         |  
<!-- react -->
| `className`      | `string`         |          |      
<!-- end react --> 

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
<<<../../../packages/sfui/frameworks/vue/components/SfTextarea/SfTextarea.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfTextarea/SfTextarea.tsx
<!-- end react -->
</SourceCode>
:::