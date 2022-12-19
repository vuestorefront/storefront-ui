# FooterLabel component

The FooterLabel component is used for styling text content.

###  Props:
| Prop name | Type      | Default value | Possible values   |
|-----------|-----------| ------------- |-------------------|
| type      | VsfFooterLabelType    |     top        | category, subcategory, contact, contact-description, social-media, bottom-links, company-name |                                        |
| className | string    |             |                   |                                        |
| children  | ReactNode |             |                   |                                        |
### Types

```ts
enum VsfFooterLabelType {
  category = 'category',
  subcategory = 'subcategory',
  contact = 'contact',
  contactDescription = 'contact-description',
  socialMedia = 'social-media',
  bottomLinks = 'bottom-links',
  companyName = 'company-name',
}
```

## Source code
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooterLabel.tsx
