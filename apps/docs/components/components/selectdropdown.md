---
layout: AtomLayout
hideBreadcrumbs: true
description: This component is an alternative option for VsfSelect component. It doesn't use native select tag so it can have more options for styling.
---
# SelectDropdown

{{ $frontmatter.description }}

<Generate />

## Props

| Prop name    | Type                    | Default value | Possible values                        |
| ------------ | --------                | ------------- | -------------------------------------- |
| value        | string                  | ''            |                                        |
| label        | string                  | ''            |                                        |
| size         | VsfSelectDropdownSize   | base          | sm, base, lg                           |
| disabled     | boolean                 | false         |                                        |
| invalid      | boolean                 | false         |                                        |
| required     | boolean                 | false         |                                        |
| placeholder  | string                  | ''            |                                        |
| requiredText | string                  | '*Required'   |                                        |
| helpText     | string                  | ''            |                                        |
| errorText    | string                  | ''            |                                        |
| loading      | boolean                 | false         |                                        |
<!-- vue -->
| modelValue   | string                  |               |                                        |
<!-- end react -->
<!-- react -->
| open         | boolean                 | false         |                                        |
| className    | string                  |  ''           |                                        |
| children     | ReactNode               |               |                                        |
| onItemClick  | Function                |               |                                        |
| onOpenUpdate | Function                |               |                                        |
<!-- end react -->

<!-- vue -->
## Slots

| Slot name |            Description                           |
| --------- | -------------------------------                  |
| default   |  Replace default options with custom component   |

## Events

| Event name        |            Trigger             |
| ----------------- | :----------------------------: |
| update:modelValue | triggers v-model update event  |
<!-- end vue -->

## Accessibility notes

When providing custom <!-- react -->DOM children<!-- end react --><!-- vue -->default slot content<!-- end vue --> you should use aria `role` attribute:

- `role="listbox"` for content wrapper,

- `role="option"` for each of the options.

For more detailed description, have a look at [MDN documentation about this topic](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role).

When SelectDropdown is opened `focus` is trapped within it's dropdown container.

## Source code

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/VsfSelectDropdown/VsfSelectDropdown.vue
<!-- end vue -->
<!-- react -->
<<<../../../packages/sfui/frameworks/react/components/VsfSelectDropdown/VsfSelectDropdown.tsx
<!-- end react -->
