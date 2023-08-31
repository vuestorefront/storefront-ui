---
repoPath: /components/dropdown.md
layout: AtomLayout
hideBreadcrumbs: true
---

# Dropdown

:::::: slot usage

The `SfDropdown` component is built on top of the `useDropdown` composable and accepts all its params.

::: read-more
Learn more about `useDropdown` composable in the [Composables > useDropdown docs](/vue/hooks/useDropdown.html).
:::

## Examples

### Basic Usage

By default, the floating content of `SfDropdown` will be placed below your trigger element.

<Showcase showcase-name="Dropdown/BasicDropdown" style="min-height:400px">

<<<../../preview/nuxt/pages/showcases/Dropdown/BasicDropdown.vue

</Showcase>

## Playground

<Generate />

::::::

::: slot api

## Props


| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `modelValue`  | `boolean`                                                |               |                 |
| `placement` | `SfPopoverPlacement`    | `'bottom'`      | Placement of floating element              |
| `middleware`    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| `strategy` | `SfPopoverStrategy`    | `'absolute'`      | Positioning strategy (`absolute` or `fixed`)         |

## Slots

| Slot name |            Description            |
| --------- | ------------------------------- |
| `default`   | Dropdown content   |
| `trigger`   | Element that opens up the dropdown   |

## Events

| Event name |            Trigger               |
| ---------- | ----------------------------   |
| `update:modelValue`     |  emits on clicking outside of dropdown or on escape  |
:::

::: slot source
<SourceCode>

<<<../../../packages/sfui/frameworks/vue/components/SfDropdown/SfDropdown.vue

</SourceCode>
:::
