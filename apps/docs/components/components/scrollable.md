---
layout: AtomLayout
hideBreadcrumbs: true
---
# Scrollable

::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::

:::::: slot usage
`SfScrollable` is a component that allows to build interactive slider. It uses `useScrollable` <!-- react -->hook<!-- end react --><!-- vue -->composable<!-- end vue -->.

::: read-more
<!-- react -->
Learn more about `useScrollable` hook in the [Hooks > useScrollable docs](/react/hooks/useScrollable.html).
<!-- end react -->
<!-- vue -->
Learn more about `useScrollable` composable in the [Composables > useScrollable docs](/vue/hooks/useScrollable.html).
<!-- end vue -->
:::

## Examples

### Hide Scrollbar

Can be setup that will be without scrollbar

<Showcase showcase-name="Scrollable/HideScrollbar" style="min-height:240px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Scrollable/HideScrollbar.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Scrollable/HideScrollbar.tsx#source
<!-- end react -->

</Showcase>

### Snap

`SfScrollbale` can be configured with center snap while dragging.

<Showcase showcase-name="Scrollable/SnapCenter" style="min-height:260px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Scrollable/SnapCenter.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Scrollable/SnapCenter.tsx#source
<!-- end react -->

</Showcase>

### Scroll by one item

By default `SfScrollable` scroll by one page of items, but can be modified that every `next` and `previous` button will change active item directly.

<Showcase showcase-name="Scrollable/ScrollByOneItem" style="min-height:260px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Scrollable/ScrollByOneItem.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Scrollable/ScrollByOneItem.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate style="height: 500px" />
::::::

:::::: slot api

## Props

| Prop name | Type      | Default value | Possible values   |
|-----------|-----------|---------------|-------------------|
| `direction` | `SfScrollableDirection`  | `'horizontal'`        | `'horizontal'`, `'vertical'`      |
| `buttonsPlacement` | `SfScrollableButtonsPlacement`  | `'block'` | `'block'`, `'floating'`, `'none'`      |
| `activeIndex` | `number`  |  |       |
| `reduceMotion` | `boolean`  |  |       |
| `drag` | `{ sensitivity: number; } | boolean`  |  |       |
| `previousDisabled` | `boolean`  |  |       |
| `nextDisabled` | `boolean`  |  |       |
<!-- vue -->
| `tag`       | `string`              | `'div'`        |                                    |
<!-- end vue -->
<!-- react -->
| `as`         | `ReactElement`       | `'div'`        | any tag name                       |
| `children`   | `ReactNode`          |               | Default slotted content            |
| `wrapperClassNames`   | `string`      |               |    |
| `slotPreviousButton` | `ReactNode`          |               | Previous button         |
| `slotNextButton` | `ReactNode`          |               | Next button         |
| `onDragChange`           | `Function` |    |  |
| `onScroll`           | `Function` |   |  |
| `onPrev`           | `Function` |    |  |
| `onNext`           | `Function` |    |  |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description                  |
| --------- | ---------------------------- |
| `default`   | Replaces content inside scrollable items |
| `previousButton`   | Replaces previous button |
| `nextButton`   | Replaces next button |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `onDragChange` | triggers when drag has happens |
| `onScroll` | triggers when any scroll happens |
| `onPrev` | triggers when previous button is clicked |
| `onNext` | triggers when next button is clicked |
<!-- end vue -->

::::::

:::::: slot source
<SourceCode>
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfScrollable/SfScrollable.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfScrollable/SfScrollable.tsx
<!-- end react -->
</SourceCode>
::::::
