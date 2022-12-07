# ListItemMenu component

The ListItemMenu component is used in all kind of menus. It can act like a link or a button.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10928%3A14248)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | ------------------------------------ |
| size        | String  | 'base'      | 'sm', 'base', 'lg' |
| link       | String  | ''            |                    |
| label    | String | ''         |                    |
| secondaryText    | String | ''         |                    |
| counter    | String | ''         |                    |
| isTruncated    | Boolean | false         |                    |
| disabled    | Boolean | false         |                    |
| selected    | Boolean | false |         |                  |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| preffix      |    right side slotted content     |
| suffix     | left side slotted content |
## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| click      | emits on clicking component when used as button |

## Accessibility notes

Component's `aria-role` is set as `menuitem` and when disabled `aria-disabled` is changed to `true`.

## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue
