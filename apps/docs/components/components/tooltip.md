# Tooltip component

Tooltips provide contextual information about an element when that owning element receives focus or is hovered over, but is otherwise not visible on the page.

<PlaygroundWrapper component="Tooltip"/>

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10452%3A3575)

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| type        | String  | 'top'         | 'top','left','right','bottom'          |
| label       | String  |               |                                        |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| defaul    |     tooltip base component        |

## Events

| Event name |            Trigger             |
| ---------- | :----------------------------: |
|            |                                |

## Accessibility notes

Tooltip element contains `role="tooltip"` attribute.

## Source code

<<<../../mitosis/src/blocks/VsfTooltip/VsfTooltip.lite.tsx
