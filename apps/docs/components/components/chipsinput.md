# Alert component

The Alert component is a notification that keeps people informed of the status of the system and which may or not require the user respond.

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
| close      | emits on clicking close button | // TODO

## Accessibility notes

// TODO

## Source code

<<<../../mitosis/src/blocks/VsfChipsInput/VsfChipsInput.lite.tsx
