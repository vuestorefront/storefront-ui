# Footer component

The Footer component is an inseparable element of every page. It can contains list of useful links, contact details and links to other pages connected to the website like links to social media.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13970%3A22832)

## Props

| Prop name      | Type                    | Default value | Possible values |
|----------------|-------------------------|---------------|-----------------|
| categories     | `VsfCategoriesType`     | []            |                 |
| socialMedia    | `VsfLinkType`           | []            |                 |
| companyName    | `String`                | ''            |                 |
| contactOptions | `VsfContactOptionsType` | []            |                 |
| bottomLinks    | `VsfLinkType`           | []            |                 |

### React only:

| Prop name     | Type        | Default value | Possible values |
|---------------|-------------|---------------|-----------------|
| helpIcon      | `ReactNode` |               |                 |
| chatIcon      | `ReactNode` |               |                 |
| contactIcon   | `ReactNode` |               |                 |
| facebookIcon  | `ReactNode` |               |                 |
| twitterIcon   | `ReactNode` |               |                 |
| pinterestIcon | `ReactNode` |               |                 |
| youtubeIcon   | `ReactNode` |               |                 |
| instagramIcon | `ReactNode` |               |                 |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |

## Source code

<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooter.tsx
