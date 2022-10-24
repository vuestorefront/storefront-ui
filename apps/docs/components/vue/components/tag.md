# Tag component

The Tag component draws attention to new or categorized content elements.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11418%3A18666)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| variant      | String  | 'base'            | 'base', 'positive', 'warning', 'error', 'info', 'disabled' |
| size         |  String | 'base'        | 'sm', 'base'                                   |
| badge        | Boolean  | false        | true, false                                     |


## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| prefix      |   content will be displayed before default slot    |
| suffix    |    content will be displayed after default slot      |


## Source code

<<<../../mitosis/src/blocks/VsfTag/VsfTag.lite.tsx
