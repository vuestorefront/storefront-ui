---
layout: ComponentLayout
hideBreadcrumbs: true
description: Display Content component provide title, subtitle and description for your banners. It can be wrapped with Display or Hero component to position the content inside. 
---

# Display Content

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name       | Type                    | Default value | Possible values                   |
| --------------- | ----------------------- | ------------- | --------------------------------- |
| title           | `string`    |               |                                   |
| subtitle        | `string`    |               |                                   |
| description     | `string`    |               |                                   |
<!-- react -->
| className       | `string`                |               |                                   |
| children        | `ReactNode`             |               |                                   |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name | Description         |
| --------- | ------------------- |
| default   | Content below text content |
<!-- end vue -->

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfDisplayContent/VsfDisplayContent.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfDisplayContent/VsfDisplayContent.tsx
<!-- end react -->
