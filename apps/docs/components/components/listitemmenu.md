# ListItemMenu component

The ListItemMenu component is used in all kind of menus. It can act like a link or a button.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10928%3A14248)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | ------------------------------------ |
| size        | String  | 'base'      | 'sm', 'base', 'lg' |
| link       | String  | ''            |                    |
| primaryText    | String | ''         |                    |
| secondaryText    | String | ''         |                    |
| counter    | String | ''         |                    |
| truncatedText    | Boolean | false         |                    |
| disabled    | Boolean | false         |                    |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| prefix      |     adds the left icon     |
| suffix     | adds the right icon/chevron |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| click      | emits on clicking component when used as button |

## Accessibility notes

Component's `aria-role` is set as `menuitem` and when disabled `aria-disabled` is changed to `true`.

## Source code

<<<../../mitosis/src/blocks/VsfListItemMenu/VsfListItemMenu.lite.tsx
