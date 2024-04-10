# Scrollable

::warning This is an experimental component
This component is shipped in our NPM package, but its API might change based on user feedback.
::

::tabs{:titles='["Usage", "API", "Source Code"]' class="mt-8"}

#tab-1

`SfScrollable` is a component that allows to build interactive slider. It uses the `useScrollable` utility under the hood. 



::react-only
Learn more about `useScrollable` hook in the [Hooks > useScrollable docs](/react/hooks/useScrollable.html).
::
::vue-only
Learn more about `useScrollable` composable in the [Composables > useScrollable docs](/vue/hooks/useScrollable.html).
::



## Examples

### Hide Scrollbar

Can be setup that will be without scrollbar

<Showcase showcase-name="Scrollable/HideScrollbar" style="min-height:240px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Scrollable/HideScrollbar.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Scrollable/HideScrollbar.tsx
::

</Showcase>

### Snap

`SfScrollbale` can be configured with center snap while dragging.

<Showcase showcase-name="Scrollable/SnapCenter" style="min-height:260px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Scrollable/SnapCenter.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Scrollable/SnapCenter.tsx
::

</Showcase>

### Scroll by one item

By default `SfScrollable` scroll by one page of items, but can be modified that every `next` and `previous` button will change active item directly.

<Showcase showcase-name="Scrollable/ScrollByOneItem" style="min-height:260px">

::vue-only
<<<../../../../preview/nuxt/pages/showcases/Scrollable/ScrollByOneItem.vue
::
::react-only
<<<../../../../preview/next/pages/showcases/Scrollable/ScrollByOneItem.tsx
::

</Showcase>

## Accessibility notes

The previous and next buttons have `aria-label` attributes (`buttonPrevAriaLabel` and `buttonNextAriaLabel` props) that provide accessible labels for screen readers.

## Playground

<Generate style="height: 500px" />

#tab-2

## Props

::vue-only
| Prop name               | Type                                               | Default value  | Possible values                   |
| ----------------------- | -------------------------------------------------- | -------------- | --------------------------------- |
| `direction`             | `SfScrollableDirection`                            | `'horizontal'` | `'horizontal'`, `'vertical'`      |
| `buttonsPlacement`      | `SfScrollableButtonsPlacement`                     | `'block'`      | `'block'`, `'floating'`, `'none'` |
| `activeIndex`           | `number`                                           |                |                                   |
| `reduceMotion`          | `boolean`                                          |                |                                   |
| `drag`                  | `{ sensitivity: number; containerWidth: boolean; } | boolean`       |                                   |
| `prevDisabled`          | `boolean`                                          |                |                                   |
| `nextDisabled`          | `boolean`                                          |                |                                   |
| `isActiveIndexCentered` | `boolean`                                          |                |                                   |
| `buttonPrevAriaLabel`   | `string`                                           | `'Previous'`   |                                   |
| `buttonNextAriaLabel`   | `string`                                           | `'Next'`       |                                   |
| `tag` | `string` | `'div'` | |
::


::react-only
| Prop name               | Type                                               | Default value  | Possible values                   |
| ----------------------- | -------------------------------------------------- | -------------- | --------------------------------- |
| `direction`             | `SfScrollableDirection`                            | `'horizontal'` | `'horizontal'`, `'vertical'`      |
| `buttonsPlacement`      | `SfScrollableButtonsPlacement`                     | `'block'`      | `'block'`, `'floating'`, `'none'` |
| `activeIndex`           | `number`                                           |                |                                   |
| `reduceMotion`          | `boolean`                                          |                |                                   |
| `drag`                  | `{ sensitivity: number; containerWidth: boolean; } | boolean`       |                                   |
| `prevDisabled`          | `boolean`                                          |                |                                   |
| `nextDisabled`          | `boolean`                                          |                |                                   |
| `isActiveIndexCentered` | `boolean`                                          |                |                                   |
| `buttonPrevAriaLabel`   | `string`                                           | `'Previous'`   |                                   |
| `buttonNextAriaLabel`   | `string`                                           | `'Next'`       |                                   |
| `as` | `ReactElement` | `'div'` | any tag name |
| `children` | `ReactNode` | | Default slotted content |
| `wrapperClassName` | `string` | | |
| `slotPreviousButton` | `ReactNode` | | Previous button |
| `slotNextButton` | `ReactNode` | | Next button |
| `onDragStart` | `(data: SfScrollableOnDragStartData) => void` | | |
| `onDragEnd` | `(data: SfScrollableOnDragEndData) => void` | | |
| `onScroll` | `(data: SfScrollableOnScrollData) => void` | | |
| `onPrev` | `(data: SfScrollableOnPrevData) => void` | | |
| `onNext` | `(data: SfScrollableOnNextData) => void` | | |
::

The `drag` prop is setting whether and how elements in a scrollable element can be dragged. By default is set to `false`, but when passing `object` you can set `sensitivity` to determine how far it should be dragged in response to mouse movement and `containerWith` to allow it to be moved exactly one container width.

::vue-only

## Slots

| Slot name        | Description                              |
| ---------------- | ---------------------------------------- |
| `default`        | Replaces content inside scrollable items |
| `previousButton` | Replaces previous button                 |
| `nextButton`     | Replaces next button                     |

## Events

| Event name    | Trigger                                  |
| ------------- | ---------------------------------------- |
| `onDragStart` | triggers when drag has started           |
| `onDragEnd`   | triggers when drag has finished          |
| `onScroll`    | triggers when any scroll happens         |
| `onPrev`      | triggers when previous button is clicked |
| `onNext`      | triggers when next button is clicked     |

::

#tab-3

:partial{content="block-callout"}


::vue-only
<<<../../../../../packages/sfui/frameworks/vue/components/SfScrollable/SfScrollable.vue
::
::react-only
<<<../../../../../packages/sfui/frameworks/react/components/SfScrollable/SfScrollable.tsx
::

::
