# Dialog component

Dialog component based on native `<dialog>` is simple modal component with purpose of displaying text, buttons, whetever user would like

## Figma design

See the design on [Figma](https://www.figma.com/file/CWOkbpne0tDpSenT4ZEUTQ/%F0%9F%9B%A0-SFUI-2.0-%7C-Development?node-id=11248%3A15636)

## Props

| Prop name       | Type                          | Default value   | Possible values   |
|-----------------|-------------------------------|-----------------|-------------------|
| open/modelValue | `boolean`                     | `false`         |                   |
| closeable       | `boolean`                     | `true`          |                   |
| classes         | `String`                      |                 |                   |
| onClose         | `(isOpened: boolean) => void` |                 |                   |

## Slots

| Slot name |            Description            |
| --------- | :-------------------------------: |
| default   |     replaces the default content    |

## Accessibility notes

The `<dialog>` element is exposed by browsers similarly to custom dialogs using the ARIA `role="dialog"` attribute. `<dialog>` elements invoked by the showModal() method will have an implicit `aria-modal="true"`, where as `<dialog>` elements invoked by the `show()` method, or rendered by use of the open attribute or changing the default display of a `<dialog>` will be exposed as `[aria-modal="false"]`.

## Source code

<<<../../mitosis/src/blocks/VsfDialog/VsfDialog.lite.tsx
