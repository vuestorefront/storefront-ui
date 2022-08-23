# ChipsInput component

The ChipsInput component is used to convey small pieces of information. `close` button makes the ChipsInput interactive, allowing user interaction.

<PlaygroundWrapper component="ChipsInput"/>

## Figma design

See the design on [Figma]()

## Props

| Prop name   | Type    | Default value | Possible values                        |
| ----------- | ------- | ------------- | -------------------------------------- |
| size        | String  | 'medium'      | 'small', 'medium', 'large'             |
| value       | String  | ''            |                    |
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
