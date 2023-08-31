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

<<<../../preview/next/pages/showcases/Chip/ChipSizes.tsx#source

</Showcase>

### Thumbnails

`SfChip` provides `slotPrefix` and `slotSuffix` props that you can use to add custom content before/after your default content. This can be useful for adding things like icons, badges, or `SfThumbnail` to your toggleable chip.

<Showcase showcase-name="Chip/ChipWithThumbnail">
<<<../../preview/next/pages/showcases/Chip/ChipWithThumbnail.tsx#source
</Showcase>



### List of chips

We can set attributes in the hidden checkbox input by passing an object to the `inputProps` prop. 

<Showcase showcase-name="Chip/ListOfChips">

<<<../../preview/next/pages/showcases/Chip/ListOfChips.tsx#source

</Showcase>


### Deletable behaviour

By adding listeners for change events, we can make `SfChip` act as a deletable item. All chips are active by default, and then, when a chip is clicked, we can remove it by its index in the array.

<Showcase showcase-name="Chip/Deletable">

<<<../../preview/next/pages/showcases/Chip/Deletable.tsx#source

</Showcase>

### Rounded chip

`SfChip` accepts a `square` prop that will set equal paddings on all sides of the chip.

<Showcase showcase-name="Chip/WithoutLabel">

<<<../../preview/next/pages/showcases/Chip/WithoutLabel.tsx#source

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
| `onSelected`| `Function` |`(event?: ChangeEvent<HTMLInputElement>) => void`|                         |
| `children`  | `ReactNode`|              |                   |
:::

::: slot source
<SourceCode>
<<< ../../../packages/sfui/frameworks/react/components/SfChip/SfChip.tsx
</SourceCode>
:::