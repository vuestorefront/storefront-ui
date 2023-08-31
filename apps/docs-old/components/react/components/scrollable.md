---
repoPath: /components/scrollable.md
layout: AtomLayout
hideBreadcrumbs: true
---
# Scrollable

::: warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
:::

:::::: slot usage
`SfScrollable` is a component that allows to build interactive slider. It uses `useScrollable` hook.

::: read-more
Learn more about `useScrollable` hook in the [Hooks > useScrollable docs](/react/hooks/useScrollable.html).
:::

## Examples

### Hide Scrollbar

Can be setup that will be without scrollbar

<Showcase showcase-name="Scrollable/HideScrollbar" style="min-height:240px">

<<<../../preview/next/pages/showcases/Scrollable/HideScrollbar.tsx#source

</Showcase>

### Snap

`SfScrollbale` can be configured with center snap while dragging.

<Showcase showcase-name="Scrollable/SnapCenter" style="min-height:260px">

<<<../../preview/next/pages/showcases/Scrollable/SnapCenter.tsx#source

</Showcase>

### Scroll by one item

By default `SfScrollable` scroll by one page of items, but can be modified that every `next` and `previous` button will change active item directly.

<Showcase showcase-name="Scrollable/ScrollByOneItem" style="min-height:260px">

<<<../../preview/next/pages/showcases/Scrollable/ScrollByOneItem.tsx#source

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
| `drag` | `{ sensitivity: number; containerWidth: boolean; } | boolean`  |  |       |
| `prevDisabled` | `boolean`  |  |       |
| `nextDisabled` | `boolean`  |  |       |
| `isActiveIndexCentered` | `boolean`  |  |       |
| `as`         | `ReactElement`       | `'div'`        | any tag name                       |
| `children`   | `ReactNode`          |               | Default slotted content            |
| `wrapperClassName`   | `string`      |               |    |
| `slotPreviousButton` | `ReactNode`          |               | Previous button         |
| `slotNextButton` | `ReactNode`          |               | Next button         |
| `onDragStart`           | `(data: SfScrollableOnDragStartData) => void` |    |  |
| `onDragEnd`           | `(data: SfScrollableOnDragEndData) => void` |    |  |
| `onScroll`           | `(data: SfScrollableOnScrollData) => void` |   |  |
| `onPrev`           | `(data: SfScrollableOnPrevData) => void` |    |  |
| `onNext`           | `(data: SfScrollableOnNextData) => void` |    |  |
`drag` prop is setting whether and how elements in a scrollable element can be dragged. By default is set to `false`, but when passing `object` you can set `sensitivity`  to determine how far it should be dragged in response to mouse movement and `containerWith` to allow it to be moved exactly one container width.


::::::

:::::: slot source
<SourceCode>
<<< ../../../packages/sfui/frameworks/react/components/SfScrollable/SfScrollable.tsx
</SourceCode>
::::::
