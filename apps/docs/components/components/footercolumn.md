---
layout: AtomLayout
hideBreadcrumbs: true
description: The FooterColumn component is a container for children components and should be used as a direct child of the FooterSection component. 
---
# FooterColumn

{{ $frontmatter.description }}

## Props

| Prop name | Type      | Default value | Possible values   |
|-----------|-----------| ------------- |-------------------|
| type      | VsfFooterColumnType    |     top        | top, middle |                                        |
<!-- react -->
| className | string    |             |                   |                                        |
| children  | ReactNode |             |                   |                                        |
<!-- end react -->

### Types

```ts
enum VsfFooterColumnType {
  top = 'top',
  middle = 'middle',
}
```

## Source code
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfFooter/VsfFooterColumn.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooterColumn.tsx
<!-- end react -->
