# Counter

::tabs{:titles='["Usage", "API", "Source Code"]'}

#tab-1

`SfCounter` provides formatting for numerical values. This can be used to show things like quantities of an item or number of reviews. Since it's a part of so many complex components, `SfChip` can be used to provide consistent styles across your application.

## Examples

### Counter

By default, `SfCounter` will put parentheses around its children.

`SfCounter` supports 6 different sizes that can be set with the `size` prop: `'3xs'`, `'2xs'`, `'xs'`, `'sm'`, `'base'`, and `'lg'`. The default size is `'base'`.

<Showcase showcase-name="Counter/Counter">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Counter/Counter.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Counter/Counter.tsx

::

</Showcase>

### Counter pill

`SfCounter` accepts a `pill` prop that will create a border around your counter rather than adding parentheses around it.

<Showcase showcase-name="Counter/CounterPill">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Counter/CounterPill.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Counter/CounterPill.tsx

::

</Showcase>

### Customizing Colors

You can customize the colors of `SfCounter` by passing Tailwind classes.

<Showcase showcase-name="Counter/CounterCustomBackground">

::vue-only

<<<../../../../preview/nuxt/pages/showcases/Counter/CounterCustomBackground.vue

::
::react-only

<<<../../../../preview/next/pages/showcases/Counter/CounterCustomBackground.tsx

::

</Showcase>

## Accessibility notes

The root element of `SfCounter` is a `<span>`. Since a `<span>` is an inline element, you should avoid placing block elements (like `div` or `p`) inside of it.

## Playground

<Generate style="height: 450px" />

#tab-2

## Props



::react-only
| Prop name | Type            | Default value | Possible values                                    |
| --------- | --------------- | ------------- | -------------------------------------------------- |
| `size`    | `SfCounterSize` | `'base'`      | `'3xs'`, `'2xs'`, `'xs'`, `'sm'`, `'base'`, `'lg'` |
| `pill`    | `boolean`       | `false`       |                                                    |
| `className` | `string` | | |
| `children` | `ReactNode` | | |
::

::vue-only

| Prop name | Type            | Default value | Possible values                                    |
| --------- | --------------- | ------------- | -------------------------------------------------- |
| `size`    | `SfCounterSize` | `'base'`      | `'3xs'`, `'2xs'`, `'xs'`, `'sm'`, `'base'`, `'lg'` |
| `pill`    | `boolean`       | `false`       |                                                    |

## Slots

| Slot name | Description                     |
| --------- | ------------------------------- |
| `default` | To be filled with counter value |

::

#tab-3

:partial{content="block-callout"}

::vue-only

<<<../../../../../packages/sfui/frameworks/vue/components/SfCounter/SfCounter.vue

::
::react-only

<<<../../../../../packages/sfui/frameworks/react/components/SfCounter/SfCounter.tsx

::

::
