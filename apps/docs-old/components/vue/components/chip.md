---
repoPath: /components/chip.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Chip

::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::
::: slot usage
`SfChip` is a toggleable input element. It can be a good alternative to toggle buttons, radio buttons, and single select menus. 

Internally, `SfChip` uses a hidden `<input type="checkbox">` element to handle the selection state. This means that `SfChip` can be used in a form alongside other form elements. If you want to add additional attributes to this hidden input, you can pass `inputProps` to the component.

## Examples

### Sizes

`SfChip` supports 2 sizes that can be set with the `size` prop: `'sm'` and `'base'`. The default size is `'base'`.

<Showcase showcase-name="Chip/ChipSizes">

<<<../../preview/nuxt/pages/showcases/Chip/ChipSizes.vue

</Showcase>

### Thumbnails

`SfChip` provides `prefix` and `suffix` slots that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `SfThumbnail` to your toggleable chip.

<Showcase showcase-name="Chip/ChipWithThumbnail">
<<<../../preview/nuxt/pages/showcases/Chip/ChipWithThumbnail.vue
</Showcase>



### List of chips

We can set attributes in the hidden checkbox input by passing an object to the `inputProps` prop. 

<Showcase showcase-name="Chip/ListOfChips">

<<<../../preview/nuxt/pages/showcases/Chip/ListOfChips.vue

</Showcase>


### Deletable behaviour

By adding listeners for change events, we can make `SfChip` act as a deletable item. All chips are active by default, and then, when a chip is clicked, we can remove it by its index in the array.

<Showcase showcase-name="Chip/Deletable">

<<<../../preview/nuxt/pages/showcases/Chip/Deletable.vue

</Showcase>

### Rounded chip

`SfChip` accepts a `square` prop that will set equal paddings on all sides of the chip.

<Showcase showcase-name="Chip/WithoutLabel">

<<<../../preview/nuxt/pages/showcases/Chip/WithoutLabel.vue

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
| `modelValue`| `boolean`  |  `false`     |                   |


## Slots 

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside chip |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfChip/SfChip.vue
</SourceCode>
:::