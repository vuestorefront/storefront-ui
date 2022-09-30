#  Search component


## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=10650%3A7288)

## Props

| Prop name             | Type                       | Default value | Possible values           |
|-----------------------|----------------------------|---------------|---------------------------|
|  placeholder          | String                     |               |                           |
|  disabled             | Boolean                    |               |                           |
|  required             | Boolean                    |               |                           |
|  submitText           | String                     |               |                           |
|  autocomplete         | String                     |               |                           |
|  name                 | String                     | 'search'      |                           |
|  modelValue           | String                     |               |                           |


## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| prefix    | prefix icon slot                  |
| suffix    | suffix icon slot                  |
| submit    | submit button content slot        |
| results   | bottom panel slot                 |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |
| reset             | reset button event             |
| submit            | submit form event              |

## Accessibility notes

The wrapper element has the `role="search"` attribute.

The search button is a `submit` type `<button>` in the form to reduce the number of keystrokes required to use the form.

## Source code

<<<../../mitosis/src/blocks/VsfSearch/VsfSearch.lite.tsx
