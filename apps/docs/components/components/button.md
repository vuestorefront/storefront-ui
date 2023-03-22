---
layout: AtomLayout
hideBreadcrumbs: true
description: A button is an input that allows for user-triggered actions when clicked or pressed. Used for submitting a form, opening and closing a dialog or dropdowns, confirm and cancel an action.
---

# Button

:::::: slot usage

{{ $frontmatter.description }}

## Accessibility notes

Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop <!-- vue -->`tag`<!-- end vue --><!-- react -->`as`<!-- end react -->. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.

:::warning
Avoid using buttons to navigate the page. Use links or tabs.
:::

If you need to use Button with non-`<button>` tags like `<div>` you need to add `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user. You can override this behaviour by passing `role` prop by yourself.

### Button sizes

Button supports 3 sizes that can be set via `size` prop: `sm`, `base`, `lg`.

<Showcase showcase-name="Button/ButtonSizes" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonSizes.tsx
<!-- end react -->
</Showcase>

### Button variants

Button supports 3 variants of colors that can be set via `variant` prop: `primary`, `secondary`, `tertiary`.

<Showcase showcase-name="Button/ButtonVariants" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonVariants.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonVariants.tsx
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
<<<../../preview/next/pages/showcases/Button/ButtonAsLink.tsx
<!-- end react -->
</Showcase>

### Button block

Button can have full-width by adding `w-full` class.

<Showcase showcase-name="Button/ButtonBlock">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonBlock.tsx
<!-- end react -->
</Showcase>

### Button truncation

Button can truncate its content depending on it's width by adding `truncate` class.

<Showcase showcase-name="Button/ButtonTruncation">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonTruncation.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonTruncation.tsx
<!-- end react -->
</Showcase>

### Button content

Button can have additional content. You can use slot `prefix`/`slotPrefix` to add custom content before the main one or use `suffix`/`slotSuffix` slot to add custom content after the main one

<Showcase showcase-name="Button/ButtonContent" style="min-height:250px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Button/ButtonContent.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Button/ButtonContent.tsx
<!-- end react -->
</Showcase>

## Playground

<Generate />
::::::

::: slot api

| Prop name | Type                | Default value | Possible values                    |
| --------- | ------------------- | ------------- | ---------------------------------- |
| variant   | VsfButtonVariant    | primary       | primary, secondary, tertiary       |
| size      | VsfButtonSize       | base          | sm, base, lg                       |
| disabled  | Boolean             | false         |                                    |
| square    | Boolean             | false         |                                    |
<!-- vue -->
| tag       | String              | button        |                                    |
<!-- end vue -->
<!-- react -->
| children   | ReactNode          |               | Default slotted content            |
| as         | ReactElement       | button        | any tag name                       |
| slotPrefix | ReactNode          |               | Left side slotted content          |
| slotSuffix | ReactNode          |               | Right side slotted content         |
| onClick    | Function           |               |                                    |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| prefix    | before default slot          |
| default   | replaces the default content |
| suffix    | after default slot           |
<!-- end vue -->

:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfButton/VsfButton.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfButton/VsfButton.tsx
<!-- end react -->
</SourceCode>
:::
