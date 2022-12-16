# AccordionItem component

The AccordionItem component is built on native `details` html element. Click on header triggers expanding below seated content passed inside by the prop.

<Generate />


## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11381%3A15149)

## Props

| Prop name   | Type    | Default value | Possible values |
| ----------- | ------- | ------------- | --------------- |
| open        | Boolean | false         |                 |
| title       | String  | ''            |                 |
| chevronLeft | Boolean | false         |                 |


###  Props: 
| Prop name  | Type    | Default value | Possible values                        |
|------------| ------- | ------------- | -------------------------------------- |
| slotPrefix | ReactNode  |             |                                        |                                        |
| slotSuffix | ReactNode  |             |                                        |                                        |
| onToggle   | Function  |             |                                        |                                        |
| children   | ReactNode  |             |                                        |                                        |


## Events

| Event name |       Trigger        |
| ---------- | :------------------: |
| toggle     | Details native event |

## Accessibility notes

## Source code



<<<../../../packages/sfui/frameworks/react/components/VsfAccordionItem/VsfAccordionItem.tsx

