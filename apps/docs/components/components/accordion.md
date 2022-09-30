# Accordion component

The Accordion component is built on native `details` html element. Click on header triggers expanding below seated content passed inside by the prop.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11381%3A15149)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| open| Boolean | true          |              |
| title      | String  | ''            |                                        |
| chevronLeft | Boolean  | false            |                                        |                                        |
| headerSize| String | 'lg'            | 'base', 'lg', 'bold', 'xl'             |

## Props prefixed with slot (slots)

| Slot name |            Description            |
| --------- | :-------------------------------: |
| slotPrefix  |     replaces the title with styling  |
| slotSuffix  |     replaces the chevron icon     |
| slotDefault    | replaces the content |

## Events

The native `toggle` event is emitted.

## Accessibility notes


## Source code

Let's see how the component is created in Mitosis:

<<<../../mitosis/src/blocks/VsfAccordion/VsfAccordion.lite.tsx
