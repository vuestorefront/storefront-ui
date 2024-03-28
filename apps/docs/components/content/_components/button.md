# Button

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfButton` is an input that allows for user-triggered actions when clicked or pressed. This can be used for submitting forms, opening/closing dialogs, and much more.

## Examples

### Button sizes

`SfButton`  supports 3 sizes that can be set with the `size` prop: `'sm'`, `'base'`, `'lg'`.

<Showcase showcase-name="Button/ButtonSizes" style="min-height:250px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonSizes.tsx
::

</Showcase>

### Button variants

`SfButton` supports 3 style variants that can be set via `variant` prop: `'primary'`, `'secondary'`, `'tertiary'`.

<Showcase showcase-name="Button/ButtonVariants" style="min-height:250px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonVariants.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonVariants.tsx
::

</Showcase>

### Button as a link

::vue-only
This component can be used as a link (or any other tag) that can be set via the `tag` prop.
::
::react-only
This component can be used as a link (or any other tag) that can be set via the `as` prop.

::

<Showcase showcase-name="Button/ButtonAsLink" style="min-height:250px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonAsLink.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonAsLink.tsx
::

</Showcase>

### Button block

You can create a full-width button with Tailwind's `w-full` class.

<Showcase showcase-name="Button/ButtonBlock">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonBlock.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonBlock.tsx
::

</Showcase>

### Button truncation

You can truncate button content with Tailwind using `max-w-` and `truncate` classes.

<Showcase showcase-name="Button/ButtonTruncation">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonTruncation.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonTruncation.tsx
::

</Showcase>

### Button content

::vue-only
`SfButton` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding icons or badges to your buttons. 

::
::react-only
`SfButton` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding icons or badges to your buttons. 

::

<Showcase showcase-name="Button/ButtonContent" style="min-height:250px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Button/ButtonContent.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Button/ButtonContent.tsx
::

</Showcase>

## Accessibility notes


::vue-only
Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop `tag`. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.
::
::react-only
Button component can be rendered as `<button>` or `<a>` or any other tag by providing it with prop `as`. When rendered as `<button>` this component applies default `type='button'` if no other `type` is passed as a prop.
::

::warning
Avoid using buttons to navigate the page. Use links or tabs.
::

If you need to use Button with non-`<button>` tags like `<div>` you need to add `role='button'`. When this role is added to an element, the browser will send out an accessible alert event to assistive technology products which can then notify the user. You can override this behaviour by passing `role` prop by yourself.


## Playground

<Generate style="height: 450px" />

#tab-2

## Props



::vue-only
| Prop name | Type                | Default value | Possible values                    |
| --------- | ------------------- | ------------- | ---------------------------------- |
| `variant`   | `SfButtonVariant`    | `'primary'`       | `'primary'`, `'secondary'`, `'tertiary'`       |
| `size`      | `VsfButtonSize`       | `'base'`          | `'sm'`, `'base'`, `'lg'`                       |
| `disabled`  | `boolean`             | `false`         |                                    |
| `square`    | `boolean`             | `false`         |                                    |
| `tag`       | `string`              | `'button'`        |                                    |
::

::react-only
| Prop name | Type                | Default value | Possible values                    |
| --------- | ------------------- | ------------- | ---------------------------------- |
| `variant`   | `SfButtonVariant`    | `'primary'`       | `'primary'`, `'secondary'`, `'tertiary'`       |
| `size`      | `VsfButtonSize`       | `'base'`          | `'sm'`, `'base'`, `'lg'`                       |
| `disabled`  | `boolean`             | `false`         |                                    |
| `square`    | `boolean`             | `false`         |                                    |
| `children`   | `ReactNode`          |               | Default slotted content            |
| `as`         | `ReactElement`       | `'button'`        | any tag name                       |
| `slotPrefix` | `ReactNode`          |               | Left side slotted content          |
| `slotSuffix` | `ReactNode`          |               | Right side slotted content         |
| `onClick`    | `Function`           |               |                                    |
::

::vue-only
## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `prefix`    | before default slot          |
| `default`   | replaces the default content |
| `suffix`    | after default slot           |
::

#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfButton/SfButton.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfButton/SfButton.tsx
::

::
