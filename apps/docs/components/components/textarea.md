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

<Showcase showcase-name="Textarea/TextareaInvalid" style="min-height: 200px;>

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaInvalid.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaInvalid.tsx#source
<!-- end react -->
</Showcase>

### Textarea with characters counter

Here you can see Textarea with characters counter added. When number of characters exceeds limit it turns to red and have negative value. 

<Showcase showcase-name="Textarea/TextareaDisabled">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Textarea/TextareaDisabled.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Textarea/TextareaDisabled.tsx#source
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
                                 |

<!-- vue -->

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->      |                                |

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