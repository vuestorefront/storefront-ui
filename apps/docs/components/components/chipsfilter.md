#  ChipsFilter component

ChipsFilter allow selection of a single chip from a set of options. They are a good alternative to toggle buttons, radio buttons, and single select menus.

<PlaygroundWrapper component="ChipsFilter"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11389%3A23561)

## Props

| Prop name             | Type                       | Default value | Possible values                        |
|-----------------------|----------------------------|---------------|----------------------------------------|
| size                  | String                     | base          | sm, base, lg                           |
| type                  | String                     | checkbox      | checkbox, radio                        |
| label                 | String                     |               |                         |
| disabled              | Boolean                    |               |                         |
| value                 | Any                        |               |                         |


## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| thumb     |  Replaces thumbnail               |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes


## Source code

<<<../../mitosis/src/blocks/VsfChipsFilter/VsfChipsFilter.lite.tsx
