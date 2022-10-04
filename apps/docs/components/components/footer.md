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
| Prop name | Type      | Default value  | Possible values |
|-----------|-----------|----------------|-----------------|
| tag       | `String`  |                |                 |

## Slots

### Vue only:

| Slot name           | Description            |
|---------------------|------------------------|
| `{CUSTOM_NAME}Icon` | slot content for icon  |

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfFooter/VsfFooter.vue
<<<../../../packages/sfui/frameworks/react/components/VsfFooter/VsfFooter.tsx
