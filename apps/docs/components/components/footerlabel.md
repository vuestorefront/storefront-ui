---
layout: ComponentLayout
hideBreadcrumbs: true
---
# FooterLabel

The FooterLabel component is used for styling text content.

## Props

| Prop name | Type      | Default value | Possible values                                                                   |
|-----------|-----------| ------------- |-----------------------------------------------------------------------------------|
| type      | VsfFooterLabelType    |     top        | category, subcategory, contact, contact-description, social-media, bottom-links, company-name |                                        |
<!-- react -->
| className | string    |             |                   |                                        |
| children  | ReactNode |             |                   |                                        |
<!-- end react -->

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
<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfFooter/VsfFooterLabel.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooterLabel.tsx
<!-- end react -->
