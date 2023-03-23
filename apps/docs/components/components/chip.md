---
layout: AtomLayout
hideBreadcrumbs: true
---
# Chip

::: slot usage
`SfChip` is a toggleable input element. It can be a good alternative to toggle buttons, radio buttons, and single select menus. 

Internally, `SfChip` uses a hidden `<input type="checkbox">` element to handle the selection state. This means that `SfChip` can be used in a form alongside other form elements. If you want to add additional attributes to this hidden input, you can pass `inputProps` to the component.

## Examples

### Sizes

`SfChip` supports 2 sizes that can be set with the `size` prop: `'sm'` and `'base'`. The default size is `'base'`.

<Showcase showcase-name="Chip/ChipSizes">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ChipSizes.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ChipSizes.tsx#source
<!-- end react -->

</Showcase>

### Thumbnails

<!-- TODO: Add linking to thumbnail component when ready -->
`SfChip` provides <!-- vue -->`prefix` and `suffix` slots<!-- end vue --><!-- react -->`slotPrefix` and `slotSuffix` props<!-- end react --> that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `SfThumbnail` to your toggleable chip.

<Showcase showcase-name="Chip/ChipWithThumbnail">
<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ChipWithThumbnail.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ChipWithThumbnail.tsx#source
<!-- end react -->
</Showcase>



### List of chips

We can set attributes in the hidden checkbox input by passing an object to the `inputProps` prop. 

<Showcase showcase-name="Chip/ListOfChips">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/ListOfChips.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/ListOfChips.tsx#source
<!-- end react -->

</Showcase>


### Deletable behaviour

By adding listeners for change events, we can make `SfChip` act as a deletable item. All chips are active by default, and then, when a chip is clicked, we can remove it by its index in the array.

<Showcase showcase-name="Chip/Deletable">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/Deletable.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/Deletable.tsx#source
<!-- end react -->

</Showcase>

### Rounded chip

`SfChip` accepts a `square` prop that will set equal paddings on all sides of the chip.

<Showcase showcase-name="Chip/WithoutLabel">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Chip/WithoutLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Chip/WithoutLabel.tsx#source
<!-- end react -->

</Showcase>

## Accessibility notes

When using `SfChip` without any text label/description inside, you should specify an `aria-label` on the component so that it can be understood by people using screen readers. 

## Playground

<Generate style="height: 380px" />
:::

::: slot api

## Props

| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `size`      | `string`  | `'base'`        | `'sm'`, `'base'`      |
| `square`    | `boolean` | `false`       |                   |
| `inputProps`  | `InputHTMLAttributes`   |        |  `{ disabled: true }`                 |
<!-- react -->
| `onSelected`| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
| `children`  | `ReactNode`|              |                   |
<!-- end react -->
<!-- vue -->
| `modelValue`| `boolean`  |  `false`     |                   |


## Slots 

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside chip |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

<!-- end vue -->
:::

::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfChip/SfChip.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfChip/SfChip.tsx
<!-- end react -->
</SourceCode>
:::