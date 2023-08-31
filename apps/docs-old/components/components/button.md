---
layout: AtomLayout
hideBreadcrumbs: true
---

# Button

:::::: slot usage

`SfButton` is an input that allows for user-triggered actions when clicked or pressed. This can be used for submitting forms, opening/closing dialogs, and much more.

## Examples

### Button sizes

`SfButton`  supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Button/ButtonSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonSizes.tsx#source
<!-- end react -->
</Showcase>

### Button variants

`SfButton` supports 3 style variants that can be set via `variant` prop: `'primary'`, `'secondary'`, `'tertiary'`.

<Showcase showcase-name="Button/ButtonVariants" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonVariants.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonVariants.tsx#source
<!-- end react -->
</Showcase>

### Button as a link

<!-- TODO: only one name per framework -->
This component can be used as a link (or any other tag) that can be set via <!-- vue -->`tag`<!-- end vue --><!-- react -->`as`<!-- end react --> prop.

<Showcase showcase-name="Button/ButtonAsLink" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonAsLink.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonAsLink.tsx#source
<!-- end react -->
</Showcase>

### Button block

You can create a full-width button with Tailwind's `w-full` class.

<Showcase showcase-name="Button/ButtonBlock">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonBlock.tsx#source
<!-- end react -->
</Showcase>

### Button truncation

You can truncate button content with Tailwind using `max-w-` and `truncate` classes.

<Showcase showcase-name="Button/ButtonTruncation">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonTruncation.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonTruncation.tsx#source
<!-- end react -->
</Showcase>

### Button content

`SfButton` provides <!-- vue -->`prefix` and `suffix` slots<!-- end vue --><!-- react -->`slotPrefix` and `slotSuffix` props<!-- end react --> that you can use to add custom content before/after your default content. This can be useful for adding icons or badges to your buttons. 

<Showcase showcase-name="Button/ButtonContent" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonContent.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonContent.tsx#source
<!-- end react -->
</Showcase>

## Accessibility notes

Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop <!-- vue -->`tag`<!-- end vue --><!-- react -->`as`<!-- end react -->. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.

:::warning
Avoid using buttons to navigate the page. Use links or tabs.
:::

If you need to use Button with non-`<button>` tags like `<div>` you need to add `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user. You can override this behaviour by passing `role` prop by yourself.


## Playground

<Generate />
::::::

::: slot api

## Props

| Prop name | Type                | Default value | Possible values                    |
| --------- | ------------------- | ------------- | ---------------------------------- |
| `variant`   | `SfButtonVariant`    | `'primary'`       | `'primary'`, `'secondary'`, `'tertiary'`       |
| `size`      | `VsfButtonSize`       | `'base'`          | `'sm'`, `'base'`, `'lg'`                       |
| `disabled`  | `boolean`             | `false`         |                                    |
| `square`    | `boolean`             | `false`         |                                    |
<!-- vue -->
| `tag`       | `string`              | `'button'`        |                                    |
<!-- end vue -->
<!-- react -->
| `children`   | `ReactNode`          |               | Default slotted content            |
| `as`         | `ReactElement`       | `'button'`        | any tag name                       |
| `slotPrefix` | `ReactNode`          |               | Left side slotted content          |
| `slotSuffix` | `ReactNode`          |               | Right side slotted content         |
| `onClick`    | `Function`           |               |                                    |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `prefix`    | before default slot          |
| `default`   | replaces the default content |
| `suffix`    | after default slot           |
<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfButton/SfButton.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/SfButton/SfButton.tsx
<!-- end react -->
</SourceCode>
:::
