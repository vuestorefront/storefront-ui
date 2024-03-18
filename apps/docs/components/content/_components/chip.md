# Chip

::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfChip` is a toggleable input element. It can be a good alternative to toggle buttons, radio buttons, and single select menus. 

Internally, `SfChip` uses a hidden `<input type="checkbox">` element to handle the selection state. This means that `SfChip` can be used in a form alongside other form elements. If you want to add additional attributes to this hidden input, you can pass `inputProps` to the component.

## Examples

### Sizes

`SfChip` supports 2 sizes that can be set with the `size` prop: `'sm'` and `'base'`. The default size is `'base'`.

<Showcase showcase-name="Chip/ChipSizes">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ChipSizes.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ChipSizes.tsx
::

</Showcase>

### Thumbnails

::vue-only
`SfChip` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `SfThumbnail` to your toggleable chip.
::
::react-only
`SfChip` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `SfThumbnail` to your toggleable chip.

::

<Showcase showcase-name="Chip/ChipWithThumbnail">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ChipWithThumbnail.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ChipWithThumbnail.tsx
::

</Showcase>



### List of chips

We can set attributes in the hidden checkbox input by passing an object to the `inputProps` prop. 

<Showcase showcase-name="Chip/ListOfChips">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/ListOfChips.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/ListOfChips.tsx
::

</Showcase>


### Deletable behaviour

By adding listeners for change events, we can make `SfChip` act as a deletable item. All chips are active by default, and then, when a chip is clicked, we can remove it by its index in the array.

<Showcase showcase-name="Chip/Deletable">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/Deletable.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/Deletable.tsx
::

</Showcase>

### Rounded chip

`SfChip` accepts a `square` prop that will set equal paddings on all sides of the chip.

<Showcase showcase-name="Chip/WithoutLabel">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Chip/WithoutLabel.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Chip/WithoutLabel.tsx
::

</Showcase>

## Accessibility notes

When using `SfChip` without any text label/description inside, you should specify an `aria-label` on the component so that it can be understood by people using screen readers. 

## Playground

<Generate style="height: 380px" />

#tab-2

## Props

::react-only
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
| `onSelected`| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
| `children`  | `ReactNode`|              |                   |
::

::vue-only
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
| `modelValue`| `boolean`  |  `false`     |                   |


## Slots 

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside chip |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

::
#tab-3

:partial{content="block-callout"}

::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfChip/SfChip.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfChip/SfChip.tsx
::

::