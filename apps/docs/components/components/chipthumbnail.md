---
layout: AtomLayout
hideBreadcrumbs: true
description: ChipThumbnail is a component used as a within Chip or ChipListItemFilter component and provides visual uniformity between the two. It allows user to pass in an custom icon/image or to pass a color/color gradient.
---

# ChipThumbnail component

{{ $frontmatter.description }}

<Generate />

## Notes
<!-- TODO: add link to ChipListItemFilter.md when it's implemented -->
ChipThumbnail is a UI component used as a within [Chip](chip.md) or [ChipListItemFilter]() 

## Props

| Prop name         | Type                       | Default value | Possible values                        |
|------------------ |----------------------------|---------------|----------------------------------------|
| size              | VsfChip                    | base          | sm, base, lg                           |
| color             | string                     | ''            |                                        | 
<!-- react -->
| children          | ReactNode                  |               |  allows to pass icon or image          |
| className         | string                     |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description          |
| --------- | ------------------------------- |
| default   |  allows to pass icon or image   |
<!-- end vue -->

## CSS variables

| CSS variable name    | Description                                  |
|------------------    |--------------------------------------------- |
| --vsf-chip-thumbnail | defines background color/image for component |

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfChipThumbnail/VsfChipThumbnail.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfChipThumbnail/VsfChipThumbnail.tsx
<!-- end react -->
