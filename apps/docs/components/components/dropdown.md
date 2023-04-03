---
layout: AtomLayout
hideBreadcrumbs: true
---

# Dropdown

:::::: slot usage

The `SfDropdown` component is built on top of the `useDropdown` hook and accepts all its params.

::: read-more
<!-- react -->
Learn more about `useDropdown` hook in the [Hooks > useDropdown docs](/react/hooks/useDropdown.html).
<!-- end react -->
<!-- vue -->
Learn more about `useDropdown` composable in the [Composables > useDropdown docs](/vue/hooks/useDropdown.html).
<!-- end vue -->
:::

## Examples

### Basic Usage

By default, the floating content of `SfDropdown` will be placed below your trigger element.

<Showcase showcase-name="Dropdown/BasicDropdown" style="min-height:400px">

<!-- vue -->
<<<../../preview/nuxt/pages/showcases/Dropdown/BasicDropdown.vue
<!-- end vue -->
<!-- react -->
<<<../../preview/next/pages/showcases/Dropdown/BasicDropdown.tsx#source
<!-- end react -->

</Showcase>

## Playground

<Generate />

::::::

::: slot api

## Props


| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
<!-- react -->
| `open`  | `boolean`                                                |               |                 |
| `onClose`\* | `() => void`                                             |               |                 |
| `trigger`\* | `ReactNode`                                              |               |                 |
| `children` | `ReactNode` | | |
<!-- end react -->
<!-- vue -->
| `modelValue`  | `boolean`                                                |               |                 |
<!-- end vue -->
| `placement` | `SfPopoverPlacement`    | `'bottom'`      | Placement of floating element              |
| `middleware`    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| `strategy` | `SfPopoverStrategy`    | `'absolute'`      | Positioning strategy (`absolute` or `fixed`)         |
<!-- vue -->

## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| `default`   | Dropdown content   |
| `trigger`   | Element that opens up the dropdown   |

## Events

| Event name |            Trigger               |
| ---------- | ----------------------------   |
| `update:modelValue`     |  emits on clicking outside of dropdown or on escape  |
<!-- end vue -->
:::

::: slot source
<SourceCode>

<!-- vue -->
<<<../../../packages/sfui/frameworks/vue/components/SfDropdown/SfDropdown.vue
<!-- end vue -->
<!-- react -->
<<< ../../../packages/sfui/frameworks/react/components/SfDropdown/SfDropdown.tsx
<!-- end react -->

</SourceCode>
:::
