---
repoPath: /components/checkbox.md
layout: AtomLayout
hideBreadcrumbs: true
description: A checkbox is an input that has three possible values - true, false, or indeterminate. When an indeterminate value is not used, these are effectively boolean checkboxes.
---
# Checkbox

::: slot usage

`SfCheckbox` is a wrapper around `<input type="checkbox">` with additional styles for different states . It can be used for forms or expressing consents. 

The root element is an `<input>` so any attributes that can be used on an `<input>` can be used on `SfCheckbox`.

## Examples

### Checkbox without label

You can use `v-model` with `SfCheckbox` to bind the value to a variable in your component.

<Showcase showcase-name="Checkbox/CheckboxWithoutLabel">

<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxWithoutLabel.vue
</Showcase>

### Checkbox aligned to the left

When using `SfCheckbox` with a label, you can use Tailwind's `peer` modifiers to control the styles of the label based on the state of the checkbox.

<Showcase showcase-name="Checkbox/CheckboxLeading">

<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxLeading.vue
</Showcase>

### Checkbox aligned to the right

<Showcase showcase-name="Checkbox/CheckboxTrailing">

<<<../../preview/nuxt/pages/showcases/Checkbox/CheckboxTrailing.vue
</Showcase>

## Accessibility notes

`SfCheckbox` is a wrapper for `<input type="checkbox">` so it inherits all the accessibility features of the native checkbox.

It's focusable and can be toggled with `Space`.

## Playground

<Generate style="height: 450px" />

:::

::: slot api

## Props

| Prop name    | Type                     | Default value | Possible values                        |
| ------------ | ------------------------ | ------------- | -------------------------------------- |
| `modelValue`   | `boolean | string[]`       | `undefined`     |                                        |
| `invalid`      | `boolean`                  | `false`         |                                        |

## Events

| Event name        | Trigger                       |
| ----------------- | ----------------------------- |
| `update:modelValue` | triggers v-model update event |

:::

::: slot source
<SourceCode>
<<<../../../packages/sfui/frameworks/vue/components/SfCheckbox/SfCheckbox.vue
</SourceCode>
:::
