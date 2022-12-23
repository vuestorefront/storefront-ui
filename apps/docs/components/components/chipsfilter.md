---
layout: ComponentLayout
hideBreadcrumbs: true
---
#  ChipsFilter component

ChipsFilter allow selection of a single chip from a set of options. They are a good alternative to toggle buttons, radio buttons, and single select menus.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11389%3A23561)

## Props

| Prop name | Type                       | Default value | Possible values                        |
|-----------|----------------------------|---------------|----------------------------------------|
| name      | String                     |               |                          |
| size      | String                     | base          | sm, base, lg                           |
| type      | String                     | checkbox      | checkbox, radio                        |
| label     | String                     |               |                         |
| disabled  | Boolean                    | false         |                         |

### React only:

| Prop name | Type       | Default value | Possible values |
|-----------|------------| ------------- | --------------- |
| value     | `String`   |               |                 |
| checked   | `Boolean`  |               |                 |
| onChange  | `Function` |               |                 |
| className | `String`   |               |                 |
| children  | `ReactNode` |               |                 |

## Slots (vue only)

| Slot name |            Description            |
|-----------| :-------------------------------: |
| thumbnail |  Replaces thumbnail               |

## Events (vue only)

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |

## Accessibility notes


## Source code

<<<../../../packages/sfui/frameworks/vue/components/VsfChipsFilter/VsfChipsFilter.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfChipsFilter/VsfChipsFilter.tsx
