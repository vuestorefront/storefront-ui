# Card component

The Card component contains content and actions that inform about a single subject. 

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=17358%3A48256)


###  Props:
| Prop name   | Type      | Default value | Possible values                        |
| ----------- |-----------| ------------- | -------------------------------------- |
| className   | string    |             |                                          |                                        
| slotImg     | ReactNode |             |                                          |                                        
| title       | string    |             |                                          |
| description       | string    |             |                                          |
| size      | `VsfButtonSizes`    | `base`        | `sm`, `base`                 |
| link      | `String`            |               | `/my-cool-page`                    |
| imgSrc  | `String`           |               |                                    |
| imgAlt      | `String`           |               |                                    |
| imgLoading   | `VsfCardImgLoadingValues`           |  `lazy`, `eager`             |  `lazy` `eager`          |
| rounded     | `Boolean`           |     `false`          |                                    |
| withButton     | `Boolean`           |   `true`            |                                    |




## Source code



<<<../../../packages/sfui/frameworks/react/components/VsfCard/VsfCard.tsx
