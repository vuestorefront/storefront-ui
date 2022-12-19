
# FooterColumn component

The FooterColumn component is a container for children components and should be used as a direct child of the FooterSection component. 

###  Props:
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------| ------------- |-------------------|
| type      | VsfFooterColumnType    |     top        | top, middle |                                        |
| className | string    |             |                   |                                        |
| children  | ReactNode |             |                   |                                        |
### Types

```ts
enum VsfFooterColumnType {
  top = 'top',
  middle = 'middle',
}
```

## Source code
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooterColumn.tsx
