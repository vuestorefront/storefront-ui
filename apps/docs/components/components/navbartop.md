

#  NavBarTop component



<PlaygroundWrapper component="NavBarTop"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11378%3A17321)

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| searchDisabled        |      boolean                   |      false         |                                        | 
| searchValue        |      string                   |      false         |                                        |
| searchModelValue        |      string                   |      false         |                                        |
| searchAutocomplete        |      string                   |      false         |                                        |
| themeVariant        |      string                   |      'default', branded'         |                                        |
| basketCounterValue        |      string, number, null                   |      false         |                                        |
| favouritesCounterValue        |      string, number, null                   |      false         |                                        |


## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
|    logo       |                  slot to replace logo                 |
|    menu       |                  slot to replace menu items                 |
|    search       |                  slot to replace search bar                 |
|    icons       |                  slot to replace icons                 |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
|     input       |          emits on typing in search bar                      |
|     submit       |              emits on clicking submit button                  |
|     reset       |            emits on clicking reset button on search bar               |
|     toggle       |            emits on clicking menu button when in mobile mode               |


## Accessibility notes


## Source code

<<<../../mitosis/src/blocks/VsfNavBarTop/VsfNavBarTop.lite.tsx
