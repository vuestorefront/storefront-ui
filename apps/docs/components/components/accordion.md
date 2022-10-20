# AccordionItem component

The AccordionItem component is built on native `details` html element. Click on header triggers expanding below seated content passed inside by the prop.

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11381%3A15149)

## Props

| Prop name   | Type    | Default value | Possible values |
| ----------- | ------- | ------------- | --------------- |
| open        | Boolean | false         |                 |
| title       | String  | ''            |                 |
| chevronLeft | Boolean | false         |                 |

### React only:

| Prop name  | Type      | Default value | Possible values |
| ---------- | --------- | ------------- | --------------- |
| slotPrefix | ReactNode |               |                 |
| slotSuffix | ReactNode |               |                 |
| children   | ReactNode |               |                 |
| onToggle   | Function  |               |                 |

## Slots (vue only)

| Slot name |           Description           |
| --------- | :-----------------------------: |
| prefix    | replaces the title with styling |
| suffix    |    replaces the chevron icon    |
| default   |      replaces the content       |

## Events

| Event name |      Trigger      |
| ---------- | :---------------: |
| toggle     | Title block event |

## Accessibility notes

## Source code

Let's see how the component is created in Mitosis:

<<<../../../packages/sfui/frameworks/vue/components/VsfAccordionItem/VsfAccordionItem.vue
<<< ../../../packages/sfui/frameworks/react/components/VsfAccordionItem/VsfAccordionItem.tsx
