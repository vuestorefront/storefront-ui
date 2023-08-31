---
repoPath: /components/dropdown.md
layout: AtomLayout
hideBreadcrumbs: true
---

# Dropdown

:::::: slot usage

The `SfDropdown` component is built on top of the `useDropdown` hook and accepts all its params.

::: read-more
Learn more about `useDropdown` hook in the [Hooks > useDropdown docs](/react/hooks/useDropdown.html).
:::

## Examples

### Basic Usage

By default, the floating content of `SfDropdown` will be placed below your trigger element.

<Showcase showcase-name="Dropdown/BasicDropdown" style="min-height:400px">

<<<../../preview/next/pages/showcases/Dropdown/BasicDropdown.tsx#source

</Showcase>

## Playground

<Generate />

::::::

::: slot api

## Props


| Prop name | Type                                                     | Default value | Possible values |
| --------- | -------------------------------------------------------- | ------------- | --------------- |
| `open`  | `boolean`                                                |               |                 |
| `onClose`\* | `() => void`                                             |               |                 |
| `trigger`\* | `ReactNode`                                              |               |                 |
| `children` | `ReactNode` | | |
| `placement` | `SfPopoverPlacement`    | `'bottom'`      | Placement of floating element              |
| `middleware`    | `UseFloatingProps['middleware']`                 |              | Array of `@floating-ui` middlewares |
| `strategy` | `SfPopoverStrategy`    | `'absolute'`      | Positioning strategy (`absolute` or `fixed`)         |
:::

::: slot source
<SourceCode>

<<< ../../../packages/sfui/frameworks/react/components/SfDropdown/SfDropdown.tsx

</SourceCode>
:::
