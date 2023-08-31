---
repoPath: /components/button.md
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

<<<../../preview/nuxt/pages/showcases/Button/ButtonSizes.vue
</Showcase>

### Button variants

`SfButton` supports 3 style variants that can be set via `variant` prop: `'primary'`, `'secondary'`, `'tertiary'`.

<Showcase showcase-name="Button/ButtonVariants" style="min-height:250px">

<<<../../preview/nuxt/pages/showcases/Button/ButtonVariants.vue
</Showcase>

### Button as a link

This component can be used as a link (or any other tag) that can be set via `tag` prop.

<Showcase showcase-name="Button/ButtonAsLink" style="min-height:250px">

<<<../../preview/nuxt/pages/showcases/Button/ButtonAsLink.vue
</Showcase>

### Button block

You can create a full-width button with Tailwind's `w-full` class.

<Showcase showcase-name="Button/ButtonBlock">

<<<../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue
</Showcase>

### Button truncation

You can truncate button content with Tailwind using `max-w-` and `truncate` classes.

<Showcase showcase-name="Button/ButtonTruncation">

<<<../../preview/nuxt/pages/showcases/Button/ButtonTruncation.vue
</Showcase>

### Button content

`SfButton` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding icons or badges to your buttons. 

<Showcase showcase-name="Button/ButtonContent" style="min-height:250px">

<<<../../preview/nuxt/pages/showcases/Button/ButtonContent.vue
</Showcase>

## Accessibility notes

Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop `tag`. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.

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
| `tag`       | `string`              | `'button'`        |                                    |

## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `prefix`    | before default slot          |
| `default`   | replaces the default content |
| `suffix`    | after default slot           |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfButton/SfButton.vue
</SourceCode>
:::
