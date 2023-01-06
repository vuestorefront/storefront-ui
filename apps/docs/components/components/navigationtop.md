---
layout: ComponentLayout
hideBreadcrumbs: true
---
# NavigationTop

NavigationTop is placeholder for navigation menu, image blocks etc. It purpose is to help with handling different columns arrangement and showing/hiding whole component.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=14285%3A49825&t=PVPVB8MLQOxa1KC4-4)

## Props

<!-- react -->

| Prop name | Type                      | Default value | Possible values                    |
| --------- | ------------------------- | ------------- | ---------------------------------- |
| variant   | `VsfNavigationTopVariant` | `auto`        | `none`, `auto`, `half-3`, `3-half` |
| open      | `boolean`                 | `false`       |                                    |

<!-- end react -->
<!-- vue -->

| Prop name  | Type                      | Default value | Possible values                    |
| ---------- | ------------------------- | ------------- | ---------------------------------- |
| variant    | `VsfNavigationTopVariant` | `auto`        | `none`, `auto`, `half-3`, `3-half` |
| modelValue | `boolean`                 | `false`       |                                    |

<!-- end vue -->

## Slots

| Slot name | Description      |
| --------- | ---------------- |
| default   | columns elements |

## Events

<!-- react -->

| Event name   | Trigger                      |
| ------------ | ---------------------------- |
| onOpenChange | when navigation is show/hide |

<!-- end react -->

<!-- vue -->

| Event name        | Trigger                      |
| ----------------- | ---------------------------- |
| update:modelValue | when navigation is show/hide |

<!-- end vue -->

## Accessibility notes

## Source code

<!-- vue -->

<<<../../../packages/sfui/frameworks/vue/components/VsfNavigationTop/VsfNavigationTop.vue

<!-- end vue -->
<!-- react -->

<<<../../../packages/sfui/frameworks/react/components/VsfNavigationTop/VsfNavigationTop.tsx

<!-- end react -->
