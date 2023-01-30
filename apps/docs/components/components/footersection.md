---
layout: ComponentLayout
hideBreadcrumbs: true
---
<!-- react -->
# FooterSection

The FooterSection component is a container for whole section and should be used as a direct child of the Footer component. 

## Props

| Prop name | Type      | Default value | Possible values     |
|-----------|-----------| ------------- |---------------------|
| type      | VsfFooterSectionType    |     top        | top, middle, bottom |                                        |
| className | string    |             |                     |                                        |
| children  | ReactNode |             |                     |                                        |

### Types

```ts
enum VsfFooterSectionType {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
}
```

## Source code

<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooterSection.tsx
<!-- end react -->
