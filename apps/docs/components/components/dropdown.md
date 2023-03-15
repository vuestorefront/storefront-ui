---
layout: AtomLayout
hideBreadcrumbs: true
description: VsfDropdown
---

# Dropdown

::: slot usage

{{ $frontmatter.description }}

## Playground

<Generate />

:::

::: slot api

## Notes

Dropdown component is built on to of the `useDropdown` hook and accepts all its params.

## Props

| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| trigger\* | `ReactNode`                                              |               |                 |
| isOpen\*  | `boolean`                                                |               |                 |
| onClose\* | `() => void`                                             |               |                 |
| placement | `VsfPopoverPlacement`                                    |               |                 |
| offset    | `number`                                                 |               |                 |
| arrowRef  | `ReactRef<HTMLElement>`                                  |               |                 |
| arrowSize | `${number}px` &#124; `${number}em` &#124; `${number}rem` |               |                 |
<!-- react -->
| children  | `ReactNode`                                              |               |                 |
<!-- end react -->

:::

::: slot source
<SourceCode>
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/VsfDropdown/VsfDropdown.tsx
<!-- end react -->
</SourceCode>
:::
