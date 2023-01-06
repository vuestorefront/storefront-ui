---
layout: ComponentLayout
hideBreadcrumbs: true
---
# ChipsInput

The ChipsInput component is used to convey small pieces of information. `close` button makes the ChipsInput interactive, allowing user interaction.

<Generate />

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=13585%3A21054)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| size        | String  | 'medium'      | 'small', 'medium', 'large'             |
| label       | String  | ''            |                    |
| disabled    | Boolean | false         |                    |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| icon      |     replaces the default icon     |
| close     | replaces the default close button |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
| close      | emits on clicking close button |

## Accessibility notes

Component uses `aria-label` to indicate close button.

## Source code

<<<../../mitosis/src/blocks/VsfChipsInput/VsfChipsInput.lite.tsx
